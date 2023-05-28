<script setup>
import LogoImage from '@/assets/logo.svg';
</script>

<template>
  <div class="flex flex-wrap flex-col md:flex-row justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-6 sm:py-16 text-lg md:text-2xl md:items-center">
    <div class="flex flex-col md:flex-row md:items-center  md:space-x-3">
      <router-link to="/">
        <img :src="LogoImage" alt="Logo" />
      </router-link>
      <p class="text-xs sm:text-sm">@ 1995 - 2023 GiftCard Inc. All Rights Reserved.</p>
    </div>
    <ul class="flex md:space-x-6 space-x-10 mt-20 md:mt-0   md:items-center text-xs sm:text-sm">
      <li>Product</li>
      <li>Features</li>
      <li>Support</li>
    </ul>
  </div>
</template>
