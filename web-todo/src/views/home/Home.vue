<template>
  <el-main class="main">
    <div class="left">
      <div class="title">
        我的TODO <span @click="allSignSuccess">全部标记完成</span>
      </div>
      <TodoList />
    </div>
    <div class="right">
      <AddTodo />
    </div>
  </el-main>
</template>

<script>
  import TodoList from 'comps/todolist'
  import AddTodo from '../../components/addTodo'
  export default {
    components: {
      TodoList,
      AddTodo
    },
    methods: {
      allSignSuccess() {
        console.log('allSignSuccess')
      }
    },
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;

    .left {
      .title {
        height:32px;
        font-size:32px;
        font-family:Times-Roman,Times;
        font-weight:normal;
        color:rgba(50,50,50,1);
        line-height:38px;
        text-align: left;
        margin-bottom: 20px;

        &>span {
          height:17px;
          font-size:14px;
          font-family:Times-Roman,Times;
          font-weight:normal;
          color:rgba(170,170,170,1);
          line-height:18px;
          margin-left: 30px;
          cursor: pointer;

          &:hover {
            color: #4990e2;
          }
        }
      }

      
    }

    .right {
      width:362px;
      margin-left: 33px;
      padding-top: 30px;
    }
  }

</style>