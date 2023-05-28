<script setup></script>

<template>
  <div class="w-full flex items-center pt-52 md:px-0 px-10 justify-center">
    <div class="w-full">
      <h1
        class="md:text-5xl text-xl font-bold md:w-1/3 mb-10 md:mb-20 text-center mx-auto"
      >
        Amazing features made available to you
      </h1>
      <div class="md:px-80">
        <div class="flex md:flex-nowrap flex-wrap-reverse justify-between items-center w-full md:mb-28">
          <div class="space-y-4 w-full md:block flex items-center  flex-col">
            <div class="">
              <img src="@/assets/costom_gift.svg" class=" " />
            </div>
            <div class="md:text-5xl text-2xl font-bold md:w-7/12 text-center md:text-left">
              <h1>personalize your gift cards to preference</h1>
            </div>
            <p class="md:w-1/4 text-gray-400 text-center md:text-left">
              Tap into the gift bag to share love in the most amazing way.
              Change preference to suit that special one with no extra cost.
            </p>
            <div class="w-full h-3 md:hidden "></div>
            <div class="relative ">
              <div
                class="absolute -top-2 -left-3 bg-yellow-400 border text-xs px-1 -rotate-12 inline-block"
              >
                New
              </div>
              <button class="bg-primary text-white rounded-full px-10 py-3">
                Get started for free
              </button>
            </div>
            <div class="w-full h-20 md:hidden "></div>

          </div>

          <div class="relative md:mb-0 mb-36">
            <img src="@/assets/gift.svg" class="" />
            <div
              class="inline-flex space-x-2 border border-red-950 rounded-xl md:px-5 top-2 -right-32 bg-white absolute p-2 md:py-3 text-red-900"
            >
              <img src="@/assets/dot.svg" class="w-3" />
              <span>Remove Gospel genre</span>
            </div>
            <div
              class="inline-flex space-x-2 border bg-white -right-32 -bottom-5 border-red-950 rounded-xl px-5 absolute py-3 text-red-900"
            >
              <img src="@/assets/dot.svg" class=" " />
              <span>Add 7 days subscription</span>
            </div>
            <div
              class="bg-yellow-400 absolute bottom-5 -left-3 text-red-900 border border-red-900 p-1 md:px-5 md:py-2 inline-block rounded-xl font-bold"
            >
              <span class="text-xs">No Extra Cost - &#8358;0</span>
            </div>
            <div class="absolute flex space-x-2 -bottom-20 left-10">
              <img src="@/assets/Customisegifts.svg" class=" " />
              <img src="@/assets/Arrow.svg" class=" " />
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col justify-between">
          <div class="relative">
            <img src="@/assets/gift_hand.svg" class="w-8/12 md:w-full" />
            <img
              src="@/assets/item.svg "
              class="absolute w-8/12 md:w-full -bottom-20 -right-2 md:-bottom-48 md:-right-28"
            />
          </div>
          <div class="gap-4 flex flex-col md:mt-0 mt-32">
            <div class="w-full md:block flex items-center justify-center"><img src="@/assets/special_gift.svg" class="  " /></div>
            <div class="md:text-4xl text-xl font-bold text-center md:text-left inline-block">
              Suitable to gift loved <br />ones on special moments
            </div>
            <div class="flex space-x-2">
              <img src="@/assets/mark.svg" class=" " />
              <Span>purchase at Discounts.</Span>
            </div>
            <div class="flex space-x-2">
              <img src="@/assets/mark.svg" class=" " />
              <Span>Share to multiply people.</Span>
            </div>
            <div class="flex space-x-2 ">
              <img src="@/assets/mark.svg" class=" " />
              <Span>Deliver at any location.</Span>
            </div>
            <button class="rounded-full bg-primary px-10 py-2 text-white mt-10">
              Get Gift card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
