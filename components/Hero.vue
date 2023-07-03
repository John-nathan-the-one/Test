<template>
  <!-- Hero section start -->
  <div class="bg-black">
    <section class="mx-auto max-w-1440 grid grid-cols-2 max-xl:grid-cols-1 max-xl:pl-7 pl-14 items-center relative overflow-hidden">
        <div class="text-white pt-9 pr-12">
          <NuxtLink to="/">
            <img class="mb-20 w-44" src="../assets/images/logo.svg">
          </NuxtLink>

          <h1 class="text-72 font-semibold mb-8">The fastest and affordable way to hire musicians</h1>
          <h1 class="text-lg open font-light mb-16">Looking for talented musicians for your next event or project? Look no further than Gigrend, the premier musician hailing app!</h1>

          <div class="flex mx-auto gap-4    max-[700px]:gap-2    flex-row max-[1279px]:justify-content mb-6">
                <div class="Orange-button heartbeat place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/musicians"> Get started</NuxtLink></div>
                <div class="Other-button  heartbeat place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/contact"> Learn more</NuxtLink></div>
          </div>
        </div>

        <div class="overflow-visible mx-auto z-30">
          <img src="../assets/images/Content.png" class="w-11/12  mb-2 ghost"/>
        </div>

        <div class="circle-shadow absolute  z-10   max-[1280px]:hidden">
          <div class="circle-shadow1 absolute  z-10">
          </div>
        </div>
      </section>
  </div>
    <!-- Hero section end -->



</template>
<script setup>
</script>
<style scoped>
    .heartbeat:hover {
        animation: beat 1s infinite alternate;
      }
      @keyframes beat{
        to { transform: scale(1.06); }
      }
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
    .circle-shadow{
        width: 58%;
        height: 780px;
        border-radius: 100%;
        border: 1px solid white;
        background-color: rgba(133, 62, 62, 0);
        transition: 3s ease;
        bottom: -240px;
        right: -192px;
    }
    .circle-shadow:hover{
      border: dashed 4px white;
      rotate: 360deg;
    }
    .circle-shadow1:hover{
      border: dashed 4px white;
      rotate: 90deg;
    }
    .circle-shadow1{
        width: 80%;
        height: 620px;
        border-radius: 100%;
        border: 1px solid white;
        background-color: rgba(133, 62, 62, 0);
        transition: 3s ease;
        bottom: 0px;
        right: 0px;
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