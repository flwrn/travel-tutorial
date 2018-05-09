<template lang="html">
  <div class="">
    <detail-banner/>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/style/variable.styl'
</style>
