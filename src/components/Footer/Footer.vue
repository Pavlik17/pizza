<template>

  <section class="footer">
    <main-container>
    <div class="footer__container">
    <div class="container__logo-section">
      <div class="footer-logo-pizza"><pizza-logo class="footer-logo-pizza__image"></pizza-logo></div>
      <div><pizza-logo-title></pizza-logo-title></div>
    </div>
    <div class="container__footer-menu">
      <ol class="menu">
        <li class="menu__footer-list-element">Контакты</li>
        <li class="menu__footer-list-element">Меню</li>
        <li class="menu__footer-list-element">Акции</li>
        <li class="menu__footer-list-element">Доставка</li>
        <li class="menu__footer-list-element">О нас</li>
      </ol>
      <div class="footer-menu__social-networks">
        <div class="social-networks__icon"><twitter-icon></twitter-icon></div>
        <div class="social-networks__icon"><v-k-icon></v-k-icon></div>
        <div class="social-networks__icon"><facebook-icon></facebook-icon></div>
      </div>
    </div>
    <div class="contacts">
      <p class="contacts__number-phone">+375292047076</p>
      <p class="contacts__text">Доступно в</p>
      <img src="../../../public/assets/footer_market_links.svg">
    </div>
    </div>
    </main-container>
  </section>

</template>

<script setup>
import PizzaLogo from "@/components/icons/PizzaLogo/PizzaLogo.vue";
import PizzaLogoTitle from "@/components/icons/PizzaLogoTitle/PizzaLogoTitle.vue";
import TwitterIcon from "@/components/icons/Twitter/TwitterIcon.vue";
import VKIcon from "@/components/icons/VK/VKIcon.vue";
import FacebookIcon from "@/components/icons/Facebook/FacebookIcon.vue";
import MainContainer from "@/components/MainContainer/MainContainer.vue";
</script>

<style lang="scss" scoped src="./style.scss">

</style>
