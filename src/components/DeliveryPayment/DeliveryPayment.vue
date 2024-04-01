<template>
  <div class="delivery-payment">
    <h1 class="delivery-payment__title">Доставка и оплата</h1>
    <div class="delivery-payment__description">
      <div class="description__column">
        <h1 class="column__title">60 минут или пицца бесплатно</h1>
        <p class="column_text">Если мы не успеем доставить любые продукты в<br>
        течении 60 минут, курьер подарит вам сертификат<br>
          на большую пиццу.
        </p>
      </div>
      <div class="description__column">
        <h1 class="column__title">Минимальная сумма доставки 15.90</h1>
        <p class="column_text">Минимальная сумма доставки 15.90. Заказы на <br>
          меьшую сумму оформляются на условиях самовывоза.
        </p>
      </div>
      <div class="description__column">
        <h1 class="column__title">Зона доставки ограничена</h1>
        <p class="column_text">Зона доставки указана на карте.</p>
        <button-map-delivery class="button-map-delivery"></button-map-delivery>
      </div>
    </div>
    <div class="requisites">
      <div class="requisites__systems">
        <p class="requisites__systems-title">Принимаем к оплате</p>
        <div class="systems">
          <visa-cart-card-icon></visa-cart-card-icon>
          <master-cart-card-icon></master-cart-card-icon>
          <bel-card-icon></bel-card-icon>
          <img src="../../../public/assets/world_icon.svg" alt="icon">
        </div>
      </div>
      <div class="requisites__payment-methods">
        <p class="requisites__payment-methods-title">Способы оплаты</p>
        <div class="payment-type">
          <p class="payment-type-word-1">Наличный расчет</p>
          <p class="payment-type-word">Банковская карта</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import ButtonMenu from "@/components/icons/ButtonMenu/ButtonMenu.vue";
import ButtonMapDelivery from "@/components/icons/ButtonMapDelivery/ButtonMapDelivery.vue";
import VisaCartCardIcon from "@/components/icons/VisaCartCardIcon/VisaCartCardIcon.vue";
import MasterCartCardIcon from "@/components/icons/MasterCartCardIcon/MasterCartCardIcon.vue";
import BelCardIcon from "@/components/icons/BelCardIcon/BelCardIcon.vue";
import WorldCartIcon from "@/components/icons/WorldCartIcon/WorldCartIcon.vue";

</script>

<style lang="scss" scoped src="./style.scss">

</style>
