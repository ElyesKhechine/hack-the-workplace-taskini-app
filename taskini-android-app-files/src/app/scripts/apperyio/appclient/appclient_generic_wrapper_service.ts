import { Injectable } from '@angular/core';
import _ from "lodash";
import { AppClientService } from "./appclient_service";
import { ApperyioConfigService } from "../config_service";

interface ServiceModelConfiguration{
    model:string,
    primaryKeyName:string
}

@Injectable()
export class AppClientGenericWrapperService {

    constructor(private appClientService: AppClientService, private apperyioConfigService: ApperyioConfigService) {
    }

    goOnline(serviceRequest: object): any {
        return this.appClientService.goOnline();
    }

    goOffline(serviceRequest: object): any {
        return this.appClientService.goOffline();
    }

    setSessionToken(serviceRequest: {token:string}): any {
        return this.appClientService.setSessionToken(serviceRequest.token);
    }

    revertLocalChanges(serviceRequest: object): any{
        return this.appClientService.revertLocalChanges();
    }

    retrySync(serviceRequest: object): any {
        return this.appClientService.retrySync();
    }

    resetFailedSync(serviceRequest: object): any {
        return this.appClientService.resetFailedSync();
    }

    getState(serviceRequest: object): any {
        return this.appClientService.getState();
    }

    getInstance(serviceRequest: object): any {
        return this.appClientService.mssdk();
    }

    getConflict(serviceRequest: object): any {
        return this.appClientService.getConflict();
    }

    resolveConflict(serviceRequest: {data: any; action: string}): any {
        return this.appClientService.resolveConflict(serviceRequest.data, serviceRequest.action);
    }

    signup(serviceRequest: {username: string; password: string; options: any}): any{
        return this.appClientService.signup(serviceRequest.username, serviceRequest.password, serviceRequest.options);
    }

    updateUser(serviceRequest: {username: string; password: string; options: any}): any{
        return this.appClientService.updateUser(serviceRequest.username, serviceRequest.password, serviceRequest.options);
    }

    removeUser(serviceRequest: object): any{
        return this.appClientService.removeUser();
    }

    loginAnonymously(serviceRequest: object): any{
        return this.appClientService.loginAnonymously();
    }

    login(serviceRequest: {username: string; password: string; token: string; options: any}): any{
        return this.appClientService.login(serviceRequest.username, serviceRequest.password, serviceRequest.token, serviceRequest.options);
    }

    logout(serviceRequest: object): any{
        return this.appClientService.logout();
    }

    getCurrentUser(serviceRequest: object): any{
        return this.appClientService.getCurrentUser();
    }

    invoke(request:any, serviceSettings): any{
        var cached = _.isUndefined(request.cached) ? serviceSettings.cached : request.cached;
        if(_.isString(cached)){
            cached = cached.toLowerCase() === "true";
        }
        request.requestType = serviceSettings.requestType;
        request.responseType = serviceSettings.responseType;
        request.nativeBinaryResponse = serviceSettings.nativeBinaryResponse;
        return this.appClientService.invoke(serviceSettings.method, serviceSettings.url, request, cached);
    }


    private deleteUndefinedFields(options): any{
        for (var field in options) {
            if (options[field] === undefined) {
                delete options[field];
            }
        }
        return options;
    }

    private deleteUndefinedFieldsDeep(obj){
		let result = obj;
		if(_.isArray(obj)){
			_.forEach(result, function(value, index){
				result[index] = this.deleteUndefinedFieldsDeep(value);
			}.bind(this));
			_.remove(result, _.isUndefined);
		} else if(_.isObject(obj)){
			result = _.omitBy(obj, _.isUndefined);
	        _.forEach(result, function(value, key) {
		        if(_.isObject(value)){
    			    result[key] = this.deleteUndefinedFieldsDeep(value);
                }
            }.bind(this));
		}
	    return result;
    }

    list(options, config: ServiceModelConfiguration) {
        return this.appClientService.getModelDao(config.model).then(
            function(dao){
                var findOptions = {};
                var findWhere = {};
                if(!_.isUndefined(options.where) && _.isObject(options.where)){
                    findWhere = this.deleteUndefinedFieldsDeep(options.where);
                }
                if(!_.isUndefined(options.offset) && !_.isObject(options.offset)){
                    findOptions["offset"] = options.offset;
                }
                if(!_.isUndefined(options.limit) && !_.isObject(options.limit)){
                    findOptions["limit"] = options.limit;
                }
                if(!_.isUndefined(options.sortBy)){
                    findOptions["sort"] = options.sortBy;
                }
                findOptions["cached"] = options.cached;
                if(!_.isUndefined(findOptions["cached"]) && _.isString(findOptions["cached"])){
                    findOptions["cached"] = findOptions["cached"].toLowerCase() === "true";
                }
                findOptions["clearCache"] = options.clearCache;
                if(!_.isUndefined(findOptions["clearCache"]) && _.isString(findOptions["clearCache"])){
                    findOptions["clearCache"] = findOptions["clearCache"].toLowerCase() === "true";
                }
                return dao.find(findWhere, findOptions).then(function(data){return data;});
            }.bind(this)
        );
    }

    count(options, config: ServiceModelConfiguration) {
        return this.appClientService.getModelDao(config.model).then(
            function(dao){
                var findOptions = {};
                var findWhere = {};
                if(!_.isUndefined(options.where) && _.isObject(options.where)){
                    findWhere = this.deleteUndefinedFieldsDeep(options.where);
                }
                findOptions["cached"] = options.cached;
                if(!_.isUndefined(findOptions["cached"]) && _.isString(findOptions["cached"])){
                    findOptions["cached"] = findOptions["cached"].toLowerCase() === "true";
                }
                return dao.getCount(findWhere, findOptions).then(function(data){return data;});
            }.bind(this)
        );
    }

    fetch(options, config: ServiceModelConfiguration) {
        return this.appClientService.getModelDao(config.model).then(
            function(dao){
                return dao.fetch();
            }
        );
    }

    read(options, config: ServiceModelConfiguration) {
        return this.appClientService.getModelDao(config.model).then(
            function(dao){
                var operationOptions = {};
                operationOptions["cached"] = options.cached;
                if(!_.isUndefined(operationOptions["cached"]) && _.isString(operationOptions["cached"])){
                    operationOptions["cached"] = operationOptions["cached"].toLowerCase() === "true";
                }
                return dao.get(options[config.primaryKeyName], operationOptions).then(function(data){return data;});
            }
        );
    }

    post(options, config: ServiceModelConfiguration) {
        this.deleteUndefinedFields(options);
        return this.appClientService.getModelDao(config.model).then(
            function(dao){
                return dao.create(options).then(function(data){return data;});
            }
        );
    }

    put(options, config: ServiceModelConfiguration) {
        this.deleteUndefinedFields(options);
        return this.appClientService.getModelDao(config.model).then(
            function(dao){
                return dao.update(options[config.primaryKeyName], options).then(function(data){return data;});
            }
        );
    }

    del(options, config: ServiceModelConfiguration) {
        return this.appClientService.getModelDao(config.model).then(
            function(dao){
                return dao.delete(options[config.primaryKeyName], {}, options).then(function(data){return data;});
            }
        );
    }

    clear(options, config: ServiceModelConfiguration) {
        return this.appClientService.getModelDao(config.model).then(function(dao){
                return dao.clearCache()
            }
        );
    }

    ethSetPrivateKey(serviceRequest: {privateKey: string; password:string}): any{
        return this.appClientService.ethSetPrivateKey(serviceRequest.privateKey, serviceRequest.password);
    }

    ethCall(serviceRequest: any): any{
        return this.appClientService.ethCall(serviceRequest.methodName, serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
    }

    ethContractSendTransaction(serviceRequest: any): any{
        return this.appClientService.ethContractSendTransaction(serviceRequest.methodName, serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
    }

    ethGetBalance(serviceRequest: any): any{
        return this.appClientService.ethGetBalance(serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
    }

    ethTransferEther(serviceRequest: any): any{
        return this.appClientService.ethTransferEther(serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
    }

    ethGetTransaction(serviceRequest: any): any{
        return this.appClientService.ethGetTransaction(serviceRequest.hash, this.apperyioConfigService.get("AppClientETHSettings"));
    }

    ethGetTransactionReceipt(serviceRequest: any): any{
        return this.appClientService.ethGetTransactionReceipt(serviceRequest.hash, this.apperyioConfigService.get("AppClientETHSettings"));
    }

    ethGetAccount(serviceRequest: any): any{
        return this.appClientService.ethGetAccount();
    }

    ethCreateAccount(serviceRequest: any): any{
        return this.appClientService.ethCreateAccount(serviceRequest.password);
    }

    ethExportPrivateKey(serviceRequest: any): any{
        return this.appClientService.ethExportPrivateKey(serviceRequest.password);
    }
}