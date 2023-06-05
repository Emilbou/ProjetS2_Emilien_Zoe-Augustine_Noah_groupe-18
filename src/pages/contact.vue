<script></script>

<template>
    <main>
        <div class="grid grid-cols-12 gap-10">
            <div class="col-start-3 col-span-8">
                <h1 class="font-europa-grotesk-sh text-green-dull text-4xl">A propos de Rue des Saveurs</h1>
                <h1 class="font-europa-grotesk-sh text-green-mid text-4xl">Qui sommes nous ?</h1>

                <div class="flex justify-between gap-10 mt-10 mb-10">
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
            <div class=" col-start-5 col-span-6">
                <h1 class="font-europa-grotesk-sh text-green-dull text-4xl">Vous souhaitez nous contacter ?</h1>
                <h1 class="font-europa-grotesk-sh text-green-mid text-4xl">Envoyez nous un mail !</h1>

            </div>

            




        </div>
        <div class="flex w-full">
  <section class="image-section flex items-center justify-center w-1/2">
    <img src="@/assets/formulairecontact.webp" alt="">
  </section>

  <form action="" method="post" class="bg-green-dull flex flex-col w-1/2 form-section items-center justify-center">
    <div>
      <h2 class="font-bold text-beige text-center">Vous avez une question ?</h2>
      <section class="flex content-center items-center text-center">
        <div class="flex content-center items-center text-center m-auto">
          <div class=" p-5">
            <label class="bg-beige stroke-none rounded-full" for="nom"></label>
            <input class="bg-beige stroke-none rounded-full p-2" type="text" id="nom" name="nom" placeholder="Nom" required>
          </div>
          <div>
            <label class="bg-beige stroke-none rounded-full" for="Prénom"></label>
            <input class="bg-beige stroke-none rounded-full p-2" type="text" id="Prénom" name="Prénom" placeholder="Prénom" required>
          </div>
        </div>
      </section>
      <div>
        <label class="bg-beige stroke-none rounded-full" for="email"></label>
        <input class="bg-beige stroke-none rounded-full p-2" type="text" id="email" name="email" placeholder="Adresse mail" required>
      </div>
      <div>
        <label class="bg-beige stroke-none rounded-full" for="Message"></label>
        <input class="bg-beige stroke-none rounded-full p-2" type="text" id="Message" name="Message" placeholder="Message" required>
      </div>
      <div>
        <button type="submit">Envoyer</button>
      </div>
    </div>
  </form>
</div>

   
</main></template>