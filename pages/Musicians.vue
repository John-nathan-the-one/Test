<template>
    <!-- Hero section start -->
    <div class="mx-0 w-full xl:h-85vh md:max-lg:70vh  gap-3 bg-black flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col">
        <div class="text-white max-[640px]:pt-20 pt-28 xl:pl-20 lg:pl-20  pb-6 xl:h-full lg:h-full xl:w-1/2 lg:w-7/12 md:w-10/12 sm:w-10/12 max-[640px]:w-10/12 max-[1079px]:mx-auto max-[1079px]:pl-0">
          <img class="mb-16 absolute top-9 left-28 lg:left-20 md:left-12 sm:left-12 max-[640px]:left-8 w-32 h-9 max-[640px]:w-20 max-[640px]:h-5" src="../static/logo.svg" width="120px" height="35px">

          <h1 class="xl:text-6xl lg:text-5xl md:text-6xl sm:text-4xl max-[640px]:text-3xl sora font-semibold mb-6">
            Earn  money doing what you love.
          </h1>
          <h1 class="xl:text-lg lg:text-sm md:text-base sm:text-sm max-[640px]:text-xs open-sans font-light mb-6">
            Find new opportunities, get your next gig, 
            and earn big on Gigrend. You bring the skill. We'll make earning easy
          </h1>

          <div class="flex mx-auto gap-4 flex-row max-[1279px]:justify-content">
                <div class="Orange-button place-items-center h-14 w-48 px-7 text-base sora font-semibold"><NuxtLink to="/musicians"> Get started</NuxtLink></div>
                <div class="Other-button place-items-center h-14 w-48 px-7 text-base sora font-semibold"><NuxtLink to="/contact"> Learn more</NuxtLink></div>
          </div>
        </div>

        <div class="image-holder justify-content pt-8 pb-4 pr-20 lg:pr-12 xl:h-full lg:h-full xl:w-1/2 lg:w-6/12 md:w-full sm:w-full max-[640px]:w-full max-[1024px]:pr-0">
          <img src="../static/Musician_hero.svg" class="max-[1279px]:mx-auto max-[1024px]:w-7/12 min-[1024px]:w-11/12"  alt="hello"/>
        </div>
    </div>

    <!-- Hero section end -->


    <Promotions />


    <Card />


    <Apps />


    <!--Empowering Section Starts -->


    <div class="border border-black mt-44 mb-32 flex lg:justify-normal md:justify-center sm:justify-center max-[640px]:justify-center">
      <div class="border border-red-400 max-w-fit flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-[640px]:flex-col   gap-28        min-[640px]:max-[1024px]:gap-16 max-[640px]:gap-3          min-[1190px]:max-[1280px]:ml-28 xl:ml-28 lg:ml-20 md:ml-0">

        <div class="xl:w-7/12 lg:w-5/12">
            <p class="xl:text-4xl lg:text-3xl md:text-4xl sm:text-3xl min-[950px]:max-[1024px]:text-5xl max-[640px]:text-2xl font-semibold">Gigrend is empowering<br class="max-[1024px]:hidden"> Musicians</p>
            <p class="mx-auto max-w-fit xl:text-lg lg:text-base md:text-lg sm:text-base min-[950px]:max-[1024px]:text-xl opacity-75 mt-5 text">Our mission at Gigrend is to connect talented musicians with<br> individuals and
                 businesses in need of exceptional live music<br> performances. We strive to 
                 make the process of hiring musicians<br> simple, efficient, and transparent
                  for both parties, ensuring that<br> every gig is a success.
            </p>

            <div class="grid grid-cols-3 mt-8 min-[1024px]:max-[1090px]:mt-4 mx-auto max-w-fit">
                <div>
                    <p class="text-purple-700 text-3xl font-bold mb-2   max-[640px]:text-xl max-[768px]:text-2xl min-[1024px]:max-[1280px]:text-2xl">Verified</p>
                    <p class="opacity-75 min-[1024px]:max-[1090px]:text-sm min-[950px]:max-[1024px]:text-xl">Verified Earnings</p>
                </div>
                <div>
                    <p class="text-purple-700 text-3xl font-bold mb-2   max-[640px]:text-xl max-[768px]:text-2xl min-[1024px]:max-[1280px]:text-2xl">Easiest</p>
                    <p class="opacity-75 min-[1024px]:max-[1090px]:text-sm min-[950px]:max-[1024px]:text-xl">Have easy access</p>
                </div>
                <div>
                    <p class="text-purple-700 text-3xl font-bold mb-2   max-[640px]:text-xl max-[768px]:text-2xl min-[1024px]:max-[1280px]:text-2xl">Powerfull</p>
                    <p class="opacity-75 min-[1024px]:max-[1090px]:text-sm min-[950px]:max-[1024px]:text-xl">Effective & Efficient</p>
                </div>
            </div>

            <div class="max-[1024px]:mx-auto max-[1024px]:max-w-fit bg-purple-700 Purple-button text-white min-[1024px]:max-[1090px]:mt-4 min-[1024px]:max-[1090px]:px-6 min-[1024px]:max-[1090px]:p-2.5  mt-5 px-7 p-3">Get started</div>
        </div>

        <div class="overflow-hidden">
            <img class="sm:w-10/12 md:9/12 max-[640px]:w-11/12 min-[640px]:max-[1024px]:ml-12" src="../static/Empowering.svg">
        </div>

      </div>
    </div>





    <Footer />

</template>
<script>
</script>
<style scoped>
    .text{
      white-space: nowrap;
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
      border: 1px solid 501CB7;
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