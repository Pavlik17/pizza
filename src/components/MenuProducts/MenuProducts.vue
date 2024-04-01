<template>
  <div class="menu-container">
    <h1 class="menu-header">Меню</h1>
    <ul class="menu-items">
      <li :class="{
        'menu-item':item.show === false,
        'menu-item-red': item.show === true
      }"
          v-for="(item,index) in data.list "
          :key="index"
          v-on:click="changeMenuTitle(item.id)">
        {{item.id}}
      </li>
    </ul>
    <h1 class="current-product-title">
      {{state.currentMenuTitle}}
    </h1>
    <div class="carts-section">
      <ul class="carts-list">
        <product-cart v-for="(item,index) in currentProductList.list"
                      :key="index"
                      :title-product="item.name"
                      :description-product="item.description"
                      :price-product="item.price"
        >
        </product-cart>
      </ul>
    </div>
  </div>
</template>

<script setup>
import DeliveryPayment from "@/components/DeliveryPayment/DeliveryPayment.vue";
import {reactive, ref} from "vue";
import ProductCart from "@/components/ProductCart/ProductCart.vue";
const state = reactive({
  currentMenuTitle:'Пицца',
});


const changeMenuTitle = (new_value) => {
  const oldTitle = (data.value.list.find(item => item.id === state.currentMenuTitle)).id;
  const newTitle = (data.value.list.find(item => item.id === new_value)).id;
  state.currentMenuTitle = newTitle;

  let oldProductList = data.value.list.find(item => item.id === oldTitle);
  oldProductList.show = false;

  currentProductList = data.value.list.find(item => item.id === newTitle);
  currentProductList.show = true;

};

const data = ref({
  list:[
    {
      id:"Пицца",
      show:true,
      list:[
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 10 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 12 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 8 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 15 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 10 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 12 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 8 },
        { name: 'Домашняя', description: 'ОКуриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 15 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 10 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 12 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 8 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 15 },
        { name: 'Домашняя', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 15 }
      ],
    },
    {
      id:"Закуски",
      show: false,
      list:[
        { name: 'Маффины Шоко', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 5 },
        { name: 'Чиз вишневый', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 7 },
        { name: 'Сырники с малиной', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 4 },
        { name: 'Маффины Шоко', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 6 },
        { name: 'Чиз вишневый', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 5 },
        { name: 'Сырники с малиной', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 7 },
        { name: 'Шаурма Классик+Топ', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 4 },
        { name: 'Соус сырный + томатный', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 6 },
        { name: 'Аква+Сок Я', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 5 },
        { name: 'Маффины Шоко', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 7 },
        { name: 'Сырники с малиной', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 4 },
        { name: 'Чиз вишневый', description: 'Куриные кусочки, сладкий перец, моцарелла, красный лук, соус сладкий чили, соус альфре', price: 6 },
      ],
    },
    {
      id:"Дессерты",
      show:false,
      list:[
        { name: 'Десерт 1', description: 'Описание десерта 1', price: 3 },
        { name: 'Десерт 2', description: 'Описание десерта 2', price: 4 },
        { name: 'Десерт 3', description: 'Описание десерта 3', price: 5 },
        { name: 'Десерт 4', description: 'Описание десерта 4', price: 6 },
        { name: 'Десерт 1', description: 'Описание десерта 1', price: 3 },
        { name: 'Десерт 2', description: 'Описание десерта 2', price: 4 },
        { name: 'Десерт 3', description: 'Описание десерта 3', price: 5 },
        { name: 'Десерт 4', description: 'Описание десерта 4', price: 6 },
        { name: 'Десерт 1', description: 'Описание десерта 1', price: 3 },
        { name: 'Десерт 2', description: 'Описание десерта 2', price: 4 },
        { name: 'Десерт 3', description: 'Описание десерта 3', price: 5 },
        { name: 'Десерт 4', description: 'Описание десерта 4', price: 6 },
      ],
    },
    {
      id:"Напитки",
      show:false,
      list:[
        { name: 'Напиток 1', description: 'Описание напитка 1', price: 2 },
        { name: 'Напиток 2', description: 'Описание напитка 2', price: 3 },
        { name: 'Напиток 3', description: 'Описание напитка 3', price: 2 },
        { name: 'Напиток 4', description: 'Описание напитка 4', price: 4 },
        { name: 'Напиток 1', description: 'Описание напитка 1', price: 2 },
        { name: 'Напиток 2', description: 'Описание напитка 2', price: 3 },
        { name: 'Напиток 3', description: 'Описание напитка 3', price: 2 },
        { name: 'Напиток 4', description: 'Описание напитка 4', price: 4 },
        { name: 'Напиток 1', description: 'Описание напитка 1', price: 2 },
        { name: 'Напиток 2', description: 'Описание напитка 2', price: 3 },
        { name: 'Напиток 3', description: 'Описание напитка 3', price: 2 },
        { name: 'Напиток 4', description: 'Описание напитка 4', price: 4 },
      ],
    },
    {
      id:"Комбо",
      show:false,
      list:[
        { name: 'Комбо 1', description: 'Описание комбо 1', price: 20 },
        { name: 'Комбо 2', description: 'Описание комбо 2', price: 25 },
        { name: 'Комбо 3', description: 'Описание комбо 3', price: 18 },
        { name: 'Комбо 4', description: 'Описание комбо 4', price: 30 },
        { name: 'Комбо 1', description: 'Описание комбо 1', price: 20 },
        { name: 'Комбо 2', description: 'Описание комбо 2', price: 25 },
        { name: 'Комбо 3', description: 'Описание комбо 3', price: 18 },
        { name: 'Комбо 4', description: 'Описание комбо 4', price: 30 },
      ],
    }
  ],
});
let currentProductList = data.value.list.find(item => item.id === state.currentMenuTitle);
</script>

<style lang="scss" scoped src="./style.scss">

</style>
