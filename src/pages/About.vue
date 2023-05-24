<script setup lang="ts">

</script>

<template>
    <h1 class="font-medium text-4xl lg:pl-40 pb-24"><span class=" text-green-dull">A propos de Place des Saveurs... </span> <br>
    <span class=" text-green-light">Qui sommes nous ?</span></h1>
    <div class="flex justify-between ">
        <div class="bg-green-light"><img class="lg:max-w-xs items-center content-center" src="@/assets/avatar-1.webp" alt=""><h3 class="text-center font-bold"><span class="text-green-dull text-xl">Emilien Boucard</span> <br><span class="text-green-mid text-base">Intégration web</span></h3></div>
        <div class="bg-green-light"><img class="lg:max-w-xs items-center content-center" src="@/assets/avatar.webp" alt=""><h3 class="text-center font-bold"><span class="text-green-dull text-xl">Zoé-Augustine Vicat</span> <br><span class="text-green-mid text-base">Design</span></h3></div>
        <div class="bg-green-light"><img class="lg:max-w-xs items-center content-center" src="@/assets/avatar-2.webp" alt=""><h3 class="text-center font-bold"><span class="text-green-dull text-xl">Noah Lafourcade</span> <br><span class="text-green-mid text-base">Chargé de communication</span></h3></div>
    </div>
    <p class="text-green-dull grids-span-4">Rue des Saveurs est le fruit d’un projet collectif au sein du département MMi (Métiers du Multimédia et d’Internet) de l’IUT Nord Franche-Comté. 
<br>
Réalisé par une équipe de trois personnes, nous comptons parmi nos membres Emilien Boucard, s’occupant de l’intégration web, Zoe-Augustine Vicat du design et Noah Lafourcade, chargé de communication. 
<br>
Nous sommes fiers de vous présenter notre projet Rue des Saveurs, dont le but est avant tout le partage : profitant aux particuliers comme aux producteurs, notre site est là pour vous permettre de vendre et d’acheter les produits frais au sein de votre voisinnage. Nous vous serions reconnaissant de nous suivre sur nos différents réseaux sociaux.</p>

<h1 class="font-medium text-4xl lg:pl-40 pb-24"><span class=" text-green-dull">Vous souhaitez nous contacter ? </span> <br>
    <span class=" text-green-light">Envoyez nous un mail !</span></h1>

    <div class="flex">
        <section>
<img src="@/assets/formulairecontact.webp" alt="">


        </section>
    <form action="" method="post" class="bg-green-dull items-center content-center text-center">
<h2 class="font-bold text-beige text-center">Vous avez une question ?</h2>
<section class="flex content-center items-center text-center">
<div class="flex content-center items-center text-center m-auto">
<div>
<label class="bg-beige stroke-none rounded-full"  for="nom"></label>
<input  class="bg-beige stroke-none rounded-full p-2" type="text" id="nom" name="nom"
placeholder="Nom" required>
</div>
<div>
<label  class="bg-beige stroke-none rounded-full" for="Prénom"></label>
<input  class="bg-beige stroke-none rounded-full p-2" type="text" id="Prénom" name="Prénom"
placeholder="Prénom" required>
</div>
</div>
</section>
<div>
<label  class="bg-beige stroke-none rounded-full" for="email"></label>
<input  class="bg-beige stroke-none rounded-full p-2" type="text" id="email" name="email"
placeholder="Adresse mail" required>
</div>
<div>
<label  class="bg-beige stroke-none rounded-full" for="Message"></label>
<input  class="bg-beige stroke-none rounded-full p-2" type="text" id="Message" name="Message"
placeholder="Message" required>
</div>
<div>
<button type="submit">Envoyer</button>
</div>
    </form>
</div>
</template>