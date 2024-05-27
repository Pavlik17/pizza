<template>
  <div class="cart-content">
    <h1 class="cart-title">Корзина</h1>
   <main-container>
     <cart-element  v-for="(item,index) in cart_list"
                    v-bind:product_name = "item.value.titleProduct"
                    v-bind:total_price = "item.value.priceProduct"
                    v-bind:id-product = "item.value.idProduct"
     >
     </cart-element>
     {{store.products_in_cart}}
    <div class="total-sum">
      <p class="total">Итого:</p>
      <p class="total_prise"> {{store.total_price}} р.</p>
    </div>
    <order-button-cart></order-button-cart>
   </main-container>
    <main-container>
      <div class="order-information">
        <div class="shipping-method">
          <p>Доставка</p>
          <p>Самовывоз</p>
        </div>
        <div class="user-name">
          <p>Имя</p>
          <input class="input-field-name">
        </div>
        <div class="phone-number-user">
          <p>Телефон</p>
          <div class="fields-phone-numbers">
            <input class="code-country">
            <input class="phone-number">
          </div>
          <div class="address-fields">
            <div class="street">
              <p>Улица</p>
              <input class="street">
            </div>
            <div class="home-number">
              <p>Дом</p>
              <input class="home">
            </div>
            <div class="entrance-number">
              <p>Подъезд</p>
              <input class="entrance">
            </div>
            <div class="flat-number">
              <p>Квартира</p>
              <input class="flat">
            </div>
            <div class="floor-number">
              <p>Этаж</p>
              <input class="floor-number">
            </div>
          </div>
        </div>
      </div>
    </main-container>
  </div>
</template>

<script setup>

import MainContainer from "@/components/MainContainer/MainContainer.vue";
import CartElement from "@/components/CartElement/CartElement.vue";
import {ProductDataStore} from "@/store/store.js";
import OrderButtonCart from "@/components/icons/OrderButtonCart/OrderButtonCart.vue";
import {onBeforeMount, onMounted, ref, watch} from "vue";


let store = ProductDataStore();
let cart_list = ref([]);

onMounted(()=>{
  console.log('Массив после изъятия из хранилища:')
  console.log(cart_list);
});

</script>

<style lang="scss" scoped src="./style.scss">

</style>
