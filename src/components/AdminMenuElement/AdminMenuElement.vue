<template>
    <div class="admin-menu-element">
        <div class="admin-menu">
            <admin-add-cart-menu></admin-add-cart-menu>
            <!--тут отображаем одну категорию продуктов и клмпонент добавления продукта привязанный к категории продукта -->
            <admin-product-cart></admin-product-cart>
            <!--добавить обертку для кнопки добавления продукта-->
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';

const sendProductMenu = async () =>{
  const file = document.getElementById().files[0];
  const formData = new FormData();
  formData.append('stocksImage', file);
  await axios.post('/add-image-menu-produts/add-image',{imageFile:formData,categoryId:props.categoryId},{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  });
};

const props = defineProps({
    categoryId:Number,
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