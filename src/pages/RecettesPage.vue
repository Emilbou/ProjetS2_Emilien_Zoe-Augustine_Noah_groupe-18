<script >
    
    import { GoogleMap, Marker} from 'vue3-google-map'
    
    
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
          .then((coordinates) => {
            this.lat =coordinates.lat;
            this.lng = coordinates.lng;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    </script>
    
<template>
    <div class="flex justify-center p-20">
        <GoogleMap :api-key="apiKey" class="w-2/3 h-72 "   :center="{lat: lat, lng: lng}" :zoom="15"> 
        <Marker :options="{position: {lat: lat, lng: lng}}"/> </GoogleMap>
        <img class="w-1/3 aspect-w-1 aspect-h-1" src="https://picsum.photos/888/288" alt="">
    </div>
    </template>
    