<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <!-- 插槽 -->
    <slot></slot>
    <p v-if="error" class="error">{{error}}</p>  
  </div>
</template>

<script>
  import Validator from 'async-validator'
  export default {
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted () {
      this.$on('validate', () => {
        this.validate()
      });
    },
    
    methods: {
      validate() {
        let val = this.form.model
        let rule = this.form.rule

        let validator = new Validator({ [this.prop]: rule[this.prop] })

        // promise
        return validator.validate({ [this.prop]: val[this.prop] }, err => {

          if (err) {
            this.error = err[0].message
          } else {
            this.error = ''
          }
        })
      }
    },

  }
</script>

<style lang="scss" scoped>
  .error {
    color: red;
  }
</style>