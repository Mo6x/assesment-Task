<script setup>
</script>
<template>
    <div class="  flex  justify-between items-center h-screen px-28"> 
     <div class=" w-10/12 space-y-7 ">
       <h1 class=" text-8xl font-bold">Get digital Gifts Cards at Ease</h1>
       <p class="text-2xl text-gray-700 w-11/12 font-light tracking-wider ">
        Express love to friends and family all over the word,
        with special memories of gifts.
       </p>
      <form @submit.prevent="" class=" space-x-3 flex  border-2 rounded-full w-5/6 border-primary3 py-2 pr-2 pl-5">
        <input type="text" placeholder="Search gift cards" class="w-full outline-none text-xl font-light text-black" />
        <button type="submit" class="bg-primary text-white text-xl py-2 px-12 rounded-3xl hover:shadow-md hover:bg-primary2 hover:text-primary transition-all duration-500 ease-linear">
            Search
            </button>
      </form>
    </div>
        <div class=" relative w-full h-full  items-center justify-end flex">
            <img src="@/assets/group1.svg"  class=" absolute" />
            <img src="@/assets/group2.svg"  class=" absolute" />
            <img src="@/assets/group3.svg"  class=" absolute" />
            <img src="@/assets/group4.svg"  class=" absolute" />
        </div>
    </div>
</template>