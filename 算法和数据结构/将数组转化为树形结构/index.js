/**
 * 题目：
 * 初始时，数组中的每个元素具有 4 个属性，其中有 id 和 parent_id，
 * 现在我们需要根据这两个 id 之间的关系，添加一个 children 属性，使之成为一棵树的结构。
 * 
 * 思路：
 * 生成树结构的话，首先想到用递归，
 * 首先生成1级目录，id中不存在parent_id，表示不存在父级，即为一级目录
 * 然后遍历1级目录，进行递归，将每一项作为方法的参数传入，从parent中取id，遍历数组arr，如果 id === parent_id，则加到parent的childrend下面
 * 再遍历parent的children，重复上面步骤
 * 
 * 这里不需要结束递归的条件，因为是在遍历中使用递归，如果children的长度为0，则不会进入递归
 */
function arr2tree(arr, parent) {
  const ids = arr.map(item => item.id);
  const treeArr = [];
  if (parent) {
    const { id } = parent;
    arr.forEach((item, index) => {
      const { parent_id } = item;
      if (id === parent_id) {
        parent.children.push({
          ...item,
          children: [],
        })
      }
    })
    parent.children.forEach(item => {
      arr2tree(arr, item)
    })
  } else {
    arr.forEach((item, index) => {
      const { parent_id } = item;
      const flag = ids.includes(parent_id);
      if (!flag) {
        treeArr.push({
          ...item,
          children: [],
        })
      }
    });
    treeArr.forEach(item => {
      arr2tree(arr, item)
    })
  }
  return treeArr;
}
var menu_list = [{
  id: '1',
  menu_name: '设置',
  menu_url: 'setting',
  parent_id: 0
}, {
  id: '1-1',
  menu_name: '权限设置',
  menu_url: 'setting.permission',
  parent_id: '1'
}, {
  id: '1-1-1',
  menu_name: '用户管理列表',
  menu_url: 'setting.permission.user_list',
  parent_id: '1-1'
}, {
  id: '1-1-2',
  menu_name: '用户管理新增',
  menu_url: 'setting.permission.user_add',
  parent_id: '1-1'
}, {
  id: '1-1-3',
  menu_name: '角色管理列表',
  menu_url: 'setting.permission.role_list',
  parent_id: '1-1'
}, {
  id: '1-2',
  menu_name: '菜单设置',
  menu_url: 'setting.menu',
  parent_id: '1'
}, {
  id: '1-2-1',
  menu_name: '菜单列表',
  menu_url: 'setting.menu.menu_list',
  parent_id: '1-2'
}, {
  id: '1-2-2',
  menu_name: '菜单添加',
  menu_url: 'setting.menu.menu_add',
  parent_id: '1-2'
}, {
  id: '2',
  menu_name: '订单',
  menu_url: 'order',
  parent_id: 0
}, {
  id: '2-1',
  menu_name: '报单审核',
  menu_url: 'order.orderreview',
  parent_id: '2'
}, {
  id: '2-2',
  menu_name: '退款管理',
  menu_url: 'order.refundmanagement',
  parent_id: '2'
}];
var res = arr2tree(menu_list);
console.log(res);