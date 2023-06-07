<template>
    <div class="bg-image-cover-profil w-full h-28"></div>
    <section>
        <div class="grid grid-cols-12 gap-4 w-full">
            <div class="col-start-3 col-span-1 -mt-5 flex flex-col">
                <img src="@/assets/photo-woman-1.webp" alt="">
                <div class="flex justify-evenly">
                    <img src="@/assets/icones/icon-social-facebook.svg" alt="">
                    <img src="@/assets/icones/icon-social-instagram.svg" alt="">
                    <img src="@/assets/icones/icon-social-twitter.svg" alt="">
                </div>
            </div>
            <div class="flex-col flex col-start-4 col-span-5">
                <div class="col-start-4 items-start flex flex-row w-full py-3">
                    <h1 class="text-green-dull text-4xl font-medium">Melina Moreau</h1>
                    <button
                        class="font-bold text-beige text-base bg-green-dull px-8 py-1 rounded-full ml-5">S'abonner</button>
                    <span class="bg-green-dull rounded-full ml-5 p-2"><img src="@/assets/icones/icon-link.svg"
                            alt=""></span>
                </div>
                <div class="flex flex-row justify-start col-start-4 col-span-5 items-center">
                    <img src="@/assets/icones/star-rating-full.svg" alt="">
                    <img src="@/assets/icones/star-rating-full.svg" alt="">
                    <img src="@/assets/icones/star-rating-full.svg" alt="">
                    <img src="@/assets/icones/star-rating-full.svg" alt="">
                    <img src="@/assets/icones/star-rating-full.svg" alt="">
                    <span class="text-base font-normal text-green-mid pl-3">(16 avis)</span>
                </div>
            </div>
            <div class="col-start-4 col-span-4 -mt-4">
                <div class="flex flex-row justify-between w-full">
                    <span class="text-green-dull font-bold text-base">10 produits</span>
                    <span class="text-green-dull font-bold text-base">10 produits</span>
                    <span class="text-green-dull font-bold text-base">10 produits</span>
                    <span class="text-green-dull font-bold text-base">10 produits</span>
                </div>
            </div>
            <div class="col-start-4 col-span-5">
                <p class="text-base text-green-dull font-normal">Bienvenue sur mon profil !
                    <br>
                    J’ai pour passion le jardinage, c’est pourquoi je souhaite vous la partager en vendant mes productions
                    ici.
                    Mes ventes sont pour la plupart permanentes tant que c’est la saison, n’hésitez pas à aller voir mes
                    produits !
                </p>
            </div>
            <div class="col-start-2 col-end-11 flex justify-start items-center mt-10">
                <h3 class="text-xl font-bold text-green-dull">Autres produits de Melina Moreau</h3>
                <button class="pl-6 text-green-mid text-xs font-normal">voir tous les produits</button>
            </div>
            <div class="col-start-2 col-end-12 gap-4 flex justify-between items-center w-40">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 194.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 195.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 196.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 197.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 198.webp" alt="">
            </div>
            <div class="col-start-2 col-end-11 flex justify-start items-center mt-10">
                <h3 class="text-xl font-bold text-green-dull">Recettes de Melina Moreau</h3>
                <button class="pl-6 text-green-mid text-xs font-normal">voir toutes les recettes</button>
            </div>
            <div class="col-start-2 col-end-12 gap-4 flex justify-between items-center w-40">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 194.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 195.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 196.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 197.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 198.webp" alt="">
            </div>
            <div class="col-start-2 col-end-11 flex justify-start items-center mt-10">
                <h3 class="text-xl font-bold text-green-dull">Favoris de Melina Moreau</h3>
                <button class="pl-6 text-green-mid text-xs font-normal">voir tous les favoris</button>
            </div>
            <div class="col-start-2 col-end-12 gap-4 flex justify-between items-center w-40">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 194.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 195.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 196.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 197.webp" alt="">
                <img class="col-span-2 w-full" src="@/assets/Rectangle 198.webp" alt="">
            </div>
            <div class="col-start-3 col-span-8 flex flex-col">
                <h2 class="font-bold text-green-dull
                text-2xl">Commentaires</h2>
                <div class="shadow-card-shadow my-10 p-5 flex bg-white"> <div> <img class="rounded-full aspect-square w-16 mx-5" src="@/assets/profile-photo.webp" alt=""></div>
                <div class="flex flex-col ">

                    <h3 class="font-bold text-xl text-green-dull">Melina Moreau</h3>
                    <div class="flex flex-row bg">

                        <img class="w-6" src="@/assets/icones/star-rating-full.svg" alt="">
                        <img class="w-6" src="@/assets/icones/star-rating-full.svg" alt="">
                        <img class="w-6" src="@/assets/icones/star-rating-full.svg" alt="">
                        <img class="w-6" src="@/assets/icones/star-rating-full.svg" alt="">
                        <img class="w-6" src="@/assets/icones/star-rating-full.svg" alt="">
                    </div>
                    <p class="font-normal text-green-dull text-base">Merci pour ces délicieux citrons. Je recommande !</p>
                </div>
            </div>
            </div>
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
    background-repeat: no-repeat;
    background-size: cover;
}</style>
