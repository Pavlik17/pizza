<script setup>
import ArrowPrevSlider from "@/components/icons/ArrowPrewSlider/ArrowPrevSlider.vue";
import ArrowNextSlider from "@/components/icons/ArrowNextSlider/ArrowNextSlider.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import axios from "axios";
import 'swiper/css';
import { ref } from "vue";

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

const popularsImages = ref([]);
const HOST_SERVER = 'http://localhost:8060';

(async () => {
  try {
    const response = await axios.get(`${HOST_SERVER}/admin/get-images-populars/get-images`);
    popularsImages.value = response.data.popular.map(item => ({
      ...item,
      image: `${HOST_SERVER}${item.image}`
    }));
    console.log(popularsImages.value);
  } catch (e) {
    alert('Произошел распиздец');
  }
})()
</script>

<template>
  <div class="swiper-populars-container">
    <arrow-prev-slider class="prev-popular-button"></arrow-prev-slider>
    <swiper class="swiper-popular"
      :navigation="navigation"
      :modules="modules"
      :speed="100"
      :loop="true"
      :loopSlides="true"
      :slides-per-view="5"
      :breakpoints="breakpoints"
    >
    
    <swiper-slide class="popular-slide" v-for="item in popularsImages" :key="item.id">
      <img class="popular-img" v-bind:src="item.image" alt="изображение"> 
    </swiper-slide> 
    
      <!-- 
        <swiper-slide class="popular-slide"><img class="popular-img" src="../../../public/assets/draniki_slide.png" alt="slide"></swiper-slide>
        <swiper-slide class="popular-slide" ><img class="popular-img" src="../../../public/assets/draniki_slide.png" alt="slide"></swiper-slide>
        <swiper-slide class="popular-slide" ><img class="popular-img" src="../../../public/assets/draniki_slide.png" alt="slide"></swiper-slide>
        <swiper-slide class="popular-slide" ><img class="popular-img" src="../../../public/assets/draniki_slide.png" alt="slide"></swiper-slide>
        <swiper-slide class="popular-slide" ><img class="popular-img" src="../../../public/assets/draniki_slide.png" alt="slide"></swiper-slide> 
      -->

    </swiper>
    <arrow-next-slider class="next-popular-button"></arrow-next-slider>
  </div>                        
</template>

<style lang="scss" scoped src="./style.scss"></style>
