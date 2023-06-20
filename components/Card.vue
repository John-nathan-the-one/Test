<template>
      <!-- Card Section Starts -->
      <div>
  
      <div class="mx-auto max-w-1440 grid grid-cols-12                max-[1024px]:grid-cols-1  max-[1024px]:grid-rows-2                   max-[670px]:px-0 px-16 gap-10">
        <div class="ghost2 col-span-6 max-[1024px]:col-span-1 bg-image mb-32 mx-auto     max-[1024px]:w-9/12 max-[785px]:w-11/12 max-[670px]:w-10/12">
          <img src="../assets/images/side-view-happy-people-making-music.png" class="w-full img">
          <div class="h-fit -mt-24 relative bg-gray min-h-168 p-8 max-[650px]:pt-3  px-10 pb-2">
            <p class="text-xl font-semibold mb-5 max-[650px]:mb-2">Hire the only the Best</p>
            <p class="text-sm max-[650px]:text-xs text-left">Connect with a wide range of skilled musicians who are ready and willing to bring your vision to life.Browse 
              through hundreds of profiles and samples of music, ensuring that you find the perfect match for your project.</p>
          </div>
        </div>
        <div class="ghost col-span-6 max-[1024px]:col-span-1 bg-image1 mb-32 mx-auto    max-[1024px]:w-9/12 max-[785px]:w-11/12 max-[670px]:w-10/12">
          <img src="../assets/images/guitar-players.png" class="w-full img">
          <div class="h-fit -mt-24 relative bg-gray min-h-168 p-8 max-[650px]:pt-3  px-10 pb-2">
            <p class="text-xl font-semibold mb-5 max-[650px]:mb-2">Secured and trusted</p>
            <p class="text-sm max-[650px]:text-xs text-left">Gigrend is free and easy to use. Browse and book musicians in just a few clicks. Plus, with our 
              secure payment system and 24/7 customer support, you can rest assured that your event or project will be in good hands.</p>
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
.bg-gray{
  background-color: #F2F2F2;
}
.justify-content{
  display: flex;
  justify-content: center;
}
</style>