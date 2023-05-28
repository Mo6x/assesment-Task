<script setup>
</script>
<template>
    <div class="  flex md:flex-row flex-col justify-between items-center pb-28 md:pt-32 pt-20 px-5 md:px-28">     
     <div class=" md:w-10/12 space-y-7 ">
       <h1 class="md:text-8xl text-3xl font-bold">Get digital Gifts Cards at Ease</h1>
       <p class="md:text-2xl text-md text-gray-700 w-11/12 font-light tracking-wider ">
        Express love to friends and family all over the word,
        with special memories of gifts.
       </p>
      <form @submit.prevent="" class=" space-x-3 flex  md:border-2 border rounded-full md:w-5/6 border-primary3 py-1 md:py-2 pr-1 md:pr-2 pl-5">
        <input type="text" placeholder="Search gift cards" class="w-full outline-none text-xl font-light text-black" />
        <button type="submit" class="bg-primary text-white text-sm md:text-xl md:py-2 px-4 md:px-12 rounded-3xl hover:shadow-md hover:bg-primary2 hover:text-primary transition-all duration-500 ease-linear">
            Search
            </button>
       </form>
      </div>
        <div class=" relative w-full h-full mt-20 md:mt-0 items-center justify-end flex">
            <img src="@/assets/group1.svg"  class=" md:absolute" />
            <img src="@/assets/group2.svg"  class=" absolute" />
            <img src="@/assets/group3.svg"  class=" absolute" />
            <img src="@/assets/group4.svg"  class=" absolute" />
        </div>
    </div>
</template>