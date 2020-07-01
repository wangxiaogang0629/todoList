<template>
  <el-main class="main">
    <div class="left">
      <TodoList />
    </div>
    <div class="right"></div>
  </el-main>
</template>

<script>
  import TodoList from '../../components/todolist'
  export default {
    components: {
      TodoList: TodoList
    },
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 10px;
    width: 900px;
    display: flex;
    justify-content: space-between;

    .left {

    }
  }

</style>