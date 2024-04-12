<script setup>
import ArrowPrevSlider from "@/components/icons/ArrowPrewSlider/ArrowPrevSlider.vue";
import ArrowNextSlider from "@/components/icons/ArrowNextSlider/ArrowNextSlider.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import {ref} from "vue";
const modules = [Navigation];

/*const numberOfSlides = ref(3);
function handleResize(){
  if(document.documentElement.clientWidth >= 1320){
    numberOfSlides.value = 3;
  }
  else if(document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth > 850){
    numberOfSlides.value = 2;
  }
  else if(document.documentElement.clientWidth < 850 && document.documentElement.clientWidth > 800){
    numberOfSlides.value = 2;
  }
  else if(document.documentElement.clientWidth < 800){
    numberOfSlides.value = 1;
  }
};
//window.addEventListener('resize', handleResize);*/
</script>
<template>
  <div class="swiper-populars-container">
    <arrow-prev-slider class="prev-popular-button"></arrow-prev-slider>
    <swiper class="swiper-popular"
            :navigation="{
              prevEl:'.prev-popular-button',
              nextEl:'.next-popular-button',
            }"
            :space-between="30"
            :modules="modules"
            :slides-per-view="numberOfSlides"
            :speed="100"
            :loop="true"
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



<style lang="scss" scoped src="./style.scss">

</style>
