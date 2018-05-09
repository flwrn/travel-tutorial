<template lang="html">
  <div class="">
    <detail-banner/>
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
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            children: [{
              title: '成人三馆联票 - 某一连锁店销售'
            }]
          }, {
            title: '成人五馆联票'
          }]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/style/variable.styl'
  .content
    height: 50rem
</style>
