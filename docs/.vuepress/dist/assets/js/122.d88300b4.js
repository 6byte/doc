(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{606:function(s,a,n){"use strict";n.r(a);var e=n(58),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"mysql-存储过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-存储过程"}},[s._v("#")]),s._v(" Mysql-存储过程")]),s._v(" "),n("p",[s._v("概览")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("--特点\n1.是一组SQL语句的集合，可以编程\n\n--区别\n存储函数:有返回值的过程\n存储过程:没有返回值的函数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"过程-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#过程-使用"}},[s._v("#")]),s._v(" 过程-使用")]),s._v(" "),n("p",[s._v("概览")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("总共分三步:创建，调用，删除\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("语法")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("--#--创建\ncreate procedure 存储过程名字(存储过程参数)\nbegin\n\t--SQL 语句\nend;\n\n--#--调用\ncall 存储过程名字(存储过程参数)\n\n--#--删除\ndrop procedure 存储过程名\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("strong",[s._v("示例")])]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("--#--创建\n\n#除了 begin 中语句，其他都不用加分号\n#将 ; 改成 @，避免回车结束输入\ndelimiter @ \ncreate pro()\nbegin\nselect 'Hello';\nend@\n\n--#--调用\ncall pro()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("查看状态")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#查看某个数据库中，所有存储过程的信息\nselect 名字 from mysql.proc where db = "数据库名"\nselect * from mysql.proc where db = "iota"\\G\n\n#查看存储过程的状态信息\nshow procedure status;\n\n#查询某个存储过程的定义\nshow create procedure 表名.存储过程名 \\G\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"过程-语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#过程-语法"}},[s._v("#")]),s._v(" 过程-语法")]),s._v(" "),n("h6",{attrs:{id:"语法-变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法-变量"}},[s._v("#")]),s._v(" "),n("strong",[s._v("语法")]),s._v("-变量")]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("--#--\t变量声明\nDECLARE 变量名.. 类型 [默认值]\n\n--#--\t变量赋值,两种方式\nset 变量名 = 10;\nselect count(0) into 变量名 from A ;\n#将A表中的记录数作为值赋给变量\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h6",{attrs:{id:"语法-条件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法-条件"}},[s._v("#")]),s._v(" 语法-条件")]),s._v(" "),n("p",[n("strong",[s._v("IF")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("--#--\tif的基本使用\nif 条件 \n\tthen 要执行的SQL语句;\n\t[elseif 条件 then 要执行的SQL语句;] #可以省略\n\t[elseif 条件 then 要执行的SQL语句;]\nend if;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("strong",[s._v("CASE")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("方式一：\ncase \n\twhen 条件 \n\tthen SQL 语句\n\twhen 条件 and 条件\n\tthen SQL 语句\n\telse SQL 语句\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h6",{attrs:{id:"语法-循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法-循环"}},[s._v("#")]),s._v(" 语法-循环")]),s._v(" "),n("p",[n("strong",[s._v("WHILE")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 满足条件继续循环\nwhile 条件 \n\tSQL语句;\nend while\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("REPEAT")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("repeat\n SQL语句\n until 条件  #不能有分号\nend repeat\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("LOOP")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#通常配合其他语句结束循环\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h6",{attrs:{id:"语法-传参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#语法-传参"}},[s._v("#")]),s._v(" 语法-传参")]),s._v(" "),n("p",[s._v("概览")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create procedure 存储过程名字([in|out|inout] 参数名 参数类型，..)\nin：输入参数，默认\nout:返回值\ninout:既可以作为输入参数也可以作为返回值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("输入参数")])]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#定义\ncreate procedure name(in flag int);\n#调用\ncall name(100);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("输出参数")])]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#定义，定义flag作为输出参数\nCREATE PROCEDURE pro( out flag int)\nBEGIN\n#只要给flag赋值，他是自动返回的\n\tset flag = 100;\nEND\n\n#接收,用@flag参数接收到上面的返回值，并输出\ncall pro(@flag);\nselect @flag;\n -- @:是会话变量，全局可用,关闭数据库后释放\n -- @@:是系统变量\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);