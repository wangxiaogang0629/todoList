<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    provide() {
      return {
        'form': this
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: Object
    },
    methods: {
      // validate(cb) {
      //   // 全局校验方法
      //   // 1.执行内部所有FormItem校验方法，统一处理结果
      //   // 将FormItem数组转换为Promise数组
      //   const tasks = this.$children
      //     .filter(item => item.prop)
      //     .map(item => item.validate());

      //   // 2.统一检查校验结果
      //   Promise.all(tasks)
      //     .then(() => cb(true))
      //     .catch(() => cb(false));
      // },
      validate(callback) {
        const tasks = this.$children.filter(item => item.prop).map(item => item.validate())

        Promise.all(tasks)
          .then(() => callback(true))
          .catch(() => callback(false))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>