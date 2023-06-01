<template>
  <!-- Hero section start -->
    <section class="bg-black grid grid-cols-2 pl-12 items-center">
        <div class="text-white pt-9 pr-12">
          <img class=" mb-20" src="../assets/images/logo.svg" width="180px" height="36px">

          <h1 class="text-72 font-semibold mb-8">The fastest and affordable way to hire musicians</h1>
          <h1 class="text-lg open font-light mb-16">Looking for talented musicians for your next event or project? Look no further than Gigrend, the premier musician hailing app!</h1>

          <div class="flex mx-auto gap-4 flex-row max-[1279px]:justify-content mb-6">
                <div class="Orange-button place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/musicians"> Get started</NuxtLink></div>
                <div class="Other-button place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/contact"> Learn more</NuxtLink></div>
          </div>
        </div>

        <div class="overflow-hidden mx-auto">
          <img src="../assets/images/Content.png" class="" width="570px" alt="image"/>
        </div>
      </section>

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
    .text-72{
      font-size: 72px;
      line-height: 92px;
      letter-spacing: -0.05em;
    }
</style>