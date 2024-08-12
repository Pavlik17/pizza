<template>
      <Header></Header>
    <div class="main-container__content-main">
      <slot></slot>
    </div>
      <Footer></Footer>
</template>

<script setup>
  import Header from "@/components/Header/Header.vue";
  import Footer from "@/components/Footer/Footer.vue";
</script>

<style scoped src="style.scss"></style>
