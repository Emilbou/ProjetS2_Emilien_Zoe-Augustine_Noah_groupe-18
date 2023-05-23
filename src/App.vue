<script setup lang="ts">
import { RouterView } from 'vue-router';
import TestComponent from './components/TestComponent.vue';
import Footer from './components/Footer.vue';
import header from './components/header.vue';


</script>

<template>
 
  
  <p class="bg text-2xl font-poppins">test</p>
  <div class="flex px-3">
    <TestComponent class="mx-5 items-center content-center" />

  </div>

  <RouterView />
<Footer/>
</template>
