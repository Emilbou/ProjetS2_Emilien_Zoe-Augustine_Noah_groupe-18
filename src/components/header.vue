<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const activeMenu = ref(false)
function closeMenu() {
    activeMenu.value = false
}
</script>

<template>
    <nav class="bg-beige w-full z-20 top-0 left-0">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink to="/">
                <img src="@/assets/Place_des_saveurs_logo.webp" class="h-20 -my-4" alt=" Logo">
            </RouterLink>

            <div class="flex md:order-2">
                <RouterLink to="/profil">
                    <img class=" w-10" src="@/assets/profil.png" alt="">
                </RouterLink>
            </div>

            <div class="flex items-center gap-4 lg:flex-row-reverse">
                <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
                    @click="activeMenu = !activeMenu">
                    <div class="ease h-[2px] w-full transform rounded-full bg-green-mid transition duration-300"
                        :class="{ 'translate-y-[9px] rotate-45': activeMenu }">
                    </div>
                    <div class="ease h-[2px] w-full transform rounded-full bg-green-mid transition duration-300"
                        :class="{ 'bg-white opacity-0': activeMenu }">
                    </div>
                    <div class="ease h-[2px] w-full transform rounded-full bg-green-mid transition duration-300"
                        :class="{ '-translate-y-[9px] -rotate-45': activeMenu }">
                    </div>
                </button>
                
                <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-beige text-2xl text-green-mid transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:tracking-wide lg:opacity-100"
                    :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                    <ul class="mt-[15vh] space-x-5 ml-16 lg:m-0 lg:flex font-raleway">

                        <li class=" lg:hidden menu-item  font-bold">
                            <RouterLink class="menu-link" to="/billeterie" @click="closeMenu">Menu</RouterLink>
                        </li>
                        <li class="menu-item">
                            <RouterLink class="menu-link" to="/FicheProduit" @click="closeMenu">Produits</RouterLink>
                        </li>
                        <li class="menu-item">
                            <RouterLink class="menu-link" to="/Fichesrecettes" @click="closeMenu">Recettes</RouterLink>
                        </li>
                        <li class="menu-item">
                            <RouterLink class="menu-link" to="/contact" @click="closeMenu">A propos</RouterLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    </nav>
</template>