# js_data_structure_algorithm

![](https://travis-ci.org/Ali1213/js_data_structure_algorithm.svg?branch=master)
[![codecov](https://codecov.io/gh/Ali1213/js_data_structure_algorithm/branch/master/graph/badge.svg)](https://codecov.io/gh/Ali1213/js_data_structure_algorithm)

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

## 链表 linkedList

链表内每一个数据都有element 和 next，element表示的是当前元素，next指向的是下一个元素。

### append(element)
向链表尾部增加一个新的项

### insert(position,element)
向链表指定位置插入一个新的项

### remove(element)
从链表中移除一项

### indexOf(element)
返回元素在链表中的索引，如果没有，则返回 -1

### removeAt(position)
从链表的特定位置移除一项

### isEmpty()
如果链表中不含任意一项，则返回true;如果链表长度大于0则返回false

### size()
返回链表包含的元素个数，与数组的length属性类似

### toString()
由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值


## Set 集合

Es6已经自带set。就不模仿了。

### add(value)
向集合添加一个新的项

### remove(value)
从集合移出一个值

### has(value)
如果值在集合中，则返回true,否则返回false

### clear()
移除集合中的所有项

### size()
返回集合所包含元素的数量，与数组的length属性类似

### values()
返回一个集合中包含所有值的数组

## Map 字典

Es6已经自带Map。就不模仿了。
 

## BinarySearchTree 二叉搜索树

二叉树的节点最多只有两个子节点，一个左侧节点，一个右侧节点。
二叉搜索树是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大，或者等于的值；

### insert(key)
向树中插入一个新的键

### search(key)
在树中查找一个键，如果节点存在，则返回true;如果不存在，则返回false

### inOrderTraverse()
通过中序遍历方式遍历所有节点

### preOrderTraverse()
通过先序遍历方式遍历所有节点

### postOrderTraverse()
通过后序遍历方式遍历所有节点

### min()
返回树中最小值/键

### max()
返回树中最大的值/键

### remove(key)
从树中移除某个键
