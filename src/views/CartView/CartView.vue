<template>
    <MainLayout>
      <main-container>
        <cart-content>
        </cart-content>
      </main-container>
    </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import MainContainer from "@/components/MainContainer/MainContainer.vue";
import CartContent from "@/components/CartContent/CartContent.vue";

export default {
  components: {CartContent, MainContainer, MainLayout}

}
</script>

<style lang="scss" scoped>

</style>
