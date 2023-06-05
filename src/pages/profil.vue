<script lang="ts"></script>

<template>
    <div class="bg-image-cover-profil w-full h-28"></div>
    <section>
        <div class="grid grid-cols-12 gap-4 w-full">
            <div class="col-start-3 col-span-1 -mt-5 flex flex-col">
                <img src="@/assets/photo-woman-1.webp" alt="">
                <div class="flex justify-evenly"><img src="@/assets/icones/icon-social-facebook.svg" alt=""><img src="@/assets/icones/icon-social-instagram.svg" alt=""><img src="@/assets/icones/icon-social-twitter.svg" alt=""></div>
            </div>
            <div class="flex-col flex col-start-4 col-span-5">
            <div class="col-start-4 items-start flex flex-row w-full py-3"> <h1 class="text-green-dull text-4xl font-medium">Melina Moreau</h1> <button class="font-bold text-beige text-base bg-green-dull px-8 py-1 rounded-full ml-5">S'abonner</button> <span class="bg-green-dull rounded-full ml-5 p-2"><img src="@/assets/icones/icon-link.svg" alt=""></span></div>
        </div>
        <div class="col-start-4 col-span-4 -mt-16">

            <div class="flex flex-row justify-between w-full"><span class="text-green-dull font-bold text-base">10 produits</span><span class="text-green-dull font-bold text-base">10 produits</span><span class="text-green-dull font-bold text-base">10 produits</span><span class="text-green-dull font-bold text-base">10 produits</span></div>
        </div>
        <p class="col-start-4 col-span-5 -mt-8  text-base text-green-dull font-normal">Bienvenue sur mon profil ! 
<br>
    J’ai pour passion le jardinage, c’est pourquoi je souhaite vous la partager en vendant mes productions ici.
    Mes ventes sont pour la plupart permanentes tant que c’est la saison, n’hésitez pas à aller voir mes produits !</p>
        </div>
    </section>
</template>


<style>
.bg-image-cover-profil {
    margin-top: 0;
    padding-top: 0;
    top: 0;
    background-image: url('@/assets/herbes.webp');
    background-position: center;
    ;
    background-repeat: no-repeat;
    background-size: cover;
}</style>