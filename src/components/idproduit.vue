<script setup lang="ts">
import { getIDproduit } from '@/backend';
import {pb} from '@/backend'
import type { ProduitResponse } from '@/pocketbase-types';
const Produitinfo: ProduitResponse = defineProps<ProduitResponse>()
const backgroundImage = getPicture(Produitinfo)
function getPicture(image: ProduitResponse) {
    return image.image_produit ? pb.getFileUrl(Produitinfo, image.image_produit, { thumb: '10x100' }) : '/image-not-fond.png'

}
</script>



<template>
    <div class="flex items-center flex-row ">
        <h1 class="text-green-dull font-medium text-4xl"> {{ nom_produit }}</h1>
        <span><img src="@/components/icons/heart-default.svg" alt=""></span>
        <span><img src="@/components/icons/icon-scart-default.svg" alt=""></span>
    </div>

    <section class="grid grid-cols-12 gap-4 ">
        <section class="col-start-3 col-end-9 shadow-card-shadow flex flex-col w-full  ">
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
                    {{ description_produit }}
                </p>
                <p class="text-green-dull text-xs font-normal mt-8">
                    {{ prix_produit }}
                </p>
                <div class="mt-10 flex justify-between text-center flex-wrap"> <span
                        class="w-9/30 bg-green-light px-6 py-3 m-2 text-center text-beige font-bold text-base ">ptitebiteemilien</span><span
                        class="w-9/30 bg-green-light px-6 py-3 m-2 text-center text-beige font-bold text-base">ptitebiteemilien</span><span
                        class="w-9/30 bg-green-light px-6 py-3 m-2 text-center text-beige font-bold text-base">ptitebiteemilien</span>
                </div>
            </section>
        </section>

        <section class="col-start-9 col-end-11 shadow-card-shadow">
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