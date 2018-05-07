<template lang="html">
  <div class="header">
    城市选择
    <router-link to="/">
      <i class="header-back fas fa-chevron-left"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/style/variable.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-back
    width: .64rem
    text-align: center
    position: absolute
    top: 0
    left: 0
    color: #fff
    line-height: $headerHeight
</style>
