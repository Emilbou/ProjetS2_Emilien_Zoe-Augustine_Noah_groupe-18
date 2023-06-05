<template>
    <div class="grid grid-cols-12 gap-20">
  
      <!-- Image de profil -->
      <div class="col-span-12 sm:col-span-3">
        <div class="rounded-full border-4 beige overflow-hidden w-20 h-20"></div>
      </div>
  
      <!-- Contenu principal -->
      <div class="col-span-12 sm:col-span-9">
  
        <!-- Bannière -->
        <div class="w-full h-40 bg-cover bg-center" :style="'background-image: url(' + bannerImageUrl + ');'"></div>
  
        <!-- Nom et bouton d'abonnement -->
        <div class="flex items-center mt-4">
          <h2 class="font-bold">{{ fullName }}</h2>
          <button class="bg-blue-500 text-white px-4 py-2 rounded ml-auto">S'abonner</button>
          <img src="social-icon.png" alt="Social Icon" class="w-6 h-6 ml-4">
        </div>
  
        <!-- Rating -->
        <div class="flex items-center mt-4">
          <div v-for="star in rating" :key="star" class="w-5 h-5 fill-current text-yellow-500">
            <svg viewBox="0 0 20 20">
              <path d="M10 12.586l-3.536 2.902 1.362-4.94-3.598-2.786 4.716-.068L10 3.3l1.056 3.394 4.716.068-3.598 2.786 1.362 4.94L10 12.586z" />
            </svg>
          </div>
        </div>
  
        <!-- Statistiques -->
        <div class="flex justify-between mt-4">
          <p class="text-center"><span class="font-bold">10</span> produits</p>
          <p class="text-center"><span class="font-bold">10</span> recettes</p>
          <p class="text-center"><span class="font-bold">3</span> suivis</p>
          <p class="text-center"><span class="font-bold">3</span> abonnés</p>
        </div>
  
        <!-- Texte -->
        <div class="mt-4">
          <p>{{ textContent }}</p>
        </div>
  
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bannerImageUrl: 'banner-image.jpg',
        fullName: 'Prénom Nom',
        rating: [1, 2, 3, 4],
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at aliquam enim, nec rutrum neque. Integer ultrices neque eget ante rutrum, at luctus lectus vestibulum. Nunc eu felis sit amet nisi consectetur pellentesque. Sed ut posuere velit.'
      }
    }
  }
  </script>
  
  <style>
  .beige {
    background-color: #F5F5DC;
  }
  </style>
  