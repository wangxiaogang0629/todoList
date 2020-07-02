<template>
  <div>
    <!-- lable -->
    <label v-if="label">{{ label }}</label>
    <!-- 插槽 -->
    <slot></slot>
    <!-- 报错信息 -->
    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
  import Schema from 'async-validator' 
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
    mounted() {
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate() {
        let rules = this.form.rules
        let val = this.form.model
        let schema = new Schema({ [this.prop]: rules[this.prop] })

        return schema.validate({ [this.prop]: val[this.prop] }, (errors) => {

          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        })

      }
    },

  }
// async-validator
</script>


<style lang="scss" scoped>
  .error {
    color: red;
  }
</style>