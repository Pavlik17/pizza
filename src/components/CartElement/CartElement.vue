<script setup>
import MinusCartButton from "@/components/icons/MinusCartButton/MinusCartButton.vue";
import PlusCartButton from "@/components/icons/PlusCartButton/PlusCartButton.vue";
import DeleteProductCartButton from "@/components/icons/DeleteProductCartButton/DeleteProductCartButton.vue";
import {ProductDataStore} from "@/store/store.js";
import DeleteProduct from "@/components/icons/DeleteProduct/DeleteProduct.vue";

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
      <img class="image" src="../../../public/assets/pizza_cart_image.png" alt="pizza">
    </div>
    <p class="product-name">{{props.product_name}}</p>
    <div class="quantity-panel">
      <minus-cart-button class="minus_quantity_button" @click="store.minusProductInCart(idProduct)"/>
      <div class="quantity_products">{{props.count}}</div>
      <plus-cart-button class="add_quantity_button" @click="store.plusProductInCart(idProduct)"/>
    </div>
    <div class="price_product">{{props.price * props.count}} р.</div>
    <delete-product-cart-button class="delete-product-cart-button" @click="store.removeProductFromCart(props.idProduct)"/>
  </div>

  <div class="mobile-cart-element">
    <div class="mobile-product-image">
      <img class="mobile-image" src="../../../public/assets/pizza_cart_image.png" alt="pizza">
    </div>
    <p class="mobile-product-name">{{props.product_name}}</p>
    <div class="mobile-quantity-price">
      <div class="mobile-quantity-panel">
        <minus-cart-button class="mobile-minus_quantity_button" @click="store.minusProductInCart(idProduct)"/>
        <div class="mobile-quantity_products">{{props.count}}</div>
        <plus-cart-button class="mobile-add_quantity_button" @click="store.plusProductInCart(idProduct)"/>
      </div>
      <div class="mobile-price_product">{{props.price * props.count}} р.</div>
    </div>
    <button class="mobile-delete-product-cart-button" @click="store.removeProductFromCart(props.idProduct)">
      <delete-product></delete-product>
    </button>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
