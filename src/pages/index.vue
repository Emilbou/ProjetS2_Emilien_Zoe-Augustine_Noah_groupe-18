<script setup lang="ts">


</script>

<template>
  <header>
    
  </header>

  <main class="">
    <img class=" col-span-12" src="src/assets/banner.webp" alt="">
    <div class="grid grid-cols-12 gap-10">
      <img class="col-start-5 col-span-4 -mt-20" src="src/assets/bienvenue.svg" alt="">

      <section class=" shadow-card-shadow bg-white col-start-5 col-span-4">
        <div class=" p-5">
          <h2 class=" font-poppins text-green-mid font-bold text-2xl ">Découvrir nos produits <br> frais locaux</h2>
          <div class=" flex justify-end p-0">
          <img class=" -m-5 h-36 " src="src/assets/lemon_crop.svg" alt="">
        </div></div>
      </section>
      <section class=" shadow-card-shadow bg-white col-start-5 col-span-4">
        <div class=" p-5">
          <h2 class=" font-poppins text-green-mid font-bold text-2xl ">Consulter les recettes de <br> nos utilisateurs</h2>
          <div class=" flex justify-end p-0">
          <img class=" -m-5 h-36 " src="src/assets/kiwi_crop.svg" alt="">
        </div></div>
      </section>

      <div class="grid grid-cols-7 gap-20">
        <div class="col-span-2"></div>
        <div class="col-span-5">

        </div>
      </div>
    </div>

    <div>
      <ul class=" mt-4" v-for="aliment in alimentliste" :key="aliment.id">
        <RouterLink :to="{ name: 'id', params: { id: aliment.id } }">
          <CardProduit v-bind="{ ...aliment }" />
        </RouterLink>
      </ul>
      <CardProduit v-for="(aliment, index) in alimentliste" :key="index" :aliment="aliment"></CardProduit>
    </div>
  </main>
</template>
