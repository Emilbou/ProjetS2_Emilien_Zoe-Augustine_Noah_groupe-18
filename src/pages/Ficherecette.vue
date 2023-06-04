<script setup lang="ts">

import { allAliments } from '@/backend';
import CardProduit from '@/components/CardProduit.vue';
const alimentliste = await allAliments();

import Maps from '@/components/Maps.vue';
import Card from '@/components/CardProduit.vue';
</script>


<template>
  <section class="flex w-full justify-center px-32">
    <section class="grille grid grid-cols-12 gap-4 ">
      <div class="col-span-12 flex flex-wrap gap-4 ">

       

        <ul class=" mt-4" v-for="aliment in alimentliste" :key="aliment.id">
          <RouterLink :to="{ name: 'id', params: { id: aliment.id } }">
            <CardProduit v-bind="{ ...aliment }" />
          </RouterLink>
        </ul>
      </div>
    </section>

  </section>
</template>

