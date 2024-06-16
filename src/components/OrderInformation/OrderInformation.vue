<template>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped src="./style.scss">

</style>
