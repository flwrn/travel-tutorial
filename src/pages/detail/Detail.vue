<template lang="html">
  <div class="">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="galleryImgs"
    />
    <detail-header/>
    <div class="content">
      <detail-list :list="list"/>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  computed: {
    ...mapState(['hostname'])
  },
  methods: {
    getDetailInfo () {
      axios.get(this.hostname + '/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/style/variable.styl'
.content
  height: 50rem
</style>
