import { Injectable } from '@angular/core';
import _ from "lodash";
import { ApperyioConfigService } from "../config_service";

@Injectable()
export class AppClientService {

    private appClient: any;

    constructor(private apperyioConfigService: ApperyioConfigService) {
    }

    async loadAppClient() {
        if (this.appClient) {
            return this.appClient;
        }
        const { default: appClient } = await import (/*webpackIgnore: true*/'./app_client.js');
        this.appClient = appClient;
        return this.appClient;
    }

    async mssdk() {
        await this.loadAppClient();
        var AppClientInitOptions = {
            "domain": this.apperyioConfigService.get("AppClientSettings.domain"),
            "apiExpressAexDomain": this.apperyioConfigService.get("AppClientSettings.aexDomain"),
            "apiKey": this.apperyioConfigService.get("AppClientSettings.apiKey"),
            "currentState": this.apperyioConfigService.get("AppClientSettings.currentState"),
            "handleNetworkState": this.apperyioConfigService.get("AppClientSettings.handleNetworkState"),
            "cacheTimeout": this.apperyioConfigService.get("AppClientSettings.cacheTimeout"),
            "requestTimeout": this.apperyioConfigService.get("AppClientSettings.requestTimeout"),
            "autoLogin": this.apperyioConfigService.get("AppClientSettings.autoLogin"),
            "autoSync": this.apperyioConfigService.get("AppClientSettings.autoSync"),
            "clearOnLogout": this.apperyioConfigService.get("AppClientSettings.clearOnLogout"),
            "backendTarget": this.apperyioConfigService.get("AppClientSettings.backendTarget"),
            "isDataValidationEnabled" : false
        };
        if(!_.isUndefined(AppClientInitOptions.handleNetworkState) && _.isString(AppClientInitOptions.handleNetworkState)){
            AppClientInitOptions.handleNetworkState = AppClientInitOptions.handleNetworkState.toLowerCase() === "true";
        }
        if(!_.isUndefined(AppClientInitOptions.autoLogin) && _.isString(AppClientInitOptions.autoLogin)){
            AppClientInitOptions.autoLogin = AppClientInitOptions.autoLogin.toLowerCase() === "true";
        }
        if(!_.isUndefined(AppClientInitOptions.autoSync) && _.isString(AppClientInitOptions.autoSync)){
            AppClientInitOptions.autoSync = AppClientInitOptions.autoSync.toLowerCase() === "true";
        }
        if(!_.isUndefined(AppClientInitOptions.clearOnLogout) && _.isString(AppClientInitOptions.clearOnLogout)){
            AppClientInitOptions.clearOnLogout = AppClientInitOptions.clearOnLogout.toLowerCase() === "true";
        }
        return this.appClient.init(AppClientInitOptions);
    }

    async setStaticMetadata(metadata: any) {
        await this.loadAppClient();
        let result: any;
        result = this.appClient.setProjectMetadata(metadata);
        if(!_.isUndefined(result)){
            return result.catch(e => Promise.resolve({status: "rejected", data: e}));
        }else{
            return Promise.resolve();
        }
    }

    async instance() {
        await this.loadAppClient();
        return Promise.resolve(this.appClient);
    }

    async invokeAfterInit(func) {
        await this.loadAppClient();
        return this.mssdk()["catch"](function(){
        }).then(func.bind(this));
    }

    invokeAfterSuccessInit(func): any{
        return this.mssdk().then(func);
    }

    async invokeAppClientMethod(...params) {
        await this.loadAppClient();
        var promise;
        var method = params[0];
        var methodArguments = _.tail(params);
        var appClientMethodExecutor = function (){
            return this.appClient[method].apply(this.appClient, methodArguments);
        }.bind(this);
        if (!this.appClient.isInitialized()) {
            promise = this.invokeAfterInit(appClientMethodExecutor);
        }else{
            promise = appClientMethodExecutor();
        }
        return promise;
    }

    goOnline(): any {
        return this.invokeAfterSuccessInit(function(success){
            return success.goOnline();
        });
    }

    goOffline(): any {
        return this.invokeAfterSuccessInit(function(success){
            return success.goOffline();
        });
    }

    setSessionToken(sessionToken): any {
        return this.invokeAfterSuccessInit(function(success){
            return success.setSessionToken(sessionToken);
        });
    }

    revertLocalChanges(): any{
        return this.invokeAppClientMethod("revertLocalChanges");
    }

    retrySync(): any {
        return this.invokeAppClientMethod("retrySync");
    }

    resetFailedSync(): any {
        return this.invokeAppClientMethod("resetFailedSync");
    }

    getState(): any {
        return this.invokeAfterInit(function(){
            return {
                state: this.appClient.state
            };
        });
    }

    getConflict(): any {
        return this.invokeAppClientMethod("getConflict");
    }

    resolveConflict(data, action): any {
        return this.invokeAppClientMethod("resolveConflict", data, action);
    }

    signup(username, password, options): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.signup(username, password, options);
        });
    }

    updateUser(username, password, options): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.updateUser(username, password, options);
        });
    }

    removeUser(): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.removeUser();
        });
    }

    loginAnonymously(): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.loginAnonymously();
        });
    }

    login(username, password, token, options): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.login(username, password, token, options);
        });
    }

    logout(): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.logout();
        });
    }

    getCurrentUser(): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.getCurrentUser();
        });
    }

    invoke(method: string, path: string, options: any, cached: boolean): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.invoke(method, path, options, cached);
        });
    }

    ethSetPrivateKey(privateKey, password): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.setEthPrivateKey(privateKey, password);
        });
    }

    ethCall(methodName, options, settings): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethContractCall(methodName, options, settings);
        });
    }

    ethContractSendTransaction(methodName, options, settings): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethContractSendTransaction(methodName, options, settings);
        });
    }

    ethGetBalance(options, settings): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethGetBalance(options, settings);
        });
    }

    ethTransferEther(options, settings): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethTransferEther(options, settings);
        });
    }

    ethGetTransaction(hash, settings): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethGetTransaction(hash, settings);
        });
    }

    ethGetTransactionReceipt(hash, settings): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethGetTransactionReceipt(hash, settings);
        });
    }

    ethGetAccount(): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethGetAccount();
        });
    }

    ethCreateAccount(password): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethCreateAccount(password);
        });
    }

    ethExportPrivateKey(password): any{
        return this.invokeAfterSuccessInit(function(success){
            return success.ethExportPrivateKey(password);
        });
    }

    getModelDao(model): any{
        return this.mssdk().then(function(success){
            return success.dao(model);
        });
    }
}
