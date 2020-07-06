<template>
  <el-header class="header flex-center">
    <div class="center-box flex-between">
      <div class="left flex-normal ">
        <i></i>
        <span class="name" ref="webName">TODO {{$attrs.title}}</span>
        <div class="navItem"
          :class="{'nav-active': navSelect === navItem.id }"
          v-for="navItem in navList"
          :key="navItem.id"
          @click='navSelect = navItem.id'>{{navItem.text}}</div>
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">设置</template>
          <el-menu-item index="2-1">用户设置</el-menu-item>
          <el-menu-item index="2-2">主题设置</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Github</a></el-menu-item>
        <el-menu-item index="4">
          <router-link to="/login">登录</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        navList: [
          { id: 0, icon: '', text: '个人' },
          { id: 1, icon: '', text: '团队' },
        ],
        navSelect: 0,
      };
    },
    inject: ['webTitle'],
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        console.log('根', this.$store.state.webTitle)
        console.log('老爹', this.webTitle)
      },
      navClick(val) {
        console.log(val)
      }
    },
    mounted: () => {
      // console.log('webName', this.$refs)
    }
  }
</script>

<style lang="scss" scoped src = './index.scss'></style>

