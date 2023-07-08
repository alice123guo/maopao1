#### 冒泡和捕获的顺序
1. W3C 规定:`a.addEventListener('click',fn,bool)`
    - 当bool为true的时候是捕获
    - bool不传或false的时候是冒泡，即当浏览器在冒泡阶段发现a有监听，调用fn并且提供事件信息
2. 总是**先捕获再冒泡**

#### `target`和`currentTarget`的区别
1. e.target指用户操作的元素
2. e.currentTarget指程序员监听的元素
3. `this`是e.currentTarget
4. 举例：`<div><span>{文字}</span></div>`,当用户点击文字的时候
   - e.target是span
   - e.currentTarget是div
