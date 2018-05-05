<template lang="html">
  <div>
    <home-header/>
    <home-swiper/>
    <div class="">
      test info
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="scss" scoped>
</style>
