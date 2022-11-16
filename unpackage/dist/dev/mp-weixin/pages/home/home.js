"use strict";
var common_vendor = require("../../common/vendor.js");
var api_modules_home = require("../../api/modules/home.js");
var store_article = require("../../store/article.js");
var utils_type_data = require("../../utils/type_data.js");
require("../../api/index.js");
require("../../utils/request.js");
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_icon + _component_van_tab + _component_van_tabs)();
}
if (!Math) {
  (homograph + jioguanVue)();
}
const homograph = () => "../../components/homograph/homograph.js";
const jioguanVue = () => "../../components/jioguan/jioguan.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const state = common_vendor.reactive({ bannerList: [] });
    const articleStore = store_article.ArticleStore();
    const jioguan = common_vendor.ref();
    const getBanner = async () => {
      const { data } = await api_modules_home.bannerApi();
      state.bannerList = data;
    };
    const tabChage = (e) => {
      const { name } = e.detail;
      articleStore.card = name;
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
    const { card } = common_vendor.storeToRefs(articleStore);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          size: "32rpx",
          name: "search"
        }),
        b: common_vendor.p({
          title: "\u89C2\u6D4B\u67A2",
          name: "\u89C2\u6D4B\u67A2"
        }),
        c: common_vendor.p({
          title: "\u53D1\u73B0",
          name: "\u53D1\u73B0"
        }),
        d: common_vendor.p({
          title: "\u9152\u9986",
          name: "\u9152\u9986"
        }),
        e: common_vendor.p({
          title: "\u653B\u7565",
          name: "\u653B\u7565"
        }),
        f: common_vendor.p({
          title: "\u540C\u4EBA\u56FE",
          name: "\u540C\u4EBA\u56FE"
        }),
        g: common_vendor.p({
          title: "cos",
          name: "cos"
        }),
        h: common_vendor.p({
          title: "\u786C\u6838",
          name: "\u786C\u6838"
        }),
        i: common_vendor.o(tabChage),
        j: common_vendor.p({
          titleActiveColor: "#1B1B1D",
          titleInactiveColor: "#C1C1C3",
          color: "#3FA6F3"
        }),
        k: common_vendor.unref(card) === "\u89C2\u6D4B\u67A2"
      }, common_vendor.unref(card) === "\u89C2\u6D4B\u67A2" ? {
        l: common_vendor.f(common_vendor.unref(bannerList), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.id
          };
        }),
        m: common_vendor.f(common_vendor.unref(utils_type_data.gridData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: item.gridId
          };
        }),
        n: common_vendor.f(common_vendor.unref(utils_type_data.hotData), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.hotId
          };
        }),
        o: common_vendor.p({
          name: "arrow"
        }),
        p: common_vendor.f(common_vendor.unref(utils_type_data.exploreData), (item, k0, i0) => {
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
        q: common_vendor.p({
          name: "arrow"
        }),
        r: common_vendor.f(common_vendor.unref(utils_type_data.newestData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: item.headImag,
            d: common_vendor.t(item.author),
            e: common_vendor.t(item.time),
            f: item.newestId
          };
        }),
        s: common_vendor.f(common_vendor.unref(utils_type_data.specialData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.desc),
            d: item.specialId
          };
        }),
        t: common_vendor.f(common_vendor.unref(utils_type_data.IndexesData), (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: item.id
          };
        })
      } : {}, {
        v: common_vendor.unref(card) === "\u540C\u4EBA\u56FE" || common_vendor.unref(card) === "cos"
      }, common_vendor.unref(card) === "\u540C\u4EBA\u56FE" || common_vendor.unref(card) === "cos" ? {} : {}, {
        w: common_vendor.unref(card) === "\u9152\u9986" || common_vendor.unref(card) === "\u786C\u6838" || common_vendor.unref(card) === "\u653B\u7565"
      }, common_vendor.unref(card) === "\u9152\u9986" || common_vendor.unref(card) === "\u786C\u6838" || common_vendor.unref(card) === "\u653B\u7565" ? {
        x: common_vendor.sr(jioguan, "49fc822c-12", {
          "k": "jioguan"
        })
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/miyoushe/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
