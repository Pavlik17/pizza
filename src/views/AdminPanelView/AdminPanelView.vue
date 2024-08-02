<template>
  <div class="admin-panel-view">
      <main-container>
        <h1 class="admin-panel-header">Админ-панель</h1>
        <div class="stocks-container">
          <h1 class="stocks-header">Акции</h1>
          <p class="stocks-description">Добавляйте новые акции или удаляйте имеющиеся</p>
          <div class="stocks-carts">
            <button class="add-stocks-product">
                <plus-icon-one></plus-icon-one>              
            </button>

            <ul class="stocks-list"></ul>
          </div>
        </div>
        <div class="popular-container">
          <p class="populars-title">Часто покупают</p>
          <div class="often_carts">
            <button class="add-often-product">
              <PlusIconTwo></PlusIconTwo>
            </button>
            <ul class="often-list"></ul>
          </div>
        </div>
      </main-container>
      <main-container>
        <h1 class="menu-header">Меню</h1>
        <p class="menu-description">Добавляйте новые акции или удаляйте имеющиеся</p>
       
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
