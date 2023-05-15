<script setup lang="ts">
import { Collections, type MaisonResponse } from '.././pocketbase-types';
import MaisonCard from '.././components/MaisonCard.vue';
const maisonsListe: MaisonResponse[] = [
    {
        "adresse": "34 faubourg de besançon",
        "collectionId": "sidpkt9hmbfwoeb",
        "collectionName": Collections.Maison,
        "created": "2023-05-05 14:09:27.322Z",
        "favori": true,
        "id": "i7l00k8517p0qx3",
        "images": [
            "maison1_DTNmxlLxk2.jpg"
        ],
        "nbChambres": 3,
        "nbSdb": 1,
        "nomMaison": "Maison 11",
        "prix": 80955,
        "surface": 2000,
        "updated": "2023-05-05 14:09:27.322Z",
    },
    {
        "adresse": "14 rue jonquille",
        "collectionId": "sidpkt9hmbfwoeb",
        "collectionName": Collections.Maison,
        "created": "2023-05-05 14:08:44.297Z",
        "favori": false,
        "id": "1t2h5u1xdc0j3ly",
        "images": [
            "maison2_69PlvnH2JG.jpg"
        ],
        "nbChambres": 1,
        "nbSdb": 8,
        "nomMaison": "maison 2",
        "prix": 600000,
        "surface": 0,
        "updated": "2023-05-05 14:08:44.297Z",
    },
    {
        "adresse": "19 rue voltaire",
        "collectionId": "sidpkt9hmbfwoeb",
        "collectionName": Collections.Maison,
        "created": "2023-05-05 14:08:06.914Z",
        "favori": false,
        "id": "4swsg684umfh40o",
        "images": [
            "maison5_Re0CatPDLd.jpg",
            "maison4_e4LVG0xnzj.jpg"
        ],
        "nbChambres": 3,
        "nbSdb": 2,
        "nomMaison": "maison 1",
        "prix": 80000,
        "surface": 250,
        "updated": "2023-05-05 14:08:06.914Z",
    }
]

// a completer
</script>

<template>
    <header>
        <h1 class="text-4xl">Test</h1>
    </header>

    <main>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora recusandae et dolorem odit
            beatae illo labore, praesentium quidem nulla eveniet, at voluptatem incidunt. Eaque explicabo,
            vitae quibusdam vero quod atque.
        </p>
        <div v-for="maison of maisonsListe">
            <MaisonCard v-bind="maison" />
        </div>
    </main>
</template>
