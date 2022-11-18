"use strict";
var common_vendor = require("../../common/vendor.js");
var store_user = require("../../store/user.js");
require("../../api/modules/user.js");
require("../../api/index.js");
require("../../utils/request.js");
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_tab + _component_van_tabs)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const userStore = store_user.UserStore();
    const goLogin = () => {
      common_vendor.index.navigateTo({ url: "/subpkg/login/login" });
    };
    const admin = () => {
      common_vendor.index.navigateTo({ url: "/fainse/bjtpes/bjtpes" });
    };
    common_vendor.onLoad((message) => {
    });
    common_vendor.onShow(() => {
      userStore.getUserinfo();
    });
    common_vendor.onHide(() => {
    });
    common_vendor.onShareAppMessage(() => {
    });
    const { info } = common_vendor.storeToRefs(userStore);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(info).id
      }, common_vendor.unref(info).id ? {
        b: "http://172.19.10.138:3000" + common_vendor.unref(info).avatar,
        c: common_vendor.o(admin),
        d: common_vendor.t(common_vendor.unref(info).nickname),
        e: common_vendor.t(common_vendor.unref(info).autograph ? common_vendor.unref(info).autograph : "\u7CFB\u7EDF\u539F\u88C5\u7B7E\u540D\uFF0C\u9001\u7ED9\u6BCF\u4E00\u4F4D\u5C0F\u53EF\u7231~")
      } : {
        f: common_vendor.o(goLogin)
      }, {
        g: common_vendor.unref(info).id
      }, common_vendor.unref(info).id ? {
        h: common_vendor.p({
          title: "\u53D1\u5E03"
        }),
        i: common_vendor.p({
          title: "\u8BC4\u8BBA"
        }),
        j: common_vendor.p({
          title: "\u6536\u85CF"
        }),
        k: common_vendor.p({
          title: "\u5408\u96C6"
        }),
        l: common_vendor.p({
          sticky: true,
          animated: true
        })
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/miyoushe/pages/my/my.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
