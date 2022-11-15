"use strict";
require("../index.js");
var utils_request = require("../../utils/request.js");
const bannerApi = () => utils_request.$http.get("/api/home/rotation");
exports.bannerApi = bannerApi;
