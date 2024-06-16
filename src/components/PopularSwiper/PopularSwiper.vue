<script setup>
import ArrowPrevSlider from "@/components/icons/ArrowPrewSlider/ArrowPrevSlider.vue";
import ArrowNextSlider from "@/components/icons/ArrowNextSlider/ArrowNextSlider.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import 'swiper/css';

const modules = [Navigation];
const navigation = {
  prevEl:'.prev-popular-button',
  nextEl:'.next-popular-button',
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
  <div class="swiper-populars-container">
    <arrow-prev-slider class="prev-popular-button"></arrow-prev-slider>
    <swiper class="swiper-popular"
      :navigation="navigation"
      :modules="modules"
      :speed="100"
      :loop="true"
      :slides-per-view="3"
      :breakpoints="breakpoints"
    >
      <swiper-slide class="popular-slide"><img class="popular-img" src="../../../public/assets/derev_slide.png" alt="slide"></swiper-slide>
      <swiper-slide class="popular-slide"><img class="popular-img" src="../../../public/assets/barbecu_slide.png" alt="slide"></swiper-slide>
      <swiper-slide class="popular-slide"><img class="popular-img" src="../../../public/assets/draniki_slide.png" alt="slide"></swiper-slide>
      <swiper-slide class="popular-slide"><img class="popular-img" src="../../../public/assets/derev_slide.png" alt="slide"></swiper-slide>
      <swiper-slide class="popular-slide"><img class="popular-img" src="../../../public/assets/barbecu_slide.png" alt="slide"></swiper-slide>
    </swiper>
    <arrow-next-slider class="next-popular-button"></arrow-next-slider>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
