<template>
  <f7-page class="poast-view">
    <f7-navbar back-link="Back" title="Comments" no-shadow></f7-navbar>
    <f7-toolbar position="bottom">
      <f7-list form style="border: 1px solid red; " no-hairlines>
        <f7-list-input style="color: black;background-color: rgba(192,192,192, .2); border-radius: 30px; margin: 10px; outline: none;" type="text" name="comment_txt" placeholder="Your comment" :value="comment_txt" @input="comment_txt = $event.target.value" clear-button></f7-list-input>
      </f7-list>
    </f7-toolbar>
    <f7-card class="demo-facebook-card" style="margin-top: 0px;" no-shadow>
      <f7-card-content :padding="false">
        <img :src="post.image" width="100%"/>
      </f7-card-content>
      <f7-card-footer class="no-border">
        <f7-link>Like</f7-link>
        <f7-link>Comment</f7-link>
        <f7-link>Share</f7-link>
      </f7-card-footer>
    </f7-card>
  </f7-page>
</template>



<script>
export default {
  data() {
    return {
      comment_txt: '',
      post: null,
    }
  },
  created() {
    let param = decodeURIComponent(this.$f7route.params.post)
    this.post = JSON.parse(param)
  },
}
</script>
