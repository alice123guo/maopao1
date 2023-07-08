#### 一、冒泡和捕获的顺序
1. W3C 规定:`a.addEventListener('click',fn,bool)`
    - 当bool为true的时候是捕获
    - bool不传或false的时候是冒泡，即当浏览器在冒泡阶段发现a有监听，调用fn并且提供事件信息
2. 总是**先捕获再冒泡**

####  二、`target`和`currentTarget`的区别
1. e.target指用户操作的元素
2. e.currentTarget指程序员监听的元素
3. `this`是e.currentTarget
4. 举例：`<div><span>{文字}</span></div>`,当用户点击文字的时候
   - e.target是span
   - e.currentTarget是div

#### 三、取消冒泡
1. e.stopPropagation()
2. 本例在a4新增一个取消冒泡的api


#### 四、有些事件不支持取消冒泡，eg:scroll(搜scroll event MDN)
#### 五、scroll不支持取消冒泡，那如何阻止滚动
1. 取消滚轮默认动作：`x.addEventListener('wheel',(e)=>{e.preventDefault()})`
2. 隐藏侧边滚动条：css:`::-webkit-scrollbar{width:0 ! important}`
3. 取消触屏默认事件:`x.addEventListener('wheel',(e)=>{e.preventDefault()})`
4. 注意:找到滚动条所在的元素
