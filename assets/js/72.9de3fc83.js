(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{399:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("案例. 该模型使用外键引用自己本身。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Category")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    parent_cat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ForeignKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'self'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("on_delete"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CASCADE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("on_delete参数如下:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("CASCADE：级联操作。如果外键对应的那条数据被删除了，那么这条数据也会被删除。")])]),t._v(" "),s("li",[s("p",[t._v("PROTECT：受保护。即只要这条数据引用了外键的那条数据，那么就不能删除外键的那条数据。如果我们强行删除，Django就会报错。")])]),t._v(" "),s("li",[s("p",[t._v("SET_NULL：设置为空。如果外键的那条数据被删除了，那么在本条数据上就将这个字段设置为空。如果设置这个选项，前提是要指定这个字段可以为空。")])]),t._v(" "),s("li",[s("p",[t._v("SET_DEFAULT：设置默认值。如果外键的那条数据被删除了，那么本条数据上就将这个字段设置为默认值。如果设置这个选项，== 前提是要指定这个字段一个默认值 ==。")])]),t._v(" "),s("li",[s("p",[t._v("SET()：如果外键的那条数据被删除了。那么将会获取SET函数中的值来作为这个外键的值。SET函数可以接收一个可以调用的对象（比如函数或者方法），如果是可以调用的对象，那么会将这个对象调用后的结果作为值返回回去。== 可以不用指定默认值 ==")])]),t._v(" "),s("li",[s("p",[t._v("DO_NOTHING：不采取任何行为。一切全看数据库级别的约束。")])])]),t._v(" "),s("p",[s("strong",[t._v("注意:以上的配置都是django级别的，在数据库中的级别依旧是"),s("code",[t._v("RESTRICT")])])]),t._v(" "),s("p",[t._v("数据库层面的约束有:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("RESTRICT：默认的选项，如果想要删除父表的记录时，而在子表中有关联该父表的记录，则不允许删除父表中的记录；")])]),t._v(" "),s("li",[s("p",[t._v("NOACTION：同 RESTRICT效果一样，也是首先先检查外键;")])]),t._v(" "),s("li",[s("p",[t._v("CASCADE：父表delete、update的时候，子表会delete、update掉关联记录；")])]),t._v(" "),s("li",[s("p",[t._v("SET NULL:父表delete、update的时候，子表会将关联记录的外键字段所在列设为null，所以注意在设计子表时外键不能设为not null；")])])]),t._v(" "),s("p",[t._v("为什么在django中可以是用不同的约束去操作数据库呢。")]),t._v(" "),s("blockquote",[s("p",[t._v("比如 django 中 "),s("code",[t._v("on_delete=CASCADE")]),t._v(", 但是数据库的外键约束是RESTRICT. 在进行删除A表数据时，发现被外键约束着，使数据不能被删除，则django会先去删除约束的B表数据，然后再来删除A表数据。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);