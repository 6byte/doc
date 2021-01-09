module.exports = {
  title: "资料驿站",
  description: "编程就是复制粘贴",
  // base: "/md/",
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    /* =============
   ||    顶部导航  ||
    =============*/
    // nav: require("./configJs/nav/nav"),
    /* ============
    ||   侧边导航 ||
    =============*/
    // sidebar: "auto",
    sidebarDepth: 1, // 侧边栏显示2级
  },
  lastUpdated: "Last Updated", //最后更新时间
  /* ============
    ||  插件使用  ||
    =============*/
  // plugins: ['@vuepress/back-to-top'],
  plugins: [
    "autobar",//自动菜单
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
  ],

  theme: 'reco'
};
