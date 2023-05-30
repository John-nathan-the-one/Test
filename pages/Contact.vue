<template>
    <img class="mx-20 mt-9 mb-28" src="../assets/images/logo(black).svg">

    <div class="justify-content flex-col">
        <p class="text-7xl font-semibold mb-5">Contact Us</p>
        <p class="text-lg font-medium mb-16">Any question or remarks? Just write us a message!</p>
    </div>

    <!-- Form Section Starts -->


    
    <div class="grid grid-cols-12">



    <div class="big-div col-span-10 col-start-2 p-2 mb-20 flex flex-row">

        <!-- Purple div Section Starts -->

        <div class="purple-div w-2/5">
            <p class="m-10 text-white text-3xl font-semibold">Contact Information</p>
            <div class="mx-10 mt-36 mb-56 grid grid-rows-3 grid-cols-7">
                
            </div>
        </div>

        <!-- Purple div Section Ends -->


        <!-- Actual Form Section Starts -->



        <div class="white-div w-3/5 px-12 pt-16">
            <div class="grid grid-cols-2 grid-rows-2 mb-12 gap-10">

                <!-- Input Section Starts -->
                <!-- Input Element Starts -->
                <div>
                    <label class="font-medium text-xs">First Name</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1" placeholder="John">
                </div>
                <!-- Input Element Ends -->
                <div>
                    <label class="font-medium text-xs">Last Name</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1" placeholder="Doe">
                </div>
                <div>
                    <label class="font-medium text-xs">Email</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1" placeholder="">
                </div>
                <div>
                    <label class="font-medium text-xs">Phone Number</label>
                    <br>
                    <input class="w-full text-sm px-1 py-1" placeholder="+0000 0000 000">
                </div>

                <!-- Input Section Ends -->
                
            </div>

            <!-- Grid Section Ends -->
            <div>
                <p class="font-semibold text-sm text mb-4">Select Subject?</p>
            </div>



            <!-- Radio Section Starts -->

            <div class="mb-12 text-sm">

            <label class="mr-3">
                <input type="radio" checked="checked" name="radio">
                General Inquiry
            </label>
            <label class="mr-3">
                <input type="radio" name="radio">
                General Inquiry
            </label>
            <label class="mr-3">
                <input type="radio" name="radio">
                General Inquiry
            </label>
            <label class="mr-3">
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
            <div class="float">
                <div class="Purple-button text-white mt-5 px-7 p-3">Send message</div>
            </div>

        </div>


        <!-- Actual form section Ends -->

        
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
    }
    .float{
        float: right;
    }
</style>