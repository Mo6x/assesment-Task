<script setup>
const brands=[
    {
        cover:require('@/assets/Amazon.svg'),
        stars:[
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
        ],
        verified:'(92 verified ratings)',
        name:'Amazon Gift Card'

    },

    {
        cover:require('@/assets/itune.svg'),
        stars:[
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/light_star.svg'),
        ],
        verified:'(88 verified ratings)',
        name:'iTunes Gift Card'

    },

    {
        cover:require('@/assets/sephora.svg'),
        stars:[
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
        ],
        verified:'(102 verified ratings)',
        name:'Sephora Gift Card'

    },

    {
        cover:require('@/assets/walmart.svg'),
        stars:[
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/light_star.svg'),
            require('@/assets/light_star.svg'),
        ],
        verified:'(76 verified ratings)',
        name:'Walmart Gift card'

    },
    {
        cover:require('@/assets/sportify.svg'),
        stars:[
            require('@/assets/Star.svg'),
            require('@/assets/light_star.svg'),
            require('@/assets/light_star.svg'),
            require('@/assets/light_star.svg'),
            require('@/assets/light_star.svg'),
        ],
        verified:'(23 verified ratings)',
        name:'Sportify Gift Card'

    },
    {
        cover:require('@/assets/play_station.svg'),
        stars:[
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
        ],
        verified:'(99 verified ratings)',
        name:'PlayStation Gift card'

    },
    {
        cover:require('@/assets/everything.svg'),
        stars:[
            require('@/assets/Star.svg'),
            require('@/assets/Star.svg'),
            require('@/assets/light_star.svg'),
            require('@/assets/light_star.svg'),
            require('@/assets/light_star.svg'),
        ],
        verified:'(99 verified ratings)',
        name:'AppStore Gift card'

    }
]
</script>

<template>
    <div class=" pt-52 px-28">
        <div class=" w-full mb-20 text-center">
            <h1 class=" text-4xl font-bold mb-3">Top Brands</h1>
            <p class=" w-1/4 text-gray-500 text-center  mx-auto">
            Simply place an  order and have it delivered to any recipient residentail address
            </p>
        </div>
        <!-- CARD -->

        <div class=" flex flex-wrap gap-5 w-full pl-32">
        <div v-for="(brand, index) in brands" :key="index" class="border rounded-3xl w-1/5 flex-col inline-flex"> 
            <div class="w-full h-full rounded-t-3xl ">
                <img :src="brand.cover"  class=" object-cover w-full h-full" />
            </div>
            <div class="p-4">

            <div class="flex ">
                <img  v-for="(stars, index2) in brand.stars" :key="index2"  :src="stars"  class=" " />
                <span class="text-sm">{{brand.verified}}</span>
            </div>
            <h1 class="text-3xl mt-5 mb-7  w-1/2">{{brand.name}}</h1>
        </div>

        </div>
</div>



    </div>
</template>