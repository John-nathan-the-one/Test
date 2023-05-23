<template>

    <!-- Hero Section Starts -->
    <img src="../static/logo(black).svg" class="mb-24 mt-9 mx-20">

    <div class="flex flex-col">
        <p class="text-center border border-black xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 max-[640px]:w-8/12 mx-auto xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl max-[640px]:text-3xl max-[560px]:text-2xl font-semibold">
            We are on a mission to connect musicians with gigs in real time
        </p>
        <p class="border border-black w-fit mx-auto xl:text-lg lg:text-lg md:text-base sm:text-sm max-[640px]:text-xs max-[560px]:text-xs text-center font-light  xl:mt-12 lg:mt-8 md:mt-7 sm:mt-6 max-[640px]:mt-6">We are a platform that connects musicians with musical gigs in a seamless<br> and
             efficient way. Our goal is to help artists find gigs that match their talents,<br> 
             and to make the booking process easier for both musicians and event<br> organizers.
        </p>
    </div>


    <!-- Hero Section ends -->

    <!-- Mission Section Starts -->

    <div class="mt-28 mb-32 ">
      <div class="flex flex-row pl-20 pr-16 gap-12 max-w-fit mx-auto border border-black">
        <div class="w-7/12 mt-10">
            <p class="text-4xl font-semibold">Our Mission</p>
            <p class="text-base opacity-75 mt-5 mb-28">At our core, we believe that music is a powerful force that has 
                the ability to bring people together. We want to foster a community of musicians and
                 music lovers by providing a platform that makes it easy for musicians to find
                  gigs and for event organizers to book talented performers.
            </p>
        </div>

        <div class="w-6/12">
            <img src="../static/Mission.svg" >
        </div>
      </div>
    </div>
    <!-- Mission Section Ends -->


    <!-- Vision Section Starts -->


    <div class="mt-28 mb-32 px-24">
      <div class="flex flex-row gap-12 max-w-fit mx-auto border border-black">
        <div class="w-6/12">
            <img src="../static/Vision.svg" >
        </div>
        <div class="w-7/12 mt-10">
            <p class="text-4xl font-semibold text-right">Our Vision</p>
            <p class="text-lg opacity-75 text-right mt-5 mb-28">We are passionate about music and we believe that our
                 app has the potential to make a positive impact on the music industry. Our vision is to 
                 connect musicians with gigs all over the world, and to provide a platform that helps 
                 musicians build their careers.
            </p>
        </div>
      </div>
    </div>



    <div class="justify-content flex-row px-32 mt-44 mb-32 gap-20">
        <div>
            <img src="../static/Vision.svg" >
        </div>

        <div>
            <p class="text-4xl font-semibold">Our Vision</p>
            <p class="text-lg opacity-75 mt-5 text">We are passionate about music and we believe that our
                 app<br> has the potential to make a positive impact on the music<br> industry. Our vision is to 
                 connect musicians with gigs all over<br> the world, and to provide a platform that helps 
                 musicians<br> build their careers.
            </p>
        </div>
    </div>


    <!-- Vision Section Ends -->


    <!-- Features Section Starts -->


    <div class="justify-content flex-row px-32 mt-44 mb-32 gap-20">
        <div>
            <p class="text-7xl font-semibold mb-4 text">Empowering a</p>
            <p class="text-7xl font-semibold text-purple-700 mb-8 text">Million Musicians</p>
            <p class="text text-lg font-light mb-4">We understand the challenges that musicians face in finding gigs, and<br>
                 we want to make the process as easy and stress-free as possible.
            </p>
            <img src="../static/Million.svg" >
        </div>

        <div>
            <p class="text-4xl font-semibold mb-5">Our Features</p>
            <p class="text-lg text font-light mb-5">Here are some of the features that our app offers:</p>
            <ul class="list-disc list-inside">
                <li class="text-lg text font-light mb-5">Create a Profile: Musicians can create a profile that<br>
                    &emsp;&ensp;showcases their talents, experience, and availability.
                </li>
                <br>
                <li class="text-lg text font-light mb-5">Browse Gigs: Musicians can search for gigs based on<br>
                    &emsp;&ensp;their preferences, including location, genre, and pay.
                </li>
                <br>
                <li class="text-lg text font-light mb-5">Apply to Gigs: Musicians can apply to gigs with just a<br>
                    &emsp;&ensp;few clicks, and receive notifications when they are<br>
                    &emsp;&ensp;booked.
                </li>
                <br>
                <li class="text-lg text font-light mb-5">Listen to Music: Event organizers can browse through<br>
                    &emsp;&ensp;musician profiles, listen to their music, and send<br>
                    &emsp;&ensp;booking requests directly through the app.
                </li>
                <br>
                <li class="text-lg text font-light mb-5">Manage Bookings: Musicians can manage their<br>
                    &emsp;&ensp;bookings, including accepting or declining offers, and<br>
                    &emsp;&ensp;communicating with event organizers through the<br>
                    &emsp;&ensp;app.
                </li>
                
            </ul>

        </div>
    </div>



    <!-- Features Section Ends -->


    <div class="justify-content flex-row py-16 px-32 mt-44 gap-20 bg-purple-700">

        <div>
            <p class="text-4xl font-semibold mt-5 text text-white">Download our app today and<br> 
                start your journey towards <br> booking your next gig.
            </p>
        </div>

        <div class="bg-white white-button px-5 py-4">
            <p class="font-medium text-4xl text-purple-700">Get Started</p>
        </div>

        
    </div>




    <div class="justify-content flex-row py-16 px-32">
        <div>
            <p class="text-4xl font-semibold mt-5 text text-center">Join us on our mission to connect 
                <a>musicians</a> with <br> <a>musical gigs</a>, and let's make beautiful music together.
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
    .text{
        white-space: nowrap;
    }
    .white-button {
      color: #6A4AE1;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
    }
</style>