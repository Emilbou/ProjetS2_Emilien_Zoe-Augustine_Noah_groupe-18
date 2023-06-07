<script setup lang="ts">


</script>
<template>
  <footer class="bg-green-light  bottom-0 left-0 right-0  ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 lg:pr-36 lg:pl-5">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <RouterLink to="/" class="flex items-start">
            <img src="@/assets/logo-default.png" class="h-36 " alt="FlowBite Logo" />
            <p></p>
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5">
          <div>

            <RouterLink to="/"> <h2 class="mb-6 text-sm font-bold text-green-dull uppercase ">Accueil</h2> </RouterLink>
            <RouterLink to="/LegalView"> <h2 class="mb-6 text-sm font-bold text-green-dull uppercase ">Mentions légales</h2> </RouterLink>
            <RouterLink to="/contact"> <h2 class="mb-6 text-sm font-bold text-green-dull uppercase ">Contact</h2> </RouterLink>

            
          </div>
          <div>
            <RouterLink to="/FicheProduit"> <h2 class="mb-6 text-sm font-bold text-green-dull uppercase ">Produits</h2> </RouterLink>
            <ul class="text-beige  font-medium">
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Fruits</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Légumes</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Viande</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Poisson</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Boissons</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Produits laitiers</a>
              </li>
            </ul>
          </div>
          <div>
            <RouterLink to="/Ficherecette"> <h2 class="mb-6 text-sm font-bold text-green-dull uppercase ">Recettes</h2> </RouterLink>
            <ul class="text-beige  font-medium">
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Entrées</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Plats</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Desserts</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Goûter</a>
              </li>
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">Evènement</a>
              </li>
             
            </ul>
          </div>
          <div>
            <RouterLink to="/loginView"> <h2 class="mb-6 text-sm font-bold text-green-dull uppercase ">Connexion</h2> </RouterLink>
            <RouterLink to="/panier"> <h2 class="mb-6 text-sm font-bold text-green-dull uppercase ">Panier</h2> </RouterLink> 
            
          </div>
          <div>
           <ul class="text-green-dull  font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline flex "><span><img src="@/assets/icones/icon-localisation.webp" alt=""></span> <span> 4 Place Tharradin <br> 25200 Montbéliard</span></a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline flex"><span><img src="@/assets/icones/icon-phone.webp" alt=""></span><span> 03 81 99 47 34 </span></a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline flex"><span><img src="@/assets/icones/icon-web.webp" alt=""></span><span> Montbéliard.com</span></a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
  </div>
</footer>
</template>