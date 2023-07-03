<template>
  <!-- Hero section start -->
  <div class="bg-black">
    <section class="mx-auto max-w-1440 grid grid-cols-2 max-xl:grid-cols-1 max-xl:pl-7 pl-14 items-center relative">
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

        <div class="circle-shadow absolute bottom-0 right-0 z-10">
          <div class="circle-shadow1 absolute bottom-0 right-0 z-10">
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
        width: 510px;
        height: 450px;
        border-top-left-radius: 700px;
        border: 1px solid white;
        border-right: 0px;
        border-bottom: 0px;
        background-color: rgba(248, 235, 235, 0);
        transition: 3s ease;
        animation: grow 2s infinite alternate;
    }
    .circle-shadow:hover{
        width: 100%;
        height: 100%;
        border: 0px dashed rgba(255, 255, 255, 0);
        border-radius: 0px;
        background-color: rgba(0, 0, 0, 0);
        animation: none;
    }
    .circle-shadow1{
        width: 340px;
        height: 300px;
        border-top-left-radius: 700px;
        border: 1px solid white;
        border-right: 0px;
        border-bottom: 0px;
        background-color: rgba(248, 235, 235, 0);
        transition: 3s ease;
        animation: grow 2s infinite alternate;
    }
    .circle-shadow1:hover{
        width: 100%;
        height: 100%;
        border: 0px dashed rgba(255, 255, 255, 0);
        border-radius: 0px;
        background-color: rgba(0, 0, 0, 0);
        animation: none;
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