<template>
    <div class="admin-menu-element">
        <div class="admin-menu">
            <h1 class="category-name">{{ props.categoryData.name }} </h1>
            <admin-add-cart-menu></admin-add-cart-menu>
            <admin-product-cart
                v-for="item in arrayProducts"
                :title ="item.title"
                :description = "item.description"
                :price = "item.price"
            >
            </admin-product-cart>
        </div>
    </div>
</template>

<script setup>
    import AdminProductCart from '../AdminProductCart/AdminProductCart.vue';
    import AdminAddCartMenu from '../AdminAddCartMenu/AdminAddCartMenu.vue';
    import { defineProps } from 'vue';
    import axios from 'axios';
    import { ref } from 'vue';

const sendProductMenu = async () =>{
  const file = document.getElementById().files[0];
  const formData = new FormData();
  formData.append('stocksImage', file);
  await axios.post('/add-image-menu-produts/add-image',
    {
        imageFile:formData,categoryId:props.categoryId
    },
    {
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  });
};

const props = defineProps({
    categoryData:Object,
    //вывести название категории и на основе id категории вывести карточки продуктов
});

const idCategory = ref();
const arrayProducts = ref([]);
const HOST_SERVER = 'http://localhost:8060';

(
    async () => {
    try{
        if(props.categoryData.id  == 1){
            arrayProducts.value = (await axios.get(`${HOST_SERVER}/product/pizza-products`))
            .data.pizzas_info ?? [];
        }
        else if(props.categoryData.id == 2)
        {
            arrayProducts.value = (await axios.get(`${HOST_SERVER}/product/snacks-products`)) 
            .data.snacks_info?? [];
        }
        else if(props.categoryData.id == 3)
        {         
            arrayProducts.value = (await axios.get(`${HOST_SERVER}/product/desserts-products`)) 
            .data.desserts_info ?? [];
        }
        else if(props.categoryData.id == 4)
        { 
            arrayProducts.value = (await axios.get(`${HOST_SERVER}/product/drancks-products`))
            .data.dranks_info ?? [];
        }
        else if(props.categoryData.id == 5)
        {            
            arrayProducts.value = (await axios.get(`${HOST_SERVER}/product/combo-products`))
            .data.combo_info ?? [];
        }
    }catch(error){
        alert(error.message);
    }
})();
</script>
<style src="./style.scss"></style>
