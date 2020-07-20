<template>
  <div>
    <svg :style="{width: width + 'px', height: height + 'px'}">
      <use xlink:href="#icon-iconfont" :fill="fill" />
    </svg>
  </div>
</template>

<script>
  import '@/assets/font/iconfont.svg'
  export default {
    data() {
      return {
        width: 20,
        height: 20,
        fill: '#fff'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>