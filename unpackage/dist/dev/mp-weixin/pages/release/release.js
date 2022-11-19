"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "release",
  setup(__props) {
    const uploadArticle = () => {
      common_vendor.index.navigateTo({ url: "/subpkg/upload-posts/upload-posts" });
    };
    const uploadPicture = () => {
      console.log(111);
      common_vendor.index.navigateTo({ url: "/subpkg/upload-picture/upload-picture" });
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
        a: common_vendor.o(uploadArticle),
        b: common_vendor.o(uploadPicture)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/2005/uni-app/miyoushe_applets/pages/release/release.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
