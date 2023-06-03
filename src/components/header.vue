<script setup lang="ts">

import { ref } from 'vue';



const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}

</script>

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

</nav>

<nav class="top-0 bg-beige w-full ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="src/assets/Place_des_saveurs_logo.webp" class="h-20" alt="Place_des_saveurs_Logo" />
                <div class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></div>
            </a>
        </div>

        <div class="flex items-center gap-4 lg:flex-row-reverse">
            <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ 'translate-y-[9px] rotate-45': activeMenu }">
                </div>
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ 'bg-white opacity-0': activeMenu }">
                </div>
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ '-translate-y-[9px] -rotate-45': activeMenu }">
                </div>
            </button>

            <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-white text-xl text-black transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
                :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                   <ul
                    class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  
                    <li class=" menu-item font-bold">
                        <RouterLink class="block py-2 pl-3 pr-4 font-bold text-green-mid rounded" to="/billeterie" @click="closeMenu">Produits</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link block py-2 pl-3 pr-4 font-bold text-green-mid rounded" to="/gh" @click="closeMenu">A propos</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link block py-2 pl-3 pr-4 font-bold text-green-mid rounded" to="/billeterie" @click="closeMenu">Recettes </RouterLink>
                    </li>
                  
                </ul>

            </nav>
        </div>

    </nav>
</template>
 