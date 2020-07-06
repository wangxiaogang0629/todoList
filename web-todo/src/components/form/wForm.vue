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
      },
      rule: Object
    },
    methods: {
      validate(callback) {
        let rules = this.$children.filter(item => item.prop).map(item => item.validate())

        Promise.all(rules)
          .then(() => callback(true))
          .catch(() => callback(false))
      }
    },
  }
</script>

<style lang="sass" scoped>

</style>