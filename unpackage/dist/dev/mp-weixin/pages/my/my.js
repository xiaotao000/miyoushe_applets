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
          title: "\u53D1\u5E03"
        }),
        b: common_vendor.p({
          title: "\u8BC4\u8BBA"
        }),
        c: common_vendor.p({
          title: "\u6536\u85CF"
        }),
        d: common_vendor.p({
          title: "\u5408\u96C6"
        }),
        e: common_vendor.p({
          sticky: true
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/miyoushe/pages/my/my.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
