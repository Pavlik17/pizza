<template>
  <section class="header">
    <main-container>
      <div class="container__top-header">
        <div class="mobile-menu">
          <mobile-menu-button class="mobile-menu-button" v-on:click="changeShowMobileMenu"></mobile-menu-button>
          <ol class="mobile-header-list" v-show="showMobileMenu">
            <li class="mobile-header-list-element">Акции</li>
            <li class="mobile-header-list-element">Меню</li>
            <li class="mobile-header-list-element">Доставка</li>
            <li class="mobile-header-list-element">Контакты</li>
            <li class="mobile-header-list-element">О нас</li>
          </ol>
        </div>
        <router-link to="/">
        <div class="header__header-logo-section">
          <div class="logo-pizza"><pizza-logo></pizza-logo></div>
          <div><pizza-logo-title></pizza-logo-title></div>
        </div>
        </router-link>
        <ol class="header-list">
          <li class="header-list-element">Акции</li>
          <li class="header-list-element">Меню</li>
          <li class="header-list-element">Доставка</li>
          <li class="header-list-element">Контакты</li>
          <li class="header-list-element">О нас</li>
        </ol>
         <router-link to="/cart" class="cart_button" >
            <cart-button class="cart-button-word"></cart-button>
            <shop-cart class="shop-cart"></shop-cart>
         </router-link>
      </div>

      <div class="container__bottom-header" v-show="showBottomHeader">
        <div class="bottom-header__left-block">
          <p class="left-block__price">19.90 р</p>
          <h1 class="left-block__title">Pizza<br>Delicious</h1>
          <p class="left-block__description">Куриные кусочки, сладкий перец,<br>
              моцарелла, соус, сладкий чили, соус альфре</p>
          <div class="bottom-header__block-button">
            <button class="block-button__red-button">Купить</button>
            <button class="block-button__white-button">Меню</button>
          </div>
        </div>
        <img class="big-pizza-image" src="../../../public/assets/BigPizza.png" alt="Pizza">
        <div class="bottom-header__right-block">
          <div class="right-block__info">
            <p class="info__title">Лучшие ингредиенты</p>
            <p class="info__info">Наши пиццы состоят из лучших<br> отборных ингредиентов</p>
          </div>
          <div class="right-block__info">
            <p class="info__title">Лучшие мастера</p>
            <p class="info__info">Готовятся лучшими<br> мамстерами своего дела</p>
          </div>
          <div class="right-block__info">
            <p class="info__title">Быстрая доставка</p>
            <p class="info__info">Доставим пиццу быстро за<br>45 минут</p>
          </div>
        </div>
      </div>
    </main-container>
  </section>
</template>

<script setup>
import CartButton from "@/components/icons/CartButton/CartButton.vue";
import PizzaLogo from "@/components/icons/PizzaLogo/PizzaLogo.vue";
import PizzaLogoTitle from "@/components/icons/PizzaLogoTitle/PizzaLogoTitle.vue";
import MobileMenuButton from "@/components/icons/MobileMenuButton/MobileMenuButton.vue";
import {ref} from "vue";
import MainContainer from "@/components/MainContainer/MainContainer.vue";
import ShopCart from "@/components/icons/ShopCart/ShopCart.vue";

const showMobileMenu = ref(false);
const showBottomHeader = ref(true);
const changeShowMobileMenu = () => showMobileMenu.value = !showMobileMenu.value;

if(location.pathname !== '/') showBottomHeader.value = false;
</script>
<style src="./style.scss" scoped>
</style>
