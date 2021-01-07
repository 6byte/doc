module.exports = {
  title: "资料驿站",
  description: "开发就是复制粘贴",
  // base: "/md/",
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    /* =============
   ||    顶部导航  ||
    =============*/
    nav: [
      //   { text: "显示的标题", link: "/对应文件的路径" },
      { text: "Java", link: "/目录-后台基础/Java-多线程/多线程-基本概念" },
      { text: "Linux-运维", link: "/目录-系统运维/运维-Linux/Linux-端口安全" },
      { text: "Vue", link: "/目录-前端框架/前端-Vue/Vue-原理" },
      {
        text: "综合其他",
        // 下拉列表
        items: [
          {
            text: "常用网页",
            link: "/目录-综合其他/常用网页",
          },
          {
            text: "异常记录",
            link: "/目录-综合其他/踩坑记录",
          },
        ],
      },
    ],

    sidebarDepth: 2, // 侧边栏显示2级
    /* ============
    ||   侧边导航 ||
    =============*/
    sidebar: {
      "/目录-后台基础/": require("./configJs/sidebar-java"),
      "/目录-系统运维/": require("./configJs/sidebar-linux"),
      "/目录-前端框架/": require("./configJs/sidebar-vue"),
    },
  },
};
