# js_data_structure_algorithm

![](https://travis-ci.org/Ali1213/js_data_structure_algorithm.svg?branch=master)

仅供自己实践，用js模拟学习数据结构使用

同时开始尝试使用测试框架 mocha 断言库 should

## 栈 Stack.js

### new Stack(arguments)
添加元素
### push()
添加一个或者几个元素到栈顶
### pop()
移除栈顶的元素，同时返回被移除的元素
### peek()
返回栈顶的元素，不改变栈
### isEmpty()
如果栈内没有任何元素，则返回true，否则，则返回false
### clear()
移除栈内的所有元素
### size()
返回栈内的元素的个数

### get()
返回这个栈内私有数组的复制，主要是为了mocha测试使用。

## 队列 Queue.js

### new Queue(arguments)
添加元素
如果元素为空，得到一个空队列

### enqueue(element(s))
向队列尾部添加一个（或多个）新的项

### dequeue()
移除队列的第一项，并返回被移除的元素

### front()
返回队列的第一项，不改变队列

### isEmpty()
如果队列内没有任何元素，则返回true，否则，则返回false

### size()
返回队列包含的元素个数,与数组的length属性类似


### get()
返回这个栈内私有数组的复制，主要是为了mocha测试使用。