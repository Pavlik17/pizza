<script setup>

import {Swiper,SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import ArrowPrevSlider from "@/components/icons/ArrowPrewSlider/ArrowPrevSlider.vue";
import ArrowNextSlider from "@/components/icons/ArrowNextSlider/ArrowNextSlider.vue";
import 'swiper/css';
import 'swiper/css/navigation';
import {ref} from "vue";
import axios from "axios";

const stocksProducts = ref([]); 
const HOST_SERVERS = 'http://localhost:8060';

const modules = [Navigation];
const space_between_slides = ref(30);

const navigation = {
    prevEl:'.prev-stocks-button',
    nextEl:'.next-stocks-button',
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

(async() =>{
  try{
    const response = await axios.get(`${HOST_SERVERS}/admin/get-images-stocks/get-images`);
    stocksProducts.value = response.data.stocks.map(item => ({
      ...item,
      image: `${HOST_SERVERS}${item.image}`
    }));
    console.log(stocksProducts.value);
  }catch(e){
    console.log(e);
  }
})()
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
      <swiper-slide class="stocks-slide" v-for="item in stocksProducts" :key="item.id">
        <img class="swiper-img" v-bind:src="item.image" alt="изображение">
      </swiper-slide>
      
      <!-- <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/pizza-stocks.png" alt="pizza"></swiper-slide>
      <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/kebab-stocks.png" alt="pizza"></swiper-slide>
      <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/dessert-stocks.png" alt="pizza"></swiper-slide>
      <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/pizza-stocks.png" alt="pizza"></swiper-slide>
      <swiper-slide class="stocks-slide"><img class="swiper-img" src="../../../public/assets/kebab-stocks.png" alt="pizza"></swiper-slide> 
     -->
    </swiper>
    <arrow-next-slider class="next-stocks-button"></arrow-next-slider>
  </div>
</template>

<style lang="scss" scoped src="./style.scss">

</style>
