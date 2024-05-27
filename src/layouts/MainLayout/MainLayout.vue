<script setup>
  import Header from "@/components/Header/Header.vue";
  import Footer from "@/components/Footer/Footer.vue";
  import ContentMain from "@/components/ContentMain/ContentMain.vue";

  const props = defineProps({
  });
</script>
<template>
      <Header></Header>
    <div class="main-container__content-main">
      <slot></slot>
    </div>
      <Footer></Footer>
</template>
<style scoped src="style.scss"></style>
