"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
require("../../api/index.js");
var utils_request = require("../../utils/request.js");
const _sfc_main = {
  __name: "article-details",
  setup(__props) {
    const state = common_vendor.reactive({ article: {} });
    const previewImage = (index) => {
      const imageList = state.article.cover.map((item) => "http://172.19.10.192:3000" + item.imgUrl);
      common_vendor.index.previewImage({
        urls: imageList,
        current: index
      });
    };
    const init = async () => {
      const { data } = await utils_request.$http.get("/api/home/articledDetails?id=345");
      data[0].introduce = utils_index.imgTagAddStyle(data[0].introduce, "color: #111 !important; margin-bottom: 24rpx;");
      state.article = data[0];
      console.log(data[0]);
    };
    common_vendor.onLoad((message) => {
      init();
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    common_vendor.onShareAppMessage(() => {
    });
    const { article } = common_vendor.toRefs(state);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: "http://172.19.10.192:3000" + common_vendor.unref(article).avatar,
        b: common_vendor.t(common_vendor.unref(article).author),
        c: common_vendor.t(common_vendor.unref(article).autograph),
        d: common_vendor.t(common_vendor.unref(article).title),
        e: common_vendor.t(common_vendor.unref(article).time),
        f: common_vendor.unref(article).introduce,
        g: common_vendor.unref(article).category === "\u540C\u4EBA\u56FE" || common_vendor.unref(article).category === "COS"
      }, common_vendor.unref(article).category === "\u540C\u4EBA\u56FE" || common_vendor.unref(article).category === "COS" ? {
        h: common_vendor.f(common_vendor.unref(article).cover, (item, i, i0) => {
          return {
            a: common_vendor.o(($event) => previewImage(i), i),
            b: "http://172.19.10.192:3000" + item.imgUrl,
            c: i
          };
        })
      } : {}, {
        i: common_vendor.t(common_vendor.unref(article).browse),
        j: common_vendor.t(common_vendor.unref(article).section)
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/miyoushe/subpkg/article-details/article-details.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
