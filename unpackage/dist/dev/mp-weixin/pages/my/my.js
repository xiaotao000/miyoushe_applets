"use strict";
var common_vendor = require("../../common/vendor.js");
var store_user = require("../../store/user.js");
var api_modules_user = require("../../api/modules/user.js");
require("../../api/index.js");
require("../../utils/request.js");
if (!Array) {
  const _component_van_popup = common_vendor.resolveComponent("van-popup");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_popup + _component_van_tab + _component_van_tabs)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const userStore = store_user.UserStore();
    const state = common_vendor.reactive({ bannerList: [] });
    const bpin = common_vendor.ref(false);
    const category = common_vendor.ref("");
    const goLogin = () => {
      common_vendor.index.navigateTo({ url: "/subpkg/login/login" });
    };
    const removeId = common_vendor.ref();
    const showPopup = (id, cate) => {
      bpin.value = true;
      removeId.value = id;
      category.value = cate;
    };
    const onClose = () => {
      bpin.value = false;
      removeId.value = "";
      category.value = "";
    };
    const admines = (id) => {
      common_vendor.index.navigateTo({ url: `/subpkg/article-details/article-details?id=${id}` });
    };
    const admin = () => {
      common_vendor.index.navigateTo({ url: "/fainse/bjtpes/bjtpes" });
    };
    const init = async () => {
      const { data } = await api_modules_user.getArticleApi();
      state.bannerList = data;
    };
    const removeArtilce = () => {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u4F60\u786E\u5B9A\u8981\u5220\u9664?",
        cancelText: "\u5BB9\u6211\u60F3\u60F3",
        confirmText: "\u72E0\u5FC3\u5220\u9664",
        success: async ({ confirm }) => {
          if (confirm) {
            await api_modules_user.removeArticleApi(removeId.value);
            bpin.value = false;
            common_vendor.index.$Toast("\u64CD\u4F5C\u6210\u529F");
            init();
          }
        }
      });
    };
    const goUpdate = () => {
      if (category.value === "\u9152\u9986" || category.value === "\u786C\u6838" || category.value === "\u653B\u7565") {
        bpin.value = false;
        common_vendor.index.navigateTo({
          url: "/subpkg/upload-posts/upload-posts?id=" + removeId.value
        });
      } else {
        bpin.value = false;
        common_vendor.index.navigateTo({
          url: "/subpkg/upload-picture/upload-picture?id=" + removeId.value
        });
      }
    };
    common_vendor.onLoad((message) => {
    });
    common_vendor.onShow(() => {
      userStore.getUserinfo();
      init();
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
        b: common_vendor.unref(info).avatar ? "http://172.16.9.93:3000" + common_vendor.unref(info).avatar : "/static/image/no-login.png",
        c: common_vendor.o(admin),
        d: common_vendor.t(common_vendor.unref(info).nickname),
        e: common_vendor.t(common_vendor.unref(info).autograph ? common_vendor.unref(info).autograph : "\u7CFB\u7EDF\u539F\u88C5\u7B7E\u540D\uFF0C\u9001\u7ED9\u6BCF\u4E00\u4F4D\u5C0F\u53EF\u7231~")
      } : {
        f: common_vendor.o(goLogin)
      }, {
        g: common_vendor.unref(info).id
      }, common_vendor.unref(info).id ? common_vendor.e({
        h: state.bannerList.length >= 1
      }, state.bannerList.length >= 1 ? {
        i: common_vendor.f(state.bannerList, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.author),
            b: common_vendor.t(item.time),
            c: common_vendor.o(($event) => showPopup(item.id, item.category)),
            d: common_vendor.t(item.title),
            e: item.introduce,
            f: item.cover.length
          }, item.cover.length ? {
            g: "http://172.16.9.93:3000" + item.cover[0].imgUrl
          } : {}, {
            h: common_vendor.t(item.section),
            i: common_vendor.t(item.browse),
            j: common_vendor.t(item.count),
            k: common_vendor.t(item.comment),
            l: common_vendor.o(($event) => admines(item.id)),
            m: item.id
          });
        }),
        j: common_vendor.o(goUpdate),
        k: common_vendor.o(removeArtilce),
        l: common_vendor.o(onClose),
        m: common_vendor.p({
          show: bpin.value,
          position: "bottom",
          customStyle: "height: 20%;"
        })
      } : {}, {
        n: common_vendor.p({
          title: "\u53D1\u5E03"
        }),
        o: common_vendor.p({
          title: "\u8BC4\u8BBA"
        }),
        p: common_vendor.p({
          title: "\u6536\u85CF"
        }),
        q: common_vendor.p({
          title: "\u5408\u96C6"
        }),
        r: common_vendor.p({
          sticky: true
        })
      }) : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/miyoushe/pages/my/my.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
