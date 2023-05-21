<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const slider = [
    {
        title: "APP STORE",
        desc: "I gifted the family package to my younger brother, and he could download all mobile applications at ease.",
        icon: require("@/assets/eniola.svg"),
        name: "Eniola Salami"
    },
    {
        title: "PLAYSTATION",
        desc: "Gifted my boyfriend this gift card, glad to see all his preferences as I customised it. He loves it so much..",
        icon: require("@/assets/maryann.svg"),
        name: "Maryann James"
    },
    {
        title: "SPOTIFY",
        desc: "Now my gym instructor can play music during exercises, without any interruption from social adverts..",
        icon: require("@/assets/peter.svg"),
        name: "Peter Raymond"
    },
    {
        title: "JUMIA",
        desc: "This has to be a life saver. Getting a birthday gift for my boss was such a difficult task. Thanks to this..",
        icon: require("@/assets/chimsidi.svg"),
        name: "Chimsidi Ogo"
    },
];
</script>


<template>
  <div class=" mt-80 mb-36 w-full px-48 ">
    <carousel :items-to-show="1">
      <slide v-for="(slide, index) in slider" :key="index">
        <div class=" flex flex-col items-center space-y-4">
            <div class=" text-3xl font-bold">{{ slide.title }}</div>
              <p class="text-xl w-1/2  leading-loose text-gray-500">{{ slide.desc }}</p>
            <div class="flex items-center space-x-3">
              <img :src="slide.icon" />
              <span>{{ slide.name }}</span>
            </div>
        </div>
      </slide>
  
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>  
  </template>
  
 
  