<script setup lang="ts">
import { allProduit } from '@/backend';
import CardProduit from '@/components/CardProduit.vue';
import { ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
const produitliste = await allProduit();
console.log(produitliste)


const apiKey = 'AIzaSyARZDmOKMyebql6OZpkhgaFVgS4GpTCsAs';
const lat = ref<number | null>(null);
const lng = ref<number | null>(null);

const getLocation = async () => {
    return new Promise<{ lat: number, lng: number }>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            error => {
                reject(new Error('Geolocation failed'));
            },
            { timeout: 10000 }
        );
    });
};

getLocation()
    .then(coordinates => {
        lat.value = coordinates.lat;
        lng.value = coordinates.lng;
    })
    .catch((error: Error) => {
        console.error(error);
    });
</script>


<template>
    <section class="py-10">
        <div class="flex justify-center px-20 gap-4 ">
            <RouterLink to="FicheRecette" class="w-1/3 aspect-w-1 aspect-h-1">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/image-limonade.webp" alt="">
                    <p class="absolute top-0 left-0 m-2  text-white font-poppins font-medium  text-4xl">Limonade maison</p>
                </div>
            </RouterLink>
            <GoogleMap :api-key="apiKey" class="w-2/3 h-72" :center="{ lat: lat, lng: lng }" :zoom="15">
                <Marker :options="{ position: { lat: lat, lng: lng } }" />
            </GoogleMap>
        </div>
        <!-- ... -->
        <div class="flex justify-center px-20 gap-4 w-screen mt-4">
            <RouterLink to="FicheProduit" class="w-2/3">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/Rectangle 172.webp" alt="">
                    <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-4xl">Produits de saison
                    </p>
                </div>
            </RouterLink>
            <RouterLink to="FicheProduit" class="w-1/4">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/Rectangle 169.webp" alt="">
                    <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-4xl">Fruits</p>
                </div>
            </RouterLink>
            <RouterLink to="FicheProduit" class="w-1/4">
                <div class="relative h-full">
                    <img class="w-full h-full object-cover" src="@/assets/Rectangle 171.webp" alt="">
                    <p class="absolute top-0 left-0 ml-2 text-white font-poppins font-medium  text-4xl">Légumes</p>
                </div>
            </RouterLink>
        </div>
        <!-- ... -->

    </section>
    <section class="flex w-full justify-center px-24">
        <section class="grille grid grid-cols-12 gap-4 ">
            <div class="col-span-12 flex flex-wrap gap-4 ">

                <ul class=" mt-4" v-for="produits of produitliste" :key="produits.id">
                    <RouterLink :to="{
                            name: 'FicheProduit-id',
                            params: { id: produits.id }
                        }">
                        <CardProduit class=" col-span-2" v-bind="{ ...produits }" />
                    </RouterLink>
                </ul>
            </div>
        </section>

    </section>
</template>

