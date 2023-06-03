<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <section class="flex flex-col">
  <div class="flex items-center flex-row ">
<h1 class="text-green-dull font-medium text-4xl">Citrons jaunes</h1> <span><img src="@/components/icons/heart-default.svg" alt="">
</span><span><img src="@/components/icons/icon-scart-default.svg" alt=""></span>
  </div>
  <section>
    <Carousel class="w-full"></Carousel>
  </section>
  </section>

</template>
