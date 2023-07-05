<template>
    <!-- Hero Section Starts -->
    <div class="mx-auto max-w-1440">
    <NuxtLink to="/">
        <img src="../assets/images/logo(black).svg" class="mb-24 mt-9 mx-20">
    </NuxtLink>

    <div class="flex flex-col">
        <p class="text-center w-8/12 max-md:w-10/12 max-sm:w-11/12 mx-auto text-7 font-semibold">
            We are on a mission to connect musicians with gigs in real time
        </p>
        <p class="w-fit mx-auto text-bas open font-light text-center  xl:mt-12 lg:mt-8 md:mt-7 sm:mt-6 max-[640px]:mt-6">
            We are a platform that connects musicians with musical gigs in a seamless<br class="max-[700px]:hidden"> and
             efficient way. Our goal is to help artists find gigs that match their talents,<br class="max-[700px]:hidden"> 
             and to make the booking process easier for both musicians and event<br class="max-[700px]:hidden"> organizers.
        </p>
    </div>


    <!-- Hero Section ends -->

    <!-- Mission Section Starts -->
    <div class="justify-center flex">

    <div class="mt-28 mb-10 max-w-5xl grid grid-cols-12 max-[1200px]:grid-cols-7 -ml-10 max-[1200px]:-ml-0">
        <div class="col-span-7 max-w-2xl mt-10 mx-auto">
            <p class="text-4xl font-semibold">Our Mission</p>
            <p class="text-bas open font-light mt-5 mb-28">At our core, we believe that music is a powerful force that has 
                the ability to bring people together. We want to foster a community of musicians and
                 music lovers by providing a platform that makes it easy for musicians to find
                  gigs and for event organizers to book talented performers.
            </p>
        </div>

        <div data-aos="zoom-in-left" class="perspective1 h-fit max-[1200px]:col-span-7 min-w-400 ml-14 max-[1200px]:mx-auto"
             data-aos-easing="ease"
             data-aos-anchor-placement="top-center"
             data-aos-duration="2000"
             data-aos-delay="100" 
             data-aos-offset="0">
            <img src="../assets/images/Mission.png" class="w-full max-[1200px]:mx-auto">
        </div>
    </div>
    </div>
    <!-- Mission Section Ends -->


    <!-- Vision Section Starts -->

    <div class="mt-8 mb-28 grid grid-cols-12 gap-12 max-[1200px]:grid-cols-5">
        <div class="perspective1 col-span-5 col-start-2 max-[1200px]:col-start-1 mx-auto">
            <img src="../assets/images/Vision.png" class="max-[1200px]:mx-auto"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="2000"
                data-aos-anchor-placement="top-center"
                data-aos-delay="0"
                data-aos-offset="-200">
        </div>
        <div class="mt-10 col-span-5 col-start-7 max-[1200px]:col-start-1 max-w-lg mx-auto max-[1200px]:max-w-2xl">
            <p class="text-4xl font-semibold text-right">Our Vision</p>
            <p class="text-bas open font-light pl-2 text-right mt-5 mb-28">We are passionate about music and we believe that our
                 app has the potential to make a positive impact on the music industry. Our vision is to 
                 connect musicians with gigs all over the world, and to provide a platform that helps 
                 musicians build their careers.
            </p>
        </div>
    </div>


    <!-- Vision Section Ends -->


    <!-- Features Section Starts -->


    <div class="grid grid-cols-11 max-[1130px]:grid-cols-6 mt-28 mb-32">
        <div class="px-6 items-center align-middle col-span-6 col-start-1 ml-24 max-xl:ml-10 max-[1130px]:mx-auto           grid max-[1130px]:grid-cols-2  max-[970px]:grid-cols-1">
            <div>
                <p class="text-5xl font-semibold mb-3 max-[660px]:text-4xl">Empowering a</p>
                <p class="text-5xl font-semibold purple-text mb-7 max-[660px]:text-4xl">Million Musicians</p>
                <p class="text-bas open font-light mb-4 max-[970px]:max-w-xl">We understand the challenges that musicians face in finding gigs, and<br class="max-[1130px]:hidden">
                 we want to make the process as easy and stress-free as possible.
                </p>
            </div>

            <div class="p-1">
                <img src="../assets/images/Million.png" class=""
                data-aos="fade-down-right"
                data-aos-easing="ease"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="100"
                data-aos-offset="0">
            </div>
            
            
        </div>

        <div class="col-span-4 max-[1130px]:col-span-6 pt-5 pl-10 mx-auto">
            <p class="text-4xl font-semibold mb-5">Our Features</p>
            <div class=" grid min-w-max max-[1130px]:grid-cols-2 max-[970px]:grid-cols-1 max-[1130px]:gap-3">
            <p class="text-bas open font-light mb-5">Here are some of the features that our app offers:</p>
            
                <li class="text-bas open font-light mb-7"
                data-aos="fade-down-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-anchor-placement="alt-bottom"
                data-aos-delay="0"
                data-aos-offset="100">Create a Profile: Musicians can create a profile that<span><br>&ensp;&emsp;</span>showcases their talents, experience, and availability.
                </li>

                <li class="text-bas open font-light mb-7"
                data-aos="fade-down-left"
                data-aos-easing="ease"
                data-aos-duration="1200"
                data-aos-anchor-placement="alt-bottom"
                data-aos-delay="200"
                data-aos-offset="100">Browse Gigs: Musicians can search for gigs based on<span><br>&ensp;&emsp;</span>their preferences, including location, genre, and pay.
                </li>

                <li class="text-bas open font-light mb-7"
                data-aos="fade-down-left"
                data-aos-easing="ease"
                data-aos-duration="1400"
                data-aos-anchor-placement="alt-bottom"
                data-aos-delay="300"
                data-aos-offset="100">Apply to Gigs: Musicians can apply to gigs with just a<span><br>&ensp;&emsp;</span>few clicks, and receive notifications when they are<span><br>&ensp;&emsp;</span>booked.
                </li>

                <li class="text-bas open font-light mb-7"
                data-aos="fade-down-left"
                data-aos-easing="ease"
                data-aos-duration="1600"
                data-aos-anchor-placement="alt-bottom"
                data-aos-delay="400"
                data-aos-offset="100">Listen to Music: Event organizers can browse<span><br>&ensp;&emsp;</span>through musician profiles, listen to their music, and<span><br>&ensp;&emsp;</span>send booking requests directly through the app.
                </li>

                <li class="text-bas open font-light"
                data-aos="fade-down-left"
                data-aos-easing="ease"
                data-aos-duration="1800"
                data-aos-anchor-placement="alt-bottom"
                data-aos-delay="500"
                data-aos-offset="100">Manage Bookings: Musicians can manage their<span><br>&ensp;&emsp;</span>bookings, including accepting or declining offers,<span><br>&ensp;&emsp;</span>and communicating with event organizers through<span><br>&ensp;&emsp;</span>the app.
                </li>
                
            </div>

        </div>
    </div>
    </div>



    <!-- Features Section Ends -->
    <div class="bg-purple">


    <div class="grid grid-cols-12 py-20 max-[1000px]:py-14 max-[700px]:py-5 mt-44 mx-auto max-w-1440 items-center max-[1000px]:gap-4">

        <div class="col-span-5 max-lg:col-span-6 max-[1000px]:col-span-10 max-[1000px]:col-start-2 max-lg:col-start-2 col-start-2 align-middle items-center">
            <p class="text-3xl max-[850px]:text-2xl max-[700px]:text-xl font-semibold text-white">
                Download our app today and start your journey towards booking your next gig.
            </p>
        </div>


        <div class="col-span-3 col-start-8 max-lg:col-start-9 max-[1000px]:col-start-5 max-[1000px]:col-span-4 max-[850px]:col-span-6 max-[850px]:col-start-4">
          <div class="w-9/12 max-[850px]:w-6/12 max-[580px]:w-9/12  h-5/6 mx-auto  py-5 max-[800px]:py-4           bg-white white-button">
            <p class="font-medium max-[850px]:text-2xl max-[700px]:text-xl text-3xl">Get Started</p>
          </div>
        </div>

        

        
    </div>
    </div>




    <div class="mx-auto max-w-1440 grid grid-cols-7 max-[800px]:grid-cols-12 py-32 max-[1000px]:py-20">
        <div class="col-span-5 col-start-2 max-[800px]:col-span-10 max-[800px]:col-start-2     text-3xl max-[1000px]:text-2xl max-[790px]:text-xl font-semibold text-center">
            <p>
                Join us on our mission to connect <a class="purple-text">musicians</a> with <a class="orange-text">musical gigs</a>, 
                and let's make beautiful music together.
            </p>
        </div>
    </div>



    <!-- Footer Section Starts -->
    <SmallFooter />
    <!-- Footer Section Ends -->


    
       <!-- just in case -->
    <!-- <ul class="list-disc list-inside"></ul> -->

      <!-- <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
          AOS.init();
      </script> -->
    



</template>
<script setup>
     
</script>
<style scoped>

.justify-content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text-7{
        font-size: 72px;
        letter-spacing: -0.05em;
        line-height: 92px;
    }
    @media only screen and (max-width: 1200px) {
    .text-7{
        font-size: 60px;
        letter-spacing: -0.05em;
        line-height: 72px;
    }
  }
    @media only screen and (max-width: 940px) {
    .text-7{
        font-size: 40px;
        letter-spacing: -0.05em;
        line-height: 52px;
    }
  }
  @media only screen and (max-width: 680px) {
    .text-7{
        font-size: 30px;
        letter-spacing: -0.05em;
        line-height: 38px;
    }
  }
    .text-bas{
        font-size: 18px;
        line-height: 33px;
    }
    @media only screen and (max-width: 600px) {
    .text-bas{
        font-size: 16px;
        line-height: 28px;
    }
  }
    .bg-purple{
      background-color: #6A4AE1;
    }
    .orange-text{
        color: #D18959;
    }
    .purple-text{
        color: #6A4AE1;
    }
    .white-button {
      color: #6A4AE1;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>