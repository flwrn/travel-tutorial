<template lang="html">
  <div class="header">
    <div class="header-left">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="header-input">
      <i class="fas fa-search"></i>
      输入城市经典游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="fas fa-caret-down"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~@/style/variable.scss';

.header {
  font-size: .32rem;
  display: flex;
  line-height: .86rem;
  background: $bgColor;
  color: #fff;
  .header-left {
    width: .64rem;
    float: left;
    text-align: center;
  }
  .header-input {
    flex: 1;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    height: .64rem;
    line-height: .64rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
  }
}
</style>
