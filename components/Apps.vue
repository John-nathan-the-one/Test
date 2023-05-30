<template>
      <!-- App Card Section starts -->

      <div class="grid grid-cols-12 mt-28">
      <div class="grid grid-cols-2 gap-8      col-span-10 col-start-2   app p-8">
        <div class="app-sub1 col-span-1  h-full relative overflow-visible">
          <div class="h-20"></div>
          <img class="w-full absolute bottom-0" src="../assets/images/guitar 1.png">
        </div>


        <div class="app-sub2 pb-8 pt-7">
          <p class="text-purple-700 text-lg font-semibold mb-2">Get The App</p>
          <p class="text-white text-40 font-semibold mb-5 ">There's more to<br> love in the apps</p>
          <p class="text-white opacity-75 text-lg mb-16">Sometimes features require a short description.<br> This can be detailed description</p>

        <div class="">
          <div class="flex flex-row w-fit  gap-3">

            <img class="xl:w-32 lg:w-28" src="../assets/images/app-store-google.svg">
          
            <img class="xl:w-32 lg:w-28" src="../assets/images/app-store-apple.svg">
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
      .text-40{
        font-size: 40px;
        line-height: 52px;
        letter-spacing: 0.2px;
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