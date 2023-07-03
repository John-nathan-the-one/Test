<template>
<div class="screen-110">
<div class="mx-auto screen2-110 max-w-1440 max-h-759  grid grid-cols-2 max-lg:grid-rows-2 max-lg:grid-cols-1">
    <div class="purple-div grid grid-cols-10 max-lg:row-span-1">
        <div class="col-span-3">
            <img class="margin w-full" src="../assets/images/logo.svg">
        </div>
        
        <div data-hover="Click this image to go to the Gigrend Page" class="hovertext h-fit col-span-8 col-start-2 ghost">
            <NuxtLink to="/Gigrend">
                <img src="../assets/images/GigrendLink.svg" class="w-full">
            </NuxtLink>
        </div>
    </div>


    <div class="brown-div grid grid-cols-10 items-center">
        <div data-hover="Click this image to go to the Musicians Page" class="hovertext col-span-8 col-start-2 ghost">
            <NuxtLink to="/Musicians">
                <img src="../assets/images/MusiciansLink.svg" class="w-full">
            </NuxtLink>
        </div>
    </div>
</div>
</div>

</template>
<script>
</script>
<style scoped>
    .purple-div{
        background-color: #6A4AE1;
    }
    .brown-div{
        background-color: #D18959;
    }
    .home-big-box{
        height: 130vh;
    }
    .justify-content{
      display: flex;
      justify-content: center;
      align-items: center;
    }
.margin{
    margin-top: 10%;
    margin-left: 10%;
}
    @media (min-width: 1024px) {
    .screen-110 {
        height: 115vh;
    }
}
@media (min-width: 1024px) {
    
    .max-h-759{
        max-height: 759px;
        height: 100%;
    }
    }
</style>
