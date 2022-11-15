"use strict";
require("../index.js");
var utils_request = require("../../utils/request.js");
const bannerApi = () => utils_request.$http.get("/api/home/rotation");
const cardArticleApi = (data) => utils_request.$http.get("/api/home/app-article", data);
exports.bannerApi = bannerApi;
exports.cardArticleApi = cardArticleApi;
