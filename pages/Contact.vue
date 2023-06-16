<template>
  <div class="mx-auto max-w-1440">
    <img class="mx-20 mt-9 mb-20" src="../assets/images/logo(black).svg">

    <div class="shake flex items-center justify-center flex-col">
        <p class="text-7xl max-sm:text-5xl font-semibold mb-5">Contact Us</p>
        <p class="text-lg max-sm:text-xs font-medium mb-16">Any question or remarks? Just write us a message!</p>
    </div>

    <!-- Form Section Starts -->


    
    <div class="grid grid-cols-12">



    <div class="big-div col-span-10 col-start-2 p-2 mb-20 flex flex-row max-lg:flex-col">

        <!-- Purple div Section Starts -->

        <div class="ghost purple-div w-2/5 max-lg:w-full">
            <p class="m-10 text-white text-3xl font-semibold">Contact Information</p>
            <div class="mx-10 mt-36 mb-56 max-lg:mb-20 grid grid-rows-3 grid-cols-7 text-white gap-8">

                <img class="col-span-1" src="../assets/images/Call.png">
                <p class="col-span-6">+0000 0000 000</p>

                <img class="col-span-1" src="../assets/images/Message.png">
                <p class="col-span-6">Support@gigrend.com</p>

                <img class="col-span-1" src="../assets/images/Location.png">
                <p class="col-span-6">No 813 Rev. Emmanuel Adubifa Street, Omole Phase 2, Ikeja, Lagos</p>

                
            </div>
        </div>

        <!-- Purple div Section Ends -->


        <!-- Actual Form Section Starts -->



        <div class="ghost2 white-div w-3/5 max-lg:w-full px-12 pt-16">
            <div class="grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 mb-12 gap-10">

                <!-- Input Section Starts -->
                <!-- Input Element Starts -->
                <div>
                    <label class="font-medium text-xs">First Name</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1 gray-border" placeholder="John">
                </div>
                <!-- Input Element Ends -->
                <div>
                    <label class="font-medium text-xs">Last Name</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1 gray-border" placeholder="Doe">
                </div>
                <div>
                    <label class="font-medium text-xs">Email</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1 gray-border" placeholder="">
                </div>
                <div id="hello">
                    <label class="font-medium text-xs">Phone Number</label>
                    <br>
                    <input id="hello" class="w-full text-sm px-1 py-1" placeholder="+0000 0000 000">
                </div>

                <!-- Input Section Ends -->
                
            </div>

            <!-- Grid Section Ends -->
            <div>
                <p class="font-semibold text-sm mb-4">Select Subject?</p>
            </div>



            <!-- Radio Section Starts -->

            <div class="mb-12 text-sm responsiveGrid row-gap-8">

            <label class="">
                <input type="radio" checked="checked" name="radio">
                General Inquiry
            </label>
            <label class="">
                <input type="radio" name="radio">
                General Inquiry
            </label>
            <label class="">
                <input type="radio" name="radio">
                General Inquiry
            </label>
            <label class="">
                <input type="radio" name="radio">
                General Inquiry
            </label>

            </div>


            <!-- Radio Section Ends -->

            <!-- Message elements start -->

                <div>
                    <label class="font-medium text-xs text-gray-400">Message</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1 pb-2 gray-border" placeholder="Write your message">
                </div>

            <!-- Message section ends -->
            <div class="float-right">
                <div class="Purple-button text-white mt-5 px-10">Send message</div>
            </div>

        </div>


        <!-- Actual form section Ends -->

        
    </div>
  </div>
  </div>

    <!-- Form Section Ends -->



    <!-- Footer Section Starts -->

    <SmallFooter />

    <!-- Footer Section Ends -->
                        
                        
    







</template>

<script setup>

</script>

<style scoped>
    .responsiveGrid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        grid-gap: 5px;
      }
    #hello>::placeholder{
        color: black;
        opacity: 1;
        font-weight: 900;
    }
    .purple-div{
        border-radius: 10px;
        background-color: #6A4AE1;
    }
    .white-div{
        border-radius: 10px;
    }
    .big-div{
        border-radius: 10px;
        box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
    }
    input{
        border-bottom: 1px solid black;
        opacity: 75%;
    }
    .text{
        white-space: nowrap;
    }
    .gray-border{
        border-bottom: 1px solid grey;
    }
    .Purple-button {
      border: 1px solid #6A4AE1;
      background-color: #6A4AE1;
      border-radius: 5px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 40px;
      padding-right: 40px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
    }
    @media (min-width: 0px) {
      @media not all and (min-width: 700px) {
        .Purple-button {
            border: 1px solid #6A4AE1;
            background-color: #6A4AE1;
            border-radius: 5px;
            padding: 12px;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: max-content;
        }
      }
    }
</style>