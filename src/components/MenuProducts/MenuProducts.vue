<template>
  <div class="menu-container">
    <h1 class="menu-header">Меню</h1>
    <ul class="menu-items">
      <li :class="'menu-item'"
          v-for="(item,index) in categoriesProducts"
          :key="index"
          v-on:click="changeCategoryProducts(item.id)">
        {{item.name}}
      </li>
    </ul>
    <h1 class="current-product-title">
      {{activeCategory.name ?? "Продукты"}}
    </h1>
    <div class="carts-section">
      <ul class="carts-list">
        <product-cart v-for="item in currentProductList"
                      :key="item.id"
                      :image-path="item.image"
                      :title-product="item.title"
                      :description-product="item.description"
                      :price-product="item.price"
                      :id-product = "item.id"
        >
        </product-cart>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCart from "@/components/ProductCart/ProductCart.vue";
import BackandApiMainService from "@/services/BackandApiMainService.js";

let productsList = ref([]);
let currentProductList = ref(...productsList.value);
let categoriesProducts = ref([]);
let activeCategoryId = ref(1);
let activeCategory = ref(categoriesProducts.value);

(async () => {
  try {
    const temporaryArrayCategories = await BackandApiMainService.getCategories();
    const temporaryArrayProducts= await (BackandApiMainService.getProducts());
    productsList.value = temporaryArrayProducts.data?.products ?? [];
    categoriesProducts.value = temporaryArrayCategories.data?.categories ?? [];
    currentProductList.value = [...productsList.value];
  } catch (e) {}
})();

function changeCategoryProducts(newCategoryId){
    activeCategoryId.value = newCategoryId;
    activeCategory.value = categoriesProducts.value.filter((item) => item.id === activeCategoryId.value)[0];
    currentProductList.value = productsList.value.filter((item) => item.category_id === activeCategoryId.value);
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
