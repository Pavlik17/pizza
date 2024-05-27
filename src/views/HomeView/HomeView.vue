<script setup>
  import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
  import Header from "@/components/Header/Header.vue";
  import ContentMain from "@/components/ContentMain/ContentMain.vue";
  import Footer from "@/components/Footer/Footer.vue";
  import MainContainer from "@/components/MainContainer/MainContainer.vue";
</script>
<template>
    <MainLayout>
      <main-container>
        <ContentMain></ContentMain>
      </main-container>
    </MainLayout>
</template>
<style scoped src="./style.scss"></style>
