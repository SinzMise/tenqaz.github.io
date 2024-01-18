(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{373:function(t,_,a){"use strict";a.r(_);var v=a(1),s=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_0-前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[t._v("#")]),t._v(" 0. 前言")]),t._v(" "),_("p",[t._v("我们知道，只有主库才能有写操作，而从库只能进行读操作，那么当主库宕机后，如何保证服务的正常进行呢？")]),t._v(" "),_("p",[t._v("本文主要介绍的是 Redis 提供的哨兵机制，通过哨兵监控主库的状况，如果发现主库下线，则会从从库中选择一个状态优秀的当做主库，从而保证服务的高可用。")]),t._v(" "),_("h2",{attrs:{id:"_1-哨兵如何保证高可用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-哨兵如何保证高可用"}},[t._v("#")]),t._v(" 1. 哨兵如何保证高可用？")]),t._v(" "),_("h3",{attrs:{id:"_1-1-监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-监控"}},[t._v("#")]),t._v(" 1.1 监控")]),t._v(" "),_("p",[t._v('哨兵进程会发送 PING 命令给主从库检测网络连接，如果超时，则判断为"主观下线"。')]),t._v(" "),_("p",[t._v('但是如果哨兵误判可能会导致主从切换，导致性能的额外开销，所以引入了哨兵集群，只有多数哨兵认为主库已经主观下线，主库会被标记为"客观下线"，这时才会进行主从切换。')]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210807101732.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_1-2-选择新主库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-选择新主库"}},[t._v("#")]),t._v(" 1.2 选择新主库")]),t._v(" "),_("p",[t._v("通过一定的筛选条件，把不符合条件的从库去掉，再按照一定规则给从库打分，得分最高的为新主库")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210807102140.png",alt:""}})]),t._v(" "),_("p",[t._v("筛选条件：")]),t._v(" "),_("ul",[_("li",[t._v("当前从库的状态")]),t._v(" "),_("li",[t._v("之前一段时间的网络状态")])]),t._v(" "),_("p",[t._v("打分规则：")]),t._v(" "),_("ul",[_("li",[t._v("用户可以给从库 slave-priority 配置优先级")]),t._v(" "),_("li",[t._v("主从库同步程度")]),t._v(" "),_("li",[t._v("ID 号小的得分高")])]),t._v(" "),_("h3",{attrs:{id:"_1-3-通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-通知"}},[t._v("#")]),t._v(" 1.3 通知")]),t._v(" "),_("p",[t._v("哨兵会把新主库的连接信息发给其他从库，让它们执行 replicaof 命令，和新主库建立连接，并进行数据复制。同时，哨兵会把新主库的连接信息通知给客户端，让它们把请求操作发到新主库上。")]),t._v(" "),_("h2",{attrs:{id:"_2-哨兵集群的组建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-哨兵集群的组建"}},[t._v("#")]),t._v(" 2. 哨兵集群的组建")]),t._v(" "),_("p",[t._v("哨兵实例之间互相发现是基于 Redis 提供的 pub/sub 机制，发布/订阅机制。")]),t._v(" "),_("p",[t._v("哨兵只要与主库建立连接，会在主库 "),_("code",[t._v("__sentinel__:hello")]),t._v(" 频道上发布消息，比如自己的 ip 地址和端口信息，订阅了该频道的其他哨兵会获取到发布消息哨兵的 IP 和端口，即可以与其建立网络连接，之后相互间就可以通过网络连接进行通信。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210808113804.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_2-1-哨兵与从库建立连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-哨兵与从库建立连接"}},[t._v("#")]),t._v(" 2.1 哨兵与从库建立连接")]),t._v(" "),_("p",[t._v("哨兵还需要和从库建立连接，这样才能监控从库的连接状态，当主库下线后，才能从它们中选举出新的主库。")]),t._v(" "),_("p",[t._v("哨兵使用 INFO 命令发送给主库，主库会返回从库列表连接信息，这样也能和从库建立连接并进行监控")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210808115259.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_2-2-哨兵与客户端建立连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-哨兵与客户端建立连接"}},[t._v("#")]),t._v(" 2.2 哨兵与客户端建立连接")]),t._v(" "),_("p",[t._v("当主库下线后，客户端需要得知主库下线的消息，写操作需要切换到新的主库中，所以哨兵需要与客户端建立连接，并及时通知客户端。")]),t._v(" "),_("p",[t._v("客户端可以从哨兵订阅消息，获取到主从切换的各种事件。")]),t._v(" "),_("p",[t._v("客户端读取哨兵的配置文件，获取哨兵的地址和端口，建立连接，然后即可订阅消息。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210808115236.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_3-由哪个哨兵来执行主从切换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-由哪个哨兵来执行主从切换"}},[t._v("#")]),t._v(" 3. 由哪个哨兵来执行主从切换 ？")]),t._v(" "),_("p",[t._v("任何一个哨兵判断主库 "),_("code",[t._v("主观下线")]),t._v(" 就会向其他哨兵发送 "),_("code",[t._v("is-master-down-by-addr")]),t._v(" 命令。其他实例会更具自己与主库的连接情况投出赞成票或反对票。当多数哨兵投赞成票时，则主库被认为 "),_("code",[t._v("客观下线")]),t._v("。")]),t._v(" "),_("p",[t._v("此时，该哨兵再发命令给其他哨兵进行 "),_("code",[t._v("leader选举")]),t._v("，希望由自己来进行主从切换。在这个过程中，任何一个哨兵都可以参与选举，只要票数半数以上并且大于等于 "),_("code",[t._v("quorum")]),t._v(" 值，则可以成为 leader")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210808122234.png",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210808122439.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_4-参考文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考文章"}},[t._v("#")]),t._v(" 4. 参考文章")]),t._v(" "),_("ul",[_("li",[t._v("本文主要是学习《极客时间-redis 核心技术与实战》专栏总结而来")])])])}),[],!1,null,null,null);_.default=s.exports}}]);