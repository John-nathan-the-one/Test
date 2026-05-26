<template>
    <div class="grid grid-cols-2 h-full-screen">
        <div class="bg-blue justify-normal grey-border">
            <img class="mx-auto mt-20" src="../assets/images/Computer.svg">
                <p class="text-5xl fit-content mx-auto white-text font-semibold text-justify">Image Processor Pro</p>
                <p class="text-2xl fit-content mx-auto white-text text-justify mt-5">Everything you need in an Easily customizale Dashboard</p>
        </div>

        <div class="fit-content mx-auto">
            <div class="flex-row gap-10">
                <img src="../assets/images/IMGPP.svg" class="text-3xl font-bold my-12 blue">
                <h1 class="text-5xl font-bold mb-6">Sign In</h1>
                <p class="grey-text text-2xl mb-6">Welcome back please fill in your details to get started</p>
                <form>
                    <div>
                        <div class="label-container">
                            <p class="label text-lg font-bold">Email</p>
                            <input class="w-full text-lg px-6 py-5 outline-none gray-border" placeholder="Enter Email">
                        </div>
                        <div class="label-container">
                            <p class="label text-lg font-bold">Password</p>
                            <input class="w-full text-lg px-6 py-5 outline-none gray-border" placeholder="Enter Password">
                        </div>
                        <button class="w-full mt-2 py-3 blue-button text-lg">Sign n</button>
                        <button class="w-full flex mt-2 py-3 normal-button text-lg">
                            <div class="mx-auto flex">
                            <img src="../assets/images/Google.svg">Sign In with Google
                            </div>
                        </button>
                        <div class="flex fit-content mx-auto text-lg text-justify">
                            <p>Need an account?</p>
                            <a class="blue-text mx-3" href="">Create an account</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>



</template>
<style>
.bg-blue{
    background-color: lightblue;
}
.h-full-screen{
    height: 100vh;
}
.h-full{
    height: 100%;
}
.grey-text{
    color: grey;
}

.grey-border{
    border: 1px solid #EAECF0;
}
.gray-border{
    border: 1px solid #D0D5DD;
    border-radius: 6px;
}
.label{
    margin-bottom: 5px;
}
.label-container{
    margin-bottom: 20px;
}
.mt-20{
    margin-top: 100px;
}
.blue-button{
    background-color: #1D4EFF;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    margin-bottom: 20px;
}
.normal-button{
    border-radius: 8px;
    color: black;
    font-weight: 500;
    margin-bottom: 20px;
    border: 1px solid #D0D5DD;
}

.fit-content{
    width: fit-content;
    height: fit-content;
}
.blue-button1{
    background-color: #1D4EFF;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
    font-weight: 500;
    margin-top: 20px;
}
.text-justify{
    text-align: justify;
}
.blue-text{
    color: #1D4EFF;
}
.white-text{
    color: white;
}
</style>