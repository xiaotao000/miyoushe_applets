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
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/miyoushe/App.vue"]]);
common_vendor.index.$Toast = function(title) {
  common_vendor.index.showToast({ title, icon: "none" });
};
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
