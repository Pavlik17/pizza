<template>
    <div class="stocks-cart-component">
            <delete-cart-btn-admin></delete-cart-btn-admin>
            {{props.imagePath}}
            <p>a</p>
            <img src="">
    </div>
</template>

<script setup>
    import DeleteCartBtnAdmin from '../icons/DeleteCartBtnAdmin/DeleteCartBtnAdmin.vue';
    const props = defineProps({
        imagePath:null,
    });
</script>

<style src="./style.scss"></style>