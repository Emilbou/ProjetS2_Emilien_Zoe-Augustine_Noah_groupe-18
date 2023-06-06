<script setup lang="ts">
import { allRecette } from '@/backend';
import Cardrecette from '@/components/Cardrecette.vue';
const recetteliste = await allRecette();
console.log(recetteliste)
</script>


<template>
  <section class="flex w-full justify-center px-24">
    <section class="grille grid grid-cols-12 gap-4 ">
      <div class="col-span-12 flex flex-wrap gap-4 ">

        <ul class=" mt-4" v-for="recettes of recetteliste" :key="recettes.id">
          <RouterLink
           :to="{ 
            name: 'FicheProduit-id',
             params: { id: recettes.id } }">
            <Cardrecette class=" col-span-2" v-bind="{ ...recettes }" />
          </RouterLink>
        </ul>
      </div>
    </section>

  </section>
</template>

