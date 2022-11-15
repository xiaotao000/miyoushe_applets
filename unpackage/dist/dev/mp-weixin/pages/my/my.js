"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  homograph();
}
const homograph = () => "../../components/homograph/homograph.js";
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
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/miyoushe/pages/my/my.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
