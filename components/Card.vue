<template>
      <!-- Card Section Starts -->
  
      <div class="grid grid-cols-12                max-[1024px]:grid-cols-1  max-[1024px]:grid-rows-2                   px-16 gap-10">
        <div class="col-span-6 max-[1024px]:col-span-1 bg-image mb-32">
          <img src="../assets/images/side-view-happy-people-making-music.png" class="w-full">
          <div class="h-fit -mt-24 relative bg-gray p-8  px-10 pb-2">
            <p class="text-xl font-semibold mb-5">Hire the only the Best</p>
            <p class="text-sm text-left">Connect with a wide range of skilled musicians who are ready and willing to bring your vision to life.Browse 
              through hundreds of profiles and samples of music, ensuring that you find the perfect match for your project.</p>
          </div>
        </div>
        <div class="col-span-6 max-[1024px]:col-span-1 bg-image1 mb-32">
          <img src="../assets/images/guitar-players.png" class="w-full">
          <div class="h-fit -mt-24 relative bg-gray p-8  px-10 pr- pb-7">
            <p class="text-xl font-semibold mb-5">Secured and trusted</p>
            <p class="text-sm text-left">Gigrend is free and easy to use. Browse and book musicians in just a few clicks. Plus, with our 
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
  background-image: url("../assets/images/side-view-happy-people-making-music.svg");
  background-size: cover;
  border-radius: 25px;
}
.bg-image1{
  background-image: url("../assets/images/guitar-players.svg");
  background-size: cover;
  border-radius: 25px;
}
.bg-gray{
  background-color: #F2F2F2;
}
.justify-content{
  display: flex;
  justify-content: center;
}
</style>