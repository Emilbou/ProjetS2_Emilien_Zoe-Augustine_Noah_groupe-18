<script setup lang="ts"></script>

<template>
    <nav class="top-0 bg-beige w-full ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="src/assets/Place_des_saveurs_logo.webp" class="h-20" alt="Place_des_saveurs_Logo" />
                <div class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></div>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-solid-bg" aria-expanded="false">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul
                    class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 font-bold text-green-mid rounded ">Produits</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 font-bold text-green-mid  rounded ">A propos</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 font-bold text-green-mid  rounded ">Recettes</a>
                    </li>
                </ul>

        </div>
    </div>
</nav></template>
 