(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{573:function(s,a,e){"use strict";e.r(a);var t=e(58),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"mybatis-高级查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-高级查询"}},[s._v("#")]),s._v(" Mybatis-高级查询")]),s._v(" "),e("h4",{attrs:{id:"权限查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限查询"}},[s._v("#")]),s._v(" 权限查询")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT\n\tu.*,\n\tr.*,\n\tp.* \nFROM\n\tUSER AS u\n\tLEFT JOIN user_role AS ur ON u.userId = ur.userId\n\tLEFT JOIN role AS r ON r.role_id = ur.roleId\n\tLEFT JOIN role_perm AS rp ON rp.role_id = r.role_id\n\tLEFT JOIN permission AS p ON p.permissionId = rp.permission_id \nWHERE\n\tu.mainId = 1\n\t\n--一旦用了别名，就要一用到底，不能停\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"mybatis-查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-查询"}},[s._v("#")]),s._v(" Mybatis-查询")]),s._v(" "),e("h4",{attrs:{id:"模糊查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询"}},[s._v("#")]),s._v(" 模糊查询")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@Select(\"  select * from message where name like '%${name} %'  \")\n@Select(\"  select * from message where name like concat('%', #{name}, '%')  \")\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"多表查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多表查询"}},[s._v("#")]),s._v(" 多表查询")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@Select(value = "select 字段 from 表1,表2,表.. ")\n@Results({\n    //从表1查询数据\n    //property的属性可以自定义他对应集合Map的名字{\'atrribute\':{....}}\n@Result(property = "Atrribute",column = "id",many = @Many(select = "..dao.包全名.方法名",fetchType = FetchType.EAGER)),\n    //从表2查询数据\n@Result(property = "zheshimiddle",column = "id",many = @Many(select = "shiro.demo.dao.user_dao.table2",fetchType = FetchType.EAGER))\n})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"一对多查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一对多查询"}},[s._v("#")]),s._v(" 一对多查询")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@Select(value = "select *from person where name =#{name}")\n@Results({\n             //column = "keyid"\t\t->>对应外键\n@Result(property = "子表Bean",column = "keyid",\n        many = @Many(select = "包全名.方法名",fetchType= FetchType.EAGER))})\n\n     public UserBean selectUser(String name);\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"mybatis-拦截器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-拦截器"}},[s._v("#")]),s._v(" Mybatis-拦截器")]),s._v(" "),e("h4",{attrs:{id:"概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.只能拦截Executor、ParameterHandler、StatementHandler、ResultSetHandler四个接口\n\t--Executor\n        Executor是Mybatis的核心接口。\n        update()执行增删改，query(执行查询)\n        \n    --ParameterHandler\n        用来设置参数\n        \n    --StatementHandler\n        负责处理Mybatis与JDBC之间Statement的交互\n        \n    --ResultSetHandler\n        处理结果\n2.Mybatis拦截器的使用，分两步：\n   -- 自定义拦截器类\t\n   -- 注册拦截器类\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);