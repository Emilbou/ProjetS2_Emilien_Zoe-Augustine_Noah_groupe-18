<template>
    <section class="flex justify-center m-auto w-full ">

        <GoogleMap :api-key="apiKey" class="w-full h-72" :center="{ lat: lat, lng: lng }" :zoom="15">
            <Marker :options="{ position: { lat: lat, lng: lng } }" />
        </GoogleMap>

    </section>
</template>

<style>
.grid {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
}
</style>

<script  lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    components: {
        GoogleMap,
        Marker
    },

    data() {
        return {
            apiKey: "AIzaSyARZDmOKMyebql6OZpkhgaFVgS4GpTCsAs",
            lat: null,
            lng: null,
        }
    },

    created() {
        this.$getLocation()
            .then((coordinates: { lat: null; lng: null; }) => {
                this.lat = coordinates.lat;
                this.lng = coordinates.lng;
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}
</script>
