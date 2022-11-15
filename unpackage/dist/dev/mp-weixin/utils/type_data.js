"use strict";
const gridData = [
  {
    name: "\u5730\u56FE\u5DE5\u5177",
    gridId: 10001,
    imgUrl: "/static/image/e51c4bed5c1b79ed08ff012c38e7ad90_5949001482616031152.png"
  },
  {
    name: "Wiki\u7AD9",
    gridId: 10002,
    imgUrl: "/static/image//783240384bed5182b6a14f3031206a13_318368853484583548.png"
  },
  {
    name: "3.2\u653B\u7565\u5408\u96C6",
    gridId: 10003,
    imgUrl: "/static/image//3753bad238b0bc336aa2b6a23c97c4b1_4838764080608318601.png"
  },
  {
    name: "\u89D2\u8272\u653B\u7565",
    gridId: 10004,
    imgUrl: "/static/image//da087c70d5ce5e95ab353896cde77186_732830328053361739.png"
  },
  {
    name: "\u8BA8\u4F10BOSS",
    gridId: 10005,
    imgUrl: "/static/image//c2b219874b51bd52aec7e793c9cfbd0e_6371863560482907257.png"
  },
  {
    name: "\u6D3B\u52A8\u96C6\u9526",
    gridId: 10006,
    imgUrl: "/static/image//62b10a3b39e5d542510783d9b0d639c5_1169089424364679180.png"
  },
  {
    name: "\u4EFB\u52A1\u624B\u518C",
    gridId: 10007,
    imgUrl: "/static/image//02598df1fb9d3c8e420273c460ac946a_8267293389953062911.png"
  },
  {
    name: "\u66F4\u591A",
    gridId: 10008,
    imgUrl: "/static/image//download2.png"
  }
];
const hotData = [
  { hotId: 1, name: "\u8349\u795E\u6750\u6599" },
  { hotId: 2, name: "\u7EB3\u897F\u59B2\u914D\u961F" },
  { hotId: 3, name: "\u5143\u76F8\u4E4B\u8349\u653B\u7565" },
  { hotId: 4, name: "3.2\u653B\u7565\u5408\u96C6" },
  { hotId: 5, name: "\u8349\u5143\u7D20\u53CD\u5E94" },
  { hotId: 6, name: "\u987B\u5F25\u5F00\u673A\u6307\u5357" }
];
const exploreData = [
  {
    id: 1,
    imgUrl: "/static/image//explore-01.png",
    title: "\u89D2\u8272\u653B\u7565",
    itemData: [
      { itemId: 1001, name: "\u83B1\u4F9D\u62C9" },
      { itemId: 1002, name: "\u7EB3\u897F\u59B2" },
      { itemId: 1003, name: "\u5BB5\u5BAB" }
    ]
  },
  {
    id: 2,
    imgUrl: "/static/image//explore-02.png",
    title: "\u8BA8\u4F10BOSS",
    itemData: [
      { itemId: 1004, name: "\u6B63\u673A\u4E4B\u795E" },
      { itemId: 1005, name: "\u65E0\u76F8\u4E4B\u8349" },
      { itemId: 1006, name: "\u5146\u8F7D\u6C38\u52AB\u9F99\u517D" }
    ]
  },
  {
    id: 3,
    imgUrl: "/static/image//explore-03.png",
    title: "\u6D3B\u52A8\u96C6\u9526",
    itemData: [
      { itemId: 1007, name: "\u667A\u5DE7\u7075\u8548\u5927\u7ADE\u9010" },
      { itemId: 1008, name: "\u5192\u9669\u5BB6\u8BD5\u70BC" },
      { itemId: 1009, name: "\u676F\u4E2D\u9065\u541F\u4E4B\u6B4C" }
    ]
  },
  {
    id: 4,
    imgUrl: "/static/image//explore-04.png",
    title: "\u4EFB\u52A1\u624B\u518C",
    itemData: [
      { itemId: 1010, name: "\u4EFB\u52A1\u5927\u5168" },
      { itemId: 1011, name: "\u987B\u5F25\u4E13\u9898" },
      { itemId: 1012, name: "\u5C42\u5CA9\u4E13\u9898" }
    ]
  }
];
const newestData = [
  {
    newestId: 101,
    imgUrl: "/static/image/newest-01.jpg",
    title: "\u3010\u667A\u5DE7\u7075\u8548\u5927\u7ADE\u9010\u3011\u6F5C\u80FD\u7115\u53D1\u7B2C\u4E09\u5929\u4E09\u6B65\u901F\u901A\u653B\u7565",
    headImag: "/static/image/newest-item-01.png",
    author: "\u5929\u4E4B\u821E\u88F3",
    time: "11-12 10:22"
  },
  {
    newestId: 102,
    imgUrl: "/static/image/newest-01.jpg",
    title: "\u3010\u667A\u5DE7\u7075\u8548\u5927\u7ADE\u9010\u3011\u6F5C\u80FD\u7115\u53D1\u7B2C\u56DB\u5929\u4E09\u6B65\u901F\u901A\u653B\u7565",
    headImag: "/static/image/newest-item-01.png",
    author: "\u5929\u4E4B\u821E\u88F3",
    time: "11-13 04:59"
  },
  {
    newestId: 103,
    imgUrl: "/static/image/newest-02.jpg",
    title: "\u3010\u667A\u5DE7\u7075\u8548\u5927\u7ADE\u9010\u3011\u6D3B\u52A8\u7B2C\u4E09\u5929\u7B2C\u4E03/\u7B2C\u516B\u8548\u517D\u201C\u6F5C\u80FD\u7115\u53D1\u201D",
    headImag: "/static/image/newest-item-02.png",
    author: "\u674E\u6C90\u745F",
    time: "11-12 11:23"
  },
  {
    newestId: 104,
    imgUrl: "/static/image/newest-02.jpg",
    title: "\u3010\u667A\u5DE7\u7075\u8548\u5927\u7ADE\u9010\u3011\u6D3B\u52A8\u7B2C\u56DB\u5929\u7B2C\u4E5D/\u7B2C\u5341\u53EA\u8548\u517D\u201C\u6F5C\u80FD\u7115\u53D1\u201D",
    headImag: "/static/image/newest-item-02.png",
    author: "\u674E\u6C90\u745F",
    time: "11-13 11:19"
  }
];
const specialData = [
  {
    specialId: 111,
    imgUrl: "/static/image/special-01.png",
    title: "3.2\u7248\u672C\u539F\u77F3\u76D8\u70B9\uFF0C\u628A\u7EB3\u897F\u59B2\u5E26\u56DE\u5BB6\uFF01",
    desc: "\u539F\u795E3.2\u7248\u672C\u539F\u77F3\u83B7\u53D6\u76D8\u70B9\u3002"
  },
  {
    specialId: 112,
    imgUrl: "/static/image/special-02.jpg",
    title: "\u3010\u89C2\u6D4B\u67A2\u3011\u59AE\u9732\u3001\u963F\u8D1D\u591A\u3001\u6C99\u6F20\u63A2\u7D223.1\u653B\u7565\u5408\u96C6",
    desc: "\u539F\u795E3.1\u7248\u672C\u59AE\u9732\u3001\u963F\u8D1D\u591A\u653B\u7565\u5408\u96C6\uFF0C\u8FD8\u6709\u65B0\u5730\u5757\u987B\u5F25\u6C99\u6F20\u533A\u57DF\u63A2\u7D22\u653B\u7565\uFF0C\u4E16\u754C\u4EFB\u52A1\u653B\u7565\uFF0C\u4E00\u7AD9\u5F0F\u670D\u52A1\uFF01\uFF01"
  },
  {
    specialId: 113,
    imgUrl: "/static/image/special-03.png",
    title: "\u8349\u5143\u7D20\u53CD\u5E94\u6982\u8BBA",
    desc: "\u539F\u795E\u5143\u7D20\u653B\u7565\u2014\u2014\u8349\u5143\u7D20\u53CD\u5E94\u6982\u8BBA\u3002"
  },
  {
    specialId: 114,
    imgUrl: "/static/image/special-04.jpg",
    title: "\u3010\u89C2\u6D4B\u67A2\u3011\u5FC3\u6D77\u3001\u7518\u96E8\u3001\u591A\u8389\u3001\u987B\u5F25\u7B493.0\u7248\u672C\u653B\u7565\u5408\u96C6",
    desc: "\u539F\u795E3.0\u7248\u672C\u63D0\u7EB3\u91CC\u3001\u949F\u79BB\u3001\u67EF\u83B1\u3001\u73CA\u745A\u5BAB\u5FC3\u6D77\u3001\u591A\u8389\u3001\u7518\u96E8\u653B\u7565\u5408\u96C6\uFF0C\u8FD8\u6709\u987B\u5F25\u5927\u4E16\u754C\u63A2\u7D22\u653B\u7565\uFF0C\u4E16\u754C\u4EFB\u52A1\u653B\u7565\uFF0C\u4E00\u7AD9\u5F0F\u670D\u52A1\uFF01\uFF01"
  },
  {
    specialId: 115,
    imgUrl: "/static/image/special-05.jpg",
    title: "\u4E07\u53F6\u7A33\u4E86\uFF1F2.8\u7248\u672C\u539F\u77F3\u76D8\u70B9\uFF0C\u5E26\u4F60\u767D\u5AD6\u4E0A\u4E07\u539F\u77F3\uFF01",
    desc: "2.8\u7248\u672C\u539F\u77F3\u83B7\u53D6\u76D8\u70B9\u3002"
  },
  {
    specialId: 116,
    imgUrl: "/static/image/special-06.jpg",
    title: "\u8352\u6CF7\u4E00\u6597\u3001\u4E45\u5C90\u5FCD\u4EE5\u53CA\u6D3B\u52A8\u4EFB\u52A1\u7B492.7\u653B\u7565\u5408\u96C6",
    desc: "\u300A\u539F\u795E\u300B2.7\u7248\u672C\u653B\u7565\u5408\u96C6\uFF0C\u5305\u542B\u591C\u5170\u3001\u9B48\u3001\u8352\u6CF7\u4E00\u6597\u3001\u4E45\u5C90\u5FCD\u7B49\u89D2\u8272\u57F9\u517B\u653B\u7565\uFF0C\u6B66\u5668\u642D\u914D\u7B49\u653B\u7565\u5408\u96C6\u3002"
  }
];
const IndexesData = [
  {
    id: 1,
    imgUrl: "/static/image/Indexes-01.png",
    name: "\u89D2\u8272\u5929\u8D4B\u6750\u6599\u5468\u5E38\u8868"
  },
  {
    id: 2,
    imgUrl: "/static/image/Indexes-01.png",
    name: "\u6B66\u5668\u7A81\u7834\u6750\u6599\u5468\u5E38\u8868"
  },
  {
    id: 3,
    imgUrl: "/static/image/Indexes-02.jpg",
    name: "\u63D0\u74E6\u7279\u5927\u5730\u56FE2.0\u98DF\u7528\u6307\u5357"
  },
  {
    id: 4,
    imgUrl: "/static/image/Indexes-03.jpg",
    name: "\u7CBE\u54C1\u653B\u7565\u7AD9\u6B63\u786E\u98DF\u7528\u6307\u5357"
  }
];
exports.IndexesData = IndexesData;
exports.exploreData = exploreData;
exports.gridData = gridData;
exports.hotData = hotData;
exports.newestData = newestData;
exports.specialData = specialData;
