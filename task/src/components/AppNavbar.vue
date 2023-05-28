<script setup>
import {ref} from 'vue'
import { FaBars } from 'vue3-icons/fa';
const showMenu = ref(false)
</script>
<template lang="">
    <div class="relative">
    <div class="flex w-full justify-between px-5 md:px-28 pt-5 md:pt-16 text-2xl items-center bg-white">
        <router-link to="/">
            <img src="@/assets/logo.svg" />
        </router-link>
        <nav class="md:block hidden space-x-8 font-light text-gray-400">
            <router-link to="/">Product</router-link> 
            <router-link to="/#">Features</router-link>
            <router-link to="/#">Support</router-link>
        </nav>
        <FaBars @click="showMenu=!showMenu" class="md:hidden text-primary"/>
        <button class="md:block hidden bg-primary text-white text-md py-2 px-6 rounded-3xl hover:shadow-md hover:bg-primary2 hover:text-primary transition-all duration-500 ease-linear">
        Get Gift Card
        </button>
    </div>
    <div class="px-5 md:hidden block absolute w-full py-3 bg-white shadow " v-if="showMenu">
     <nav class=" text-gray-500 flex flex-col w-full text-center font-normal space-y-2 ">
            <router-link to="/">Product</router-link> 
            <router-link to="/#">Features</router-link>
            <router-link to="/#">Support</router-link>
        </nav>
    </div>
    </div>
   
</template>
