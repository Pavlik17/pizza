<template>
    <div class="stocks-cart-component">
            <delete-cart-btn-admin></delete-cart-btn-admin>
            <img src="">
        <img class="stocks-image"\>
    </div>
</template>

<script setup>
    import DeleteCartBtnAdmin from '../icons/DeleteCartBtnAdmin/DeleteCartBtnAdmin.vue';
    const props = defineProps({
        imagePath:String,
    });
</script>

<style src="./style.scss"></style>