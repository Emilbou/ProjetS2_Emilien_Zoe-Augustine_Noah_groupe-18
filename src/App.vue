<script setup lang="ts">
import { RouterView } from 'vue-router';
import TestComponent from './components/TestComponent.vue';
import Footer from './components/Footer.vue';
import headerLayout from '@/components/header.vue';


</script>


<template>
<header>
  <headerLayout />
</header>
 <section class="px-60 bg-beige">
  <RouterView />
</section>
<Footer></Footer>
</template>
