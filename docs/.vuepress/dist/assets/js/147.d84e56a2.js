(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{631:function(s,a,n){"use strict";n.r(a);var t=n(58),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"linux-用户管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-用户管理"}},[s._v("#")]),s._v(" Linux-用户管理")]),s._v(" "),n("h3",{attrs:{id:"linux-增删改查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-增删改查"}},[s._v("#")]),s._v(" Linux-增删改查")]),s._v(" "),n("p",[s._v("添加用户")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1、添加用户\nuseradd 参数 用户名\n参数\n-c \t\tcomment 添加注释。\n-d \t\t指定目录，一般在/home目录下\n-s \t\tShell文件 指定用户的登录Shell。 \nex:\n    useradd -d /home/lucy  lucy\n    # useradd –d /usr/lucy -m lucy\n    # 网上的创建方式，在centos不能运行\n    \n2.创建密码\n    语法\t\tpasswd 用户名\n    使用\t\tpasswd lucy\n    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("权限分配")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("将目录分配给用户\nchown -R 用户名:用户名 目录\nchown -R lucy:lucy ./local\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("Root权限管理")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.修改计算机名称\nsudo vi /etc/hostname\nreboot\t#重启生效\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"linux-多用户管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-多用户管理"}},[s._v("#")]),s._v(" Linux-多用户管理")]),s._v(" "),n("div",{staticClass:"language-JS line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t先查看当前在线用户\nw users who\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t强制下线\npkill "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("kill "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t pts"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//强制 pts/0 下线")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("  查看登录失败的信息\nlastb lastlog\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);