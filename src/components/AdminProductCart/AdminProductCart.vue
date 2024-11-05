<template>
    <div class="admin-product-cart">
        <div v-if="!editCart" class="admin-product-cart-deefault">
            <div class="change-delete-buttons">
                <change-cart-button-white></change-cart-button-white>
                <delete-cart-btn-admin></delete-cart-btn-admin>
            </div>
            <p class="title-product">{{ props.title }}</p>
            <p class="description-product">{{ props.description }}</p>
            <div class="price-choose-button">
                <p class = "price-product">от {{ props.price }} р.</p>
                <button class="choose-button">Выбрать</button>
            </div>
        </div>
        
        <div v-if="editCart" class="admin-product-cart-edit">
            <div class="change-delete-buttons">
                <change-cart-button-black></change-cart-button-black>
                <delete-cart-btn-admin></delete-cart-btn-admin>
            </div>
            <p>Название</p>
            <p class="title-product-edit"></p>
            <p>Описание</p>
            <p class="description-product-edit"></p>
            <p>Цена</p>
            <div class="price-choose-button-edit">
                <p class="price-edit">от </p>
                <button class="save-button" v-if="editCart">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChangeCartButtonWhite from "../icons/ChangeAdminCartButtons/ChangeCartButtonWhite.vue";
import ChangeCartButtonBlack from "../icons/ChangeAdminCartButtons/ChangeCartButtonBlack.vue";
import DeleteCartBtnAdmin from "../icons/DeleteCartBtnAdmin/DeleteCartBtnAdmin.vue";
import { ref } from "vue";
import { defineProps } from "vue";

const editCart = ref(false);

const props = defineProps({
    title:String,
    description:String,
    price:Number,
    imageSrc: String|null
});

</script>

<style src="./style.scss"></style>