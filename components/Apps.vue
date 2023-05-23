<template>
      <!-- App Card Section starts -->
  
  
    <div class="flex mt-16">
      <div class="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-8/12 max-[640px]:w-10/12  app mx-auto flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col p-5">
        <div class="app-sub1 xl:w-6/12 lg:w-6/12 md:w-10/12    xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
          <img class="w-full" src="../static/guitar 1.svg">
        </div>


        <div class="app-sub2 text-left xl:px-8 lg:px-7 pt-6 min-[1024px]:max-[1058px]:pt-0 pb-6">
          <p class="text-purple-700 text-lg font-semibold mb-2 max-[1100px]:mb-1 min-[1024px]:max-[1258px]:text-white">Get The App</p>
          <p class="text-white xl:text-3xl lg:text-2xl font-semibold mb-5 max-[1100px]:mb-3">There's more to<br> love in the apps</p>
          <p class="text-white opacity-75 xl:text-base lg:text-sm font-normal whitespace-nowrap inter mb-16 md:max-lg:mb-21">Sometimes features require a short description.<br> This can be detailed description</p>

        <div class="">
          <div class="flex flex-row w-fit xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto max-[640px]:mx-auto gap-3">

            <img class="xl:w-32 lg:w-28" src="../static/app-store-google.svg">
          
            <img class="xl:w-32 lg:w-28" src="../static/app-store-apple.svg">
          </div>
        </div>

        </div>



        
      </div>
    </div>
  
  
  
      <!-- App Section Ends -->
  </template>
  <script setup>
  </script>
  <style scoped>
      .justify-content{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .app{
        background-color: #d18959;
        border-radius: 10px;
      }
      .app-sub1{
        background-color: #202020;
        border-radius: 20px;
      }
      .playstore{
        border-radius: 10px;
        justify-content: center;
        align-items: center;
      }
      .apple{
        border-radius: 10px;
        justify-content: center;
        align-items: center;
      }
      .align{
        justify-content: center;
        align-items: center;
      }
      .align-content{
        align-items: center
      }
  </style>