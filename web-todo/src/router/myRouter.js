class MyRouter {
  constructor() {
  }
}

MyRouter.install = (Vue, options) => {
  console.log('options',options)
  Vue.prototype.$router = this

  Vue.component('router-link', {
    render: (h) => {
      return h(
        'a',
        {
          attrs: {
            href: '#' + this.$options.to
          }
        },
        this.$slots.default,
      )
    },
  })

  Vue.component('router-view', {
    render(h) {
      return h(
        'div',
        this.$slots.default
      )
      
    }
  })
}

export default MyRouter