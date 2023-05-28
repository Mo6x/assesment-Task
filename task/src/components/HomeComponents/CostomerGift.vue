<script setup>
import ScribbleImage from '@/assets/Scribble.svg';

const isSmallScreen = () => {
  return window.innerWidth < 640;
};
</script>

<template>
  <div class="w-full flex justify-center mb-28">
    <div class="bg-primary2 w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12  flex flex-col space-y-7 justify-center items-center relative px-6 sm:px-10 md:px-16 lg:px-20 py-16">
      <img :src="ScribbleImage" class="absolute right-10 sm:right-20 md:right-28 top-7" />
      <h1 class="md:text-4xl text-3xl text-center md:text-right font-bold">
        Customise Gift Card for free
      </h1>
      <span>Express your love, so easy!</span>
      <div class="relative">
        <div v-if="isSmallScreen()" class="absolute -top-2 -left-3 bg-yellow-400 border text-xs px-1 -rotate-12 inline-block">
          New
        </div>
        <button class="bg-primary text-white rounded-full px-8 sm:px-10 py-3">Get started</button>
      </div>
    </div>
  </div>
</template>
