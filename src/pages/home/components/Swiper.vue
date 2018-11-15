<template lang="html">
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="isSwiperReady">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    isSwiperReady () {
      if (this.swiperList.length) {
        return true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

// Why use curly braces here?
.wrapper >>> .swiper-pagination-bullet {
  background: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 26.7%;
  overflow: hidden;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>
