<template>
      <!-- Card Section Starts -->
  
      <div class="grid grid-cols-12                max-[1024px]:grid-cols-1  max-[1024px]:grid-rows-2                   px-16 gap-10">
        <div class="col-span-6 max-[1024px]:col-span-1 bg-image mb-32">
          <img src="../assets/images/side-view-happy-people-making-music.png" class="w-full">
          <div class="h-fit -mt-24 relative bg-gray min-h-168 pt-8  px-10">
            <p class="text-xl font-semibold mb-5">Showcase your skills</p>
            <p class="text-sm text-left">With Gigrend, it's easy to showcase your skills,
                find new opportunities, and earn money doing what they love.</p>
          </div>
        </div>
        <div class="col-span-6 max-[1024px]:col-span-1 bg-image1 mb-32">
          <img src="../assets/images/guitar-players.png" class="w-full">
          <div class="h-fit -mt-24 relative bg-gray min-h-168 pt-8  px-10">
            <p class="text-xl font-semibold mb-5">Make the most of your time</p>
            <p class="text-sm text-left">Work with your own schedule. No minimum hours
                 and no boss. Make money on your own terms</p>
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