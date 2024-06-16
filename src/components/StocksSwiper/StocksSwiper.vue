<script setup>
import {Swiper,SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import ArrowPrevSlider from "@/components/icons/ArrowPrewSlider/ArrowPrevSlider.vue";
import ArrowNextSlider from "@/components/icons/ArrowNextSlider/ArrowNextSlider.vue";
import 'swiper/css';
import 'swiper/css/navigation';
import {ref} from "vue";

const modules = [Navigation];
const space_between_slides = ref(30);
const navigation = {
    prevEl:'.prev-stocks-button',
    nextEl:'.next-stocks-button'
};
const breakpoints = {
  499: {
    slidesPerView: 1,
    spaceBetweenSlides: 50
  },
  999: {
    slidesPerView: 3,
    spaceBetweenSlides: 50
  }
};

</script>

<template>
  <div class="swiper-stocks-container">
    <arrow-prev-slider class="prev-stocks-button"></arrow-prev-slider>
    <swiper class="swiper-stocks"
          :speed="100"
            :loop="true"
            :space-between="space_between_slides"
          :modules="modules"
            :slides-per-view="3"
          :navigation= "navigation"
          :breakpoints = "breakpoints"
    >
    <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/pizza-stocks.png" alt="pizza"></swiper-slide>
    <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/kebab-stocks.png" alt="pizza"></swiper-slide>
    <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/dessert-stocks.png" alt="pizza"></swiper-slide>
    <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/pizza-stocks.png" alt="pizza"></swiper-slide>
    <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/kebab-stocks.png" alt="pizza"></swiper-slide>
  </swiper>
  <arrow-next-slider class="next-stocks-button"></arrow-next-slider>
  </div>
</template>

<style lang="scss" scoped src="./style.scss">

</style>
