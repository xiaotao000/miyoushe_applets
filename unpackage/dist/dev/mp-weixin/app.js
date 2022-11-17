"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/release/release.js";
  "./pages/my/my.js";
  "./fainse/sfines/sfines.js";
  "./fainse/jioguan/jioguan.js";
  "./fainse/bjtpes/bjtpes.js";
  "./subpkg/article-details/article-details.js";
  "./subpkg/upload-posts/upload-posts.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (5)/miyoushe_applets/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
