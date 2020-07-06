<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      },
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)

        // 由于插槽不能设置事件所以使用 $parent
        this.$parent.$emit('validate')
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>