"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_icon + _component_van_tab + _component_van_tabs)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.onLoad((message) => {
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    common_vendor.onShareAppMessage(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          size: "32rpx",
          name: "search"
        }),
        b: common_vendor.p({
          title: "\u89C2\u6D4B\u67A2"
        }),
        c: common_vendor.p({
          title: "\u53D1\u73B0"
        }),
        d: common_vendor.p({
          title: "\u9152\u9986"
        }),
        e: common_vendor.p({
          title: "\u653B\u7565"
        }),
        f: common_vendor.p({
          title: "\u540C\u4EBA\u56FE"
        }),
        g: common_vendor.p({
          title: "cos"
        }),
        h: common_vendor.p({
          title: "\u786C\u6838"
        }),
        i: common_vendor.p({
          titleActiveColor: "#1B1B1D",
          titleInactiveColor: "#C1C1C3",
          color: "#3FA6F3"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (5)/miyoushe_applets/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
