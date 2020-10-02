[react-native适配iPhoneX](https://www.jianshu.com/p/464c21c599cf)

## iPhone8以下
iPhone8以下的机型不属于全面屏宽高比例为1 : 1.777，不用考虑顶部的刘海和底部的TabBar。可以基于6s的宽高进行适配。

## iPhoneX以上
iPhoneX以上的版本都是全面屏，都有刘海。  
iPhoneX由于多了大圆角、传感器(齐刘海)以及底部访问主屏幕的指示遮挡，所以需要注意原有这部分内容的设计。  
iOS11前导航栏的高度是64，其中statusBar的高度为20，而iPhoneX的statusBar高度变为了44，如果是自定义的NaviBar，这部分需要做相应的适配。  
另外，iPhoneX的底部增加了虚拟Home区，由于安全区域的原因默认tabBar的高度由49变为83，增高了34，所以自定义的底部TabBar也需要需改其适配方案。

## 判断是否为ios
```javascript
import { Dimensions, Platform, StatusBar } from 'react-native';

const isIos = Platform.OS === 'ios';
```
## 判断是否为iPhoneX以上的机型
```javascript
const { height, width } = Dimensions.get('window');
const isIphoneX = isIos && height >= 812;
```
## iPhone 内容高度
```javascript
const statusHeight = StatusBar.currentHeight || 0;// android顶部状态栏的高度
const viewHeight = height - (isIos ? (isIphoneX ? 88 : 64) : 56 + statusHeight);
```