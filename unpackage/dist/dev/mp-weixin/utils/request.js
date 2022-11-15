"use strict";
var common_vendor = require("../common/vendor.js");
class Request {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || "";
    this.url = options.url || "";
    this.method = "GET";
    this.data = null;
    this.header = options.header || {};
    this.beforeRequest = null;
    this.afterRequest = null;
  }
  get(url, data = {}) {
    this.method = "GET";
    this.url = this.baseUrl + url;
    this.data = data;
    return this._();
  }
  post(url, data = {}) {
    this.method = "POST";
    this.url = this.baseUrl + url;
    this.data = data;
    return this._();
  }
  put(url, data = {}) {
    this.method = "PUT";
    this.url = this.baseUrl + url;
    this.data = data;
    return this._();
  }
  delete(url, data = {}) {
    this.method = "DELETE";
    this.url = this.baseUrl + url;
    this.data = data;
    return this._();
  }
  _() {
    this.header = {};
    this.beforeRequest && typeof this.beforeRequest === "function" && this.beforeRequest(this);
    return new Promise((resolve, reject) => {
      let weixin = wx;
      if (typeof common_vendor.index !== "undefined") {
        weixin = common_vendor.index;
      }
      weixin.request({
        url: this.url,
        method: this.method,
        data: this.data,
        header: this.header,
        success: (res) => {
          const { data, status, message } = res.data;
          if (status !== 0) {
            common_vendor.index.showToast({ title: message || "\u7F51\u7EDC\u51FA\u73B0\u4E86\u95EE\u9898", icon: "none" });
          }
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
        complete: (res) => {
          this.afterRequest && typeof this.afterRequest === "function" && this.afterRequest(res);
        }
      });
    });
  }
}
const $http = new Request();
exports.$http = $http;
