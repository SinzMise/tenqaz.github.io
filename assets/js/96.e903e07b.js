(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{423:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_0-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[s._v("#")]),s._v(" 0. 前言")]),s._v(" "),t("p",[s._v("在工作中遇到，logstash 中的 filter 中写了大量的解析逻辑，解析性能遇到瓶颈，所以希望将该部分的逻辑转换成 java 开发的插件，以提高解析速度。")]),s._v(" "),t("p",[s._v("本文主要记录我开发插件的过程。")]),s._v(" "),t("h2",{attrs:{id:"_1-准备开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备开发环境"}},[s._v("#")]),s._v(" 1. 准备开发环境")]),s._v(" "),t("p",[t("strong",[s._v("下载 logstash 源码")])]),s._v(" "),t("p",[s._v("直接可以去 "),t("a",{attrs:{href:"https://github.com/elastic/logstash",target:"_blank",rel:"noopener noreferrer"}},[s._v("logstash github"),t("OutboundLink")],1),s._v(" 中选择自己使用的版本进行下载即可。")]),s._v(" "),t("p",[t("strong",[s._v("构建 logstash")])]),s._v(" "),t("p",[s._v("将下载的 logstash 压缩包解压出来，进入 logstash 根目录下，当前路径下有 gradlew 和 gradlew.bat 两个脚本文件，前者是在 linux 下执行的，后者是在 windows 执行的脚本。")]),s._v(" "),t("p",[s._v("假设当前环境是 windows，执行 "),t("code",[s._v("gradlew.bat assemble")]),s._v(" 命令可以对当前模块进行构建。在这个过程中会去下载所有的依赖包到本地。等待构建完成，直至输出 "),t("code",[s._v("BUILD SUCCESSFUL")]),s._v(" 代表构建成功。")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("gradlew.bat")]),s._v(" 脚本是对 gradle 的封装，在执行该命令时，会主动根据 "),t("code",[s._v("gradle/wrapper/")]),s._v(" 下的配置去下载 gradle 工具，然后再调用 gradle 进行构建模块")])]),s._v(" "),t("h2",{attrs:{id:"_2-编写-logstash-java-filter-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写-logstash-java-filter-插件"}},[s._v("#")]),s._v(" 2. 编写 logstash java filter 插件")]),s._v(" "),t("h3",{attrs:{id:"_2-1-准备官方-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-准备官方-demo"}},[s._v("#")]),s._v(" 2.1 准备官方 demo")]),s._v(" "),t("p",[t("strong",[s._v("下载 java 插件官方模板")])]),s._v(" "),t("p",[s._v("将 "),t("a",{attrs:{href:"https://github.com/logstash-plugins/logstash-filter-java_filter_example",target:"_blank",rel:"noopener noreferrer"}},[s._v("logstash-filter-java_filter_example"),t("OutboundLink")],1),s._v(" 下载到本地使用，自定义开发的插件是基于该 example 进行修改的。")]),s._v(" "),t("p",[t("strong",[s._v("构建插件")])]),s._v(" "),t("p",[s._v("在该项目的根目录下，创建  "),t("code",[s._v("gradle.properties")]),s._v(" 文件，需要添加变量指定 logstash 下的 logstash-core 目录路径，使用绝对路径即可。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOGSTASH_CORE_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target_folder"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/logstash-core\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("该变量是给 "),t("code",[s._v("build.gradle")]),s._v(" 文件中使用的。")]),s._v(" "),t("h3",{attrs:{id:"_2-2-开发-filter-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-开发-filter-代码"}},[s._v("#")]),s._v(" 2.2 开发 Filter 代码")]),s._v(" "),t("p",[s._v("首先来看官方提供的 demo Filter 代码，代码路径在："),t("code",[s._v("src\\main\\java\\org\\logstashplugins\\JavaFilterExample.java")]),s._v("，我们开发的插件基本是按照这个例子进行修改实现的。")]),s._v(" "),t("ul",[t("li",[s._v("设置 pipeline 中的插件名称")])]),s._v(" "),t("p",[s._v("首先可以看到有一个注解 "),t("code",[s._v('@LogstashPlugin(name = "java_filter_example")')]),s._v(" name 的值是指我们在 pipeline 中填写的插件名称。")]),s._v(" "),t("ul",[t("li",[s._v("在 pipeline 中传参到插件中")])]),s._v(" "),t("p",[s._v("通过 "),t("code",[s._v("PluginConfigSpec.stringSetting")]),s._v(" 定义变量")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PluginConfigSpec")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SOURCE_CONFIG")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PluginConfigSpec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringSetting")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("再通过在构造方法中调用 get 方法即可获取到传入的值")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sourceField "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SOURCE_CONFIG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("并且需要将新增的字段添加到 "),t("code",[s._v("configSchema")]),s._v(" 方法中并返回出去。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PluginConfigSpec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("configSchema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// should return a list of all configuration options for this plugin")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collections")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("singletonList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SOURCE_CONFIG")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("filter 主体编码")])]),s._v(" "),t("p",[s._v("该插件的主体是 filter 方法，也就是数据的过滤走的 filter 方法，我们将想要做的解析规则实现在该方法中即可。")]),s._v(" "),t("p",[s._v("可以看到该方法中有一个对 events 遍历的处理，每一个 Event 都是进来的每一条数据，然后对该条数据进行处理转换，最后再将转换好的 events 传出去。")]),s._v(" "),t("p",[s._v("可以看到官方的案例是将传入的 message 字符串翻转。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Collection")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FilterMatchListener")]),s._v(" matchListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),s._v(" e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getField")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sourceField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\te"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setField")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sourceField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\tmatchListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("filterMatched")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"_3-单元测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-单元测试"}},[s._v("#")]),s._v(" 3. 单元测试")]),s._v(" "),t("p",[s._v("单测对插件来说至关重要，插件的规则转换流程、判断逻辑都非常多，各种类型的数据都可能导致插件出错，而插件验证需要编译、打包、安装再测试，流程较长，所以我们可以通过单测来减少以上流程的进行，在单测中就把所有的可能性都验证到，节省大量的时间。并且在后续迭代修改中，可以减少改动引发。")]),s._v(" "),t("p",[s._v("建议可以使用 junit 的参数化单测方式，可以提高单测的效率和数量。这个需要在 build.gradle 文件中的 dependencies 添加支持参数化的库来支持。")]),s._v(" "),t("h2",{attrs:{id:"_4-打包部署-filter-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-打包部署-filter-插件"}},[s._v("#")]),s._v(" 4. 打包部署 Filter 插件")]),s._v(" "),t("h3",{attrs:{id:"_4-1-元数据信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-元数据信息"}},[s._v("#")]),s._v(" 4.1 元数据信息")]),s._v(" "),t("p",[s._v("我们需要在 "),t("code",[s._v("build.gradle")]),s._v(" 文件中修改部分的插件元数据信息，像 description、authors 和 email 等字段都可以随意填写，以下字段需要注意：")]),s._v(" "),t("ul",[t("li",[s._v("group，需要和包名相同")]),s._v(" "),t("li",[s._v("pluginClass，需要和插件 Filter 的类名相同")]),s._v(" "),t("li",[s._v("pluginName，需要和 "),t("code",[s._v("@LogstashPlugin")]),s._v(" 中的 name 相同")])]),s._v(" "),t("h3",{attrs:{id:"_4-2-打包任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-打包任务"}},[s._v("#")]),s._v(" 4.2 打包任务")]),s._v(" "),t("p",[s._v("通过执行 "),t("code",[s._v("gradlew.bat gem")]),s._v(" 进行插件打包任务，最后会在插件根目下生成 "),t("code",[s._v(".gem")]),s._v(" 的插件安装包文件。")]),s._v(" "),t("h3",{attrs:{id:"_4-3-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-安装"}},[s._v("#")]),s._v(" 4.3 安装")]),s._v(" "),t("p",[s._v("安装有在线安装和离线安装两种方式。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：我们需要去官网下载可以直接使用的 logstash，而不能使用上面自己下载的 logstash 源码。")])]),s._v(" "),t("p",[t("strong",[s._v("在线安装")])]),s._v(" "),t("p",[s._v("在线安装会去访问 Elastic 的官网，所以需要是在线的环境。")]),s._v(" "),t("p",[s._v("通过执行 logstash/bin 路径下的 logstash-plugin 命令进行安装，等待片刻即可安装成功。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("logstash-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" /path/javaPlugin.gem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("离线安装")])]),s._v(" "),t("p",[s._v("在某些场景下，环境是不能连接外网的，所以需要使用离线安装的方式。")]),s._v(" "),t("p",[s._v("将生成的 gem 插件压缩到 zip 包中，然后再使用 logstash-plugin 命令进行安装。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("logstash-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" file:///tmp/plugin.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证"}},[s._v("#")]),s._v(" 5. 验证")]),s._v(" "),t("p",[s._v("官方的插件 example 的功能是翻转字符串的功能，所以我们只需要验证该功能即可。")]),s._v(" "),t("ol",[t("li",[s._v("创建一个 pipeline.conf")])]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('input {\n    # 输入一个字符串\n    generator { message => "Hello world!" count => 1 }\n}\n\nfilter {\n\t# 在插件中@LogstashPlugin配置的插件名称\n    java_filter_example {}\n}\n\noutput {\n    # 直接打印到控制台\n    stdout { }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("启动 logstash 加载上面的 pipeline.conf")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("logstash "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" pipeline.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出如下，可以看到 message 字段中的 "),t("code",[s._v("Hello world!")]),s._v("被翻转了。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4-sip0060"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"event"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"original"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world!"')]),s._v(",\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sequence"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@timestamp"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-12-20T07:27:46.634166300Z,\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(",\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!dlrow olleH"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"_6-相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-相关链接"}},[s._v("#")]),s._v(" 6. 相关链接")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/7.9/java-filter-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to write a Java filter plugin"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);