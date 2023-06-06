<script setup lang="ts">


</script>

<template>
  <header>

  </header>

  <main class="">
    <img class=" col-span-12" src="src/assets/banner.webp" alt="">
    <div class="lg:grid lg:grid-cols-12 gap-10">
      <img class=" w-3/5 lg:w-full -mt-14 lg:col-start-5 lg:col-span-4  place-self-center justify-center mx-auto" src="src/assets/bienvenue.svg" alt="">


      <section class=" m-5  shadow-card-shadow bg-white lg:col-start-5 lg:col-span-4 ">
        <RouterLink to="/FicheProduit">
          <div class=" p-5">
            <h2 class=" font-poppins text-green-mid font-bold lg:text-2xl text-base ">Découvrir nos produits <br> frais locaux</h2>
            <div class=" flex justify-end p-0">
              <img class=" -m-5 h-36 " src="src/assets/lemon_crop.svg" alt="">
            </div>
          </div>
        </RouterLink>
      </section>


      <section class="m-5  shadow-card-shadow bg-white lg:col-start-5 lg:col-span-4 mb-20">
        <RouterLink to="/FicheRecette">
          <div class=" p-5">
            <h2 class=" font-poppins text-green-mid font-bold lg:text-2xl text-base ">Consulter les recettes de <br> nos utilisateurs
            </h2>
            <div class=" flex justify-end p-0">
              <img class=" -m-5 h-36 " src="src/assets/kiwi_crop.svg" alt="">
            </div>
          </div>
        </RouterLink>
      </section>

     
    </div>

    <div class="absolute top-2/4 right-0">
      <img src="src/assets/feuille.sg" alt="">
    </div>

    <div class=" absolute top-96 left-0 lg:visible">
      <img src="src/assets/Ellipse 20.sg" alt="">
    </div>
  </main></template>
