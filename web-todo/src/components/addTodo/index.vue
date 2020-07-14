<template>
  <div class="addTodo">
    <div class="title">添加TODO</div>
    <el-input aria-placeholder="请输入TODO内容" class="todoInput"></el-input>
    <div class="operation">
      <el-checkbox v-model="checked">加星</el-checkbox>
    </div>
    <el-button size = "small">保存</el-button>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          checked: true
        }
      }
  }
</script>

<style lang="scss" scoped src = "./index.scss" />