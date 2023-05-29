<script setup lang="ts">

</script>

<template>
    <main>

        <img class="  " src="src/assets/herbes.webp" alt="">
        
        <div class="grid grid-cols-12 gap-20 bg">
            <h1 class="col-start-3 col-span-9 font-europa-grotesk-sh text-green-dull mt-3">Votre panier</h1>
            <div class="col-span-7 bg-white"></div>
            <div class=" bg-white col-start-8 col-span-6 ">
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
        </div>

        <div class="grid grid-cols-12 gap-20 bg">

            <div class=" bg-white col-start-8 col-span-6 ">
                <p>test</p>
                <div
                    className="flex flex-col justify-start items-start gap-2.5 pt-6 pr-8 pb-6 pl-8 w-[410px] h-[400px] shadow-md bg-white">
                    <div className="flex flex-col justify-between items-center w-[355px] h-[348px]">
                        <div
                            className="font-poppins text-xs w-[356px] text-gray-600 text-opacity-100 leading-none font-normal">
                            En achetant sur Rue des Saveurs, vous vous engagez à respecter nos
                            termes et conditions. Nous vous invitons à contacter le vendeur dans
                            le cas où vous ne pourriez pas récupérer votre commande.
                            <br />
                            <br />
                            En tant qu’acheteur, vous êtes protégés contre les arnaques grâce à la
                            garantie comprise dans les coûts additionnels. Le coût des produits
                            commandés vous sera reversé en cas de problème, dans lequel cas nous
                            vous invitons à nous contacter via notre formulaire de contact.
                            <br />
                            <br />
                            Notre site web fait office de plateforme de réservation de produits et
                            de mise en relation entre particuliers clients et vendeurs : nous
                            n’organisons pas de rencontres, pour ce faire nous vous prions
                            d’utiliser la messagerie pour convenir au mieux du lieu et de la date
                            de la transaction.
                        </div>
                        <button className="flex justify-center items-center rounded-[47.5px] w-[248px] h-9 bg-gray-600">
                            <div
                                className="font-poppins text-base min-w-[184px] whitespace-nowrap text-orange-50 text-opacity-100 leading-none font-bold">
                                Je réserve mon panier
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>


</main></template>