<template>
  <div class="stocks-products">
   <h1 class="stocks-products__stocks">Акции</h1>
    <stocks-swiper></stocks-swiper>
    <h1 class="stocks-products__populars">Часто покупают</h1>
    <popular-swiper></popular-swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import PopularSwiper from "@/components/PopularSwiper/PopularSwiper.vue";
import StocksSwiper from "@/components/StocksSwiper/StocksSwiper.vue";

</script>

<style lang="scss" scoped src="./style.scss">

</style>
