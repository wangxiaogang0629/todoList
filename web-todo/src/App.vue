<template>
  <el-container id="app">
    <el-header><Header ref="header" title="村长喊我"/></el-header>
    <el-main><router-view/></el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
    
  </el-container>
</template>

<script>
  import Header from './components/header/header'
  export default {
    components: {
      'Header': Header
    },
    data() {
      return {
        webTitle: '村长喊我来搬砖！'
      }
    },
    provide() {
      return {
        webTitle: '村长喊我来搬砖！'
      }
    },
    mounted() {
      console.log('ref', this.$refs.header.navList)
    }
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
