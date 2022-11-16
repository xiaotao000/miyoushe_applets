"use strict";
var common_vendor = require("../../common/vendor.js");
var store_article = require("../../store/article.js");
var api_modules_home = require("../../api/modules/home.js");
require("../../api/index.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "homograph",
  setup(__props) {
    const articleStore = store_article.ArticleStore();
    const state = common_vendor.reactive({ artilceList: [] });
    common_vendor.watch(() => articleStore.card, () => {
      init();
    });
    common_vendor.onLoad((message) => {
    });
    common_vendor.onShow(() => {
    });
    const init = async () => {
      if (articleStore.card == "\u540C\u4EBA\u56FE" || articleStore.card == "cos") {
        const { data } = await api_modules_home.cardArticleApi({
          category: articleStore.card,
          pagenum: 1
        });
        state.artilceList = data.data;
        console.log(data);
      }
    };
    common_vendor.onMounted(() => {
      init();
    });
    common_vendor.onHide(() => {
    });
    common_vendor.onShareAppMessage(() => {
    });
    const { artilceList } = common_vendor.toRefs(state);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(artilceList), (item, k0, i0) => {
          return {
            a: "http://172.19.10.161:3000" + item.cover[0].imgUrl,
            b: common_vendor.t(item.title),
            c: "http://172.19.10.161:3000" + item.avatar,
            d: common_vendor.t(item.author),
            e: common_vendor.t(item.count),
            f: item.id
          };
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/2005/uni-app/miyoushe_applets/components/homograph/homograph.vue"]]);
wx.createComponent(Component);
