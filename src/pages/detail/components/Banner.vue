<template lang="html">
  <div class="">
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_600x330_bda46e68.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          古北水镇
        </div>
        <div class="banner-number">
          <i class="fas fa-image banner-icon"></i>
          109
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"/>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery.vue'
export default {
  name: 'Banner',
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_r_800x800_0a55341c.jpg',
        'http://img1.qunarzz.com/sight/p0/1804/fc/fccc3af343e06f8aa3.img.jpg_r_800x800_914c6ed0.jpg'
      ],
      showGallery: false
    }
  },
  components: {
    CommonGallery
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/style/variable.styl'
.banner
  overflow: hidden
  height: 0
  padding-bottom: 55%
  position: relative
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      font-size: .32rem
      flex: 1
      padding: 0 .2rem
    .banner-number
      margin-top: .14rem
      padding: 0 .4rem
      line-height: .4rem
      height: .32rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
