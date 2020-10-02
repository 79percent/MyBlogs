## 实例渲染时
new Vue()

beforCreate // 创建vue实例，但是还没有初始化property

created // 此时实例上的property已经初始化完毕，可以拿到property

beforMount // 生成虚拟DOM

mounted // 挂载完成，此时可以进行DOM操作

beforeDestroy // 此时实例还没有被销毁，仍然可以访问实例中的property

destroyed // 实例被销毁，访问不到实例的property

## 更新时
beforeUpdate // 此时data已经拿到最新的property，但是页面还没有更新

updated // 页面重新渲染完成，此时页面和实例中的数据都是最新的