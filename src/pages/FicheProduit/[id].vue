<script setup lang="ts">
import idproduit from '@/components/idproduit.vue';
import { getIDproduit } from '@/backend';
const props = defineProps<{ id: string }>();
const produits = await getIDproduit(props.id);


</script>



<template>
  <idproduit v-bind="{...produits}">

  </idproduit>
  </template>
  
