import Vue from 'vue'

export default (Component, props) => {

  let toastConstructor = Vue.extend(Component)

  console.log(toastConstructor)

  let node = new toastConstructor({
    propsData: props
  }).$mount()

  document.body.appendChild(node.$el)

  node.remove = () => {
    node.$destroy()
    document.body.removeChild(node.$el)
  }

  return node
}