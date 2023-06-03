<script setup lang="ts">

import CardPanier from '@/components/CardPanier.vue';

</script>

<template>
    <main>

        <img class="  " src="src/assets/herbes.webp" alt="">

        <div class="grid grid-cols-12 gap-10">

            <h1 class="col-start-4 col-span-9 font-europa-grotesk-sh text-green-dull mt-3">Votre panier</h1>


            <div class=" p-5 col-start-3 col-span-5 bg-white ">
                <div class="flex">
                    <img class=" pr-5 " src="src/assets/imgcard.webp" alt="">
                    <div>
                        <div class="container flex justify-between ">
                            <div class="flex items-end">
                                <h3 class=" font-europa-grotesk-sh text-green-dull">Cerises</h3>
                                <p class="font-poppins text-green-mid">X 20</p>
                            </div>
                            <img class=" items-end" src="src/assets/croix.svg" alt="">
                        </div>
                        <br>
                        <p class="font-poppins text-green-mid"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facere,</p>
                        <p class="font-poppins text-green-mid"> X 20</p>
                    </div>
                </div>
            </div>
          
            
            <div class=" bg-white col-start-8 col-span-4 ">
                <p>
                    En achetant sur Rue des Saveurs, vous vous engagez à respecter nos termes et conditions. Nous vous
                    incitons à
                    contacter le vendeur dans le cas où vous ne pourriez pas récupérer votre commande.
                </p>
                <br>
                <p>
                    En tant qu'acheteur, vous êtes protégés contre les arnaques grâce à la garantie comprise dans les coûts
                    additionnels. Le coût des produits commandés vous sera reversé en cas de problème, dans lequel cas nous
                    vous
                    invitons à nous contacter via notre formulaire de contact.
                </p>
                <br>
                <p>
                    Notre site web fait office de plateforme de réservation de produits et de mise en relation entre
                    particuliers
                    clients et vendeurs : nous n'organisons pas de rencontres, pour ce faire nous vous prions d'utiliser la
                    messagerie pour convenir au mieux du lieu et de la date de la transaction.
                </p>

                <button class="  bg-green-dull text-beige font-bold py-2 px-4 rounded-full">
                    Je réserve mon panier
                </button>
            </div>

            <div class=" max-h-50 p-5 col-start-3 col-span-5 bg-white ">
                <div class="flex">
                    <img class=" pr-5 " src="src/assets/imgcard.webp" alt="">
                    <div>
                        <div class="container flex justify-between ">
                            <div class="flex items-end">
                                <h3 class=" font-europa-grotesk-sh text-green-dull">Cerises</h3>
                                <p class="font-poppins text-green-mid">X 20</p>
                            </div>
                            <img class=" items-end" src="src/assets/croix.svg" alt="">
                        </div>
                        <br>
                        <p class="font-poppins text-green-mid"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facere,</p>
                        <p class="font-poppins text-green-mid"> X 20</p>
                    </div>
                </div>
            </div>

            <div class=" max-h-50 p-5 col-start-3 col-span-5 bg-white ">
                <div class="flex">
                    <img class=" pr-5 " src="src/assets/imgcard.webp" alt="">
                    <div>
                        <div class="container flex justify-between ">
                            <div class="flex items-end">
                                <h3 class=" font-europa-grotesk-sh text-green-dull">Cerises</h3>
                                <p class="font-poppins text-green-mid">X 20</p>
                            </div>
                            <img class=" items-end" src="src/assets/croix.svg" alt="">
                        </div>
                        <br>
                        <p class="font-poppins text-green-mid"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facere,</p>
                        <p class="font-poppins text-green-mid"> X 20</p>
                    </div>
                </div>
            </div>

            <div class="col-start-2 col-span-full bgye">
                <h3 class=" font-poppins text-green-dull font-bold"> Commander à nouveau </h3>
                <h3 class=" font-poppins text-green-dull font-bold"> Vous aimerez peut-être...</h3>
                <h3 class=" font-poppins text-green-dull font-bold"> Ventes à proximité</h3>
            </div>

  
        


    </div>
</main></template>