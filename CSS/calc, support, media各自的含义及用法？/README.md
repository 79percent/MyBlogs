# calc()
## 定义与用法  
calc() 函数用于动态计算长度值。  
- 需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；  
- 任何长度值都可以使用calc()函数进行计算；  
- calc()函数支持 "+", "-", "*", "/" 运算；  
- calc()函数使用标准的数学运算优先级规则；  

支持版本：CSS3  

# @supports
@supports CSS at-rule 您可以指定依赖于浏览器中的一个或多个**特定的CSS功能的支持声明**。这被称为特性查询。该规则可以放在代码的顶层，也可以嵌套在任何其他条件组规则中。 
## 语法 
@supports at-rule 由一组样式声明和一条支持条件构成。支持条件由一条或多条使用 逻辑与（and）、逻辑或（or）、逻辑非（not）结合的名称-值对（name-value pair）组成。可以使用圆括号调整操作符的优先级。
```css
@supports (display: grid) {
  div {
    display: grid;
  }
}

@supports not (display: grid) {
  div {
    float: right;
  }
}

@supports (display: table-cell) and (display: list-item) {

}

@supports (transform-style: preserve) or (-moz-transform-style: preserve) {

}
```

# @media
@media CSS @规则 可用于基于一个或多个 媒体查询 的结果来应用样式表的一部分。 使用它，您可以指定一个媒体查询和一个CSS块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该CSS块才能应用于该文档。  
## 语法
`@media +（ not  | only） + 媒体类型 +（and+ 媒体查询）`  
## 使用场景
1. 当屏幕宽度小于678px时，.box类的背景颜色为红色
```css
@media screen and （max-width: 678px）{
  .box {
    background-color:red;
  }
}
```
2. 多个条件时：当屏幕宽度在600px到800px之间，.box类的背景颜色显示为红色
```css
@media screen and (min-width: 600px) and (max-width: 800px) {
  .box {
    background-color:red;
  }
}
```
## 修饰词: not，only
### only 用来匹配媒体类型，表示只对该媒体类型适用
```css
@media only screen and （max-width:678px）{
  .box {
    background-color:red;
  }
}
```
### not 就是不对该媒体类型起作用,对其他类型其作用
```css
@media not screen and （max-width:678px）{
  .box {
    background-color:red;
  }
}
```