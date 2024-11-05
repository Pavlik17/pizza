<!-- все полученные из полей input данные запихнуть через append в FormData
  и отправить на сервер через axios-->

<template>
    <div class="admin-add-cart-menu">
        <p class="name-fields">Изображение</p>
        <div class="add-cart-button-element">
                <input type="file" id="plus-icon-input" v-on:change="onFileChange">
                <label type="file" class="add-cart-button" for="plus-icon-input"></label>
                <plus-icon-three class="plus-icon"></plus-icon-three>
        </div>
        <p class="name-fields" >Название</p>
        <input class="field-name" type="text" v-model="name_product"/>
        <p class="name-fields">Описание</p>
        <input class="filed-description" type="text" v-model="description_product"/>
        <p class="name-fields">Цена</p>
        <input class="field-price" type="number" v-model="price_product"/>
        <button class="save-button" v-on:click="sendData">Сохранить</button>

       
    </div>
</template>

<script setup>
    import axios from 'axios';
    import PlusIconThree from '../icons/PlusIconsAdmin/PlusIconThree.vue';
    import { ref} from 'vue';
    import { defineProps } from 'vue';
    
    const props = defineProps({
        idCategory:Number,
    });

    const image_product = ref(null);
    const name_product = ref('');
    const description_product = ref('');
    const price_product = ref();  

    const sendData = async() =>{
        const productData = new FormData();
        productData.append('name_product',name_product.value);
        productData.append('description_product',description_product.value);
        productData.append('price_product',price_product.value);
        productData.append('image_product',image_product.value);
        productData.append('idCategry',props.idCategory);
        console.log(productData);

        await axios.post('http://localhost:8060/admin/add-admin-menu-products/upload', productData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
    };
    const onFileChange = (event) =>{
        const imageFile = event.target.files;
        if(imageFile.length > 0 ){
            image_product.value = imageFile[0];
            console.log('изображение загружено успешно')
            console.log(image_product.value);
        }else{
            console.log('изображение не загружено');
        }
        
    } 
</script>

<style src="./style.scss"></style>