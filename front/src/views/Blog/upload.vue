<template>
  <div>
    <el-col :span="16">
      <el-row >
        <el-input placeholder="title" v-model="title" > </el-input>
      </el-row>
      <el-row>
        <el-input id="blog-upload" type="textarea" v-model="content" placeholder="正文"></el-input>
      </el-row>
      <el-row >
      <el-button @click="upload">完成</el-button>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import 'simplemde/dist/simplemde.min.css'
import 'github-markdown-css'
import SimpleMDE from 'simplemde'
import marked from 'marked'
import {BlogUpload} from '../../api/index.js'

export default {
  data () {
    return {
      title: '',
      content: '',
      mde: null,
      renderMDE: null,
      afterMarked: null,
      markdownContent: '# hello'
    }
  },
  mounted () {
    this.$root.$el.querySelector('aside').style.visibility = 'visible'
    let ele = document.querySelector('#blog-upload textarea')
    /* eslint-disable no-new */
    this.mde = new SimpleMDE({element: ele})
  },
  methods: {
    upload () {
      let description = ''
      let content = this.mde.value()
      var div = document.createElement('div')
      div.innerHTML = marked(content)
      let directP = div.querySelectorAll('div > p')
      let headers = div.querySelectorAll('div > h1, div > h2, div > h3, div > h4, div > h5, div > h6')
      let p = div.querySelector('p')
      if (directP) {
        description = directP[0].innerText
      } else if (headers) {
        description = headers[0].innerText
      } else if (p) {
        description = p.innerText
      }
      let self = this
      BlogUpload({title: this.title, content: content, description: description}, function (response) {
        console.log('blog upload  id >>>> ', response)
        if (response.status === 200) {
          self.$router.push({name: 'blog-info', params: {id: response.data.id}})
        }
      })
    }
  },
  beforeRouteLeave: function (to, from, next) {
    this.$root.$el.querySelector('aside').style.visibility = 'hidden'
    next()
  }
}
</script>
