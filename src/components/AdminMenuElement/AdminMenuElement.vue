<template>
    <div class="admin-menu-element">
        <div class="admin-menu">
            <!--тут отображаем одну категорию продуктов и клмпонент добавления продукта привязанный к категории продукта -->
            <admin-add-cart-menu></admin-add-cart-menu>
            <!--добавить обертку для кнопки добавления продукта-->
            <admin-product-cart></admin-product-cart>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';

const sendProductMenu = async () =>{
  const file = document.getElementById().files[0];
  const formData = new FormData();
  formData.append('stocksImage', file);
  await axios.post('/add-image-menu-produts/add-image',{fileImage:formData},{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  });
};

const props = defineProps({
    category:String,
})

(async () => {
    try{
        const arrayProducts = await BackandApiMainService.getProducts();
    }catch(error){
        return error;
    }
})

    import AdminProductCart from '../AdminProductCart/AdminProductCart.vue';
    import AdminAddCartMenu from '../AdminAddCartMenu/AdminAddCartMenu.vue';
    import BackandApiMainService from '@/services/BackandApiMainService';
</script>

<style src="./style.scss"></style>