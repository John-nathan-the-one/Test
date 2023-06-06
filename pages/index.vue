<template>

<div class="grid grid-cols-2 max-md:grid-rows-2 max-md:grid-cols-1 min-[768px]:h-screen">
    <div class="purple-div grid grid-cols-10">
        <div class="col-span-3">
            <img class="mt-7 mx-9 w-44" src="../assets/images/logo.svg">
        </div>
        
        <div class="col-span-8 col-start-2">
            <NuxtLink to="/Gigrend">
                <img src="../assets/images/GigrendLink.svg" class="w-full">
            </NuxtLink>
        </div>
    </div>


    <div class="brown-div grid grid-cols-10 items-center">
        <div class="col-span-8 col-start-2">
            <NuxtLink to="/Musicians">
                <img src="../assets/images/MusiciansLink.svg" class="w-full">
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
