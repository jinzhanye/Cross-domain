Map、Set是都ES6中都是有序的。

在Set集合中，不会对所存值进行强制的类型转换，数字5和字符串"5"可以作为
两个独立元素存在(引擎内部使用Object.is()方法检测两个值是否一致，唯一的例外是，Set集合中的+0和-0被认为是相等的)

### Set/Map与WeakSet/WeakMap的本质区别
Weak集合中存放的是键是对象的弱引用(即不会增加引用计算)，当该对象的其他强引用都被清除时，集合中弱引用键
及其对应的值也会自动被垃圾回收。

