let myVue; // 引入 vue，使用引用的方式，在打包的时候就不会把 vue 打包进去

class MyRouter {
  constructor(options) {
    this.routes = options.routes

    // 响应式数据实现
    const current = window.location.hash.slice(1) || '/'

    // vue 隐藏函数
    // 给当前的对象设置一个新的属性 this：当前对象， 'current'：需要设置的属性， current：属性值
    myVue.util.defineReactive(this, 'current', current)

    window.addEventListener('hashchange', this.onHashchange)
    window.addEventListener('onload', this.onHashchange)
  }

  onHashchange = () => {
    this.current = window.location.hash.slice(1)
    console.log(this.current)
  }
}

MyRouter.install = (Vue) => {

  myVue = Vue

  Vue.mixin({
    beforeCreate () {

      if (this.$options.router) { // 在只有 router 存在的参数中去挂在全局属性 $router
        Vue.prototype.$router = this.$options.router
      }
      
    },
  })


  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        default: ''
      },
    },
    // h = createElement 创建一个 a 链接实现 hash 跳转
    render(h) {
      return h(
        'a',
        { // 属性
          attrs: {
            href: `/#${this.to}`
          }
        },
        this.$slots.default // 子元素通过插槽实现
      )
    }
  })

  Vue.component('router-view', {
    render(h) {
      console.log('this.routes',this.$router)

      let routes = this.$router.routes
      let current = this.$router.current
      let comp = routes.find( item => item.path == current ).component
      return h(comp)
    }
  })
  

}


export default MyRouter