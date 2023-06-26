<template>
      <!-- App Card Section starts -->

      <div class="mx-auto max-w-1440 grid grid-cols-12">
      <div class="grid grid-cols-2 max-[1130px]:grid-cols-1 max-[1130px]:grid-rows-2       max-[1130px]:w-8/12 max-[910px]:w-10/12 max-[700px]:w-full       mx-auto gap-8      max-[560px]:col-span-10 max-[560px]:mx-10 col-span-10 w-full    max-[560px]:col-start-1 col-start-2   app p-8">
        <div class="app-sub1 heartbeat  h-full relative overflow-visible">
          <img class="w-full absolute bottom-0" src="../assets/images/guitar1.png">
        </div>


        <div class="app-sub2 pb-8 pt-7">
          <p class="text-purple-700 text-lg font-semibold mb-2">Get The App</p>
          <p class="text-white text-40 font-semibold mb-5 ">There's more to<br class="max-[800px]:hidden"> love in the apps</p>
          <p class="text-white opacity-75 text-lg mb-16 max-[700px]:mb-7">Sometimes features require a short description.<br class="max-[1180px]:hidden"> This can be detailed description</p>

        <div class="">
          <div class="flex flex-row w-fit  gap-3">

            <img class="xl:w-32 lg:w-28 max-[640px]:w-24 expand" src="../assets/images/app-store-google.svg">
          
            <img class="xl:w-28 lg:w-28 max-[640px]:w-24 expand" src="../assets/images/app-store-apple.svg">
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
      .heartbeat:hover {
        transform: rotateY(0deg) scale(1.05);
        z-index: 1;
        box-shadow: 0 25px 40px rgba(0,0,0,0.5);
        animation: none;
      }
      .heartbeat {
        font-size: 150px;
        animation: beat 1s infinite alternate;
        transform-origin: center;
      }
      @keyframes beat{
        to { transform: scale(0.97); }
      }

      .expand:hover {
        animation: change 1s infinite alternate;
      }
      @keyframes change{
        to { transform: scale(1.06); }
      }
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
      @media only screen and (max-width: 540px) {
        .text-40 {
          font-size: 32px;
          line-height: 38px;
          letter-spacing:0.2px;
        }
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