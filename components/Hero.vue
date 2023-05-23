<template>
  <!-- Hero section start -->
    <div class="mx-0 w-full xl:h-85vh md:max-lg:70vh  gap-3 bg-black flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col">
        <div class="text-white max-[640px]:pt-20 pt-28 xl:pl-20 lg:pl-20  pb-6 xl:h-full lg:h-full xl:w-1/2 lg:w-7/12 md:w-10/12 sm:w-10/12 max-[640px]:w-10/12 max-[1079px]:mx-auto max-[1079px]:pl-0">
          <img class="mb-16 absolute top-9 left-28 lg:left-20 md:left-12 sm:left-12 max-[640px]:left-8 w-32 h-9 max-[640px]:w-20 max-[640px]:h-5" src="../static/logo.svg" width="120px" height="35px">

          <h1 class="xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl max-[640px]:text-3xl sora font-semibold mb-6">The fastest and affordable way to hire musicians</h1>
          <h1 class="xl:text-lg lg:text-sm md:text-base sm:text-sm max-[640px]:text-xs open-sans font-light mb-6">Looking for talented musicians for your next event or project? Look no further than Gigrend, the premier musician hailing app!</h1>

          <div class="flex mx-auto gap-4 flex-row max-[1279px]:justify-content">
                <div class="Orange-button place-items-center h-14 w-48 px-7 text-base sora font-semibold"><NuxtLink to="/musicians"> Get started</NuxtLink></div>
                <div class="Other-button place-items-center h-14 w-48 px-7 text-base sora font-semibold"><NuxtLink to="/contact"> Learn more</NuxtLink></div>
          </div>
        </div>

        <div class="image-holder pt-8 pb-4 pl-12 xl:h-full lg:h-full xl:w-1/2 lg:w-6/12 md:w-full sm:w-full max-[640px]:w-full max-[1279px]:pl-0">
          <img src="../static/content.svg" class="max-[1279px]:mx-auto max-[1024px]:w-7/12 min-[1024px]:w-11/12"  alt="hello"/>
        </div>
    </div>

    <!-- Hero section end -->



</template>
<script setup>
</script>
<style scoped>
    .Orange-button {
      color: #d18959;
      border: 1px solid #d18959;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Other-button{
      color: #d18959;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-holder{
      overflow: hidden;
    }
    .greytext{
      color: rgba(18, 18, 18, 0.6);
    }
    .justify-content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text{
      white-space: nowrap;
    }
    .align{
      justify-content: center;
      align-items: center;
    }
    .align-content{
      align-items: center
    }
</style>