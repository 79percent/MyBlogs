在ReactNaitve项目中使用到了React-Native-Piceker这个组件
这个组件有个BUG
选择器显示的时候，如果点击设备的物理返回键，
选择器不会隐藏，而是回退页面，选择器仍然是显示状态
我想要的效果是
选择器显示状态下，如果点击物理返回，
选择器应该会隐藏，而页面不会回退，仍然在当前页面、

解决方法：
React Native有个API方法  BackHandler  可以监听设备后退按钮事件
  官网示例
  当事件回调都返回false时，会执行默认行为，返回上一个页面
  如果回调函数返回true，则不会执行后续的函数
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    //do something
  }

  实际使用
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  //当isPickerShow为true时表示Picker是显示在状态，为false表示关闭状态
  //我在每次Picker.show时设置成了true，Picker.hide时设置成false
  //如果是true则关闭Picker，则return true不执行默认行为；如果是false，则return false执行默认行为，返回上一个页面
  handleBackPress = () => {
    const current = this.isPickerShow
    if(isPickerShow){
      Picker.hide()
      this.isPickerShow = false
    }
    return current
  }