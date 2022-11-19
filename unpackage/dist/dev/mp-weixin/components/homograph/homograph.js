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
    const state = common_vendor.reactive({ artilceList: [], page: 1, loading: false, isRefresh: false, hasMore: true });
    common_vendor.watch(() => articleStore.card, () => {
      refresh();
    });
    common_vendor.onLoad((message) => {
    });
    common_vendor.onShow(() => {
    });
    const init = async () => {
      if (articleStore.card == "\u540C\u4EBA\u56FE" || articleStore.card == "cos") {
        state.loading = true;
        const { data } = await api_modules_home.cardArticleApi({
          category: articleStore.card,
          pagenum: state.page
        });
        state.artilceList = state.artilceList.concat(data.data);
        state.isRefresh = false;
        state.loading = false;
        if (state.page >= data.totalPage) {
          state.hasMore = false;
        }
      }
    };
    const admines = (id) => {
      common_vendor.index.navigateTo({ url: `/subpkg/article-details/article-details?id=${id}` });
    };
    const refresh = () => {
      state.hasMore = true;
      state.isRefresh = true;
      state.page = 1;
      state.artilceList = [];
      init();
    };
    const loadMore = () => {
      if (state.loading)
        return;
      if (!state.hasMore)
        return;
      state.page += 1;
      init();
    };
    common_vendor.onMounted(() => {
      init();
    });
    common_vendor.onHide(() => {
    });
    common_vendor.onShareAppMessage(() => {
    });
    const { artilceList, isRefresh } = common_vendor.toRefs(state);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(artilceList), (item, k0, i0) => {
          return {
            a: "http://172.19.10.125:3000" + item.cover[0].imgUrl,
            b: common_vendor.t(item.title),
            c: "http://172.19.10.125:3000" + item.avatar,
            d: common_vendor.t(item.author),
            e: common_vendor.t(item.count),
            f: item.id,
            g: common_vendor.o(($event) => admines(item.id), item.id)
          };
        }),
        b: common_vendor.o(loadMore),
        c: common_vendor.o(refresh),
        d: common_vendor.unref(isRefresh)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (5)/miyoushe_applets/components/homograph/homograph.vue"]]);
wx.createComponent(Component);
