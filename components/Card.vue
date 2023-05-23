<template>
      <!-- Card Section Starts -->
  
  
  
      <div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col xl:gap-10 lg:gap-10 md:gap-0 px-4 justify-content">
        <div class="xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-8/12 max-[640px]:w-11/12 h-6/6 bg-image pt-80 mb-32">
          <div class="card1 h-fit bg-gray-300 p-8">
            <p class="text-xl font-semibold sora mb-5">Hire the only the Best</p>
            <p class="text-sm text poppins text-justify w-11/12">Connect with a wide range of skilled musicians who are ready and willing to bring your vision to life.Browse 
              through hundreds of profiles and samples of music, ensuring that you find the perfect match for your project.</p>
          </div>
        </div>
  
        <div class="xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-8/12 max-[640px]:w-11/12 h-6/6 bg-image1 pt-80 mb-32">
          <div class="card1 h-fit bg-gray-300 p-8">
            <p class="text-xl font-semibold sora mb-5">Secured and trusted</p>
            <p class="text-sm text poppins text-justify w-11/12">Gigrend is free and easy to use. Browse and book musicians in just a fewclicks. Plus, with our 
              secure payment system and 24/7 customer support, you can rest assured that your event or project will be in good hands.</p>
          </div>
        </div>
      </div>
  
      <!-- Card section ends -->
  </template>

  <script setup>
  </script>

  <style scoped>
      .bg-image{
        background-image: url("../static/side-view-happy-people-making-music.svg");
        background-size: 100%;
        background-size: cover;
        border-radius: 25px;
      }
      .bg-image1{
        background-image: url("../static/guitar-players.svg");
        background-size: cover;
        border-radius: 25px;
        background-repeat: none;
      }
      .full-card{
        width: 550px;
        height: 450px;
      }
      .justify-content{
        display: flex;
        justify-content: center;
      }
      .align{
        justify-content: center;
        align-items: center;
      }
      .align-content{
        align-items: center
      }
  </style>