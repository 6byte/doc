(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{617:function(s,t,a){"use strict";a.r(t);var r=a(58),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),a("p",[s._v("网页安装\t\t"),a("a",{attrs:{href:"https://www.zhihu.com/topic/20167613/hot",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.zhihu.com/topic/20167613/hot"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("  查看是否已经安装\nyum list installed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" grep docker\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t安装\nyum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y install docker\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t新建daemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json文件\nmkdir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("docker\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t编辑docker\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("docker\nvim daemon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n\n在文件中添加以下内容\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://c86u3plt.mirror.aliyuncs.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t重启daemon\nsystemctl daemon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reload\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t重启docker\nsystemctl restart docker\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("  不知道干什么的，装就行\nsudo yum install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y yum"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("utils device"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("mapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("persistent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data lvm2\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t添加软件源信息\nsudo yum"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("manager "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("repo http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aliyun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ce"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("centos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("repo\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t更新并安装 Docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CE")]),s._v("\nsudo yum makecache fast\nsudo yum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y install docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ce\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t开启Docker服务\nsudo service docker start\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\t开机启动\nchkconfig docker on \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);