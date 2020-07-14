<template>
  <el-main class="main">
    <div class="left">
      <div class="title">
        我的TODO <span @click="allSignSuccess">全部标记完成</span>
      </div>
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
    width: 900px;
    display: flex;
    justify-content: space-between;

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
  }

</style>