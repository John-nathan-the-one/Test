<template>
    <!-- 2nd Part of Footer Begins -->
    <div class="bg-black justify-content flex-col pt-10 pb-5">
      <br><br><br><br>
  
      <div class="grid    xl:grid-cols-5 xl:grid-rows-1 lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-4 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 max-[640px]:grid-cols-2 max-[640px]:grid-rows-3 max-[580px]:grid-cols-1 max-[580px]:grid-rows-5    text-white mb-1 mx-auto px-4">
            <div class="max-[580px]:h-20">
              <NuxtLink to="/">
                <img class="w-7/12 max-md:mx-auto mr-auto" src="../assets/images/logo.svg">
              </NuxtLink>
            </div>
            
  
            <div class="flex flex-col max-[580px]:-mt-16">
              <p class="text-2xl font-semibold mb-5">About</p>
              <NuxtLink to="/"><p class="text-base font-medium opacity-75 mb-3">Home</p></NuxtLink>
              <NuxtLink to="/about"><p class="text-base font-medium opacity-75 mb-3">About</p></NuxtLink>
              <NuxtLink to="/contact"><p class="text-base font-medium opacity-75">Contact Us</p></NuxtLink>
            </div>
  
            <div class="flex flex-col max-[580px]:-mt-10">
              <p class="text-2xl font-semibold mb-5">Resources</p>
              <NuxtLink to="/gigrend"><p class="text-base font-medium opacity-75 mb-3">Videos</p></NuxtLink>
              <NuxtLink to="/musicians"><p class="text-base font-medium opacity-75">Guides</p></NuxtLink>
            </div>
  
            <div class="flex flex-col max-[580px]:-mt-7">
              <p class="text-2xl font-semibold mb-5">Terms and policy</p>
              <p class="text-base font-medium opacity-75 mb-3">Privacy and policy</p>
              <p class="text-base font-medium opacity-75 mb-3">Help and support</p>
              <p class="text-base font-medium opacity-75">Sitemap</p>
            </div>
  
            <div class="max-[580px]:-mt-5 h-full flex justify-center xl:col-span-1 lg:col-span-4 md:col-span-4 sm:col-span-2 max-[640px]:col-span-2 max-[580px]:col-span-1">
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