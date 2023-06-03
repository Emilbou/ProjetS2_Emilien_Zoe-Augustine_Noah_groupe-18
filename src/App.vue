<script setup lang="ts">
import TestComponent from './components/TestComponent.vue';
import FooterLayout from './components/Footer.vue';
import HeaderLayout from './components/header.vue';
</script>

<template>
  <HeaderLayout />
  <p class="bg-yellow text-2xl font-poppins">test</p>
  <Suspense>
  <div class=" bg-beige">

    <RouterView />
  </div>
</Suspense>
  <FooterLayout />
</template>
