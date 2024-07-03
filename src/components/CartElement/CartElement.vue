<script setup>
import MinusCartButton from "@/components/icons/MinusCartButton/MinusCartButton.vue";
import PlusCartButton from "@/components/icons/PlusCartButton/PlusCartButton.vue";
import DeleteProductCartButton from "@/components/icons/DeleteProductCartButton/DeleteProductCartButton.vue";
import {ProductDataStore} from "@/store/store.js";

const store = ProductDataStore();
const props = defineProps({
      price:Number,
      product_name:String,
      product_image:String,
      idProduct:Number,
      count: Number,
    }
);
</script>

<template>
  <div class="cart-element">
    <div class="product-image">
      <img src="../../../public/assets/pizza_cart_image.png" alt="pizza">
    </div>
    <p class="product-name">{{props.product_name}}</p>
    <div class="quantity-panel">
      <minus-cart-button @click="store.minusProductInCart(idProduct)"/>
      <div class="quantity_products">{{props.count}}</div>
      <plus-cart-button @click="store.plusProductInCart(idProduct)"/>
    </div>
    <div class="price_product">{{props.price * props.count}} р.</div>
    <delete-product-cart-button class="delete-product-cart-button" @click="store.removeProductFromCart(props.idProduct)"/>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
