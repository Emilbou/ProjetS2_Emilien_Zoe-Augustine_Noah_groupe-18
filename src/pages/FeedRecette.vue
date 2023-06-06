<script setup lang="ts">
import { ref } from 'vue';

</script>



    
<template>
    <section class="py-10">
        <div class="flex flex-col lg:flex-row justify-center px-10 lg:px-20 gap-4 ">
            <RouterLink to="FicheRecette" class="lg:w-2/5 w-full h-72 aspect-w-1 aspect-h-1">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/image-salade.webp" alt="">
                    <p class="absolute top-0 left-0 m-2  text-white font-poppins font-medium  text-2xl lg:text-4xl">Salade césar</p>
                </div>
            </RouterLink>
            <RouterLink to="FicheRecette" class="lg:w-3/5 w-full h-72 aspect-w-1 aspect-h-1">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/image-cookies.webp" alt="">
                    <p class="absolute top-0 left-0 m-2  text-white font-poppins font-medium  text-2xl lg:text-4xl">Les mieux notés</p>
                </div>
            </RouterLink>
           
        </div>
        <!-- ... -->
        <div class="flex flex-col lg:flex-row justify-center lg:px-20 px-10 gap-4 w-full mt-4">
            <RouterLink to="FicheProduit" class="lg:w-2/3 w-full">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/image-salade3.webp" alt="">
                    <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-2xl lg:text-4xl">Recettes de saison
                    </p>
                </div>
            </RouterLink>
            <RouterLink to="FicheProduit" class="lg:w-1/4 w-full">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/image-bolognaises.webp" alt="">
                    <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-2xl lg:text-4xl">Plats</p>
                </div>
            </RouterLink>
            <RouterLink to="FicheProduit" class="lg:w-1/4 w-full">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/image-tiramisu.webp" alt="">
                    <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-2xl lg:text-4xl">Desserts</p>
                </div>
            </RouterLink>
        </div>
        <!-- ... -->

    </section>
</template>
