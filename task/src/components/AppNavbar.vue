<script setup>

</script>
<template lang="">
    <div class="flex w-full justify-between px-28 pt-16 text-2xl items-center">
        <router-link to="/">
            <img src="@/assets/logo.svg"/>
        </router-link>
        <nav class=" space-x-8 font-light text-gray-400">
            <router-link to="/">Product</router-link> 
            <router-link to="/#">Features</router-link>
            <router-link to="/#">Support</router-link>
        </nav>
        <button class="bg-primary text-white text-md py-2 px-6 rounded-3xl hover:shadow-md hover:bg-primary2 hover:text-primary transition-all duration-500 ease-linear">
        Get Gift Card
        </button>
    </div>
</template>
