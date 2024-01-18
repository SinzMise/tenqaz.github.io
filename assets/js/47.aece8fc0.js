(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{374:function(t,s,a){"use strict";a.r(s);var _=a(1),v=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),s("p",[t._v("reids 是基于内存的数据库，它的特性之一就快，缓存是其最主要的应用场景，本文主要介绍 redis 的缓存特性，以及该如何正确的使用它。")]),t._v(" "),s("h2",{attrs:{id:"_2-缓存类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存类型"}},[t._v("#")]),t._v(" 2. 缓存类型")]),t._v(" "),s("h3",{attrs:{id:"_2-1-只读缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-只读缓存"}},[t._v("#")]),t._v(" 2.1 只读缓存")]),t._v(" "),s("p",[t._v("当写入数据时，直接操作后端数据库，进行增删改。删和改操作，如果 redis 已经缓存了对应的数据，则需要进行删除。当应用读取数据时，发生缓存缺失，则会从后端数据库读取到 redis 中使用。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/16698736280551669873627898.png",alt:""}})]),t._v(" "),s("p",[t._v("好处是所有的数据都在后端数据库中，而后端数据提供可靠性保障，不会有丢失数据的风险。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-读写缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-读写缓存"}},[t._v("#")]),t._v(" 2.2 读写缓存")]),t._v(" "),s("p",[t._v("最新的数据在 redis 中。在写入数据时，优先写入到 redis，并且因为缓存的高性能访问，可以快速返回给业务应用。")]),t._v(" "),s("p",[t._v("但是由于 redis 是内存数据库存在数据丢失的风险，所以还是需要写入到后端数据库中保证可靠性。有两种写入策略：")]),t._v(" "),s("ul",[s("li",[t._v("同步直写：在写 redis 时，同步写入到后端数据库，完成后再返回给业务。会增加响应延迟。")]),t._v(" "),s("li",[t._v("异步直写：等待增改的数据要被从缓存淘汰时。再写回后端数据库。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821160147.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_2-缓存和数据库的数据一致性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存和数据库的数据一致性"}},[t._v("#")]),t._v(" 2. 缓存和数据库的数据一致性")]),t._v(" "),s("h3",{attrs:{id:"_2-1-哪些情况会导致数据不一致"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-哪些情况会导致数据不一致"}},[t._v("#")]),t._v(" 2.1 哪些情况会导致数据不一致 ？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("我们假设应用先删除缓存，再更新数据库，如果缓存删除成功，但是数据库更新失败，那么，应用再访问数据时，缓存中没有数据，就会发生缓存缺失。然后，应用再访问数据库，但是数据库中的值为旧值，应用就访问到旧值了。\n"),s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821165902.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("如果应用先完成了数据库的更新，但是，在删除缓存时失败了，那么，数据库中的值是新值，而缓存中的是旧值，这肯定是不一致的。这个时候，如果有其他的并发请求来访问数据，按照正常的缓存访问流程，就会先在缓存中查询，但此时，就会读到旧值了。")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821165926.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_2-3-队列-重试机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-队列-重试机制"}},[t._v("#")]),t._v(" 2.3 队列+重试机制")]),t._v(" "),s("p",[t._v("可以把要删除的缓存值或者是要更新的数据库值暂存到消息队列中（例如使用 Kafka 消息队列）。当应用没有能够成功地删除缓存值或者是更新数据库值时，可以从消息队列中重新读取这些值，然后再次进行删除或更新。")]),t._v(" "),s("p",[t._v("如果能够成功地删除或更新，我们就要把这些值从消息队列中去除，以免重复操作\n"),s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821170101.png",alt:""}})]),t._v(" "),s("p",[t._v("但是在并发情况下，无论是先删数据库还是先删缓存操作失败的情况下，还是会有读取到不一致数据的情况。")]),t._v(" "),s("ul",[s("li",[t._v("情况一，先删除缓存，再更新数据库。")])]),t._v(" "),s("p",[t._v("在更新数据库失败的情况下，另一个线程进来读取数据，发现缓存缺失，查询数据库的数据，并更新到缓存中，最终缓存中存储的是旧的数据。\n"),s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/16698745230571669874522842.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("延迟双删")])]),t._v(" "),s("p",[t._v("在线程 A 更新完数据库的值以后，再让它 sleep 一会儿，再删除缓存。目的是为了让线程 B 可以将数据库的值写入到缓存中，然后再删除它。\n伪代码如下：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("redis.delKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nThread.sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nredis.delKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("网上有使用这种方案来解决，个人是不推荐这种方案，在高并发的情况下，这个 sleep 时间不好确定，并不知道其他线程什么时候执行和结束。")]),t._v(" "),s("ul",[s("li",[t._v("情况二，先更新数据库值，再删除缓存值。")])]),t._v(" "),s("p",[t._v("在删除缓存值失败的情况下，并发时，会有多个线程拿到旧的数据情况。\n"),s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821170146.png",alt:""}})]),t._v(" "),s("p",[t._v("这两种并发场景，个人感觉唯一的办法就是使用同步来完成这两个操作，可以使用分布式锁或者其他。")]),t._v(" "),s("h2",{attrs:{id:"_3-淘汰策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-淘汰策略"}},[t._v("#")]),t._v(" 3. 淘汰策略")]),t._v(" "),s("p",[t._v("缓存的容量是有限的，那么当缓存满了，可以是用淘汰策略来将部分数据淘汰。")]),t._v(" "),s("p",[s("strong",[t._v("缓存设置成多大比较合适？")]),t._v("\n按照二八原理，一般 20%数据会占用 80%的访问，所以建议将缓存的容量设置为总数据量的 15%或者 30%会比较合理。")]),t._v(" "),s("p",[s("strong",[t._v("淘汰策略有哪些?")])]),t._v(" "),s("ul",[s("li",[t._v("不淘汰\n"),s("ul",[s("li",[t._v("noeviction，如果缓存已满再有写请求，则返回错误")])])]),t._v(" "),s("li",[t._v("对设置过期时间的数据进行淘汰\n"),s("ul",[s("li",[t._v("volatile-ttl 在筛选时，会针对设置了过期时间的键值对，根据过期时间的先后进行删除，越早过期的越先被删除。")]),t._v(" "),s("li",[t._v("volatile-random 就像它的名称一样，在设置了过期时间的键值对中，进行随机删除。")]),t._v(" "),s("li",[t._v("volatile-lru 会使用 LRU 算法筛选设置了过期时间的键值对。")]),t._v(" "),s("li",[t._v("volatile-lfu 会使用 LFU 算法选择设置了过期时间的键值对。")])])]),t._v(" "),s("li",[t._v("对所有数据进行淘汰\n"),s("ul",[s("li",[t._v("allkeys-random 策略，从所有键值对中随机选择并删除数据；")]),t._v(" "),s("li",[t._v("allkeys-lru 策略，使用 LRU 算法在所有数据中进行筛选。")]),t._v(" "),s("li",[t._v("allkeys-lfu 策略，使用 LFU 算法在所有数据中进行筛选。")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-缓存雪崩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-缓存雪崩"}},[t._v("#")]),t._v(" 4. 缓存雪崩")]),t._v(" "),s("p",[t._v("缓存雪崩是指大量的应用请求无法在 Redis 缓存中进行处理，紧接着，应用将大量请求发送到数据库层，导致数据库层的压力激增。\n"),s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821171202.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("产生的原因")])]),t._v(" "),s("ul",[s("li",[t._v("缓存中有大量数据同时过期，导致大量请求无法得到处理")]),t._v(" "),s("li",[t._v("redis服务宕机")])]),t._v(" "),s("p",[s("strong",[t._v("发生后有损解决办法")])]),t._v(" "),s("ol",[s("li",[t._v("是在业务系统中实现服务熔断或请求限流机制。\n"),s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821172007.png",alt:""}})])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821172020.png",alt:""}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("服务降级。非核心数据，直接返回预定义信息，错误或空值。核心业务仍然查询缓存。减少数据库压力\n"),s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821171612.png",alt:""}})])]),t._v(" "),s("p",[s("strong",[t._v("提前预防")])]),t._v(" "),s("p",[t._v("上面的都是发生后有损的解决措施，所以最好的办法是提前预防，让它不要发生。")]),t._v(" "),s("ol",[s("li",[t._v("避免大量数据设置相同点额过期时间，如果有，可以加个随机数。")]),t._v(" "),s("li",[t._v("搭建高可用集群，主节点故障宕机，从节点可以切换成主节点，继续提供缓存服务。")])]),t._v(" "),s("h2",{attrs:{id:"_5-缓存击穿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-缓存击穿"}},[t._v("#")]),t._v(" 5. 缓存击穿")]),t._v(" "),s("p",[t._v("缓存击穿是指，针对某个访问非常频繁的热点数据的请求，无法在缓存中进行处理，紧接着，访问该数据的大量请求，一下子都发送到了后端数据库，导致了数据库压力激增，会影响数据库处理其他请求。缓存击穿的情况，经常发生在热点数据过期失效时")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821172448.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("产生的原因")])]),t._v(" "),s("ul",[s("li",[t._v("热点数据发生过期被淘汰导致访问后端数据库")])]),t._v(" "),s("p",[s("strong",[t._v("发生后有损的解决办法")])]),t._v(" "),s("ul",[s("li",[t._v("接口限流与熔断，降级。")])]),t._v(" "),s("p",[s("strong",[t._v("提前预防")])]),t._v(" "),s("ul",[s("li",[t._v("设置热点数据永远不过期。")])]),t._v(" "),s("h2",{attrs:{id:"_6-缓存穿透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-缓存穿透"}},[t._v("#")]),t._v(" 6. 缓存穿透")]),t._v(" "),s("p",[t._v("缓存穿透是指要访问的数据既不在 Redis 缓存中，也不在数据库中，导致请求在访问缓存时，发生缓存缺失，再去访问数据库时，发现数据库中也没有要访问的数据。")]),t._v(" "),s("p",[s("strong",[t._v("产生的原因")])]),t._v(" "),s("ul",[s("li",[t._v("业务层误操作：缓存中的数据和数据库中的数据被误删除了，所以缓存和数据库中都没有数据；")]),t._v(" "),s("li",[t._v("恶意攻击：专门访问数据库中没有的数据。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/tenqaz/BLOG-CDN@main/20210821172735.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("应对方案")])]),t._v(" "),s("ul",[s("li",[t._v("在请求入口做合法性校验，把恶意请求过滤掉。")]),t._v(" "),s("li",[t._v("布隆过滤器，快速校验数据是否存在，避免从数据库中查询数据是否存在，减轻数据库压力。")]),t._v(" "),s("li",[t._v("一旦发生数据不存在的情况，可以缓存一个缺省值，下次还使用该 ID 访问时，可以返回缺省值。")])]),t._v(" "),s("h2",{attrs:{id:"_7-参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-参考文章"}},[t._v("#")]),t._v(" 7. 参考文章")]),t._v(" "),s("ul",[s("li",[t._v("本文主要是学习《极客时间-redis 核心技术与实战》专栏总结而来")])])])}),[],!1,null,null,null);s.default=v.exports}}]);