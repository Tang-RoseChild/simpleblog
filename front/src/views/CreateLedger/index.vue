<template>
  <div id="create-ledger">
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <el-form
          :model="newLedger"
          ref="form-demo"
        >
          <!-- label能不能用元数据? metadata:[all labels] -->
          <el-form-item prop="sellerID">
            <el-input placeholder="销售员" v-model="newLedger.sellerID"></el-input>
          </el-form-item>
          <el-form-item prop="customerID">
            <el-input placeholder="顾客" v-model="newLedger.customerID"></el-input>
          </el-form-item>
          <el-form-item  prop="type">
            <el-input placeholder="类型" v-model="newLedger.type"></el-input>
          </el-form-item>
          <el-form-item prop="content">
            <el-input placeholder="内容" v-model="newLedger.content"></el-input>
          </el-form-item>
          <el-button @click="commit">提交</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {needToLogin} from '../../middleware/index.js'

export default {
  data () {
    return {
      newLedger: {
        sellerID: '',
        customerID: '',
        type: '',
        content: ''
      }
    }
  },
  methods: {
    commit () {
      console.log(this.newLedger)
      console.log('this el >>>> ', this.$el.querySelector('.el-form'))
      // this.$refs.form.resetFields()
      // this.$el.resetFields()
      // console.log('this.newLedger => ', this.newLedger)

      console.log(this.$refs['form-demo'])
      // this.newLedger = {}
      this.$refs['form-demo'].resetFields()
    }
  },
  beforeRouteEnter: needToLogin
}
</script>
