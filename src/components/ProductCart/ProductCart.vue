<script setup>
import ButtonMenu from "@/components/icons/ButtonMenu/ButtonMenu.vue";
import {ProductDataStore} from "@/store/store.js";

const props = defineProps({
  imagePath:String,
  titleProduct:String,
  descriptionProduct:String,
  priceProduct:Number,
  idProduct:Number,
});

const store = ProductDataStore();

let image = null;
props.imagePath ?  image = 'http://localhost:8060' + props.imagePath :
  image = '../../../public/assets/pizza_image.png';

</script>

<template>
  <div class="http://localhost:8060' + product-cart">
    <slot name="image-product">
      <img class="image-product" :src="image" alt="pizza">
    </slot>
    <h1 class="product-cart__title">{{ props.titleProduct }}</h1>
    <p class="product-cart__description-product">{{props.descriptionProduct}}</p>
    <div class="product-cart__footer-cart">
      <div class="price-product">от {{props.priceProduct}} р.</div>
      <button-menu class="choose-button" @click="store.addProductsInCart(props.idProduct, props.titleProduct,props.priceProduct, 1)"></button-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
