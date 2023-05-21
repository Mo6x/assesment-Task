<script setup>

</script>

<template>
    <div class=" flex px-28 w-full justify-between pb-28">
       <ul class=" space-y-3">
        <li class="text-primary font-bold">Product</li>
        <li>Fashion</li>
        <li>Gadgets </li>
        <li>Home Appliances</li>
        <li>Office & Work Tools</li>
       </ul>
       <ul class=" space-y-3">
        <li class="text-primary font-bold">Features</li>
        <li>Customise</li>
        <li>Delivery</li>
        <li>Apply Coupon</li>
        <li>Referral Bonus</li>
       </ul>
       <ul class=" space-y-3">
        <li class="text-primary font-bold">Support</li>
        <li>Get Help</li>
        <li>FAQ</li>
        <li>Contact Us</li>
       </ul>
       <ul class=" space-y-3">
        <li class="text-primary font-bold">Transparency</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Cookies</li>
       </ul>
        <div class=" space-y-4">
            <p class="text-primary font-bold">Subscribe to newsletter</p>
           <form @submit.prevent="" class="flex  rounded-lg">

                <input type="text" placeholder="Enter your email" class="w-full rounded-l-lg px-3 py-2 outline-none text-xl font-light text-black bg-primary2" />
            <button type="submit" class="bg-primary rounded-r-lg px-3 text-white">
                Subscribe
                </button>
          </form>
            <div class="flex space-x-2 ">
                <img src="@/assets/facebook.svg"  class=" w-2" />   
                <img src="@/assets/twitter.svg"  class=" w-5" />
                <img src="@/assets/youtube.svg"  class="w-5 " />
                <img src="@/assets/linkedin.svg"  class=" w-5" />
                <img src="@/assets/search.svg"  class=" w-5" />
            </div>
        </div>
    </div>
</template>