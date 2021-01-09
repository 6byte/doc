(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{610:function(s,a,n){"use strict";n.r(a);var e=n(58),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"mysql-日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-日志"}},[s._v("#")]),s._v(" Mysql-日志")]),s._v(" "),n("p",[s._v("概览")]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("--日志类型:\n\t错误日志，二进制日志，查询日志，慢查询日志\n--常用命令:\n\t#查看日志状态\n\t1.show master status;\n\t#查看日志条数\n\t2.show master logs;\n\t# 是否启用binlog日志\n\t3.show variables like 'log_bin';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h5",{attrs:{id:"二进制日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二进制日志"}},[s._v("#")]),s._v(" 二进制日志")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("作用:\n\t1.记录所有增删改语句\n\t2.记录数据结构\n\t3.用于数据恢复\n\t4.MSYQL主从复制\n默认:不开启，需要到配置文件中开启，并配置格式\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h5",{attrs:{id:"错误日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错误日志"}},[s._v("#")]),s._v(" 错误日志")]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("作用:记录MYSQL所有报错信息\n默认:错误日志默认开启\n#MYSQL错误日志的位置\nshow variables like 'log_error%';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h5",{attrs:{id:"查询日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询日志"}},[s._v("#")]),s._v(" 查询日志")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.默认不开启\n2.记录所有SQL语句\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h5",{attrs:{id:"慢查询日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志"}},[s._v("#")]),s._v(" 慢查询日志")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.开启\nslow_query_log = 1\nslow_query_log_file = low_query.log\nlow_query_time = 3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h5",{attrs:{id:"日志格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志格式"}},[s._v("#")]),s._v(" 日志格式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("STATEMENT \n\t作用：所有记录都以SQL语句形式记录，通过mysqlbinlog查看\n\t优点：减少了binlog日志量，节约IO，提高性能。\n\t缺点：主从复制时,会将日志解析成原文本,并在从库(slave)中重新执行一次\n\nROW\n\t作用：记录每条语句的数据变更\nMIXED\n\t作用:以上两种日志的混合使用，\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"mysql-缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-缓存"}},[s._v("#")]),s._v(" Mysql-缓存")]),s._v(" "),n("h5",{attrs:{id:"查询缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存"}},[s._v("#")]),s._v(" 查询缓存")]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#查看是否支持缓存\nshow VARIABLES LIKE 'hava_query_cache';\n#查询缓存是否开启\nshow VARIABLES like 'query_cache_type';\n#查询缓存大小\nshow VARIABLES like 'query_cache_size';\n#查询缓存空间\nshow status like 'Qcache%';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);