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
/*const numberOfSlides = ref(3);

function handleResize(){
  if (document.documentElement.clientWidth >= 1320) {
    numberOfSlides.value = 3;
  } else if (document.documentElement.clientWidth > 800 && document.documentElement.clientWidth <= 1050) {
    numberOfSlides.value = 2;
  } else if(document.documentElement.clientWidth <600){
    numberOfSlides.value = 1;
  }
};*/
function resizeSpacesSlides(){
  if(document.documentElement.clientWidth < 1341){
  space_between_slides.value = 1;
}};
  //window.addEventListener('resize', handleResize);
  window.addEventListener('resize',resizeSpacesSlides);
</script>

<template>
  <div class="swiper-stocks-container">
    <arrow-prev-slider class="prev-stocks-button"></arrow-prev-slider>
    <swiper class="swiper-stocks"
          :slides-per-view="numberOfSlides"
          :speed="100"
            :loop="true"
            :space-between="space_between_slides"
          :modules="modules"
          :navigation="{
            prevEl:'.prev-stocks-button',
            nextEl:'.next-stocks-button'
          }">
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
