(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{393:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("django-filter是单独的一个库，不属于djangorestframework中的，属于外部库引用进来使用。下面就来介绍下filter")]),s._v(" "),t("p",[s._v("有三种filter方式:")]),s._v(" "),t("ol",[t("li",[s._v("DjangoFilterBackend")]),s._v(" "),t("li",[s._v("SearchFilter")]),s._v(" "),t("li",[s._v("OrderingFilter")])]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("首先需要安装"),t("code",[s._v("django-filter")])]),s._v(" "),t("blockquote",[t("p",[s._v("pip install django-filter")])]),s._v(" "),t("p",[s._v("然后需要将"),t("code",[s._v("django_filters")]),s._v(" 添加到 INSTALLED_APPS中")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("INSTALLED_APPS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django_filters'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"djangofilterbackend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#djangofilterbackend"}},[s._v("#")]),s._v(" DjangoFilterBackend")]),s._v(" "),t("h2",{attrs:{id:"使用默认的过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用默认的过滤"}},[s._v("#")]),s._v(" 使用默认的过滤")]),s._v(" "),t("p",[s._v("在View中添加"),t("code",[s._v("filter_backends")]),s._v("属性,设置过滤方式"),t("code",[s._v("DjangoFilterBackend")]),s._v("，并且设置过滤的属性。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django_filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rest_framework "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DjangoFilterBackend\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GoodsListViewSet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ModelViewSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    \n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GoodsSerializer    \n    pagination_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyPagination    \n    filter_backends "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DjangoFilterBackend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    filterset_fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shop_price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("在调试界面中会出现"),t("code",[s._v("过滤器选项")]),s._v(", 可以在其中过滤"),t("code",[s._v("name")]),s._v("和"),t("code",[s._v("shop_price")]),s._v("两个属性的值\n"),t("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/1604217188654.png#alt=",alt:"在这里插入图片描述"}}),s._v(" "),t("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/1604217215384.png#alt=",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"自定义过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义过滤"}},[s._v("#")]),s._v(" 自定义过滤")]),s._v(" "),t("p",[s._v("创建filters.py，在里面定义自己的过滤器。\n可以通过最小的价格、最大的价格，和模糊查询名字去过滤想要的数据。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django_filters "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" FilterSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" CharFilter\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Goods\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GoodsFilter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FilterSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   \n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""    商品的过滤类    """')]),s._v("    \n    price_min "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shop_price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" help_text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"最低价格"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gte'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    price_max "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shop_price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lte'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CharFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icontains"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("        \n        model "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Goods        \n        fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'price_min'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'price_max'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("将该过滤器添加到view中\nview.py")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GoodsListViewSet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ModelViewSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    \n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GoodsSerializer   \n    pagination_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyPagination    \n    filter_backends "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DjangoFilterBackend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    filter_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GoodsFilter\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("最后可以通过  "),t("code",[s._v("http://127.0.0.1:8000/goods/?price_min=150&price_max=160&name=水果")]),s._v(" 去过滤得到想要的数据。")]),s._v(" "),t("h2",{attrs:{id:"searchfilter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searchfilter"}},[s._v("#")]),s._v(" SearchFilter")]),s._v(" "),t("p",[s._v("这个Filter是基于Django的搜索。现在我们将SearchFilter集成到过滤里面来。在"),t("code",[s._v("filter_backends")]),s._v("中添加"),t("code",[s._v("SearchFiler")]),s._v("，然后再在"),t("code",[s._v("search_fields")]),s._v("中添加需要搜索的字段即可，在搜索的字段前面字符变量来提高搜索效率。")]),s._v(" "),t("ul",[t("li",[s._v("'^' Starts-with search.")]),s._v(" "),t("li",[s._v("'=' Exact matches.")]),s._v(" "),t("li",[s._v("'@' Full-text search. (Currently only supported Django's MySQL backend.)")]),s._v(" "),t("li",[s._v("'$' Regex search.")])]),s._v(" "),t("p",[s._v("view.py")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filters "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SearchFilter\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GoodsListViewSet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ModelViewSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    \n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GoodsSerializer    \n    pagination_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyPagination    \n    filter_backends "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DjangoFilterBackend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SearchFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    filter_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GoodsFilter    \n    search_fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'goods_brief'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'goods_desc'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"orderingfilter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#orderingfilter"}},[s._v("#")]),s._v(" OrderingFilter")]),s._v(" "),t("p",[s._v("可以对数据进行排序筛选数据。我们将其加入进去")]),s._v(" "),t("p",[s._v("view.py")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filters "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SearchFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OrderingFilter\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GoodsListViewSet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ModelViewSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    \n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Goods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GoodsSerializer    \n    pagination_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyPagination    \n    filter_backends "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DjangoFilterBackend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SearchFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" OrderingFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    filter_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GoodsFilter    \n    search_fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"=name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'goods_brief'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'goods_desc'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    ordering_fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sold_num"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add_time"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"自定义过滤条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义过滤条件"}},[s._v("#")]),s._v(" 自定义过滤条件")]),s._v(" "),t("p",[s._v("修改filters.py文件，编写过滤方法top_category_filter绑定到top_category字段中，即可通过该属性名进行相应的筛选。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GoodsFilter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FilterSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("    \n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""    商品的过滤类    """')]),s._v("    \n    pricemin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shop_price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" help_text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"最低价格"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gte'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    pricemax "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shop_price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lte'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CharFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icontains"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   \n    top_category "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("method"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'top_category_filter'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top_category_filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" queryset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("        \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" queryset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("category_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("category__parent_category_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("category__parent_category__parent_category_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("        \n        model "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Goods\n        fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pricemin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pricemax'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);