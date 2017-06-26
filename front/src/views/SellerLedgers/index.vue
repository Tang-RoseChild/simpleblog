<template>
<div id="seller-ledgers">
  <div>
      <el-table
      :data="pageData"
      border
      style="width: 100%"
      >
        <el-table-column
          prop="ID"
          label="序列号"
        >
        </el-table-column>
        <el-table-column
          prop="SellerID"
          label="销售员"
        >
        </el-table-column>
        <el-table-column
          prop="CustomerID"
          label="顾客"
        >
        </el-table-column>
        <el-table-column
          prop="Type"
          label="类型"
        >
        </el-table-column>
        <el-table-column
          prop="Content"
          label="内容"
        >
        </el-table-column>
      </el-table>
  </div>
  <div>
    <el-pagination
      layout="prev, pager, next, jumper"
      :total="tableData.length"
      :page-size="pageSize"
      @current-change="curPageChange"
    >
    </el-pagination>
  </div>
</div>
</template>

<script>
import mock from '../../mock/index.js'
export default {
  data () {
    return {
      tableData: mock.tableData,
      pageSize: 3,
      pageData: mock.tableData.slice(0, 3)
    }
  },
  methods: {
    curPageChange (currentPage) {
      console.log('currentPage', currentPage)
      this.pageData = this.tableData.slice((currentPage - 1) * this.pageSize, currentPage * this.pageSize)
      console.log(this.pageData)
    }
  }
}

</script>
