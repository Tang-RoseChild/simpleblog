<template>
  <div>
    <el-col :span="16">
      <el-row v-if="head">
        <el-label>{{head}}</el-label>
      </el-row>
      <el-row v-if="hasTitle">
        <el-input placeholder="title" v-model="title" > </el-input>
      </el-row>
      <el-row>
        <el-input id="blog-upload" type="textarea" placeholder="正文"></el-input>
      </el-row>
      <el-row >
      <el-button @click="commit">完成</el-button>
      </el-row>
    </el-col>
  </div>
</template>

<script>
import 'simplemde/dist/simplemde.min.css'
import 'github-markdown-css'
import SimpleMDE from 'simplemde'
import marked from 'marked'

export default {
  props: {
    hasTitle: Boolean,
    head: String
  },
  data () {
    return {
      title: '',
      mde: null
    }
  },
  mounted () {
    let ele = document.querySelector('#blog-upload textarea')
    this.mde = new SimpleMDE({element: ele})
    console.log('this mde >>>> ', this.mde)
    this.mde.codemirror.on('change', function () {
      console.log('simplemde changed ########## ')
    })
  },
  methods: {
    commit () {
      let description = ''
      let content = this.mde.value()
      var div = document.createElement('div')
      div.innerHTML = marked(content)
      let directP = div.querySelectorAll('div > p')
      let headerEle = div.querySelectorAll('div > h1, div > h2, div > h3, div > h4, div > h5, div > h6')
      let p = div.querySelector('p')
      if (directP && directP.length) {
        description = directP[0].innerText
      } else if (headerEle && headerEle.length) {
        description = headerEle[0].innerText
      } else if (p) {
        description = p.innerText
      }
      this.$emit('commit', {title: this.title, content: content, description: description})
    }
  }
}
</script>
