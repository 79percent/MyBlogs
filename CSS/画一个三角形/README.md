# 利用div+css画一个三角形
## 前言
本文利用了border来实现三角形的绘制，并且只能绘制填充颜色的三角，无法绘制带边框无填充颜色的三角形。
## 盒子模型
先来看一下盒子模型中的border，它有哪些特点
![盒子模型](./img/QQ20200731-153209@2x.png)
可以看出盒子模型中4个方向上的border是以对角线进行分割的
```css
    .triangle{
      border-color: red blue aqua green;
      border-width: 100px 100px 100px 100px;
      border-style: solid;
      width: 50px;
      height: 50px;
    }
```
```html
    <div class="triangle"></div>
```


## 把width和height都设置为0
如果把width和height都设置为0会是什么效果呢？
![设置width/height为0](./img/QQ20200731-153714@2x.png)
可以看出三角形已经出来了，接下来要去掉其他3个三角形，我们可以把它们的颜色设置为透明
```css
    .triangle{
      border-color: red blue aqua green;
      border-width: 100px 100px 100px 100px;
      border-style: solid;
      width: 0;
      height: 0;
    }
```
```html
  <div class="triangle"></div>
```

## 设置其他3个颜色为透明
![设置其他3个颜色为透明](./img/QQ20200731-154826@2x.png)
可以看到只有1个三角形了，但是其他3个三角形的高度还在
```css
    .triangle{
      border-color: transparent transparent aqua transparent;
      border-width: 100px 100px 100px 100px;
      border-style: solid;
      width: 0;
      height: 0;
    }
```
```html
  <div class="triangle"></div>
```

## 修改border宽度
![设置borderTopWidth为0](./img/QQ20200731-155156@2x.png)
```css
    .triangle{
      border-color: transparent transparent aqua transparent;
      border-width: 0px 100px 100px 100px;
      border-style: solid;
      width: 0;
      height: 0;
    }
```

![修改左右宽度](./img/QQ20200731-155405@2x.png)
```css
    .triangle{
      border-color: transparent transparent aqua transparent;
      border-width: 0px 30px 100px 30px;
      border-style: solid;
      width: 0;
      height: 0;
    }
```

![直角三角形](./img/QQ20200731-155509@2x.png)
```css
    .triangle{
      border-color: transparent transparent aqua transparent;
      border-width: 0px 0px 100px 30px;
      border-style: solid;
      width: 0;
      height: 0;
    }
```