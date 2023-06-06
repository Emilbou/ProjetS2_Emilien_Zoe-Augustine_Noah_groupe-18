<script setup lang="ts">
import { allProduit } from '@/backend';
import CardProduit from '@/components/CardProduit.vue';
const produitliste = await allProduit();
console.log(produitliste)
</script>


<template>
  <section class="flex w-full justify-center px-32">
    <section class="grille grid grid-cols-12 gap-4 ">
      <div class="col-span-12 flex flex-wrap gap-4 ">

        <ul class=" mt-4" v-for="produits of produitliste" :key="produits.id">
          <RouterLink
           :to="{ 
            name: 'FicheProduit-id',
             params: { id: produits.id } }">
            <CardProduit class=" col-span-2" v-bind="{ ...produits }" />
          </RouterLink>
        </ul>
      </div>
    </section>

  </section>
</template>

