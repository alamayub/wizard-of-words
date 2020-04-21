<template>
  <f7-page name="home" class="home">
    <f7-navbar>
      <f7-nav-left style="padding: 10px;">
        <f7-link href="/profile/" style="padding: 0px;">
          <img src="https://cdn.windowsreport.com/wp-content/uploads/2017/09/logo-design-software.png" alt="Wizard of Words">
        </f7-link>
      </f7-nav-left>
      <f7-nav-title>Wizard of Words</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-f7="plus" href="/profile/"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-card class="card" no-shadow v-for="(post, index) in posts" :key="index">
      <f7-card-content :padding="false">
        <div class="card-data-div">
          <f7-card-header text-color="black" class="display-block card-header">
            <div class="user-data">
              <div class="avatar">
                <img :src="post.avatar" width="50" height="50" style="border-radius: 50%;"/>
              </div>
              <div class="data">
                <p>{{ post.by }}</p>
              </div>
            </div>
            <img :src="post.image" width="100%"/>

            <f7-block class="card-block">
              <f7-row>
                <f7-col>
                  <f7-button fill round class="l" @click="like_status = !like_status" :icon-color="like_status ? 'teal' : 'black'" :icon-f7="like_status ? 'hand_thumbsup_fill' : 'hand_thumbsup'" icon-size="20">&nbsp;5</f7-button>
                </f7-col>
                <f7-col>
                  <f7-button fill round class="l" @click="[comment_status = !comment_status, gotoPost(post)]" :icon-color="comment_status ? 'teal' : 'black'" :icon-f7="comment_status ? 'bubble_right_fill' : 'bubble_right'" icon-size="20">&nbsp;5</f7-button>
                </f7-col>
              </f7-row>
            </f7-block>
            
          </f7-card-header>
        </div>
      </f7-card-content>
    </f7-card>

  </f7-page>
</template>

<script>
export default {
  data () {
    return {
      like_status: false,
      comment_status: false,
      posts: [
        { avatar: 'https://starsunfolded.com/wp-content/uploads/2018/01/Anup-Upadhyay-compressed.jpg', by: 'David Mishra', image: 'https://studio.pinotspalette.com/ellicottcity/images/fotolia_24342727_m.jpg'},
        { avatar: 'https://vignette.wikia.nocookie.net/vampirediaries/images/9/98/Mikael2.png/revision/latest/top-crop/width/360/height/360?cb=20151107060146', by: 'Mikael Mikaelson', image: 'https://vignette.wikia.nocookie.net/vampirediaries/images/e/e4/Mikaelthreatensklaus.jpg/revision/latest?cb=20140308200709'},
        { avatar: 'https://www.bollywoodhungama.com/wp-content/uploads/2019/05/Birthday-Special-Karan-Johar-as-I-know-him.jpg', by: 'Karan Johar', image: 'https://images.squarespace-cdn.com/content/v1/54e64c19e4b035a09d92febb/1498483462670-EIBQ4T6505SX9RACM7AB/ke17ZwdGBToddI8pDm48kN7B_oZb4Xa1vkZELmtj_Qh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hveExjbswnAj1UrRPScjfCx8rcsak2fcGSF09K1d2vdJDrE62Fz0iFpVSFPap6Y6A/image-asset.jpeg'},
        { avatar: 'https://starsunfolded.com/wp-content/uploads/2014/02/Kunal-Khemu-2.jpg', by: 'Kunal Khemu', image: 'https://www.clickorlando.com/resizer/JnAjB-UOTefQBtn2C-bxmru2G4U=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/72OJBQJ5MZDXZFEOGR7TKHO5UM.jpg'},
        { avatar: 'https://i.insider.com/5ae75d4ebd967122008b4623?width=1100&format=jpeg&auto=webp', by: 'Thanos', image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'}
      ]
    }
  },
  methods: {
    gotoPost(post) {
      var post_string = JSON.stringify(post)
      this.$f7router.navigate('/postView/'+encodeURIComponent(post_string))
    }
  }
}
</script>

<style scoped>
.card-header {
  padding: 10px 0px;
}
.user-data {
  height: 50px;margin-bottom: 10px;display: flex;padding-left: 10px;
}
.data {
  padding-left: 10px;
}
.data p {
  margin: 0px; padding: 0px; font-size: 16px; line-height: 50px;
}
.card-block {
  padding: 0px 10px;
}
.l {
  color: rgb(105,105,105);font-size: 15px;background-color: rgba(192,192,192, .2);
}
</style>