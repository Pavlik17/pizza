<template>
  <div class="cart-element">
    <div class="product-image"></div>
    <p class="product-name">name{{product_name}}</p>
    <div class="quantity-panel">
      <minus-cart-button></minus-cart-button>
      <div class="quantity_products">quantity{{quantity_products.value}}</div>
      <plus-cart-button></plus-cart-button>
    </div>
    <div class="price_product">price{{total_price.value}} р.</div>
    <delete-product-cart-button></delete-product-cart-button>
  </div>
</template>

<script setup>
import MinusCartButton from "@/components/icons/MinusCartButton/MinusCartButton.vue";
import PlusCartButton from "@/components/icons/PlusCartButton/PlusCartButton.vue";
import {ref} from "vue";
import DeleteProductCart from "@/components/icons/DeleteProductCartButton/DeleteProductCartButton.vue";
import DeleteProductCartButton from "@/components/icons/DeleteProductCartButton/DeleteProductCartButton.vue";
let quantity_products = ref(0);
let total_price = ref(0);

const props = defineProps({
      total_price:Number,
      product_name:String,
      product_imgae:String,
      idProduct:Number,
    }
);
function plusTotalPrice(plusValue){
  total_price.value += plusValue;
};
function minusTotalPrice(minusValue){
  total_price.value -= minusValue;
};
function plusQuantityProduct(plusValue){
  quantity_products.value +=plusValue;
};
function minusQuantityProduct(minusValue){
  quantity_products.value -=minusValue;
};
function deleteProductFromArray(id_product){

}
</script>

<style lang="scss" scoped>

</style>
