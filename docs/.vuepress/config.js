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
    nav: require("./configJs/nav/nav"),
    /* ============
    ||   侧边导航 ||
    =============*/
    sidebar: {
      "/note/目录-后台基础/": require("./configJs/sidebar/sidebar-java"),
      "/note/目录-系统运维/": require("./configJs/sidebar/sidebar-linux"),
      "/note/目录-前端框架/": require("./configJs/sidebar/sidebar-vue"),
      "/note/目录-前端基础/": require("./configJs/sidebar/sidebar-css"),
    },
    sidebarDepth: 2, // 侧边栏显示2级
  },
  lastUpdated: "Last Updated", //最后更新时间
  /* ============
    ||  插件使用  ||
    =============*/
  // plugins: ['@vuepress/back-to-top'],
};
