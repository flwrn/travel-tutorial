<template lang="html">
  <div class="header">
    <div class="header-left">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="header-input">
      <i class="fas fa-search"></i>
      输入城市经典游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <i class="fas fa-caret-down"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/style/variable.styl'
.header
  font-size: .32rem
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff

  .header-left
    width: .64rem
    float: left
    text-align: center

  .header-input
    flex: 1
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    height: .64rem
    line-height: .64rem
    background: #fff
    border-radius: .1rem
    color: #ccc

  .header-right
    width: 1.24rem
    float: right
    text-align: center
    color: #fff
</style>
