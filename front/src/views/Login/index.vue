<template>
  <div class="login">
    <el-row
    type="flex"
    justify="center"
    >
      <el-col :span="10">
        <el-form :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.mobile" placeholder="电话号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" placeholder="密码" type="password" @keyup.enter.native="login" :disabled="disablePasswordBtn"></el-input>
          </el-form-item>
          <el-button @click="login" :disabled="disableLogin">登陆</el-button>
          <el-button @click="register">注册</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {Login} from '../../api/index.js'

export default {
  data () {
    return {
      loginForm: {
        no: '86',
        mobile: '',
        password: ''
      }
    }
  },
  methods: {
    enter () {
      console.log('enter ....')
    },
    login () {
      let self = this
      Login(self.loginForm, function (response) {
        console.log('login >>>>>> ', response)
        self.$router.push('/blog/list')
      })
    },
    register () {
      this.$router.push('/register')
    }
  },
  computed: {
    disablePasswordBtn () {
      let enable = this.loginForm.mobile && this.loginForm.mobile.length
      return !enable
    },
    disableLogin () {
      let enable = this.loginForm.mobile && this.loginForm.mobile.length && this.loginForm.password && this.loginForm.password.length
      return !enable
    },
    ...mapState({
      notal: state => state.notal,
      localNotal: state => state.notal + 'local'
    }),
    ...mapGetters({
      logined: 'isLogined'
    })
  },
  watch: {
    '$route': function (to, from) {
      console.log('watch route .>>>>> ', to, from)
    }
  }
}
</script>
