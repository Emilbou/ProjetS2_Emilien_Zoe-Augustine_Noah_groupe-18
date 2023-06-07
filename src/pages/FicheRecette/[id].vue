<script setup lang="ts">
import idrecette from '@/components/idrecette.vue';
import { getIDrecette } from '@/backend';
const props = defineProps<{ id: string }>();
const recette = await getIDrecette(props.id);


</script>



<template>
  <idrecette v-bind="{...recette}">

  </idrecette>
  </template>
  
