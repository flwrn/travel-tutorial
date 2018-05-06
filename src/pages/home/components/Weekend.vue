<template lang="html">
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/f6/f6fe49bdcbb82882a3.water.jpg_200x200_4b818361.jpg',
          title: '天津方特欢乐世界',
          desc: '滨海新区'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/style/mixins.styl'
  ul
    margin: 0
    padding: 0
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 33.9%
      .item-img
        width: 100%;
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      margin: 0
      padding: 0
      line-height: .54rem
      font-size: .32rem
    .item-desc
      margin: 0
      padding: 0
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .1rem
      border: 0
      border-radius: .06rem
      color: #fff
</style>
