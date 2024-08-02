<template>
  <div class="order-information">
      <div class="shipping-method">
        <p class="shipping_method__delivery" v-bind:class="{
          shipping_method__delivery_visited: !showPickupTime
        }" v-on:click="changeMethodReceivingOrder(false)">Доставка</p>

        <p class="shipping_method__pickup" v-bind:class="{
          shipping_method__pickup_visited: showPickupTime
        }" v-on:click="changeMethodReceivingOrder(true)">Самовывоз</p>
      </div>

      <div class="user-name" >
        <p>Имя</p>
        <input v-bind:class="{
          input_field_name: nameValidation || name.length === 0,
          validation_failed_input_name: !nameValidation,
        }" v-model="name" type="text" v-on:input="inputNameValidation($event)">
      </div>
      <div class="phone-number-user">
        <p>Телефон</p>
        <div class="fields-phone-numbers">
          <input v-bind:class="{
            code_country: codeOperatorValidation || code_operator.length === 0,
            validation_failed_code_country: !codeOperatorValidation
          }" v-model="code_operator" type="text" v-on:input="inputCodeOperatorValidation($event)">
          <input v-bind:class="{
            phone_number:phoneValidation || phone_number.length === 0,
            validation_failed_phone_number: !phoneValidation
          }" v-model="phone_number" type="text" v-on:input="inputPhoneValidation($event)">
        </div>
        <div class="address-fields">
          <div class="street-field">
            <p>Улица</p>
            <input v-bind:class="{
              street:streetValidation || street.length === 0,
              validation_failed_street: !streetValidation
            }" v-model="street" type="text" v-on:input="inputStreetValidation($event)">
          </div>
          <div class="home-number">
            <p>Дом</p>
            <input type="number" v-bind:class="{
              home:homeValidation || home.length === 0,
              validation_failed_home: !homeValidation
            }" v-model="home" v-on:input="inputHomeValidation($event)">
          </div>
          <div class="entrance-number">
            <p>Подъезд</p>
            <input type="number" v-bind:class="{
              entrance: entranceValidation || entrance.length === 0,
              validation_failed_entrance: !entranceValidation
            }" v-model="entrance" v-on:input="inputEntranceValidation($event)">
          </div>
          <div class="flat-number">
            <p>Квартира</p>
            <input
              type="number"
              :class="{
              flat:flatValidation || flat.length === 0,
              validation_failed_flat: !flatValidation
            }"
            v-model="flat"
            @:input="inputFlatValidation($event)">
          </div>
          <div class="floor-number">
            <p>Этаж</p>
            <input type="number" v-bind:class="{
              floor:floorValidation || floor.length === 0,
              validation_failed_floor: !floorValidation,
            }" v-model="floor" v-on:input="inputFloorValidation($event)">
          </div>
        </div>
      </div>
    <div class="pick-up-time" v-show="showPickupTime">
      <p class="pick-up-time__question">Через сколько планируете забрать?</p>
      <div class="pick-up-time_times">
        <button class="time-button" v-on:click="chooseTime(25)">25 мин</button>
        <button class="time-button" v-on:click="chooseTime(30)">30 мин</button>
        <button class="time-button" v-on:click="chooseTime(40)">40 мин</button>
        <button class="time-button" v-on:click="chooseTime(50)">50 мин</button>
        <button class="time-button" v-on:click="chooseTime(60)">60 мин</button>
      </div>
    </div>
    <div class="payment-method">
      <div class="payment-method-title">Способ оплаты</div>
      <div class="payment-buttons">
        <button class="cash-payment-button" v-on:click="payment_method = 'Наличный расчет'">Наличный расчет</button>
        <button class="bank-card-button" v-on:click="payment_method = 'Банковская карта'">Банковская карта</button>
      </div>
    </div>
    <div class="total-sum">
      <p class="total">Итого: </p>
      <p class="total_prise"> {{store.totalPriceProducts()}} р.</p>
    </div>
    <order-button-cart class="order-button-cart-1" v-on:click="placeAnOrder()"></order-button-cart>
    <a class="return-change-order-button" >Вернуться к редактированию заказа</a>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import OrderButtonCart from "@/components/icons/OrderButtonCart/OrderButtonCart.vue";
  import {ProductDataStore} from "@/store/store.js";
  import axios from "axios";
  import {
    inputPhoneValidation, inputFloorValidation, inputNameValidation,
    inputEntranceValidation, inputCodeOperatorValidation,
    inputStreetValidation, inputHomeValidation,
    inputFlatValidation, nameValidation, phoneValidation, codeOperatorValidation, streetValidation,
    floorValidation, homeValidation, entranceValidation, flatValidation, validationBeforeSending
  } from "@/components/OrderInformation/use/useOrderInformation.js";

  const store = ProductDataStore();

  const name = ref('');
  const code_operator = ref('');
  const phone_number = ref('');
  const street = ref('');
  const home = ref('');
  const entrance = ref('');
  const flat = ref('');
  const floor = ref('');
  const time = ref(0);
  const payment_method = ref('Наличный расчет');
  const method_receiving= ref('Доставка');
  const showPickupTime = ref(false);

  const changeMethodReceivingOrder = (par) => {
    if(par){
      showPickupTime.value = true;
      method_receiving.value = 'Самовывоз';
    }
    else{
      showPickupTime.value = false;
      method_receiving.value = 'Доставка';
    }
  };
  const chooseTime = (new_time) => {
    time.value = new_time;
  };
  const placeAnOrder = async () => {
    const form = {
      name: name.value,
      phone_number: code_operator.value + " " + phone_number.value,
      street: street.value,
      home: home.value,
      entrance: entrance.value,
      flat: flat.value,
      floor: floor.value,
      time: time.value,
      payment_method: payment_method.value,
      method_receiving: method_receiving.value,
      totalSum: store.totalPriceProducts(),
      // order_products:store.array_products.map(product => ({
      //   id: product.idProduct,
      //   count: product.count
      // }))
      order_products: [1,3]
    };

    const resultValidation = validationBeforeSending();
//
    console.log(form);
    if (resultValidation){
      await axios.post('/send-order', form);
      alert('Заказ принят в обработку.')
    }else {
      alert("Проверьте правильность введенных данных.");
    }
    //преобразуем в JSON
  };
</script>

<style lang="scss" scoped src="./style.scss">
</style>
