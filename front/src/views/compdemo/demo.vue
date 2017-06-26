<template>
  <div>
    <editor v-on:commit="commit"></editor>
  </div>
</template>


<script>
import Editor from '../../components/editor.vue'

export default {
  components: {
    Editor
  },
  methods: {
    commit (data) {
      console.log('data >>> ', data)
    }
  }
}
</script>
