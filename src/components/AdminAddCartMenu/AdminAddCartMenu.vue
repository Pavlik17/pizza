<template>
    <div class="admin-add-cart-menu">
        <p class="name-field">Изображение</p>
        <input type="file" class="add-cart-button">
            <plus-icon-three></plus-icon-three>
        </input>
        <p class="name-field">Название</p>
        <input class="field-name" type="text" v-model="name"/>
        <p class="name-field">Описание</p>
        <input class="filed-description" type="text" v-model="description"/>
        <p class="name-field">Цена</p>
        <input class="field-price" type="number" v-model="price"/>
        <button class="save-button">Сохранить</button>
    </div>
</template>

<script setup>
    import PlusIconThree from '../icons/PlusIconsAdmin/PlusIconThree.vue';
</script>

<style src="./style.scss"></style>