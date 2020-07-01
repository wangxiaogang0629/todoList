<template>
  <el-container id="app">
    <el-header><Header /></el-header>
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
      'Header': Header,
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
