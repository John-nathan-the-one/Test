<template>
    <!-- 2nd Part of Footer Begins -->
    <div class="bg-black justify-content flex-col pt-10 pb-5">
      <br><br><br><br>
  
      <div class="grid    xl:grid-cols-5 xl:grid-rows-1 lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-4 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 max-[640px]:grid-cols-2 max-[640px]:grid-rows-3    text-white mb-1 xl:mx-20 lg:mx-16 md:mx-12 sm:mx-6">
            <img src="../assets/images/logo.svg">
  
            <div class="flex flex-col">
              <p class="text-2xl font-semibold mb-5">About</p>
              <NuxtLink to="/"><p class="text-base font-medium opacity-75 mb-3">Home</p></NuxtLink>
              <NuxtLink to="/about"><p class="text-base font-medium opacity-75">About</p></NuxtLink>
            </div>
  
            <div class="flex flex-col">
              <p class="text-2xl font-semibold mb-5">Resources</p>
              <NuxtLink to="/gigrend"><p class="text-base font-medium opacity-75 mb-3">Videos</p></NuxtLink>
              <p class="text-base font-medium opacity-75">Guides</p>
            </div>
  
            <div class="flex flex-col">
              <p class="text-2xl font-semibold mb-5 whitespace-nowrap">Terms and policy</p>
              <p class="text-base font-medium opacity-75 mb-3">Privacy and policy</p>
              <p class="text-base font-medium opacity-75 mb-3">Help and support</p>
              <p class="text-base font-medium opacity-75">Sitemap</p>
            </div>
  
            <div class="h-full justify-content xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 max-[640px]:col-span-2">
              <img src="../assets/images/socials.svg">
            </div>
            
  
            
          </div>
  
          <p class="mt-24    text-base text-white font-medium opacity-75">© Gigrend 2023 - All Rights Reserved</p>
  
  
      </div>


      <!-- 2nd Part of Footer Ends -->

</template>
<script>
</script>
<style>
    .align{
      justify-content: center;
      align-items: center;
    }
    .align-content{
      align-items: center;
    }
    .justify-content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>