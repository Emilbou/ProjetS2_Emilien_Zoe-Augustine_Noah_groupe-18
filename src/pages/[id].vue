<script setup lang="ts">
import { allAliments } from '@/backend';
const props = defineProps<{ id: string }>();
const aliment = await allAliments(props.id);
</script>


<template>
 <h1 class="font-raleway font-bold lg:text-3xl text-xl">{{ aliment.nom }}</h1>
  <img class=" w-6/12 lg:w-2/12 " src="@/assets/img/pp.webp" alt="">
  <div class=" lg:w-4/12">
    <p class=" mt-5"> {{ aliment.Description }} </p>
  </div>
  <h1 class="font-raleway font-bold lg:text-3xl text-xl"> 2 oeuvres a connaitre</h1>
</template>