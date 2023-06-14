<template>
  <div class="mx-auto max-w-1440">
    <!-- Hero section start -->
    <section class="bg-black grid grid-cols-2 max-xl:grid-cols-1 pl-12 pb-12 items-center">
        <div class="text-white pt-9">
          <img class="w-44 mb-20" src="../assets/images/logo.svg">

          <h1 class="text-72 font-semibold mb-8">
            Earn  money doing what you love.
          </h1>
          <h1 class="text-lg open pr-12 font-light mb-16">
            Find new opportunities, get your next gig, 
            and earn big on Gigrend. You bring the skill. We'll make earning easy
          </h1>

          <div class="flex mx-auto gap-4 flex-row max-[1279px]:justify-content mb-6">
                <div class="Orange-button place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/musicians"> Get started</NuxtLink></div>
                <div class="Other-button place-items-center h-14 w-48 px-7 text-base font-semibold"><NuxtLink to="/contact"> Learn more</NuxtLink></div>
          </div>
        </div>

        <div class="overflow-hidden mr-8 max-xl:mx-auto min-xl:mt-48">
          <img src="../assets/images/Musician_hero.png" class="w-full"/>
        </div>
      </section>
    <!-- Hero section end -->


    <Promotions2 />


    <Card2 />


    <Apps />


    <!--Empowering Section Starts -->


        <div class="mt-44 mb-32 grid grid-cols-2 max-xl:grid-cols-1 max-[650px]:px-10 px-20 min-[1150px]:max-[1279px]:px-40 gap-10">

        <div class="">
            <p class="text-48 font-semibold whitespace-nowrap max-[800px]:whitespace-normal">Gigrend is empowering<br class="max-[1279px]:hidden max-[940px]:block max-[800px]:hidden"> Musicians</p>
            <p class="text-20 opacity-75 mt-6 text">
              Our mission at Gigrend is to connect talented musicians with individuals and
                 businesses in need of exceptional live music performances. We strive to 
                 make the process of hiring musicians simple, efficient, and transparent
                  for both parties, ensuring that every gig is a success.
            </p>

            <div class="grid grid-cols-3 mt-8">
                <div>
                    <p class="purple text-3xl font-semibold mb-2     max-[705px]:text-2xl">verified</p>
                    <p class="opacity-75 text-lg             max-[705px]:text-sm">Verified Earnings</p>
                </div>
                <div>
                    <p class="purple text-3xl font-semibold mb-2   max-[705px]:text-2xl">Easiest</p>
                    <p class="opacity-75 text-lg                   max-[705px]:text-sm">Have easy access</p>
                </div>
                <div>
                    <p class="purple text-3xl font-semibold mb-2    max-[705px]:text-2xl">Powerfull</p>
                    <p class="opacity-75 text-lg mb-4                    max-[705px]:text-sm">Effective & Efficient</p>
                </div>
            </div>

            <div class="max-[1024px]:mx-auto Purple-button  mt-5 px-7 p-3">Get started</div>
        </div>

        <div class="overflow-hidden max-xl:mx-auto">
            <img class="ml-auto" src="../assets/images/Empowering.png">
        </div>

      </div>




      <div class="bg-black justify-content flex-col pt-12 pb-5">
        <Footer />
      </div>
    </div>

</template>
<script>
</script>
<style scoped>
    .text-72{
      font-size: 72px;
      line-height: 92px;
      letter-spacing: -0.05em;
    }
    .text-48{
      font-size: 48px;
      line-height: 64px;
    }
    @media only screen and (max-width: 800px) {
      .text-48 {
      font-size: 36px;
      line-height: 42px;
    }
  }
  @media only screen and (max-width: 620px) {
      .text-48 {
      font-size: 24px;
      line-height: 30px;
    }
  }
    .text-20{
      font-size: 20px;
      line-height: 38px;
    }
    @media only screen and (max-width: 705px) {
      .text-20{
      font-size: 14px;
      line-height: 20px;
    }
  }
    
    .purple{
      color: #501CB7;
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
    .image-holder{
      overflow: hidden;
    }
    .Purple-button {
      border: 1px solid #501CB7;
      background-color: #501CB7;
      color: white;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
    }
    .hero-image{
      width: 50vw;
      height: 100vh;
    }
    .image-holder{
      overflow: hidden;
    }
    .justify-content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .align{
      justify-content: center;
      align-items: center;
    }
    .align-content{
      align-items: center
    }
</style>