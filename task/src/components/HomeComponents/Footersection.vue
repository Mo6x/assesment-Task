<script setup>

</script>

<template>
    <div>
        <div>
           <span>Product</span>
           <span>Features</span>
           <span>Support</span>
           <span>Transparency</span>
           <span>Subscribe to newsletter</span>
        </div>
        <div>
           <nav>Fashion</nav>
           <nav>Customise</nav>
           <nav>Get Help</nav>
           <nav>Terms & Connditions</nav>
           <form @submit.prevent="" class=" space-x-3 flex  border-2 rounded-full w-5/6 border-primary3 py-2 pr-2 pl-5">
            <input type="text" placeholder="Enter your email" class="w-full outline-none text-xl font-light text-black" />
            <button type="submit" class="bg-primary text-white text-xl py-2 px-12 rounded-3xl hover:shadow-md hover:bg-primary2 hover:text-primary transition-all duration-500 ease-linear">
                Subscribe
                </button>
          </form>
        </div>
        <div>
            <nav>Gadgets</nav>
            <nav>Delivery</nav>
            <nav>FAQ</nav>
            <nav>Privacy Policy</nav>
            <div>
                <img src="@/assets/facebook.svg"  class=" " />   
                <img src="@/assets/twitter.svg"  class=" " />
                <img src="@/assets/youtube.svg"  class=" " />
                <img src="@/assets/linkedin.svg"  class=" " />
                <img src="@/assets/search.svg"  class=" " />
            </div>
        </div>
        <div>
            <nav>Home Appliances</nav>
            <nav>Apply Coupon</nav>
            <nav>Contact Us</nav>
            <nav>Cookies</nav>
        </div>
        <div>
            <nav>Office & Work Tools</nav>
            <nav>Referral Bonus</nav>
        </div>
    </div>
</template>