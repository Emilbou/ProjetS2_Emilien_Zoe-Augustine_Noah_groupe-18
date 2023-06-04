<script setup lang="ts">
import FooterLayout from './components/Footer.vue';
import HeaderLayout from './components/Header.vue';
</script>

<template>
  <HeaderLayout />
 
  <Suspense>

  <div class="bg-beige">

    <RouterView />
  </div>

</Suspense>
  <FooterLayout />
</template>
