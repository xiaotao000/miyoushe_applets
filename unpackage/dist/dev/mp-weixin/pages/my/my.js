"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_tab + _component_van_tabs)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const admin = () => {
      common_vendor.index.navigateTo({ url: "/fainse/jioguan/jioguan" });
    };
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
        a: common_vendor.o(admin),
        b: common_vendor.p({
          title: "\u53D1\u5E03"
        }),
        c: common_vendor.p({
          title: "\u8BC4\u8BBA"
        }),
        d: common_vendor.p({
          title: "\u6536\u85CF"
        }),
        e: common_vendor.p({
          title: "\u5408\u96C6"
        }),
        f: common_vendor.p({
          sticky: true,
          animated: true
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (5)/miyoushe_applets/pages/my/my.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
