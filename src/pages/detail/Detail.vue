<template lang="html">
  <div class="">
    <detail-banner/>
    <detail-header/>
    <div class="content">

    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/style/variable.styl'
  .content
    height: 50rem
</style>
