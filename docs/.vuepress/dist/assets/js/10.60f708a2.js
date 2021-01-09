(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{495:function(s,a,t){"use strict";t.r(a);var e=t(58),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"command-常用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-常用"}},[s._v("#")]),s._v(" Command-常用")]),s._v(" "),t("h2",{attrs:{id:"端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口"}},[s._v("#")]),s._v(" 端口")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("netstat -aon|findstr 8080\ntasklist | findstr  5080\n\n查找端口\nnetstat -aon|findstr 端口号\n结束端口\ntasklist | findstr  对应的PID\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"配置后台运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置后台运行"}},[s._v("#")]),s._v(" 配置后台运行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('注意要使用UNICODE编码,UTF-8会报错\n\n简单使用\tcreateobject("wscript.shell").run "要运行的程序路径",0 \n\nDemo\tcreateobject("wscript.shell").run "back.bat",0 \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"schtasks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schtasks"}},[s._v("#")]),s._v(" schtasks")]),s._v(" "),t("h4",{attrs:{id:"_1-创建任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建任务"}},[s._v("#")]),s._v(" 1.创建任务")]),s._v(" "),t("p",[s._v("在每天的22.44定时执行一次。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('schtasks /create /tn "test3" /tr "F:\\test.bat" /sc daily /st 22:44\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在特定时间运行一次。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('schtasks /create /tn "test3" /tr "F:\\test.bat" /sc once /st 23:03 /sd 2018/03/05\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-运行一次任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行一次任务"}},[s._v("#")]),s._v(" 2.运行一次任务")]),s._v(" "),t("p",[s._v("创建任务后，立即运行一次。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("schtasks /run /tn test3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-删除任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除任务"}},[s._v("#")]),s._v(" 3.删除任务")]),s._v(" "),t("p",[s._v("任务不准备用时，删除任务。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("schtasks /delete /tn test3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);