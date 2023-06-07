<script setup lang="ts">
import {pb} from '@/backend'
import { allProduit } from '@/backend';
import type { ProduitResponse } from '@/pocketbase-types';
const Produitinfo : ProduitResponse = defineProps<ProduitResponse>();
    function getPicture(image: ProduitResponse) {
  return image.image_produit ? pb.getFileUrl(Produitinfo, image.image_produit, { thumb: '10x100'}) : '/image-not-fond.png'
}


</script>
<template>

    <div class="bg-white shadow-card-shadow p-3 flex flex-col">
        <img class=" w-52 h-32" :src="getPicture(Produitinfo)" alt="oui" />

        <h3 class="text-start font-bold text-base text-green-dull"> {{ nom_produit }}</h3>
        <div class="flex flex-row items-center">
        <span class="text-start font-normal text-xs text-green-dull"> </span> <span class="text-start font-normal text-xs text-green-dull"> {{ prix_produit }}</span>
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