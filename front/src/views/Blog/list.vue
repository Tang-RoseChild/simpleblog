<template>
  <div>
    <el-row :gutter="20" v-for="i in range(0, rows)" :key="i">
      <el-col :span="6" v-for="n in range(0, colNum)" :key="i*colNum+n" :offset ="1" v-if="i*colNum+n < blogs.length" >
        <div @click="clicked(blogs[i*colNum + n].id)">
        <el-card class="box-card" >
          <div>
            <el-tooltip class="item" effect="light" :content="blogs[i*colNum + n].title" placement="bottom">
              <h3 >{{blogs[i*colNum + n].title}}</h3>
            </el-tooltip>
          </div>
          <div>
            <el-tooltip class="item" effect="light" :content="blogs[i*colNum + n].description" placement="bottom">
              <p>{{blogs[i*colNum + n].description}}</p>
            </el-tooltip>
          </div>
        </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {BlogList} from '../../api/index.js'

export default {
  data () {
    return {
      colNum: 3,
      title: '',
      blogs: []
    }
  },
  computed: {
    rows () {
      let length = Math.ceil(this.blogs.length / 3)
      return length
    }
  },
  created () {
    console.log('created in list >>>>> ')
  },
  mounted () {
    this.$root.$el.querySelector('aside').style.visibility = 'visible'
    this.fetchData()
  },
  methods: {
    fetchData () {
      let self = this
      BlogList({}, function (response) {
        console.log('response in list >>> ', response)
        if (response.data.blogs) {
          self.blogs = response.data.blogs
        }
      })
    },
    range (min, max) {
      let array = []
      if (!max) {
        array[0] = 0
        return array
      }

      let j = 0
      for (let i = min; i < max; i++) {
        array[i] = j
        j++
      }

      return array
    },
    clicked (id) {
      this.$router.push({name: 'blog-info', params: {id: id}})
    }
  },
  beforeRouteLeave: function (to, from, next) {
    this.$root.$el.querySelector('aside').style.visibility = 'hidden'
    next()
  }
}
</script>

<style>
.box-card span,
.box-card h1,
.box-card h2,
.box-card h3,
.box-card h4,
.box-card h5,
.box-card h6,
.box-card p
 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}

/*.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
}*/
</style>
