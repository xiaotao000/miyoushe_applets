"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "homograph",
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
        a: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: item
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (5)/miyoushe_applets/components/homograph/homograph.vue"]]);
wx.createComponent(Component);
