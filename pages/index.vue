<template>

<div class="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col min-[300px]:flex-col bg-orange-400 home-big-box">
    <div class="purple-div w-1/2 md:w-full sm:w-full min-[300px]:w-full h-full">
        <img class="mt-7 mx-9 mb-24" src="../static/logo.svg">
        <div class="justify-content">
            <NuxtLink to="/Gigrend">
                <img src="../static/GigrendLink.svg">
            </NuxtLink>
        </div>
    </div>


    <div class="brown-div w-1/2 md:w-full sm:w-full min-[300px]:w-full h-full">
        <div class="justify-content mt-28">
            <NuxtLink to="/Musicians">
                <img src="../static/MusiciansLink.svg">
            </NuxtLink>
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
</style>
