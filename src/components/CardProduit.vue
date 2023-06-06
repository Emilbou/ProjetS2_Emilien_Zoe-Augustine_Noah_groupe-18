<script setup lang="ts">
import {pb} from '@/backend'
import { allAliments } from '@/backend';
import type { AlimentsResponse } from '@/pocketbase-types';
const alimentliste = await allAliments()
const AlimentInfo : AlimentsResponse = defineProps<AlimentsResponse>();
    function getPicture(image: AlimentsResponse) {
  return image.Image ? pb.getFileUrl(AlimentInfo, image.Image, { thumb: '100x100'}) : '/image-not-fond.png'
}


</script>
<template>

    <div class="bg-white shadow-card-shadow p-3 flex flex-col">
        <img class=" h-40" :src="getPicture(AlimentInfo)" alt="bice" />
        <span class="bg-image-cover w-52 h-32"></span>
        <h3 class="text-start font-bold text-base text-green-dull"> {{ Description }}</h3>
        <div class="flex flex-row items-center">
        <span class="text-start font-normal text-xs text-green-dull"> </span> <span class="text-start font-normal text-xs text-green-dull">/ unité</span>
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