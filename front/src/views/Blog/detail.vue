<template>
  <div class="blog-detail ">
    <el-row>
      <div v-html="afterMarked" class="markdown-body"></div>
    </el-row>
    <div class="comment" v-if="comments.length">
      <el-row v-for="comment in comments" key="comment" class="comments" >
        <el-row>
          <p>{{comment.content}}</p>
        </el-row>
        <el-row>
          <el-col>
            <span>{{comment.userID}}</span>
          </el-col>
          <el-col>
            <span>{{comment.timestamp}}</span>
          </el-col>
        </el-row>
      </el-row>
    </div>
    <div class="comment" v-else>
      <p>没有任何评论，来占个坑吧</p>
    </div>
    <el-row>
      <div class="comment-editor">
        <editor head="发表评论" @commit="commit"></editor>
      </div>
    </el-row>
  </div>
</template>

<script>
import marked from 'marked'
import {BlogGet, Comment} from '../../api/index.js'
import {Message} from 'element-ui'
import 'github-markdown-css'
import Editor from '../../components/editor.vue'

export default {
  components: {
    Editor
  },
  data () {
    return {
      blog: {
        content: '# hello '
      },
      comments: [
        {content: 'comment1', userID: 'duolaA', timestamp: new Date()},
        {content: 'comment2', userID: 'duolaB', timestamp: new Date()}
      ]
    }
  },
  mounted () {
    console.log('mounted in detail ..........')
    this.$root.$el.querySelector('aside').style.visibility = 'visible'
    console.log('this.$router.params', this.$route.params.id)
    // fetch data
    this.fetchData(this.$route.params.id)
  },
  methods: {
    fetchData (id) {
      let self = this
      BlogGet({id: id}, function (response) {
        if (!response.data.error) {
          self.blog = response.data.blog
          self.comments = response.data.comments
        } else {
          Message.error({message: response.data.error})
        }
      })
    },
    commit (data) {
      Comment.CreateComment(data, function (response) {
        Message.success({message: '评论成功'})
      })
    }
  },
  computed: {
    afterMarked () {
      return marked(this.blog.content, {sanitize: true})
    }
  },
  beforeRouteLeave: function (to, from, next) {
    this.$root.$el.querySelector('aside').style.visibility = 'hidden'
    next()
  }
}
</script>

<style>
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
}
.comments {
  box-sizing: border-box;
  border: 1px solid;
  margin: 1px;
}
</style>
