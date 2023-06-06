<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const activeMenu = ref(false)
function closeMenu() {
    activeMenu.value = false
}

</script>

<template>
    <header class="rounded-br-sm rounded-bl-sm shadow-ombre sticky flex w-full translate-y-0 items-stretch justify-between bg-beige px-6 py-5 transition-all duration-300 ease-in-out ">
        <div class="flex items-center">
            <RouterLink to="/">
                <img class=" w-24  -mt-3 -mb-3" src="src/assets/Place_des_saveurs_logo.webp" alt="">
            </RouterLink>
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

            <nav class=" z-10 invisible opacity-0 fixed inset-0 h-screen w-screen bg-beige text-xl text-black transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
                :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
                <ul class="mt-[15vh] space-x-5 ml-16 lg:m-0 lg:flex font-raleway">
                    
                    <li class=" lg:hidden font-bold font-poppins">
                        <RouterLink class="menu-link" to="/FicheProduits" @click="closeMenu">Produits</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/Ficherecettes" @click="closeMenu">Recettes</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink class="menu-link" to="/about" @click="closeMenu">A propos</RouterLink>
                    </li>
                </ul>
                <div>
            
                </div>
            </nav>
        </div>

    </header>
</template>