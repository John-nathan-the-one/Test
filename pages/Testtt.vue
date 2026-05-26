<template>
    <div class="grid grid-cols-10 h-full-screen">
        <div class="col-span-3 grey-border">hi1</div>

        <div class="col-span-7 grey-border">
            <div>hi2</div>
            <div class="grid grid-cols-10">
                <div class="col-span-7 gray-border">hi3</div>
                <div class="col-span-3 gray-border">hi4</div>
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

.fit-content{
    width: fit-content;
    height: fit-content;
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