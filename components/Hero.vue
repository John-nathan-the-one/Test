<template>
  <!-- Hero section start -->
  <div class="bg-black">
    <section class="ghost mx-auto max-w-1440 grid grid-cols-2 max-xl:grid-cols-1 max-xl:pl-7 pl-14 items-center">
        <div class="text-white pt-9 pr-12 ghost">
          <img class="mb-20 w-44" src="../assets/images/logo.svg">

          <h1 class="text-72 font-semibold mb-8">The fastest and affordable way to hire musicians</h1>
          <h1 class="text-lg open font-light mb-16">Looking for talented musicians for your next event or project? Look no further than Gigrend, the premier musician hailing app!</h1>

          <div class="heart flex mx-auto gap-4    max-[700px]:gap-2    flex-row max-[1279px]:justify-content mb-6">
                <div class="Orange-button place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/musicians"> Get started</NuxtLink></div>
                <div class="Other-button place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/contact"> Learn more</NuxtLink></div>
          </div>
        </div>

        <div class="overflow-hidden mx-auto">
          <img src="../assets/images/Content.png" class="w-11/12  mb-2"/>
        </div>
      </section>
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
    .text-72{
      font-size: 72px;
      line-height: 92px;
      letter-spacing: -0.05em;
    }
    @media only screen and (max-width: 600px) {
      .text-72{
      font-size: 46px;
      line-height: 52px;
      letter-spacing: -0.05em;
    }
    }
    @media (min-width: 600px) {
      @media not all and (min-width: 944px) {
        .text-72{
          font-size: 56px;
          line-height: 66px;
          letter-spacing: -0.05em;
        }
      }
    }
</style>