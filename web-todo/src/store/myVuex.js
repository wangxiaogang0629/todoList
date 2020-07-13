let MyVue;

class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions
    this.getters = {} // 天王盖地虎
    this.computed = {}
    this._options = options

    // 设置响应式数据 需要将state设置为隐藏属性 不容许外部直接修改
    this._vm = new MyVue({
      data: {
        $$state: options.state
      },
      computed: this.computed,
    })

    Object.keys(options.getters).forEach(item => {

      this.computed[item] = options.getters[item](this.state)
      // 数据未响应 暂时还没找到原因
      MyVue.util.defineReactive.bind(this)(this.getters, item, () => {
        return options.getters[item](this.state)
      })

      // var myDefineProperty = (obj, key, val) => {

      //   // 响应式的设置每个属性
      //   Object.defineProperty(obj, key, {
      //     get: () => {
      //       console.log(options.getters[item](this.state), val);
      //       return options.getters[item](this.state)
      //     },
      //     enumerable: true // for local getters
      //   })
      // }
      // myDefineProperty(this.getters, item, options.getters[item](this.state))

      // Object.defineProperty(this.getters, item, {
      //   get: () => {
      //     return options.getters[item](this.state)
      //   },
      //   enumerable: true // for local getters
      // })
      
    })

    
  }

  get state() { // _data
    return this._vm._data.$$state
  }

  set state(v) {
    console.error('不能直接修改state')
  }

  commit = (type, info) => {

    let event = this._mutations[type]

    if (event) {
      event(this.state, info)
    } else {
      console.log('没有匹配的 type commit')
    }
  }

  dispatch = (type, info) => {

    let event = this._actions[type]

    if (event) {
      return event(this, info)
    } else {
      console.log('没有匹配的 type dispatch action')
    }
  }

}

const install = (Vue) => {
  MyVue = Vue
  Vue.mixin({
    beforeCreate () {
      
      // 全局注册 $store
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
      
    },
  })
}

export default { Store, install }