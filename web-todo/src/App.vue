<template>
  <div class="appContainer">
    <el-container id="app" v-if="isLogin">
      <el-header><Header ref="header" title="村长喊我"/></el-header>
      <el-main><router-view/></el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
    <router-view v-if="!isLogin" />
  </div>
</template>

<script>
  import Header from './components/header/header'
  export default {
    components: {
      'Header': Header
    },
    computed: {
      doubleCounter () {
        console.log(this.$store)
        return this.$store.getters.doubleCounter
      },

      tripleCounter () {
        return this.$store.getters.tripleCounter
      },
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.webTitle.split('').reverse().join('')
      }
    },
    data() {
      return {
        webTitle: '村长喊我来搬砖！',
        isLogin: false
      }
    },
    provide() {
      return {
        webTitle: '村长喊我来搬砖！'
      }
    },
    mounted() {
      let isLogin = localStorage.getItem('isLogin')
      if (isLogin == 2) {
        this.isLogin = true
      } else {
        this.isLogin = false
        this.$router.push('/login')
      }
    },
    methods: {
     
    },
    watch: {
      $route(to) {
        if (to.path !== '/login') {
          let isLogin = localStorage.getItem('isLogin')
          if (isLogin == 2) {
            this.isLogin = true
          } else {
            this.isLogin = false
            this.$router.push('/login')
          }
        } else {
          this.isLogin = false
        }
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-header {
  padding: 0 !important;
}

.el-header, .el-footer {
    background-color: #545c64;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: rgba(224,224,224,1);
    text-align: center;
  }
</style>
