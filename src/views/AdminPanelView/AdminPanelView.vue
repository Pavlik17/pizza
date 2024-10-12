<template>
  <div class="admin-panel-view">
      <main-container>
        <h1 class="admin-panel-header">Админ-панель</h1>
         
        <div class="stocks-container">
          <h1 class="stocks-header">Акции</h1>
          <p class="stocks-description">Добавляйте новые акции или удаляйте имеющиеся</p>
          
          <div class="stocks-carts">
            <div class="stocks_file_wrap">
              <plus-icon-one></plus-icon-one>
              <label class="image_file_stocks" for="stocks_image_file"></label>
            </div>
            
            <ul class="stocks-list">
              <stocks-cart-component v-for="item in imagesStocks.value" ></stocks-cart-component>
            </ul>
          </div>
          <input type="file" ref="stocks_input" id="stocks_image_file" @change="sendStocksImage" v-on:click="changeIdType(1)" accept=".jpg, .jpeg, .png">
        </div>

        <div class="popular-container">
          <p class="populars-title">Часто покупают</p>
          
          <div class="often_carts">
            <div class="populars_file_wrap">
              <plus-icon-two class="plus-icon-two"></plus-icon-two>
              <label type="file" class="image_populars_file" for="populars_image_file"></label>
            </div>
            <ul class="often-list" >
               <!--массив изображений-->
               <populars-cart-component></populars-cart-component>
            </ul>
          </div>
          <input type="file" ref="populars_input" id="populars_image_file"  accept=".jpg, .jpeg, .png" v-on:change="sendPopularImage()" v-on:click="changeIdType(2)" style="display: none;">
        </div>

      </main-container>
       <main-container>
        <h1 class="menu-header">Меню</h1>
        <p class="menu-description">Добавляйте новые варианты меню, удаляйте имеющиеся</p>
          <admin-menu-element v-for="item in categoriesMenuProducts" :categoryData="item"></admin-menu-element> 
        </main-container>
      <main-container>
      </main-container>
  </div>
</template>

d

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import router from '@/router';
import axios from 'axios';
import MainContainer from '@/components/MainContainer/MainContainer.vue';
import PlusIconOne from '../../components/icons/PlusIconsAdmin/PlusIconOne.vue';
import PlusIconTwo from '@/components/icons/PlusIconsAdmin/PlusIconTwo.vue';
import AdminMenuElement from '@/components/AdminMenuElement/AdminMenuElement.vue';
import BackandApiMainService from '@/services/BackandApiMainService';
import StocksCartComponent from '@/components/StocksCartComponent/StocksCartComponent.vue';


const HOST_SERVER = 'http://localhost:8060';
const imagesStocks = ref([]);
const imagesPopulars = ref([]);
const categoriesMenuProducts = ref([]);
const idTipe = ref(null);

const changeIdType = (num) => {
  idTipe.value = num;
};

(async() => {
  try{
    const temporaryCategoriesNames = await axios.get(`${HOST_SERVER}/product/category`);
    const tCategories = temporaryCategoriesNames.data.categories;

    // const comboProducts = await axios.get(`${HOST_SERVER}/product/combo-products`);
    // const dessertsProducts = await axios.get(`${HOST_SERVER}/product/desserts-products`);
    // const dranksProducts = await axios.get(`${HOST_SERVER}/product/drancks-products`);
    // const pizzaProducts = await axios.get(`${HOST_SERVER}/product/pizza-products`);
    // const snacksProducts = await axios.get(`${HOST_SERVER}/product/snacks-products`);

    
    tCategories.forEach(element => {
      categoriesMenuProducts.value.push(element);
    });
    // console.log(categoriesMenuProducts.value);
    // // categoriesMenuProducts.value = temporaryCategoriesNames;
    //  //console.log(temporaryCategoriesNames.data.categories);
    // temporaryCategoriesNames.data.categories.array.forEach(element => {
    //   categoriesMenuProducts.value = element;
    // });
  }catch(e){
    console.error(e);
  }
})()

const sendStocksImage = event => {
  const formData = new FormData();
  formData.append('idType', idTipe.value);
  formData.append('imageFile', event.target.files[0]);
  try {
    axios.post('http://localhost:8060/admin/add-image-stocks-populars/upload/', formData, {
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      });    
  } catch(e) {
    alert('IS NOT ZBS');
  }
};

const sendPopularImage = async () => {
  const formData = new FormData();
  formData.append('idType', 2);
  formData.append('imageFile', event.target.files[0]);
  try{
  await axios.post('/admin/add-image-stocks-populars/upload',formData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  });
}catch(e){
  alert('IS NOT ZBS');
}
};

const checkToken = async () => {
  const token = localStorage.getItem('token'); 
  if (token) {
    try {
      //запрос(сравнить токен с тем что в базе)
      const getToken = axios.post('/check-token/check-token',{},{
        headers:{
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(getToken);
    } catch (error) {
      router.push('/admin');
    }
  } else {
    router.push('/admin');
  }
};

checkToken();

</script>
<style lang="scss" scoped src="./style.scss">
</style>
