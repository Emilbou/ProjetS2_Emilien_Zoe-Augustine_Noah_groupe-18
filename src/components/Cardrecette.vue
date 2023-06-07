<script setup lang="ts">
import {pb} from '@/backend';
import { allRecette } from '@/backend';
import type { RecetteResponse } from '@/pocketbase-types';
const recetteinfo : RecetteResponse = defineProps<RecetteResponse>();
    function getPicture(image: RecetteResponse) {
  return image.image_recette ? pb.getFileUrl(recetteinfo, image.image_recette, { thumb: '10x100'}) : '/image-not-fond.png'
}


</script>
<template>

    <div class="bg-white shadow-card-shadow p-3 flex flex-col">
        <img class=" w-52 h-32" :src="getPicture(recetteinfo)" alt="oui" />

        <h3 class="text-start font-bold text-base text-green-dull"> {{ titre_recette }}</h3>
        <div class="flex flex-row items-center">
        <span class="text-start font-normal text-xs text-green-dull"> </span> <span class="text-start font-normal text-xs text-green-dull"> {{ temps_recette }}</span>
        </div>
        <div class="flex flex-row items-center"><span><img src="icons/icon-localisation.svg" alt=""></span><span class="text-start font-normal text-xs text-green-mid"> 25200 Montbéliard</span></div>
    </div>




    
</template>

<style>

.bg-image-cover{

background-position: center;;
background-repeat: no-repeat;
background-size: cover;

}

</style>