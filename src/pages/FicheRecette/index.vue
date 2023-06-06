<script setup lang="ts">
import { allRecette } from '@/backend';
import Cardrecette from '@/components/Cardrecette.vue';
const recetteliste = await allRecette();

</script>


<template>
  <section class="py-10">
    <div class="flex justify-center px-20 gap-4 ">
      <RouterLink to="FicheRecette" class="w-2/5 h-72 aspect-w-1 aspect-h-1">
        <div class="relative h-full">
          <img class="w-full h-full object-cover" src="@/assets/image-salade.webp" alt="">
          <p class="absolute top-0 left-0 m-2  text-white font-poppins font-medium  text-4xl">Salade césar</p>
        </div>
      </RouterLink>
      <RouterLink to="FicheRecette" class="w-3/5 h-72 aspect-w-1 aspect-h-1">
        <div class="relative h-full">
          <img class="w-full h-full object-cover" src="@/assets/image-cookies.webp" alt="">
          <p class="absolute top-0 left-0 m-2  text-white font-poppins font-medium  text-4xl">Les mieux notés</p>
        </div>
      </RouterLink>

    </div>
    <!-- ... -->
    <div class="flex justify-center px-20 gap-4 w-screen mt-4">
      <RouterLink to="FicheProduit" class="w-2/3">
        <div class="relative h-full">
          <img class="w-full h-full object-cover" src="@/assets/image-salade3.webp" alt="">
          <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-4xl">Recettes de saison
          </p>
        </div>
      </RouterLink>
      <RouterLink to="FicheProduit" class="w-1/4">
        <div class="relative h-full">
          <img class="w-full h-full object-cover" src="@/assets/image-bolognaises.webp" alt="">
          <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-4xl">Plats</p>
        </div>
      </RouterLink>
      <RouterLink to="FicheProduit" class="w-1/4">
        <div class="relative h-full">
          <img class="w-full h-full object-cover" src="@/assets/image-tiramisu.webp" alt="">
          <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-4xl">Desserts</p>
        </div>
      </RouterLink>
    </div>
    <!-- ... -->

  </section>
  <section class="flex w-full justify-center px-24">
    <section class="grille grid grid-cols-12 gap-4 ">
      <div class="col-span-12 flex flex-wrap gap-4 ">

        <ul class=" mt-4" v-for="recettes of recetteliste" :key="recettes.id">
          <RouterLink :to="{
              name: 'FicheRecette-id',
              params: { id: recettes.id }
            }">
            <Cardrecette class=" col-span-2" v-bind="{ ...recettes }" />
          </RouterLink>
        </ul>
      </div>
    </section>

  </section>
</template>

