<script setup>
import FacebookIcon from '@/assets/facebook.svg';
import TwitterIcon from '@/assets/twitter.svg';
import YoutubeIcon from '@/assets/youtube.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import SearchIcon from '@/assets/search.svg';
</script>

<template>
  <div class="flex flex-wrap justify-between px-6 sm:px-10 md:px-16 lg:px-20 w-full pb-8 sm:pb-28 mb-20 md:mb-0">
    <ul class="space-y-3 mb-6 sm:mb-0">
      <li class="text-primary font-bold">Product</li>
      <li>Fashion</li>
      <li>Gadgets</li>
      <li>Home Appliances</li>
      <li>Office & Work Tools</li>
    </ul>
    <ul class="space-y-3 mb-6 sm:mb-0">
      <li class="text-primary font-bold">Features</li>
      <li>Customise</li>
      <li>Delivery</li>
      <li>Apply Coupon</li>
      <li>Referral Bonus</li>
    </ul>
    <ul class="space-y-3 mb-6 sm:mb-0">
      <li class="text-primary font-bold">Support</li>
      <li>Get Help</li>
      <li>FAQ</li>
      <li>Contact Us</li>
    </ul>
    <ul class="space-y-3 mb-6 sm:mb-0">
      <li class="text-primary font-bold">Transparency</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Cookies</li>
    </ul>
    <div class="space-y-4 md:mt-0 mt-10">
      <p class="text-primary font-bold">Subscribe to newsletter</p>
      <form @submit.prevent="" class="flex rounded-lg">
        <input type="text" placeholder="Enter your email" class="w-full rounded-l-lg px-3 py-2 outline-none text-xl font-light text-black bg-primary2" />
        <button type="submit" class="bg-primary rounded-r-lg px-3 text-white">Subscribe</button>
      </form>
      <div class="flex space-x-2 mt-3 sm:mt-0">
        <img :src="FacebookIcon" alt="Facebook" class="w-2" />
        <img :src="TwitterIcon" alt="Twitter" class="w-5" />
        <img :src="YoutubeIcon" alt="Youtube" class="w-5" />
        <img :src="LinkedinIcon" alt="LinkedIn" class="w-5" />
        <img :src="SearchIcon" alt="Search" class="w-5" />
      </div>
    </div>
  </div>
</template>
