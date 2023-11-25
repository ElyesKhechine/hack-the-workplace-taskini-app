(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_AllTasks_AllTasks_module_ts"],{

/***/ 4090:
/*!*********************************************!*\
  !*** ./src/app/AllTasks/AllTasks.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTasksPageModule": () => (/* binding */ AllTasksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _AllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllTasks */ 87035);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 34363);














let AllTasksPageModule = class AllTasksPageModule {};
AllTasksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_AllTasks__WEBPACK_IMPORTED_MODULE_2__.AllTasks],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _AllTasks__WEBPACK_IMPORTED_MODULE_2__.AllTasks
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_AllTasks__WEBPACK_IMPORTED_MODULE_2__.AllTasks]
})], AllTasksPageModule);


/***/ }),

/***/ 87035:
/*!**************************************!*\
  !*** ./src/app/AllTasks/AllTasks.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTasks": () => (/* binding */ AllTasks)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _AllTasks_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllTasks.html?ngResource */ 79718);
/* harmony import */ var _AllTasks_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllTasks.css?ngResource */ 31663);
/* harmony import */ var _AllTasks_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AllTasks_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AllTasks_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllTasks.scss?ngResource */ 23078);
/* harmony import */ var _AllTasks_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AllTasks_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 32535);
/* harmony import */ var _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom/ReminderService */ 25018);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

var _a, _b, _c, _d;











let AllTasks = class AllTasks {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  reminderService;
  slideOpt;
  currentDeleteId;
  slider;
  currentTasks;
  allTasks;
  days;
  currentDateISO;
  currentDate;
  didInit;
  picker;
  timeFormat;
  slidingItem;
  isCurrentDateIsPastDay;
  aioChangeDetector;
  currentItem = null;
  mappingData = {};
  __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
    return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
  }
  __isPropertyInMapping(_currentItem, property) {
    return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
  }
  __setMapping(data = {}, keyName, propName) {
    const changes = data.detail || {};
    if (propName) {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
    } else {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
    }
    this.$aio_changeDetector.detectChanges();
  }
  __bindedMethods = {};
  selectDateOnSlideChange() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const activeIndex = yield _this.slider.getActiveIndex();
      _this.selectDate(_this.days[activeIndex]);
    })();
  }
  selectDate(selectedDay, selectedDayIndex) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // we use 'await' for waiting until sliding ends
      if (selectedDayIndex != null) {
        yield _this2.slider.slideTo(selectedDayIndex, undefined, false);
      }
      _this2.currentTasks = [];
      // update the current day number
      _this2.currentDate.setDate(selectedDay.date);
      // update displayed tasks
      _this2.refreshCurrentTasks();
    })();
  }
  getDaysByMonth(month) {
    const currentYear = this.currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, month, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, month - 1, i);
      const day = {
        date: i,
        weekday: date.toLocaleDateString('en-US', {
          weekday: 'short'
        })
      };
      days.push(day);
    }
    return days;
  }
  initSliderOptions(initialSlideIndex) {
    this.slideOpt = {
      loop: false,
      centeredSlides: true,
      watchOverflow: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 5
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 6
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 7
        }
      },
      updateOnWindowResize: true,
      autoplay: false,
      slidesPerView: 7,
      autoplayDisableOnInteraction: true,
      initialSlide: initialSlideIndex
    };
  }
  refreshCurrentTasks() {
    this.isCurrentDateIsPastDay = !moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate).isSameOrAfter(new Date(), 'day');
    this.currentTasks = this.allTasks.slice().filter(task => {
      const dueDate = new Date(task.taskDueDate);
      return dueDate.getDate() === this.currentDate.getDate() && dueDate.getMonth() === this.currentDate.getMonth() && dueDate.getFullYear() === this.currentDate.getFullYear();
    });
  }
  updateTask(updatedTask) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const allTasks = _this3.allTasks.slice();
      const selectedTaskIndex = allTasks.findIndex(task => task._id === updatedTask._id);
      // replace existing task with updated
      allTasks[selectedTaskIndex] = updatedTask;
      // we need this for angular change detection
      _this3.allTasks = allTasks;
      // update tasks for reminders
      yield _this3.Apperyio.data.setStorage("allTasks", _this3.allTasks);
      _this3.refreshCurrentTasks();
    })();
  }
  toggleDone(task, event) {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isDone = !task.isDone;
      const service = yield _this4.Apperyio.getService("checkList_tasks_update_service");
      if (!service) {
        console.log("Error. Service was not found.");
        return;
      }
      yield service.execute({
        data: {
          isDone
        },
        params: {
          _id: task._id
        },
        headers: {}
      }).toPromise();
      yield _this4.updateTask({
        ...task,
        isDone
      });
      // Update reminder according to the status of task
      if (task.reminderId && task.reminderId.length) {
        if (isDone) {
          yield _this4.reminderService.deleteReminder(task.reminderId);
        } else {
          yield _this4.reminderService.setReminder(task.taskName, task.taskDescription, task.taskDueDate, task.reminderId);
        }
      }
    })();
  }
  daysUpdate(event) {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const month = this.currentDate.getMonth() + 1;
    this.days = this.getDaysByMonth(month);
    if (month === currentMonth) {
      this.slider.slideTo(currentDay - 1);
      this.refreshCurrentTasks();
    } else {
      const initialSlideIndex = 1;
      this.slider.slideTo(0);
      this.currentDate.setDate(initialSlideIndex);
      this.refreshCurrentTasks();
    }
  }
  timeChange(event) {
    var _this5 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentTask = event.target.pickerOptions.item;
      const currentTaskDueDate = moment__WEBPACK_IMPORTED_MODULE_7__(currentTask.taskDueDate);
      const updatedTaskDueDate = moment__WEBPACK_IMPORTED_MODULE_7__(event.detail.value).set({
        year: currentTaskDueDate.get('year'),
        month: currentTaskDueDate.get('month'),
        date: currentTaskDueDate.get('date'),
        second: 0
      }).toISOString();
      if (!moment__WEBPACK_IMPORTED_MODULE_7__(updatedTaskDueDate).isSameOrAfter(new Date())) {
        // show ion toast alert('Task can not ne created with a reminder in the past. Please, update reminder time.');
        _this5.Apperyio.getController("ToastController").create({
          message: 'Task can not be updated with a reminder in the past. Please, update reminder time.',
          color: 'danger',
          duration: 3000,
          position: 'middle'
        }).then(toast => toast.present());
      } else {
        const reminderId = yield _this5.reminderService.updateReminder(currentTask.reminderId, currentTask.taskName, currentTask.taskDescription, updatedTaskDueDate);
        const service = yield _this5.Apperyio.getService("checkList_tasks_update_service");
        if (!service) {
          console.log("Error. Service was not found.");
          return;
        }
        yield service.execute({
          data: {
            taskDueDate: updatedTaskDueDate,
            reminderId
          },
          params: {
            _id: event.target.pickerOptions.id
          },
          headers: {}
        }).toPromise();
        yield _this5.updateDueDate(currentTask, updatedTaskDueDate, reminderId);
      }
      if (_this5.slidingItem.el.parentElement) {
        _this5.slidingItem.el.parentElement.closeOpened();
      }
    })();
  }
  updateDueDate(currentTask, taskDueDate, reminderId) {
    var _this6 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (currentTask) {
        _this6.updateTask({
          ...currentTask,
          taskDueDate,
          reminderId
        });
      }
    })();
  }
  deleteTaskAction(currentItem) {
    var _this7 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const sliding = _this7.slidingItem.el.parentElement;
      const controller = _this7.Apperyio.getController("AlertController");
      const alert = yield controller.create({
        cssClass: 'alert-component',
        header: 'Confirm deletion',
        message: ' Are you sure you want to permanently remove this task? ',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            if (sliding) {
              sliding.closeOpened();
            }
          }
        }, {
          text: 'Delete',
          cssClass: 'text-color-red',
          handler: alertData => {
            const reminderId = currentItem.itemData.reminderId;
            _this7.currentDeleteId = currentItem.itemData._id;
            _this7.invokeService_deleteTask();
            if (sliding) {
              sliding.closeOpened();
            }
            //Delete reminder
            if (reminderId && reminderId.length) {
              _this7.reminderService.deleteReminder(reminderId);
            }
          }
        }]
      });
      (yield alert).present();
    })();
  }
  updateReminderTaskAction(currentItem) {
    var _this8 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.picker.pickerOptions = {
        id: currentItem.itemData._id,
        item: currentItem.itemData
      };
      _this8.picker.open();
    })();
  }
  showLoading() {
    var _this9 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this9.Apperyio.getController("LoadingController").create({
        spinner: 'crescent',
        cssClass: 'waiting-spinner'
      });
      loading.present();
    })();
  }
  hideLoading() {
    this.Apperyio.getController("LoadingController").dismiss();
  }
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, reminderService) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.reminderService = reminderService;
    this.slideOpt = {};
    this.currentTasks = [];
    this.allTasks = [];
    this.days = [];
    this.didInit = false;
    this.timeFormat = '12';
    this.isCurrentDateIsPastDay = false;
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  ngOnInit() {
    this.pageNgOnInit__j_0();
  }
  ionViewWillEnter() {
    this.pageIonViewWillEnter__j_0();
  }
  ionViewDidEnter() {
    this.pageIonViewDidEnter__j_0();
  }
  pageIonViewWillEnter__j_0(event, currentItem) {
    var _this10 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      // init time format for pipe
      _this10.timeFormat = yield _this10.Apperyio.data.getStorage("timeFormat");
    })();
  }
  pageNgOnInit__j_0(event, currentItem) {
    var _this11 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let mappingData = {};
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this11.currentDate = new Date();
      // datetime takes values as ISO date string
      _this11.currentDateISO = _this11.currentDate.toISOString();
      const days = _this11.getDaysByMonth(_this11.currentDate.getMonth() + 1);
      // used for *ngFor of slider
      _this11.days = days;
      // init slider options
      const initialSlideIndex = _this11.currentDate.getDate() - 1;
      _this11.initSliderOptions(initialSlideIndex);
      /* Invoke data service */
      _this11.invokeService_getAllTasks();
      /* Mapping */
      (() => {
        let mappingDataj_23 = typeof mappingData.j_23 === "function" ? mappingData.j_23() : [];
        mappingData.j_23 = () => {
          let parentArray = _this11.$aio_mappingHelper.getSubdata(_this11.currentTasks, [], []);
          mappingDataj_23.splice(parentArray.length);
          parentArray.forEach((v, i) => {
            mappingDataj_23[i] = mappingDataj_23[i] || {};
            let result__j_23 = mappingDataj_23[i];
            result__j_23.itemData = v;
            result__j_23.itemDataParent = parentArray;
          });
          return mappingDataj_23;
        };
      })();
      /* Run TypeScript */
      _this11.didInit = true;
      _this11.mappingData = {
        ..._this11.mappingData,
        ...mappingData
      };
    })();
  }
  pageIonViewDidEnter__j_0(event, currentItem) {
    var _this12 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      // Update calculation of slides to set correct view on devices
      _this12.slider.update();
    })();
  }
  menubuttonClick__j_6(event, currentItem) {
    var _this13 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Navigate to Page */
      _this13.Apperyio.navigation.forward('Settings');
    })();
  }
  menubuttondarkClick__j_7(event, currentItem) {
    var _this14 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Navigate to Page */
      _this14.Apperyio.navigation.forward('Settings');
    })();
  }
  currentmonthdatetimeIonChange__j_12(event, currentItem) {
    var _this15 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this15.currentDate = new Date(_this15.currentDateISO);
      _this15.daysUpdate(event);
    })();
  }
  deleteitemoptionsIonSwipe__j_34(event, currentItem) {
    var _this16 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this16.deleteTaskAction(currentItem);
    })();
  }
  deleteitemoptionClick__j_35(event, currentItem) {
    var _this17 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      _this17.deleteTaskAction(currentItem);
    })();
  }
  clockitemoptionsIonSwipe__j_36(event, currentItem) {
    var _this18 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      if (!_this18.isCurrentDateIsPastDay) {
        _this18.updateReminderTaskAction(currentItem);
      }
    })();
  }
  clockitemoptionClick__j_37(event, currentItem) {
    var _this19 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Navigate to Page */
      _this19.Apperyio.navigation.forward('ModifyTask');
    })();
  }
  createbuttonClick__j_41(event, currentItem) {
    var _this20 = this;
    return (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Run TypeScript */
      if (!_this20.isCurrentDateIsPastDay) {
        _this20.Apperyio.showModal("CreateNewTask", {
          componentProps: {
            reminderData: {
              currentDate: _this20.currentDate
            }
          },
          showBackdrop: true,
          backdropDismiss: true,
          cssClass: 'modal-custom',
          animated: true,
          keyboardClose: true,
          swipeToClose: true
        }).then(modal => {
          modal.present();
          modal.onDidDismiss().then(({
            data
          }) => {
            if (data && data.action === 'ok') {
              _this20.Apperyio.execDataService(_this20, "getAllTasks");
            }
          });
        });
      }
    })();
  }
  $aio_dataServices = {
    "getAllTasks": "invokeService_getAllTasks",
    "deleteTask": "invokeService_deleteTask"
  };
  invokeService_getAllTasks(cb) {
    var _this21 = this;
    this.Apperyio.getService("checkList_tasks_list_service").then( /*#__PURE__*/function () {
      var _ref = (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
        if (!service) {
          console.log("Error. Service was not found.");
          return;
        }
        let data = {};
        let params = {};
        let headers = {};
        let __aio_tmp_val__;
        _this21.$aio_changeDetector.detectChanges();
        /* Run TypeScript */
        yield _this21.showLoading();
        /* Mapping */
        params = _this21.$aio_mappingHelper.updateData(params, ['where'], (value => {
          value = value || 'not_specified';
          return JSON.stringify({
            userDeviceID: value
          });
        })(__aio_tmp_val__ = _this21.$aio_mappingHelper.getServiceDataValue("deviceID", [])));
        service.execute({
          data: data,
          params: params,
          headers: headers
        }).subscribe(
        /*#__PURE__*/
        /* onsuccess */
        function () {
          var _ref2 = (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            let mappingData = {};
            /* Mapping */
            _this21.allTasks = _this21.$aio_mappingHelper.updateData(_this21.allTasks, [], _this21.$aio_mappingHelper.getSubdata(res, []));
            /* Run TypeScript */
            // store tasks for reminders
            yield _this21.Apperyio.data.setStorage("allTasks", _this21.allTasks);
            // update displayed tasks
            _this21.refreshCurrentTasks();
            _this21.hideLoading();
            _this21.mappingData = {
              ..._this21.mappingData,
              ...mappingData
            };
            if (cb && typeof cb === "function") cb(res);
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }(),
        /*#__PURE__*/
        /* onerror */
        function () {
          var _ref3 = (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
            /* Run TypeScript */
            _this21.hideLoading();
          });
          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }());
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  invokeService_deleteTask(cb) {
    var _this22 = this;
    this.Apperyio.getService("checkList_tasks_delete_service").then( /*#__PURE__*/function () {
      var _ref4 = (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (service) {
        if (!service) {
          console.log("Error. Service was not found.");
          return;
        }
        let data = {};
        let params = {};
        let headers = {};
        let __aio_tmp_val__;
        _this22.$aio_changeDetector.detectChanges();
        /* Mapping */
        params = _this22.$aio_mappingHelper.updateData(params, ['_id'], _this22.$aio_mappingHelper.getSubdata(_this22.currentDeleteId, []));
        service.execute({
          data: data,
          params: params,
          headers: headers
        }).subscribe(
        /*#__PURE__*/
        /* onsuccess */
        function () {
          var _ref5 = (0,_srv_appery_jenkins_workspace_0b7d2f0c_652d_41ca_bbff_8aebd79708d1_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            /* Invoke data service */
            _this22.invokeService_getAllTasks();
            if (cb && typeof cb === "function") cb(res);
          });
          return function (_x5) {
            return _ref5.apply(this, arguments);
          };
        }(), err => {
          console.log(err);
        });
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_6__.ExportedClass
  }];
  static propDecorators = {
    slider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['slider', {
        static: false
      }]
    }],
    picker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['picker', {
        static: false
      }]
    }],
    slidingItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['slidingItem', {
        static: false
      }]
    }]
  };
};
AllTasks = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  template: _AllTasks_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-all-tasks',
  styles: [(_AllTasks_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default()), (_AllTasks_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef) === "function" ? _c : Object, typeof (_d = typeof _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_6__.ExportedClass !== "undefined" && _scripts_custom_ReminderService__WEBPACK_IMPORTED_MODULE_6__.ExportedClass) === "function" ? _d : Object])], AllTasks);


/***/ }),

/***/ 31663:
/*!**************************************************!*\
  !*** ./src/app/AllTasks/AllTasks.css?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */\nion-col[_aio-0E19FC5F] {\n\tpadding-top: 16px;\n\tpadding-right: 16px;\n\tpadding-bottom: 16px;\n\tpadding-left: 16px;\n}\nion-button[_aio-42BF74E6] {\n\tmargin-top: 20px;\n\tmargin-right: 20px;\n\tmargin-bottom: 20px;\n\tmargin-left: 20px;\n}\nion-button[_aio-42BF74E6]::part(native) {\n\tcolor: #ffffff;\n}", "",{"version":3,"sources":["webpack://./src/app/AllTasks/AllTasks.css"],"names":[],"mappings":";AACA,sBAAsB;AACtB;CACC,iBAAiB;CACjB,mBAAmB;CACnB,oBAAoB;CACpB,kBAAkB;AACnB;AACA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,mBAAmB;CACnB,iBAAiB;AAClB;AACA;CACC,cAAc;AACf","sourcesContent":["\n/* Styles properties */\nion-col[_aio-0E19FC5F] {\n\tpadding-top: 16px;\n\tpadding-right: 16px;\n\tpadding-bottom: 16px;\n\tpadding-left: 16px;\n}\nion-button[_aio-42BF74E6] {\n\tmargin-top: 20px;\n\tmargin-right: 20px;\n\tmargin-bottom: 20px;\n\tmargin-left: 20px;\n}\nion-button[_aio-42BF74E6]::part(native) {\n\tcolor: #ffffff;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 23078:
/*!***************************************************!*\
  !*** ./src/app/AllTasks/AllTasks.scss?ngResource ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */\n:host {\n  border-style: unset;\n  --background: var(--ion-background-color) !important;\n}\n:host .datetime-placeholder {\n  color: var(--ion-color-dark) !important;\n  border-style: unset;\n}\n\nion-content {\n  --background: var(--ion-background-color);\n}\n\n#background-content {\n  --background: transparent;\n  --ion-background-color: transparent;\n}\n\nion-item {\n  --border-style: unset;\n  margin-bottom: 10px;\n  --background: var(--ion-color-light);\n  --height: 80px !important;\n}\n\n.task::part(native) {\n  padding-left: 20px;\n}\n\n.task-options_delete {\n  background-color: var(--ion-color-danger);\n}\n\n.task-options_remind {\n  background-color: var(--ion-color-primary);\n}\n\n.task-option ion-icon {\n  font-size: 24px;\n}\n.task-option.task-option_delete::part(native) {\n  padding-inline: 2px 14px;\n}\n.task-option.task-option_remind::part(native) {\n  padding-inline: 14px 2px;\n}\n\n.header-date-container ion-item {\n  --background: var(--ion-background-color);\n  margin-bottom: 0 !important;\n}\n\nion-item-sliding {\n  --background: var(--ion-color-light) !important;\n  margin-bottom: 10px;\n  --height: 80px !important;\n}\nion-item-sliding ion-item {\n  border-radius: 10px;\n  margin: 0 16px;\n}\n\nion-slides {\n  margin: 10px 0 30px;\n}\n\nion-item-option {\n  border-radius: 5px;\n}\n\n.icon-clock-dark {\n  display: none;\n}\n\n.icon-clock {\n  display: block;\n}\n\n.datetime-text {\n  color: #2D2D2D !important;\n  border-style: unset;\n  border-width: 0;\n}\n\n.empty-text {\n  font-size: 18px;\n  font-weight: 500;\n  opacity: 0.5;\n  display: flex;\n  justify-content: center;\n  margin: 30px 0;\n}\n\n.header-grid {\n  display: flex;\n  --background: var(--ion-background-color) !important;\n}\n\n.html-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 17px 0;\n}\n\n.title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n}\n\n.menu-button {\n  width: 45px;\n  height: auto;\n  display: block;\n}\n\n.menu-button-dark {\n  width: 45px;\n  height: auto;\n  display: none;\n}\n\n.header-title {\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.header-date {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.datetime-text {\n  color: var(--ion-color-dark) !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n\n.dayLink {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: var(--ion-color-light);\n  border-radius: 12px;\n  margin: 10px;\n  text-decoration: none;\n  color: var(--ion-color-dark);\n  font: Raleway;\n  font-weight: 600;\n}\n\n.week-name {\n  font-weight: 500;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.week-number {\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.placeholder-image {\n  display: block;\n  height: 274px;\n  margin: auto;\n}\n\n.clock-wrapper {\n  display: flex;\n  align-items: center;\n  margin: 20px 0 30px;\n}\n\n.icon-clock {\n  width: 16px;\n}\n\n.delete-cell {\n  background-color: var(--ion-color-danger);\n}\n\n.item-title-wrapper {\n  display: flex;\n}\n\n.title-text {\n  min-width: 50%;\n  font-weight: 600;\n  font-size: 18px;\n  height: 21px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.title-time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.checkbox {\n  --size: 24px;\n  --border-radius: 4px;\n  --border-width: 1.5px;\n  --border-color: var(--ion-color-primary);\n  flex-shrink: 0;\n  margin-right: 20px;\n}\n\n.description {\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.time-text {\n  font-weight: 400;\n  font-size: 14px;\n  margin-left: 8px;\n  white-space: nowrap;\n}\n\nion-item-sliding:not(.item-sliding-active-slide) .done {\n  opacity: 0.5;\n}\n\n.done .title-text {\n  text-decoration: line-through;\n  text-decoration-line: line-through;\n}\n\n.custom-slide {\n  background-color: var(--ion-color-light);\n  height: 76px;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 15px;\n  box-shadow: 10px 5px 5px #fcfcfc;\n  max-width: 50px;\n  padding: 4px;\n}\n\n.swiper-slide-active .custom-slide {\n  background-color: var(--ion-color-primary);\n}\n\n.swiper-slide-active .custom-slide a {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-light);\n}\n\n.hidden-date {\n  cursor: none;\n  background-color: var(--ion-color-primary);\n  display: none;\n}\n\n.notime .title-time {\n  margin-right: 40px;\n}\n\n.header-date-container {\n  display: flex;\n  justify-content: flex-end;\n}", "",{"version":3,"sources":["webpack://./src/app/AllTasks/AllTasks.scss"],"names":[],"mappings":"AAIA,gBAAA;AACA;EACI,mBAAA;EACA,oDAAA;AAHJ;AAII;EACI,uCAAA;EACA,mBAAA;AAFR;;AAMA;EACI,yCAAA;AAHJ;;AAMA;EACI,yBAAA;EACA,mCAAA;AAHJ;;AAMA;EACI,qBAAA;EACA,mBAAA;EACA,oCAAA;EACA,yBAAA;AAHJ;;AAWI;EACI,kBAAA;AARR;;AAYA;EACI,yCAAA;AATJ;;AAYA;EACI,0CAAA;AATJ;;AAaI;EACI,eAAA;AAVR;AAYI;EACI,wBAAA;AAVR;AAaI;EACI,wBAAA;AAXR;;AAeA;EACI,yCAAA;EACA,2BAAA;AAZJ;;AAeA;EACI,+CAAA;EACE,mBAAA;EACF,yBAAA;AAZJ;AAaO;EACC,mBAAA;EACA,cAAA;AAXR;;AAeA;EACI,mBAAA;AAZJ;;AAeA;EACI,kBAAA;AAZJ;;AAeA;EACI,aAAA;AAZJ;;AAeA;EACI,cAAA;AAZJ;;AAgBA;EACI,yBAAA;EACA,mBAAA;EACA,eAAA;AAbJ;;AAgBA;EACI,eAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,cAAA;AAbJ;;AAgBA;EACI,aAAA;EACA,oDAAA;AAbJ;;AAgBA;EACI,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,eAAA;AAbJ;;AAgBA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,aAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AAbJ;;AAgBA;EACI,WAAA;EACA,YAAA;EACA,aAAA;AAbJ;;AAgBA;EACI,eAAA;EACA,gBAAA;AAbJ;;AAgBA;EACI,eAAA;EACA,gBAAA;AAbJ;;AAgBA;EACI,uCAAA;EACA,0BAAA;EACA,2BAAA;AAbJ;;AAgBA;EACI,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,wCAAA;EACA,mBAAA;EACA,YAAA;EACA,qBAAA;EACA,4BAAA;EACA,aAAA;EACA,gBAAA;AAbJ;;AAgBA;EACI,gBAAA;EACA,eAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,gBAAA;EACA,eAAA;AAbJ;;AAgBA;EACI,cAAA;EACA,aAAA;EACA,YAAA;AAbJ;;AAgBA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,WAAA;AAbJ;;AAgBA;EACI,yCAAA;AAbJ;;AAgBA;EACI,aAAA;AAbJ;;AAgBA;EACI,cAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAbJ;;AAgBA;EACI,YAAA;EACA,oBAAA;EACA,qBAAA;EACA,wCAAA;EACA,cAAA;EACA,kBAAA;AAbJ;;AAgBA;EACG,gBAAA;EACA,eAAA;AAbH;;AAgBA;EACG,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AAbH;;AAkBI;EACI,YAAA;AAfR;;AAoBI;EACI,6BAAA;EAEA,kCAAA;AAjBR;;AAqBA;EACI,wCAAA;EACA,YAAA;EACA,wCAAA;EACA,mBAAA;EACA,gCAAA;EACA,eAAA;EACA,YAAA;AAlBJ;;AAsBI;EACI,0CAAA;AAnBR;;AAyBQ;EACI,0CAAA;EACA,6BAAA;AAtBZ;;AA2BA;EACI,YAAA;EACA,0CAAA;EACA,aAAA;AAxBJ;;AA4BI;EACI,kBAAA;AAzBR;;AA6BA;EACI,aAAA;EACA,yBAAA;AA1BJ","sourcesContent":["/* Custom SCSS */\n:host {\n  border-style: unset;\n  --background: var(--ion-background-color) !important;\n}\n:host .datetime-placeholder {\n  color: var(--ion-color-dark) !important;\n  border-style: unset;\n}\n\nion-content {\n  --background: var(--ion-background-color);\n}\n\n#background-content {\n  --background: transparent;\n  --ion-background-color: transparent;\n}\n\nion-item {\n  --border-style: unset;\n  margin-bottom: 10px;\n  --background: var(--ion-color-light);\n  --height: 80px !important;\n}\n\n.task::part(native) {\n  padding-left: 20px;\n}\n\n.task-options_delete {\n  background-color: var(--ion-color-danger);\n}\n\n.task-options_remind {\n  background-color: var(--ion-color-primary);\n}\n\n.task-option ion-icon {\n  font-size: 24px;\n}\n.task-option.task-option_delete::part(native) {\n  padding-inline: 2px 14px;\n}\n.task-option.task-option_remind::part(native) {\n  padding-inline: 14px 2px;\n}\n\n.header-date-container ion-item {\n  --background: var(--ion-background-color);\n  margin-bottom: 0 !important;\n}\n\nion-item-sliding {\n  --background: var(--ion-color-light) !important;\n  margin-bottom: 10px;\n  --height: 80px !important;\n}\nion-item-sliding ion-item {\n  border-radius: 10px;\n  margin: 0 16px;\n}\n\nion-slides {\n  margin: 10px 0 30px;\n}\n\nion-item-option {\n  border-radius: 5px;\n}\n\n.icon-clock-dark {\n  display: none;\n}\n\n.icon-clock {\n  display: block;\n}\n\n.datetime-text {\n  color: #2D2D2D !important;\n  border-style: unset;\n  border-width: 0;\n}\n\n.empty-text {\n  font-size: 18px;\n  font-weight: 500;\n  opacity: 0.5;\n  display: flex;\n  justify-content: center;\n  margin: 30px 0;\n}\n\n.header-grid {\n  display: flex;\n  --background: var(--ion-background-color) !important;\n}\n\n.html-wrapper {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 17px 0;\n}\n\n.title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n}\n\n.menu-button {\n  width: 45px;\n  height: auto;\n  display: block;\n}\n\n.menu-button-dark {\n  width: 45px;\n  height: auto;\n  display: none;\n}\n\n.header-title {\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.header-date {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.datetime-text {\n  color: var(--ion-color-dark) !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n\n.dayLink {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: var(--ion-color-light);\n  border-radius: 12px;\n  margin: 10px;\n  text-decoration: none;\n  color: var(--ion-color-dark);\n  font: Raleway;\n  font-weight: 600;\n}\n\n.week-name {\n  font-weight: 500;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.week-number {\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.placeholder-image {\n  display: block;\n  height: 274px;\n  margin: auto;\n}\n\n.clock-wrapper {\n  display: flex;\n  align-items: center;\n  margin: 20px 0 30px;\n}\n\n.icon-clock {\n  width: 16px;\n}\n\n.delete-cell {\n  background-color: var(--ion-color-danger);\n}\n\n.item-title-wrapper {\n  display: flex;\n}\n\n.title-text {\n  min-width: 50%;\n  font-weight: 600;\n  font-size: 18px;\n  height: 21px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.title-time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.checkbox {\n  --size: 24px;\n  --border-radius: 4px;\n  --border-width: 1.5px;\n  --border-color: var(--ion-color-primary);\n  flex-shrink: 0;\n  margin-right: 20px;\n}\n\n.description {\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.time-text {\n  font-weight: 400;\n  font-size: 14px;\n  margin-left: 8px;\n  white-space: nowrap;\n}\n\nion-item-sliding:not(.item-sliding-active-slide) .done {\n  opacity: 0.5;\n}\n\n.done .title-text {\n  text-decoration: line-through;\n  -webkit-text-decoration-line: line-through;\n  text-decoration-line: line-through;\n}\n\n.custom-slide {\n  background-color: var(--ion-color-light);\n  height: 76px;\n  border: 1px solid var(--ion-color-light);\n  border-radius: 15px;\n  box-shadow: 10px 5px 5px #fcfcfc;\n  max-width: 50px;\n  padding: 4px;\n}\n\n.swiper-slide-active .custom-slide {\n  background-color: var(--ion-color-primary);\n}\n\n.swiper-slide-active .custom-slide a {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-light);\n}\n\n.hidden-date {\n  cursor: none;\n  background-color: var(--ion-color-primary);\n  display: none;\n}\n\n.notime .title-time {\n  margin-right: 40px;\n}\n\n.header-date-container {\n  display: flex;\n  justify-content: flex-end;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 79718:
/*!***************************************************!*\
  !*** ./src/app/AllTasks/AllTasks.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content _aio-705FBE6A>\n    <ion-grid _aio-CEF553D4 #j_3 class=\"grid\">\n        <ion-row _aio-747B5E8C #j_4 class=\"row\">\n            <ion-col _aio-0E19FC5F #j_5 class=\"ion-align-self-start\">\n                <ion-menu-button _aio-BA06E728 #j_6 class=\"menu-button\" (click)=\"menubuttonClick__j_6($event, currentItem)\">\n                    <ion-icon #j_6__icon src=\"assets/images/menu.svg\">\n                    </ion-icon>\n                </ion-menu-button>\n                <ion-menu-button _aio-99BB037A #j_7 class=\"menu-button-dark\" (click)=\"menubuttondarkClick__j_7($event, currentItem)\">\n                    <ion-icon #j_7__icon src=\"assets/images/menu-dark.svg\">\n                    </ion-icon>\n                </ion-menu-button>\n            </ion-col>\n            <ion-col _aio-8B212E37 #j_8 class=\"ion-align-self-center ion-text-center\">\n                <ion-text _aio-BCEBC408 #j_9 class=\"header-title\">\n                    CheckList\n                </ion-text>\n            </ion-col>\n            <ion-col _aio-0E04FB84 #j_10 class=\"header-date-container ion-align-self-end ion-text-end\">\n                <ion-item #j_11 _aio-882BBB51>\n                    <aio-datetime _aio-4546455A #j_12 (ionChange)=\"currentmonthdatetimeIonChange__j_12($event, currentItem)\"\n                    name=\"Datetime1\" presentation=\"date\" [formatOptions]='' [(ngModel)]=\"currentDateISO\">\n                        <ion-datetime [showDefaultButtons]=\"true\" presentation=\"date\" max=\"2099-12-31T10:00:00.000Z\"\n                        firstDayOfWeek=\"0\" value=\"2021-03-25T09:48:42.000Z\" class=\"header-date\">\n                        </ion-datetime>\n                    </aio-datetime>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-slides _aio-4097C516 #j_13 *ngIf=\"didInit\" #slider=\"\" (ionSlideDidChange)=\"selectDateOnSlideChange()\"\n    [options]=\"slideOpt\">\n        <ion-slide _aio-CA8C1085 #j_14 class=\"slide-item\" *ngFor=\"let day of days; index as i\">\n            <div _aio-B857E60C #j_15 class=\"custom-slide\" (click)=\"selectDate(day, i);\">\n                <a _aio-8C15CEFF #j_16 class=\"dayLink\">\n                <ion-text  _aio-0B56FFCE  #j_17   class=\"week-name\">{{day.weekday}}</ion-text>\n                <ion-text  _aio-AC81A816  #j_18   class=\"week-number\">{{day.date}}</ion-text>\n                </a>\n            </div>\n        </ion-slide>\n    </ion-slides>\n    <div _aio-E8C1FDA2 #j_19 class=\"date-container ion-hide\">\n        <ion-item #j_20 _aio-2CA32BB0>\n            <aio-datetime _aio-DC50E618 #j_21 placeholder=\"Select date\" name=\"Datetime2\" presentation=\"date\"\n            [formatOptions]='' (ionChange)=\"timeChange($event)\">\n                <ion-datetime [showDefaultButtons]=\"true\" presentation=\"date\" firstDayOfWeek=\"0\"\n                class=\"hidden-date ion-hide\">\n                </ion-datetime>\n            </aio-datetime>\n        </ion-item>\n    </div>\n    <ion-list _aio-31CAC8CE #j_22 lines=\"none\" class=\"list\" *ngIf=\"currentTasks.length\">\n        <ion-item-sliding #j_23__sliding *ngFor=\"let currentItem of __getMapping(currentItem, 'j_23', []);\">\n            <ion-item _aio-9BC07D60 #j_23 class=\"task\" lines=\"none\" #slidingItem=\"\" (click)=\"toggleDone(currentItem.itemData , $event)\"\n            [class.done]=\"currentItem.itemData.isDone\">\n                <ion-checkbox _aio-AA9BFBB9 #j_25 mode=\"md\" name=\"checkbox-outline\" slot=\"start\"\n                value=\"\" checked=\"{{ currentItem.itemData.isDone }}\" color=\"primary\" class=\"checkbox\"\n                #checkbox=\"\">\n                </ion-checkbox>\n                <div _aio-3182F8C8 #j_26 class=\"html-wrapper\" [class.notime]=\"!currentItem.itemData.reminderId\">\n                    <div _aio-F6DF8855 #j_27 class=\"title-row\">\n                        <span _aio-4D38710C #j_28 class=\"title-text\" #title=\"\">\n                            {{currentItem.itemData.taskName}}\n                        </span>\n                        <div _aio-538430ED #j_29 class=\"title-time\">\n                            <ion-icon _aio-A88C2845 #j_30 name=\"logo-ionic\" size=\"small\" color=\"custom\" class=\"icon-clock\"\n                            src=\"assets/images/clock-icon.svg\" *ngIf=\"currentItem.itemData.reminderId\">\n                            </ion-icon>\n                            <ion-icon _aio-107DC18C #j_31 name=\"logo-ionic\" size=\"small\" color=\"custom\" class=\"icon-clock-dark\"\n                            src=\"assets/images/clock__2__1.svg\" *ngIf=\"currentItem.itemData.reminderId\">\n                            </ion-icon>\n                            <ion-text _aio-A5DD9FFA #j_32 class=\"time-text\" *ngIf=\"currentItem.itemData.reminderId\"\n                            [id]=\"currentItem?.itemData._id\">\n                                {{currentItem.itemData.taskDueDate | timePipe: 'yyyy-MM-dd HH:mm'}}\n                            </ion-text>\n                        </div>\n                    </div>\n                    <ion-text _aio-4EDBFD98 #j_33 class=\"description\">\n                        {{currentItem.itemData.taskDescription}}\n                    </ion-text>\n                </div>\n            </ion-item>\n            <ion-item-options _aio-2E5BAAFC #j_34 side=\"end\" class=\"task-options_delete\" (ionSwipe)=\"deleteitemoptionsIonSwipe__j_34($event, currentItem)\">\n                <ion-item-option _aio-173E9699 #j_35 color=\"danger\" class=\"task-option task-option_delete\"\n                [id]=\"currentItem.itemData._id\" (click)=\"deleteitemoptionClick__j_35($event, currentItem)\">\n                    <ion-icon #j_35__icon slot=\"icon-only\" src=\"assets/images/delete-icon.svg\">\n                    </ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n            <ion-item-options _aio-7FDBF41F #j_36 side=\"start\" class=\"task-options_remind\" (ionSwipe)=\"clockitemoptionsIonSwipe__j_36($event, currentItem)\"\n            *ngIf=\"!isCurrentDateIsPastDay\">\n                <ion-item-option _aio-3F2C9291 #j_37 color=\"custom\" disabled=\"{{isCurrentDateIsPastDay}}\"\n                class=\"task-option task-option_remind\" [id]=\"currentItem.itemData._id\" (click)=\"clockitemoptionClick__j_37($event, currentItem)\">\n                    <ion-icon #j_37__icon slot=\"icon-only\" src=\"assets/images/clockwise.svg\">\n                    </ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <img _aio-85C3FB53 #j_38 class=\"placeholder-image\" src=\"assets/images/placeholder.png\"\n    alt=\"Image error\" [ngClass]=\"{'ion-hide': currentTasks.length !== 0}\">\n    <ion-text _aio-96F07008 #j_39 class=\"empty-text\" [ngClass]=\"{'ion-hide': currentTasks.length !== 0}\">\n        You don't have any active tasks\n    </ion-text>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>\n<ion-footer _aio-8BA763CC>\n    <ion-button _aio-556BE6DF #j_41 expand=\"block\" size=\"default\" class=\"custom-button\"\n    color=\"primary\" (click)=\"createbuttonClick__j_41($event, currentItem)\" [disabled]=\"__getMapping(currentItem, 'j_41__disabled', isCurrentDateIsPastDay, undefined, true)\">\n        Create New Task\n    </ion-button>\n    <ion-button _aio-42BF74E6 #j_42 expand=\"block\" strong=\"true\" color=\"secondary\" [routerLink]=\"['/orderby']\">\n        Sort By\n    </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_AllTasks_AllTasks_module_ts.js.map