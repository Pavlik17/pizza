<template>
  <div class="cart-content">
    <h1 class="cart-title">Корзина</h1>
   <main-container>
     <cart-element
         v-for="item in store.array_products"
         :product_name = "item.titleProduct"
         :count = "item.count"
         :price = "item.priceProduct"
         :id-product = "item.idProduct"
     />
    <div class="total-sum">
      <p class="total">Итого: </p>
      <p class="total_prise"> {{store.totalPriceProducts()}} р.</p>
    </div>
   </main-container>
    <main-container>
      <order-information/>
    </main-container>
  </div>
</template>

<script setup>

import MainContainer from "@/components/MainContainer/MainContainer.vue";
import CartElement from "@/components/CartElement/CartElement.vue";
import {ProductDataStore} from "@/store/store.js";
import OrderInformation from "@/components/OrderInformation/OrderInformation.vue";

const store = ProductDataStore();
</script>

<style lang="scss" scoped src="./style.scss">
</style>
