import directive from './directives'

const importDirective = Vue => {
  /**
   * 拖拽指令
   * 指令用法：
   * - v-draggable="options"
   *  options = {
   *    trigger: /这里传入作为拖拽触发器的CSS选择器/,
   *    body:    /这里传入需要移动容器的CSS选择器/,
   *    recover: /拖动结束之后是否恢复到原来的位置/
   *  }
   */
  Vue.directive('draggable', directive.draggable)
  /**
 * Action 权限指令
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
 *    <i-button v-action:add >添加用户</a-button>
 *    <a-button v-action:delete>删除用户</a-button>
 *    <a v-action:edit @click="edit(record)">修改</a>
 *
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 *  - 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
 *
 *  @see https://github.com/sendya/ant-design-pro-vue/pull/53
 */
  Vue.directive('action', directive.action)
}

export default importDirective
