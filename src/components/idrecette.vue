<script setup lang="ts">
import { allRecette } from '@/backend';
import {pb} from '@/backend'
import type { RecetteResponse } from '@/pocketbase-types';
import Cardrecette from '@/components/Cardrecette.vue';
const recetteliste = await allRecette();
const recetteinfo: RecetteResponse = defineProps<RecetteResponse>()
const backgroundImage = getPicture(recetteinfo)
function getPicture(image: RecetteResponse) {
return image.image_recette ? pb.getFileUrl(recetteinfo, image.image_recette, { thumb: '10x100' }) : '/image-not-fond.png'
}



</script>



<template>

    <section class="lg:grid lg:grid-cols-12 lg:gap-4 p-5">
        <div class=" col-start-3 flex items-center flex-row ">
        <h1 class=" font-europa-grotesk-sh text-green-dull font-medium text-4xl"> {{ titre_recette }}</h1>
        <span><img src="@/assets/icones/icon-hearth.svg" alt=""></span>
    </div>

        <section class="col-start-3 col-end-9 shadow-card-shadow flex flex-col w-full bg-white  ">
            <div class="bg-image-cover-produit w-full h-96" :style="{ backgroundImage: `url(${backgroundImage})` }">
            </div>
            <section class="p-6">
                <div class="flex flex-row justify-between lg:flex lg:flex-row">
                    <div class="flex flex-row  items-center justify-between ">
                        <div><img class="w-10 rounded-full aspect-auto h-10 asp" src="@/assets/profile-photo.webp" alt="">
                        </div>
                        <div class="flex flex-col px-4">
                            <p class="text-base text-green-dull font-bold">Melina Moreau</p>
                            <span class="flex flex-row items-center">
                                <img class="w-[14px]" src="@/assets/icones/icon-localisation.webp" alt="">
                                <p class="text-xs font-normal text-green-mid ml-2">25200 Montbéliard</p>
                            </span>
                        </div>
                        <div>
                            <RouterLink
                                class="text-xs font-poppins text-beige bg-green-dull ml-6 rounded-full px-3 py-1 font-light "
                                to="contact">Contacter</RouterLink>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <img class="w-6" src="@/assets/icones/icon-social-facebook.svg" alt=""><img class="w-6"
                            src="@/assets/icones/icon-social-instagram.svg" alt=""><img class="w-6"
                            src="@/assets/icones/icon-social-twitter.svg" alt=""><img class="w-6"
                            src="@/assets/icones/icon-link.svg" alt="">
                    </div>
                </div>
                <p class="text-green-dull text-xs font-normal mt-8">
                    {{ description_recette }}
                </p>
                <p class="text-green-dull text-xs font-normal mt-8"> Ingrédients : </p>
                <p class="text-green-dull text-xs font-normal ">
                    {{ ingredient_recette }}
                </p>
                <p class="text-green-dull text-xs font-normal mt-8"> Etapes préparation :</p>
                <p class="text-green-dull text-xs font-normal "> {{ etapes_preparation }} </p>
                <p class="text-green-dull text-xs font-normal mt-8"> Temps préparation:</p>
                <p class="text-green-dull text-xs font-normal ">
                    {{ temps_recette }}
                </p>
            </section>
        </section>

        <section class="col-start-9 col-end-11 shadow-card-shadow bg-white h-5/6">
            <div class="w-full bg-image-cover-banniere h-24"></div>
            <div class="flex justify-center text-center ">
                <img class="rounded-full aspect-square w-28 -my-12 " src="@/assets/profile-photo.webp" alt="">
            </div>
            <div class="flex justify-center text-center flex-col mt-14">
                <p class="text-base font-normal text-green-dull">Mélina Moreau
                </p>
                <p class="text-base font-normal text-green-mid">25200 Montbéliard</p>
            </div>
            <section class="flex flex-wrap justify-evenly p-2">
                <img class="aspect-square w-24 m-1" src="@/assets/image-citrons.webp" alt=""><img
                    class="aspect-square w-24 m-1" src="@/assets/image-cerises.webp" alt=""><img
                    class="aspect-square w-24 m-1" src="@/assets/image-painchocolat.webp" alt=""><img
                    class="aspect-square w-24 m-1" src="@/assets/image-carottes.webp" alt=""><img
                    class="aspect-square w-24 m-1" src="@/assets/image-pommes.webp" alt=""><img
                    class="aspect-square w-24 m-1" src="@/assets/image-pain.webp" alt="">
            </section>
            <div class="flex justify-center flex-col text-center m-auto">
                <p class="text-green-mid font-normal text-xs p-2">Voir tous les produits</p>
                <RouterLink
                    class="text-beige font-normal m-auto w-fit text-xs mb-5 px-3 py-[0.5px] bg-green-dull rounded-full"
                    to="Profilpage"> Voir le profil</RouterLink>
            </div>
        </section>
    </section>
    <section class="flex w-full justify-center px-24">
    <section class="grille grid grid-cols-12 gap-4 ">
      <div class=" col-start-1 col-span-12">
        <h3 class="text-green-dull mt-9 font-bold">Vous aimerez peut-être...</h3>
      </div>
      <div class="col-span-12 flex flex-wrap gap-4 ">


        <ul class=" mt-4" v-for="recettes of recetteliste" :key="recettes.id">
          <RouterLink :to="{
              name: 'FicheRecette-id',
              params: { id: recettes.id }
            }">
            <Cardrecette class=" col-span-2 mb-10" v-bind="{ ...recettes }" />
          </RouterLink>
        </ul>
      </div>
    </section>
    
  </section>
 


</template>
  







<style>
.bg-image-cover-produit {
    margin-top: 0;
    padding-top: 0;
    top: 0;
    background-image: url('@/assets/image-citrons.webp');
    background-position: center;
    ;
    background-repeat: no-repeat;
    background-size: cover;
}

.bg-image-cover-banniere {
    background-image: url('@/assets/herbes.webp');
    background-position: center;
    ;
    background-repeat: no-repeat;
    background-size: cover;
}</style>