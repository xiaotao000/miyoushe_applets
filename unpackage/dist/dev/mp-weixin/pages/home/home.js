"use strict";
var common_vendor = require("../../common/vendor.js");
var api_modules_home = require("../../api/modules/home.js");
var utils_type_data = require("../../utils/type_data.js");
require("../../api/index.js");
require("../../utils/request.js");
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_icon + _component_van_tab + _component_van_tabs)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const state = common_vendor.reactive({ bannerList: [] });
    const getBanner = async () => {
      const { data } = await api_modules_home.bannerApi();
      state.bannerList = data;
    };
    common_vendor.onLoad((message) => {
      getBanner();
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    common_vendor.onShareAppMessage(() => {
    });
    const { bannerList } = common_vendor.toRefs(state);
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
        }),
        j: common_vendor.f(common_vendor.unref(bannerList), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.id
          };
        }),
        k: common_vendor.f(common_vendor.unref(utils_type_data.gridData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: item.gridId
          };
        }),
        l: common_vendor.f(common_vendor.unref(utils_type_data.hotData), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.hotId
          };
        }),
        m: common_vendor.p({
          name: "arrow"
        }),
        n: common_vendor.f(common_vendor.unref(utils_type_data.exploreData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.f(item.itemData, (item2, k1, i1) => {
              return {
                a: common_vendor.t(item2.name),
                b: item2.itemId
              };
            }),
            d: item.id
          };
        }),
        o: common_vendor.p({
          name: "arrow"
        }),
        p: common_vendor.f(common_vendor.unref(utils_type_data.newestData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: item.headImag,
            d: common_vendor.t(item.author),
            e: common_vendor.t(item.time),
            f: item.newestId
          };
        }),
        q: common_vendor.f(common_vendor.unref(utils_type_data.specialData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.desc),
            d: item.specialId
          };
        }),
        r: common_vendor.f(common_vendor.unref(utils_type_data.IndexesData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: item.id
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/2005/uni-app/miyoushe_applets/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
