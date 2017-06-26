<template>
  <div>
    <el-menu default-active="1" model="vertical" @select="select" router>
      <!--<el-menu-item index="/register">注册</el-menu-item>
      <el-menu-item index="/create">创建</el-menu-item>
      <el-menu-item index="/list">列表</el-menu-item>-->
      <el-menu-item index="/blog/upload">博客上传</el-menu-item>
      <el-menu-item index="/blog/list">博客列表</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    select () {
      console.log('select >>>>> ', this.$router)
    }
  }
}
</script>
