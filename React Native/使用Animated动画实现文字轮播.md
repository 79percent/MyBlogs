## 有个需求要实现提示的警告文字从屏幕右边进入移到最左边消失，并且一直循环的动画
用Animated动画实现了一下这个效果   
## 思路
通过改变marginLeft来实现移动效果，先定义一个初始值，让它在屏幕之外，然后开启Animated动画，设置marginLeft值，让它运动到另一边的屏幕之外，一直循环这个动画。   
代码：
```javascript
import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet, Button, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class Index extends Component {
  state = {
    // 初始的marginLeft值
    fadeAnim: new Animated.Value(-windowWidth - 200),
  };

  // 开启动画
  start = () => {
    // 从从屏幕一侧移动到另一侧的动画
    this.move = Animated.timing(this.state.fadeAnim, {
      toValue: windowWidth + 200,
      duration: 2000,
    });
    // 一直循环上面动画
    this.loop = Animated.loop(this.move).start();
  };

  // 结束动画
  stop = () => {
    if (this.move) {
      // 调动stop停止动画
      this.move.stop();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              height: 60,
              width: 200,
              marginLeft: this.state.fadeAnim,
            },
          ]}
        >
          <Text style={styles.fadingText}>Moving View!</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="开始" onPress={this.start} />
          <Button title="停止" onPress={this.stop} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});

```