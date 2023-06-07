<template>
  <div class="mx-auto max-w-1440">
    <!-- Hero section start -->
    <Hero />
    <!-- Hero section end -->
  
  
      <!-- Promotion section start -->
      <Promotions />
      <!-- Promotion section end -->
  
  
      <!-- Card Section Starts -->
      <Card />
      <!-- Card section ends -->
  
  
      <!-- Categories Section starts -->
  
  
          <!-- 1st Card starts -->
      <div class="text-center sora -mt-16">
        <p class="text-4xl font-semibold mb-6 ">Popular Categories</p>
  
        <div class="category-container flex place-items-center gap-4 mb-3">
          
          <div class="inline-flex gap-2 p-2 categories text-sm pl-5">
            Full Stack Developer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">324</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            UI/UX designer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">259</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            IOS Developer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">231</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Web Developer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">222</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Copy writer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">219</p>
            </div>
          </div>
  
        </div>
  
        <!-- 1st Card Ends -->
  
  
  
  
         <!-- 2nd Card starts -->
  
        <div class="category-container flex place-items-center gap-4 mb-3">
          
          <div class="inline-flex gap-2 p-2 categories text-sm pl-5">
            Graphic Designer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">192</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Illustrator
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">176</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Video Editor
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">154</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Front End Dev
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">142</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            3D Modeler
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">128</p>
            </div>
          </div>
  
        </div>
  
        <!-- 2nd card ends -->
  
  
  
           <!-- 3rd Card starts -->
        <div class="category-container flex place-items-center gap-4 mb-3">
          
          <div class="inline-flex gap-2 p-2 categories text-sm pl-5">
            Officer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">102</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Content Creator
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">95</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Translator
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">72</p>
            </div>
          </div>
  
          <div class="inline-flex gap-2 p-2 text-center categories text-sm pl-5">
            Java Developer
            <div class="bg-black categories-sub text-center text-white">
              <p class="m-1 text-xs mx-2">51</p>
            </div>
          </div>
  
        </div>
        <!-- 3rd Card section ends -->
  
        
      </div>
  
      <!-- Card Section Ends -->
  
  
  
      <!-- App Card Section starts -->
      <Apps />
      <!-- App Section Ends -->
  
  
  
  
      <!-- Footer Section Starts -->
  
      <div class="bg-black justify-content flex-col pt-72 pb-5 -mt-48">
          <Footer />
      </div>
      </div>


      <!-- 2nd Part of Footer Ends -->
  
  
  
  
  </template>
  <script scoped>
  </script>
  <style scoped>
      .category-container{
        justify-content: center;
      }
      .categories{
        border: 1px solid black;
        border-radius: 60px;
        justify-content: center;
        align-items: center;
      }
      .categories-sub{
        border-radius: 30px;
      }
      .justify-content{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .text{
        white-space: nowrap;
      }
      .align{
        justify-content: center;
        align-items: center;
      }
      .align-content{
        align-items: center
      }
  </style>