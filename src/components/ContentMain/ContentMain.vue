<template>
  <div class="content-main">
    <div class="content-main__container">
      <sliders-products></sliders-products>
      <menu-products></menu-products>
      <delivery-payment></delivery-payment>
      <contact-map></contact-map>
   </div>
 </div>
</template>

<script setup>
import MenuProducts from "@/components/MenuProducts/MenuProducts.vue";
import SlidersProducts from "@/components/SlidersProducts/SlidersProducts.vue";
import DeliveryPayment from "@/components/DeliveryPayment/DeliveryPayment.vue";
import ContactMap from "@/components/ContactsMap/ContactMap.vue";
import { onMounted } from "vue";

onMounted(() => localStorage.setItem('auth_window_state',false));
</script>

<style lang="scss" scoped src="./style.scss"></style>
