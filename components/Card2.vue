<template>
      <!-- Card Section Starts -->
      <div>
  
      <div class="mx-auto max-w-1440 grid grid-cols-12                max-[1024px]:grid-cols-1  max-[1024px]:grid-rows-2                   max-[670px]:px-0 px-16 gap-10">
        <div class="ghost col-span-6 max-[1024px]:col-span-1 bg-image mb-32 mx-auto     max-[1024px]:w-9/12 max-[785px]:w-11/12 max-[670px]:w-10/12">
          <img src="../assets/images/side-view-happy-people-making-music.png" class="w-full img">
          <div class="h-fit -mt-24 relative bg-gray min-h-168 pt-8 max-[650px]:pt-3  px-10">
            <p class="text-xl font-semibold mb-5 max-[650px]:mb-2">Showcase your skills</p>
            <p class="text-sm max-[650px]:text-xs text-left">With Gigrend, it's easy to showcase your skills,
                find new opportunities, and earn money doing what they love.</p>
          </div>
        </div>
        <div class="ghost2 col-span-6 max-[1024px]:col-span-1 bg-image1 mb-32 mx-auto     max-[1024px]:w-9/12 max-[785px]:w-11/12 max-[670px]:w-10/12">
          <img src="../assets/images/guitar-players.png" class="w-full img">
          <div class="h-fit -mt-24 relative bg-gray min-h-168 pt-8 max-[650px]:pt-3  px-10">
            <p class="text-xl font-semibold mb-5 max-[650px]:mb-2">Make the most of your time</p>
            <p class="text-sm max-[650px]:text-xs text-left">Work with your own schedule. No minimum hours
                 and no boss. Make money on your own terms</p>
          </div>
        </div>
      </div>
      </div>
  
      <!-- Card section ends -->
  </template>

  <script setup>
  </script>

<style scoped>
.img {
  --_g: 10% /45% 45% no-repeat linear-gradient(#000 0 0);
  --m:
    left   var(--_i,0%) top    var(--_g),
    bottom var(--_i,0%) left   var(--_g),
    top    var(--_i,0%) right  var(--_g),
    right  var(--_i,0%) bottom var(--_g);
  -webkit-mask: var(--m);
          mask: var(--m);
  filter: grayscale();
  transition: 0.8s linear;
  cursor: pointer;
}
.img:hover {
  --_i: 100%;
  filter: grayscale(0);
  --_g: 0% /50.01% 50% no-repeat linear-gradient(#000 0 0);
}


.bg-image{
  background-image: url("../assets/images/side-view-happy-people-making-music.svg");
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