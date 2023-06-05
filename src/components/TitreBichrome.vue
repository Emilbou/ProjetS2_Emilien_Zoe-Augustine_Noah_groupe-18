

<template>


    <h1 class="font-medium text-4xl lg:pl-40 pb-24"><span class=" text-green-dull">{{ titre1 }}</span> <br>
    <span class=" text-green-light">{{titre2}}</span></h1>
  </template>
  
  <script>
  export default {
    props: {
      // Déclaration de la prop "titre" de type String
      titre1: {
        type: String,
        required: true // La prop "titre" est requise
      },
  
      titre2: {
        type: String,
        required: true // La prop "titre" est requise
      },
  
    }
  }
  </script>
  