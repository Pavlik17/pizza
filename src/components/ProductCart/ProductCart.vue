<template>
  <div class="product-cart">
    <slot name="image-product">
      <img class="image-product" src="../../../public/assets/pizza_image.png" alt="pizza">
    </slot>
    <h1 class="product-cart__title">{{props.titleProduct}}</h1>
    <p class="product-cart__description-product">{{props.descriptionProduct}}</p>
    <div class="product-cart__footer-cart">
      <div class="price-product">от {{props.priceProduct}} р.</div>
      <button-menu class="choose-button" v-on:click=""></button-menu>
    </div>
  </div>
</template>

<script setup>
import ButtonMenu from "@/components/icons/ButtonMenu/ButtonMenu.vue";

const props = defineProps({
  titleProduct:String,
  descriptionProduct:String,
  priceProduct:Number,
});
</script>

<style lang="scss" scoped src="./style.scss">

</style>
