<script setup lang="ts">

</script>

<template>
    <div>
      <ProfileCard
        :bannerImageUrl="bannerImageUrl"
        :fullName="fullName"
        :rating="rating"
        :textContent="textContent"
      />
    </div>
  </template>
  
  <script>
  import Profil from '@/components/Component.vue';
  
  export default {
    components: {
      Profil
    },
    data() {
      return {
        bannerImageUrl: 'nouvelle-image.jpg',
        fullName: 'Prénom Nom',
        rating: [1, 2, 3, 4],
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at aliquam enim, nec rutrum neque. Integer ultrices neque eget ante rutrum, at luctus lectus vestibulum. Nunc eu felis sit amet nisi consectetur pellentesque. Sed ut posuere velit.'
      }
    }
  }
  </script>
  