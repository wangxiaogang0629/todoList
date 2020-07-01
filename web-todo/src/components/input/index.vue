<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="onInput"
      v-bind="$attrs" />
    <p>{{ value }}</p>
  </div>
</template>

<script> 
  export default {
    inheritAttrs: false,
    props: {
      value: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
        this.$parent.$emit('validate')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>