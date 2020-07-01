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
    inject: ['from'],
    props: {
      label: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        error: ''
      }
    },
    mounted() {
      this.$on('validate', () => {
        this.validator()
      })
    },
    methods: {
      validator() {
        let rules = this.from.rules
        let val = this.from.model

        let schema = new Schema({ [this.prop]: rules[this.props] })

        return schema.validate({ [this.prop]: val }, (errors) => {

          if (errors) {
            console.log('err', errors)
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