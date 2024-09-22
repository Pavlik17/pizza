<template>
    
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
    </main-container>
    <main-container>
        <div class="content-container"></div>
    </main-container>
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
</script>

<style src="./style.scss"></style>