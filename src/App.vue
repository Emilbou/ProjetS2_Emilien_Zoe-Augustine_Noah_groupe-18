<script setup lang="ts">
import TestComponent from './components/TestComponent.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <p class="bg-yellow text-2xl font-poppins">test</p>
  <div class="flex px-3">
    <TestComponent class="mx-5 items-center content-center" />
<RouterView/>
  </div>
<Footer/>
</template>
