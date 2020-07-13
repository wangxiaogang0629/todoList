<template>
  <div class="appContainer">
    <el-container id="app" v-if="isLogin">
      <el-header><Header ref="header" title="村长喊我"/></el-header>
      <el-main><router-view/></el-main>
      <el-footer>
        <Footer></Footer>
        <p @click="$store.commit('add')">counter: {{$store.state.counter}}</p>
        <p @click="$store.dispatch('add')">async counter: {{$store.state.counter}}</p>

         <p >doubleCounter: {{doubleCounter}}</p>
      </el-footer>
    </el-container>
    <router-view v-if="!isLogin"></router-view>
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
      this.isLogin = localStorage.getItem('isLogin') == 2
    },
    methods: {
     
    },
    watch: {
      $route(to) {
        if (to.path == '/login') {
          this.isLogin = false
          localStorage.setItem('isLogin', 1)
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
</style>
