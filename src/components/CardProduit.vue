<script setup lang="ts">
import { allAliments, pb } from '@/backend';
import type { AlimentsResponse } from '@/pocketbase-types';
const OeuvreInfo = defineProps<AlimentsResponse>();
function getPicture(image: AlimentsResponse) {
  return image.Image ? pb.getFileUrl(image, image.Image, { thumb: '100x250'}) : '/image-not-fond.png'
}

</script>
<template>

    <div class="bg-white shadow-card-shadow p-3 flex flex-col">
        <span class="bg-image-cover w-52 h-32"></span>
        <h3 class="text-start font-bold text-base text-green-dull"> {{ Nom }}</h3>
        <div class="flex flex-row items-center">
        <span class="text-start font-normal text-xs text-green-dull"> 0,80€</span> <span class="text-start font-normal text-xs text-green-dull">/ unité</span>
        </div>
        <div class="flex flex-row items-center"><span><img src="icons/icon-localisation.svg" alt=""></span><span class="text-start font-normal text-xs text-green-mid"> 25200 Montbéliard</span></div>
    </div>
</template>

<style>
.bg-image-cover{
background-image: url('https://picsum.photos/200/300');
background-position: center;;
background-repeat: no-repeat;
background-size: cover;

}

</style>