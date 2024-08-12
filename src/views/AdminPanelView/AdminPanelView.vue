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
            <ul class="stocks-list"></ul>
          </div>
          <input type="file" ref="stocks_input" id="stocks_image_file" v-on:change="sendStocksImage()" accept=".jpg, .jpeg, .png"  style="display: none;">
        </div>

        <div class="popular-container">
          <p class="populars-title">Часто покупают</p>
          
          <div class="often_carts">
            <div class="populars_file_wrap">
              <plus-icon-two class="plus-icon-two"></plus-icon-two>
              <label type="file" class="image_populars_file" for="populars_image_file"></label>
            </div>
            <ul class="often-list"></ul>
          </div>
          <input type="file" ref="populars_input" id="populars_image_file"  accept=".jpg, .jpeg, .png" v-on:change="sendPopularImage()"  style="display: none;">
        </div>

      </main-container>
      <main-container>
        <h1 class="menu-header">Меню</h1>
        <p class="menu-description">Добавляйте новые акции или удаляйте имеющиеся</p>
        <admin-menu-element v-for="item in arrayCategories" :category="item.name"></admin-menu-element>
      </main-container>
      <main-container>
      </main-container>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import router from '@/router';
import axios from 'axios';
import MainContainer from '@/components/MainContainer/MainContainer.vue';
import PlusIconOne from '../../components/icons/PlusIconsAdmin/PlusIconOne.vue';
import PlusIconTwo from '@/components/icons/PlusIconsAdmin/PlusIconTwo.vue';
import AdminMenuElement from '@/components/AdminMenuElement/AdminMenuElement.vue';
import BackandApiMainService from '@/services/BackandApiMainService';


const sendStocksImage = async () => {
  const file = document.getElementById("stocks_image_file").files[0];
  const formData = new FormData();
  formData.append('stocksImage', file);
  await axios.post('/add-image-stocks-populars/add-image',{fileImage:formData, idType:1},{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  });
};

const sendPopularImage = async () => {
  const file = document.getElementById("populars_image_file").files[0];
  const formData = new FormData();
  formData.append('popularsImage',file);
  await axios.post('/add-image-stocks-populars/add-image',{fileImage:formData, idType:2},{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  });
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
      console.error(error);
    }
  } else {
    router.push('/admin');
  }
};
  
checkToken();
</script>

<style lang="scss" scoped src="./style.scss">

</style>
