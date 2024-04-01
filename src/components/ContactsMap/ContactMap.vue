<template>
  <div class="contact-map">
    <div class="contact-map__container">
      <h1 class="contact-map__container-title">Контакты</h1>
      <iframe class="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae12ab9a7bdecafdaaae42847d7cede83f60300031ab48b2e0144f6d43a0041e&amp;source=constructor" width="1140" height="428" frameborder="0"></iframe>
      <div class="contact-map__contacts-info">
        <div class="legal-address">
            <div class="legal-address__container-address">
                <img src="../../../public/assets/map_marker.svg" alt="marker">
                <p class="address">г.Минск, ул.Ленина, 42</p>
            </div>
            <div class="legal-address__container-email">
              <img src="../../../public/assets/mail_icon.svg" alt="img">
              <p class="email">info@VikiPizza.2024</p>
            </div>
        </div>
        <div class="time">
          <p class="legal-address__title">Режим работы:</p>
          <p class="time__info">пн-пт.: 18:00-21:00;</p>
          <p class="time__info">сб-вс.: выходной</p>
        </div>
        <div class="questions-numbers">
          <p class="legal-address__title">По различным вопросам:</p>
          <p class="questions-numbers__info">+375292047076</p>
          <p class="questions-numbers__info">+375297809076</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped src="./style.scss">

</style>
