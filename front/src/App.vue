<template>
  <div  id="app">
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :span="3">
      <aside>
        <navbar></navbar>
      </aside>
      </el-col>
      <el-col :span="16">
      <section>
        <router-view></router-view>
      </section>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Nav from './views/Nav/index.vue'
import {IssueToken} from './api/index.js'
import router from './router/index.js'
// import store from './store/index.js'

export default {
  name: 'app',
  components: {
    'navbar': Nav
  },
  mounted () {
    this.$el.querySelector('aside').style.visibility = 'hidden'
  },
  created () {
    console.log('created app ......')
    IssueToken(function (response) {
      console.log('push blog list .......')
      router.push('blog/list')
    }, function (error) {
      console.log('token error > ', error)
      // store.commit('saveToken', '')
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
