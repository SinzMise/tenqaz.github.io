(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{412:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("blockquote",[s("p",[t._v("并不是真正的实时处理框架，只是按照时间进行微批处理进行，时间可以设置的尽可能的小。")])]),t._v(" "),s("blockquote",[s("p",[t._v("将不同的额数据源的数据经过SparkStreaming 处理之后将结果输出到外部文件系统")])]),t._v(" "),s("ul",[s("li",[t._v("特点")])]),t._v(" "),s("blockquote",[s("p",[t._v("低延时\n能从错误中搞笑的恢复: fault-tolerant\n能够运行在成百上千的节点\n能够将批处理、机器学习、图计算等自框架和Spark Streaming 综合起来使用")])]),t._v(" "),s("ul",[s("li",[t._v("粗粒度")])]),t._v(" "),s("blockquote",[s("p",[t._v("Spark Streaming接收到实时数据流，把数据按照指定的时间段切成一片片小的数据块，然后把小的数据块传给Spark Engine处理。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("细粒度\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190416164155495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIyOTE4MjQz,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),s("li",[s("p",[t._v("数据源\nkafka提供了两种数据源。")])])]),t._v(" "),s("ol",[s("li",[t._v("基础数据源，可以直接通过streamingContext API实现。如"),s("code",[t._v("文件系统")]),t._v("和"),s("code",[t._v("socket连接")])]),t._v(" "),s("li",[t._v("高级的数据源，如Kafka, Flume, Kinesis等等. 可以通过额外的类库去实现。")])]),t._v(" "),s("h2",{attrs:{id:"基础数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础数据源"}},[t._v("#")]),t._v(" 基础数据源")]),t._v(" "),s("ol",[s("li",[t._v("使用官方的案例")])]),t._v(" "),s("p",[t._v("/spark/examples/src/main/python/streaming")]),t._v(" "),s("p",[t._v("nc -lk 6789")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("处理socket数据\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190416164215686.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIyOTE4MjQz,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),s("p",[t._v("示例代码如下: 读取socket中的数据进行流处理")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SparkContext\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("streaming "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" StreamingContext\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# local 必须设为2")]),t._v("\nsc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SparkContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local[2]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NetworkWordCount"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nssc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StreamingContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nlines "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socketTextStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwords "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lines"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flatMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npairs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" words"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" word"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwordCounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pairs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reduceByKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nwordCounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("awaitTermination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("测试")]),t._v(" "),s("blockquote",[s("p",[t._v("nc -lk 9999")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("处理文件系统数据")])]),t._v(" "),s("blockquote",[s("p",[t._v("文件系统(fileStream(that is, HDFSM S3, NFS))暂不支持python，python仅支持文本文件(textFileStream)")])]),t._v(" "),s("p",[t._v("示例如下，但未成功，找不到该文件。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\nlines "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textFileStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hdfs://txz-data0:9820/user/jim/workflow/crash/python/crash_2_hdfs.py"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("streaming context")])]),t._v(" "),s("li",[s("p",[t._v("DStreams")])])]),t._v(" "),s("blockquote",[s("p",[t._v("持续化的数据流\n对DStream操作算子， 比如map/flatMap,其实底层会被翻译为对DStream中的每个RDD都做相同的操作，因为一个DStream是由不同批次的RDD所")])]),t._v(" "),s("ul",[s("li",[t._v("Input DStreams and Receivers")])]),t._v(" "),s("h2",{attrs:{id:"高级数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级数据源"}},[t._v("#")]),t._v(" 高级数据源")]),t._v(" "),s("h3",{attrs:{id:"spark-streaming-和-kafka-整合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spark-streaming-和-kafka-整合"}},[t._v("#")]),t._v(" Spark Streaming 和 kafka 整合")]),t._v(" "),s("p",[t._v("两种模式")]),t._v(" "),s("ul",[s("li",[t._v("receiver 模式")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("streaming"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kafka "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" KafkaUtils\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SparkContext\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pyspark"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("streaming "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" StreamingContext\n\nsc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SparkContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local[2]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NetworkWordCount"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setLogLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OFF"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nssc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StreamingContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建Kafka streaming")]),t._v("\nline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" KafkaUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.208:2181"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jim_test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分词")]),t._v("\nwords "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flatMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npairs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" words"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" word"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwordCounts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pairs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reduceByKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwordCounts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("awaitTermination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("ul",[s("li",[t._v("no receiver")])]),t._v(" "),s("p",[t._v("根据上面的代码替换掉createStream即可。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("line "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" KafkaUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createDirectStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jim_test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metadata.broker.list"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.208:9092"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("运行:")]),t._v(" "),s("blockquote",[s("p",[t._v("spark-submit --jars spark-streaming-kafka-0-8-assembly_2.11-2.4.0.jar  test_spark_stream.py")])]),t._v(" "),s("p",[t._v("需要下载相应的jar包.下载地址如下，搜索。\nhttps://search.maven.org")]),t._v(" "),s("p",[t._v("jar版本会在运行程序时报错提醒。")])])}),[],!1,null,null,null);s.default=r.exports}}]);