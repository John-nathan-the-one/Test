<template>
    <!-- Hero Section Starts -->
    <img src="../assets/images/logo(black).svg" class="mb-24 mt-9 mx-20">

    <div class="flex flex-col">
        <p class="text-center xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 max-[640px]:w-8/12 mx-auto text-7 lg:text-6xl md:text-5xl sm:text-4xl max-[640px]:text-3xl max-[560px]:text-2xl font-semibold">
            We are on a mission to connect musicians with gigs in real time
        </p>
        <p class="w-fit mx-auto text-bas open font-light md:text-base sm:text-sm max-[640px]:text-xs max-[560px]:text-xs text-center  xl:mt-12 lg:mt-8 md:mt-7 sm:mt-6 max-[640px]:mt-6">We are a platform that connects musicians with musical gigs in a seamless<br> and
             efficient way. Our goal is to help artists find gigs that match their talents,<br> 
             and to make the booking process easier for both musicians and event<br> organizers.
        </p>
    </div>


    <!-- Hero Section ends -->

    <!-- Mission Section Starts -->

    <div class="mt-28 mb-32 px-24 grid grid-cols-12 gap-4">
        <div class="col-span-7 mt-10 w-11/12">
            <p class="text-4xl font-semibold">Our Mission</p>
            <p class="text-bas open font-light mt-5 mb-28">At our core, we believe that music is a powerful force that has 
                the ability to bring people together. We want to foster a community of musicians and
                 music lovers by providing a platform that makes it easy for musicians to find
                  gigs and for event organizers to book talented performers.
            </p>
        </div>

        <div class="col-span-5">
            <img src="../assets/images/Mission.png" class="w-full">
        </div>
    </div>
    <!-- Mission Section Ends -->


    <!-- Vision Section Starts -->

    <div class="mt-8 mb-32 grid grid-cols-12 gap-12">
        <div class="col-span-5 col-start-2">
            <img src="../assets/images/Vision.png" >
        </div>
        <div class="mt-10 col-span-5 col-start-7 max-w-lg">
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


    <div class="grid grid-cols-11 mt-44 mb-32">
        <div class="col-span-6 col-start-1 ml-24">
            <p class="text-7 font-semibold">Empowering a</p>
            <p class="text-7 font-semibold purple-text mb-7">Million Musicians</p>
            <p class="text-bas open font-light mb-4">We understand the challenges that musicians face in finding gigs, and<br>
                 we want to make the process as easy and stress-free as possible.
            </p>
            <img src="../assets/images/Million.png" >
        </div>

        <div class="col-span-4 col-start-7 pt-5 pl-10">
            <p class="text-4xl font-semibold mb-5">Our Features</p>
            <p class="text-bas open font-light mb-5">Here are some of the features that our app offers:</p>
            <ul class="list-disc list-inside">
                <li class="text-bas open font-light mb-10">Create a Profile: Musicians can create a profile that<span><br>&ensp;&emsp;</span>showcases their talents, experience, and availability.
                </li>
                <li class="text-bas open font-light mb-10">Browse Gigs: Musicians can search for gigs based on<span><br>&ensp;&emsp;</span>their preferences, including location, genre, and pay.
                </li>
                <li class="text-bas open font-light mb-10">Apply to Gigs: Musicians can apply to gigs with just a<span><br>&ensp;&emsp;</span>few clicks, and receive notifications when they are<span><br>&ensp;&emsp;</span>booked.
                </li>
                <li class="text-bas open font-light mb-10">Listen to Music: Event organizers can browse<span><br>&ensp;&emsp;</span>through musician profiles, listen to their music, and<span><br>&ensp;&emsp;</span>send booking requests directly through the app.
                </li>
                <li class="text-bas open font-light">Manage Bookings: Musicians can manage their<span><br>&ensp;&emsp;</span>bookings, including accepting or declining offers,<span><br>&ensp;&emsp;</span>and communicating with event organizers through<span><br>&ensp;&emsp;</span>the app.
                </li>
                
            </ul>

        </div>
    </div>



    <!-- Features Section Ends -->


    <div class="grid grid-cols-12 py-20 mt-44 bg-purple align-middle items-center">

        <div class="col-span-5 col-start-2 align-middle items-center">
            <p class="text-4xl font-semibold text-white">
                Download our app today and start your journey towards booking your next gig.
            </p>
        </div>

        <div class="col-span-3 col-start-8 h-5/6 bg-white white-button">
            <p class="font-medium text-4xl">Get Started</p>
        </div>

        
    </div>




    <div class="grid grid-cols-7 py-32">
        <div class="col-span-5 col-start-2 text-4xl font-semibold text-center">
            <p>
                Join us on our mission to connect <a class="purple-text">musicians</a> with <a class="orange-text">musical gigs</a>, 
                and let's make beautiful music together.
            </p>
        </div>
    </div>



    <!-- Footer Section Starts -->
    <SmallFooter />
    <!-- Footer Section Ends -->
    



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
    .text-bas{
        font-size: 18px;
        line-height: 33px;
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