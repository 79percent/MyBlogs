# css中的单位
css中的单位长度有两种类型：相对长度和绝对长度。
## 相对长度
相对长度单位指定了一个长度相对于另一个长度的属性。对于不同的设备相对长度更适用。
- em  
它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px；  
子元素字体大小的em是相对于父元素字体大小
元素的width/height/padding/margin用em的话是相对于该元素的font-size
- ex	依赖于英文字母小 x 的高度	
- ch	数字 0 的宽度	
- rem  
rem 是根 em（root em）的缩写，rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小。	  
rem是全部的长度都相对于根元素<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。
- vw	viewpoint width，视窗宽度，1vw=视窗宽度的1%	
- vh	  
viewpoint height，视窗高度，1vh=视窗高度的1%	  
处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。
- vmin	vw和vh中较小的那个。	
- vmax	vw和vh中较大的那个。	
- %	 百分比，占父元素的百分比

## 绝对长度
绝对长度单位是一个固定的值，它反应一个真实的物理尺寸。绝对长度单位视输出介质而定，不依赖于环境（显示器、分辨率、操作系统等）。
- cm 厘米
- mm 毫米
- px 像素
- pt point，大约1/72英寸； (1pt = 1/72in)
- pc pica，大约6pt，1/6英寸； (1pc = 12 pt)
- in 英寸 (1in = 96px = 2.54cm)