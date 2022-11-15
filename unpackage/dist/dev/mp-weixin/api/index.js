"use strict";
var common_vendor = require("../common/vendor.js");
var utils_request = require("../utils/request.js");
utils_request.$http.baseUrl = "http://172.19.10.136:3000";
utils_request.$http.beforeRequest = function(res) {
  console.log("\u62E6\u622A\u524D");
};
utils_request.$http.afterRequest = function() {
  common_vendor.index.hideLoading();
};
