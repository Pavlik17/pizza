<template>
    <div class="admin-add-cart-menu">
        <p class="name-fields">Изображение</p>
        <div class="add-cart-button-element">
            <input type="file" id="plus-icon-input">
            <label type="file" class="add-cart-button" for="plus-icon-input"></label>
            <plus-icon-three class="plus-icon"></plus-icon-three>
        </div>
        <p class="name-fields">Название</p>
        <input class="field-name" type="text" />
        <p class="name-fields">Описание</p>
        <input class="filed-description" type="text" />
        <p class="name-fields">Цена</p>
        <input class="field-price" type="number" />
        <button class="save-button">Сохранить</button>

        <!-- Заставить работать кнопки добавления продукта -->
    </div>
</template>

<script setup>
    import PlusIconThree from '../icons/PlusIconsAdmin/PlusIconThree.vue';
</script>

<style src="./style.scss"></style>