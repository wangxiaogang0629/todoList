<template>
  <div>
    <svg :class="getSvgClass">
      <use :xlink:href="getIconName" />
    </svg>
  </div>
</template>

<script>
  import '@/assets/font/iconfont.svg'
  export default {
    name: 'iconFont',
    props: {
      iconName: {
        type: String,
        required: true
      },
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      getIconName() {
        return `#icon-${this.iconName}`
      },
      getSvgClass() {
        if (this.iconClass) {
          return 'svg-icon ' + this.iconClass
        } else {
          return 'svg-icon'
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>