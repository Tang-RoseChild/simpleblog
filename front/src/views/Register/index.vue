<template>
  <div class="register">
    <el-row :gutter="24"
    type="flex"
    justify="center"
    >
      <el-col :span="10">
        <el-form v-model="regForm">
          <el-form-item>
            <el-input v-model="regForm.mobile"  placeholder="电话号码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-input v-model="regForm.password" type="password" placeholder="密码" @keyup.enter.native></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="register">注册</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {Register} from '../../api/index.js'
import {Message} from 'element-ui'

export default {
  data () {
    return {
      regForm: {
        no: '86'
      }
    }
  },
  methods: {
    register () {
      let self = this
      console.log('regForm', this.regForm)
      Register(this.regForm, function (response) {
        console.log('register >> ', response)
        Message.success({message: 'welcome!'})
        self.$router.push('/blog/list')
      })
    }
  }
}
</script>
