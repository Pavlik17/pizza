<script setup>
  import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
  import Header from "@/components/Header/Header.vue";
  import ContentMain from "@/components/ContentMain/ContentMain.vue";
  import Footer from "@/components/Footer/Footer.vue";
</script>
<template>
    <MainLayout>
      <section class="main-container">
        <div class="main-container__header">
          <Header></Header>
        </div>
        <div class="main-container__content-main">
          <ContentMain></ContentMain>
        </div>
        <div class="main-container__footer">
          <Footer></Footer>
        </div>
      </section>
    </MainLayout>
</template>
<style scoped src="./style.scss"></style>
