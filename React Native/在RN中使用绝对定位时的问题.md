## 在RN中使用定位时的一些问题
- ios和android两边的效果不一致  
同一套样式代码在ios上可能显示层级正常，但是在android上显示不正确
## 可能的原因
ios和android绝对定位的实现方式不同，
android上的flex布局就是LinearLayout布局。
## 解决办法
- 设置zIndex，调整他们的层级关系
- 写两套样式，判断当前系统环境是ios还是android，再决定使用哪套样式