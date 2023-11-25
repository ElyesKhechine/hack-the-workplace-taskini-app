import { Directive, ElementRef, Input, Output/*, EventEmitter*/, HostListener } from '@angular/core';
import { Validators, NgModel, ValidatorFn } from '@angular/forms';
import { ApperyioHelperService } from '../apperyio_helper';

/**
 * The directive allows to simply show validation errors text
 * For using it add the aioControlValidation directive to your form control component (e.g. Input)
 * 
 * By default validation rules are defined by component properties
 * Advanced property aioControlValidation allows to add property independent validation rules
 * aioControlValidation="email|||requiredTrue|||minLength:2"
 * Multiple validation rules are separated with the "|||" symbols
 * Arguments of validation rules can be added with using the ":" symbol
 * aioControlValidation="pattern:[0-9]*"
 * 
 * Avaliable validation rules:
 * min:<number>
 * max:<number>
 * required
 * requiredTrue - the control is valid only if it has boolean 'true' value
 * minLength:<number>
 * maxLength:<number>
 * pattern:<string>
 * email
 * digitsOnly
 * latinLettersOnly
 * strongPassword
 * 
 * Set of custom rules (pattern based rules: digitsOnly, latinLettersOnly, strongPassword) 
 * could be extended if needed. Custom rules could be set only via `aioControlValidation` Input property
 */

const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const EMAIL_REGEXP_STR = EMAIL_REGEXP.toString().slice(1, -1);
const HIDDEN_CLASS = "ion-hide";

@Directive({
    selector: '[aioControlValidation]', // Attribute selector
    inputs: ['aioControlValidation', 'aioValidationMessages', 'aioValidationMessageClass', 'aioValidationShowMessage', 'aioValidationFunction']
})

export default class AioControlValidationDirective {

    @Input() aioControlValidation: string = '';
    @Input() aioValidationMessages: { [key: string]: string; } = {};
    @Input() aioValidationMessageClass: string = '';
    @Input() aioValidationShowMessage: string = '';
    @Input() aioValidationFunction?: ()=>any;
    
    private getMessageText(key, defVal) {
        let text = this.aioValidationMessages[key] ? this.aioValidationMessages[key] : defVal;
        if (text && (<any>this.Apperyio).translate) {
            text = (<any>this.Apperyio).translate.instant(text);
        }
        return text;
    }

    /**
     * Text of displayed messages depending on validation type
     */
    private ERROR_MESSAGES: any = {
        default: 'Incorrect value',
        pattern: ({requiredPattern}) => {
            let message = this.getMessageText("pattern", '');
            if (message) {
                return message;
            }
            if (this.defaultPetternsDescription[requiredPattern]) {
                return this.defaultPetternsDescription[requiredPattern];
            }
            return 'The value must match the pattern';
        },
        required: () => this.getMessageText("required", 'Value of the field is required'),
        aioValidationFunction: (data) => this.getMessageText("aioValidationFunction", data || 'Incorrect value'),
        customValidation: (data) => this.getMessageText("customValidation", data || 'Incorrect value'),
        min: ({min}) => this.getMessageText("min", `The number must not be less than ${min}`),
        max: ({max}) => this.getMessageText("max", `The number must not exceed ${max}`),
        minlength: ({requiredLength}) => this.getMessageText("minlength", `The number of characters must not be less than ${requiredLength}`),
        maxlength: ({requiredLength}) => this.getMessageText("maxlength", `The number of characters must not exceed ${requiredLength}`)
    };

    /**
     * Symbol for separating multiple validation rules:
     * aioControlValidation="required|||minLength:3|||email"
     */
    private RULES_DELIMETER = '|||';

    /**
     * Regular expression for matching validator name and their arguments:
     * <validatorName>:<argument> (e.g. min:3)
     */
    private RULE_REGEXP = /^([a-zA-Z]+)(?::(.*))?$/;

    private errorElement;

    private defaultPetterns = {
        "digitsOnly": {
            pattern: "^[0-9]+$",
            description: "Only digits are allowed"
        },
        "latinLettersOnly": {
            pattern: "^[a-zA-Z]+$",
            description: "Only latin letters are allowed"
        },
        "strongPassword": {
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\\.\\,;\\:_\\-~\\+\\=!@#$%^&*])[a-zA-Z0-9\\.\\,;\\:_\\-~\\+\\=!@#$%^&*]{8,30}$",
            description: "Password should be 8-30 symbols and should contain latin symbols, digits and special symbols (.;:_-~+=!@#$%^&*)"
        },
        "email": {
            pattern: EMAIL_REGEXP_STR,
            description: "Incorrect email"
        }
    }

    private defaultPetternsDescription;
    private generateDefaultPetternDescription() {
        this.defaultPetternsDescription = {};
        Object.keys(this.defaultPetterns).forEach((key) => {
            this.defaultPetternsDescription[this.defaultPetterns[key].pattern] = this.defaultPetterns[key].description
        });
    }

    constructor(
        private el: ElementRef,
        private model: NgModel,
        private Apperyio: ApperyioHelperService
    ) {
        let markAsTouched = this.model.control.markAsTouched.bind(this.model.control);
        this.model.control.markAsTouched = (...params) => {
            markAsTouched(...params);
            if (!(<any>this.model.control)._pendingTouched) {
                this.showError();
            }
        }
        this.generateDefaultPetternDescription();
    }

    ngOnInit() {
        this.refreshValidation();
    }

    /**
     * Sets existing validation rules up to date
     * Concates rules set as properties and rules defined with the "aioControlValidation" directive
     */
    refreshValidation(): void {
        const validators = [];
        this.concatRules().forEach( (rule) => {
            const validator = this.validatorFactory(rule);
            if (validator) {
                validators.push(validator);
            }
        } );
        if (typeof this.aioValidationFunction === 'function' ) {
            validators.push(this.aioValidationFunction)
        }
        this.model.control.clearValidators();
        this.model.control.setValidators(validators);
        this.model.control.updateValueAndValidity();
    }

    /**
     * Returns concated array of rules
     * Rules specified with the aioControlValidation directive have higher priority
     */
    concatRules(): string[] {
        const advancedRules = this.aioControlValidation ? this.aioControlValidation.split(this.RULES_DELIMETER) : [];
        const propertyRules = this.getPropertyValidations();
        return advancedRules.concat( propertyRules.filter(
            (rule) => !this.aioControlValidation.includes( this.getRuleName(rule) )
        ) );
    }

    /**
     * Returns name of rule
     * pattern:[0-9] -> pattern
     * @param rule
     */
    getRuleName(rule: string): string {
        const ruleParts = rule.match(this.RULE_REGEXP);
        return ruleParts && ruleParts instanceof Array ? ruleParts[1] : rule;
    }

    /**
     * Transforms existing validation properties to validation rules
     */
    getPropertyValidations(): string[] {
        const validations = [];
        if (this.el.nativeElement.required) {
            validations.push('required');
        }
        if (this.el.nativeElement.pattern) {
            validations.push(`pattern:${this.el.nativeElement.pattern}`);
        }
        if (this.el.nativeElement.min) {
            validations.push(`min:${this.el.nativeElement.min}`);
        }
        if (this.el.nativeElement.max) {
            validations.push(`max:${this.el.nativeElement.max}`);
        }
        if (this.el.nativeElement.minlength) {
            validations.push(`minLength:${this.el.nativeElement.minlength}`);
        }
        return validations;
    }

    /**
     * Creates an Angular validator from passed validation rule
     * @param rule {String} - validation rule (e.g. required, minLength:2 etc.)
     */
    validatorFactory(rule: string): ValidatorFn | ValidatorFn[] {
        let ruleParts = rule.match(this.RULE_REGEXP);
        if (ruleParts && ruleParts instanceof Array) {
            let ruleName = ruleParts[1] || '';
            let ruleData = ruleParts[2] || '';

            if (this.defaultPetterns[ruleName]) {
                let validator = Validators['pattern'];
                let validatorData = this.defaultPetterns[ruleName].pattern;
                return validator(validatorData);
            } else {
                let validator = Validators[ruleName];
                if (validator) {
                    let validatorData;
                    if (ruleData) {
                        if (
                            ruleName === 'min' || ruleName === 'max' ||
                            ruleName === 'minLength' || ruleName === 'maxLength'
                        ) {
                            validatorData = parseFloat(ruleData);
                        } else if (ruleName === 'pattern') {
                            let regexStr = '';
                            if (ruleData.charAt(0) !== '^')
                                regexStr += '^';
                            regexStr += ruleData;
                            if (ruleData.charAt(ruleData.length - 1) !== '$')
                                regexStr += '$';
                            let regex;
                            try {
                                regex = new RegExp(regexStr);
                            } catch (e) {
                                console.warn("Validation error: wrong pattern", ruleData);
                                return Validators.nullValidator;
                            }
                            validatorData = regex;
                        }
                    }
                    return validatorData ? validator(validatorData) : validator;
                }
            }
        }
        return Validators.nullValidator;
    }


    private showError() {
        if (this.aioValidationShowMessage === "true" && this.model.invalid) {
            if (!this.errorElement) { // create container if needed
                this.errorElement = document.createElement("div");
                this.errorElement.classList.add("aio-validation-error");
                if (this.aioValidationMessageClass) {
                    this.errorElement.classList.add(...(this.aioValidationMessageClass.split(" ").filter(item => item)));
                }
                const referenceNode = this.el.nativeElement;
                if (referenceNode.parentNode.tagName === "ION-ITEM") {
                    referenceNode.parentNode.after(this.errorElement);
                } else if (referenceNode.parentNode.tagName === "ION-COL"
                        && referenceNode.parentNode.parentNode.tagName === "ION-ROW"
                        && referenceNode.parentNode.parentNode.parentNode.tagName === "ION-ITEM"
                        ) {
                    referenceNode.parentNode.parentNode.parentNode.after(this.errorElement);
                } else {
                    referenceNode.after(this.errorElement)
                }
            }
            // show the first error message
            this.errorElement.innerText = this.getFirstErrorMessage() || "";
            if (!this.errorElement.innerText) {
                this.clearErrorMessage();
            } else {
                this.errorElement.classList.remove(HIDDEN_CLASS);
            }
        }
    }

    /**
     * Emits error messages if the control is invalid after it`s status changes
     * @param event {any} - Interaction event data
     */
    @HostListener('ionBlur', ['$event'])
    @HostListener('ionChange', ['$event'])
    @HostListener('ionCancel', ['$event'])
    onStatusChange(event: any): void {
        if (this.aioValidationShowMessage === "true" && this.model.invalid) {
            if (
                (event.type === 'ionBlur' && event.target.nodeName !== 'ION-SELECT') ||
                (event.type === 'ionCancel' && event.target.nodeName === 'ION-SELECT') ||
                (event.type === 'ionChange' && this.model.touched) ||
                (event.type === 'ionChange' && (event.target.nodeName === 'ION-RADIO-GROUP' || event.target.nodeName === 'ION-CHECKBOX') && this.model.dirty)
            ) {
                this.showError();
            }
        } else {
            this.clearErrorMessage();
        }
    }

    /**
     * Returns a list of active validation errors
     */
    getFirstErrorMessage(): string {
        let key = Object.keys(this.model.errors)[0];
        return this.getErrorMessage(key, this.model.errors[key]);
    }

    /**
     * Returns an error message text from the configuration template by error name
     * If the template is missing, returns default message text
     * @param key {String} - Error name
     * @param data {Any} - Validation error object
     */
    getErrorMessage(key: string, data: any): string {
        if (this.ERROR_MESSAGES.hasOwnProperty(key)) {
            return typeof this.ERROR_MESSAGES[key] === 'function' ? this.ERROR_MESSAGES[key](data) : this.ERROR_MESSAGES[key];
        }
        return this.ERROR_MESSAGES['default'];
    }

    clearErrorMessage() {
        if (this.errorElement) {
            this.errorElement.innerText = "";
            this.errorElement.classList.add(HIDDEN_CLASS);
        }
    }
}
