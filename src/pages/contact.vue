<script></script>

<template>
    <main>
        <div class="grid grid-cols-12 gap-10">
            <div class="col-start-3 col-span-8">
                <h1 class="font-europa-grotesk-sh text-green-dull text-4xl">A propos de Rue des Saveurs</h1>
                <h1 class="font-europa-grotesk-sh text-green-mid text-4xl">Qui sommes nous ?</h1>

                <div class="flex justify-between flex-col lg:flex-row gap-10 mt-10 mb-10">
                    <div class="bg-green-light"><img class="lg:max-w-xs items-center content-center"
                            src="@/assets/avatar-1.webp" alt="">
                        <h3 class="text-center font-bold"><span class="text-green-dull text-xl">Emilien Boucard</span>
                            <br><span class="text-green-mid text-base">Intégration web</span></h3>
                    </div>
                    <div class="bg-green-light"><img class="lg:max-w-xs items-center content-center"
                            src="@/assets/avatar.webp" alt="">
                        <h3 class="text-center font-bold"><span class="text-green-dull text-xl">Zoé-Augustine Vicat</span>
                            <br><span class="text-green-mid text-base">Design</span></h3>
                    </div>
                    <div class="bg-green-light"><img class="lg:max-w-xs items-center content-center"
                            src="@/assets/avatar-2.webp" alt="">
                        <h3 class="text-center font-bold"><span class="text-green-dull text-xl">Noah Lafourcade</span>
                            <br><span class="text-green-mid text-base">Chargé de communication</span></h3>
                    </div>
                </div>
                <div class=" text-green-mid">
                    <p>Rue des Saveurs est le fruit d’un projet collectif au sein du département MMi (Métiers du Multimédia
                        et
                        d’Internet) de l’IUT Nord Franche-Comté. </p>
                    <br>
                    <p>Réalisé par une équipe de trois personnes, nous comptons parmi nos membres Emilien Boucard,
                        s’occupant
                        de l’intégration web, Zoe-Augustine Vicat du design et Noah Lafourcade, chargé de communication.
                    </p>
                    <br>
                    <p>Nous sommes fiers de vous présenter notre projet Rue des Saveurs, dont le but est avant tout le
                        partage
                        : profitant aux particuliers comme aux producteurs, notre site est là pour vous permettre de vendre
                        et
                        d’acheter les produits frais au sein de votre voisinnage. Nous vous serions reconnaissant de nous
                        suivre
                        sur nos différents réseaux sociaux.</p>

                </div>

            </div>
            <div class=" col-start-3 col-span-6">
                <h1 class="font-europa-grotesk-sh text-green-dull text-4xl">Vous souhaitez nous contacter ?</h1>
                <h1 class="font-europa-grotesk-sh text-green-mid text-4xl">Envoyez nous un mail !</h1>

            </div>

            




        </div>
        <div class="flex w-2/3 justify-center lg:flex-row flex-col m-auto">
  <section class="image-section flex mb-10 items-center justify-center w-full lg:w-1/2 h-[610px] bg-cover">
<div class=" bg-beige/50 flex flex-col items-center justify-center  w-5/6 h-5/6">
<h2 class="font-bold text-2xl text-green-dull">Nous trouver</h2>
<div class="flex flex-col justify-start py-4">
<span class="flex items-center"><img class="px-5 py-4" src="@/assets/icones/icon-localisation.webp" alt=""><p class="font-bold text-base text-green-dull">4 place Tharradin <br> 25200 Montbéliard</p></span>
<span class="flex items-center"><img class="px-5 py-4" src="@/assets/icones/icon-phone.webp" alt=""><p class="font-bold text-base text-green-dull">03 81 99 47 34</p></span>
<span class="flex items-center"><img class="px-5 py-4" src="@/assets/icones/icon-at.svg" alt=""><p class="font-bold text-base text-green-dull">but-mmi-montbeliard@univ-fcomte.fr</p></span>
<span class="flex items-center"><img class="px-5 py-4" src="@/assets/icones/icon-web.webp" alt=""><p class="font-bold text-base text-green-dull">mmimontbeliard.com</p></span>
  </div>
</div>
  </section>

  <form action="" method="post" class="bg-green-dull flex   flex-col lg:w-1/2 h-[610px] w-full form-section items-center justify-center">
    <div class="flex flex-col items-center justify-center  w-4/6 h-5/6"><h2 class="font-bold text-2xl text-beige mb-5">Vous avez une question ?</h2>
    <div class="flex flex-row gap-2">
      <input type="text" placeholder="Nom" class="pl-2  rounded-full p-1 bg-beige w-1/2 text-green-dull mb-6">
      <input type="text" placeholder="Prénom" class="pl-2 rounded-full p-1 bg-beige w-1/2 text-green-dull mb-6">
    
    
    </div>
  <input type="text" placeholder="Adresse mail" class="mb-6 pl-2 rounded-full p-1 bg-beige w-full text-green-dull"/>
  <input type="text" placeholder="Message" class="mb-6 pl-2 rounded-full p-1 bg-beige w-full text-green-dull"/>
  <button class="mb-6 pl-2 rounded-full p-1 bg-beige text-green-dull font-bold text-center px-3 ">Envoyer</button>
    </div>
  </form>
</div>

   
</main></template>

<style>
.bg-cover {
  background-size: cover;
  background-image: url(@/assets/formulairecontact.webp);
  background-position: center;
}

</style>