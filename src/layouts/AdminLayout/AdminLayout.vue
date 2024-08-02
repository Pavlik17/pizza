<template>
  <div class="admin-layout">
    <main-container>
      <h1 class="welcome-in-admin-panel">Добро пожаловать в админ-панель</h1>
      <auth-window></auth-window>
    </main-container>
  </div>
</template>

<script setup>
import AuthWindow from "@/components/AuthWindow/AuthWindow.vue";
import MainContainer from "@/components/MainContainer/MainContainer.vue";
</script>

<style lang="scss" scoped src="./style.scss"></style>
