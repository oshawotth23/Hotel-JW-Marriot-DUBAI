<template>
<div class="container">
    <div class="slider">
        <ul>
            <li>
                <img :src="img1" alt="">
            </li>
            <li>
                <img :src="img2" alt="">
            </li>
            <li>
                <img :src="img3" alt="">
            </li>
            <li>
                <img :src="img4" alt="">
            </li>
        </ul>
    </div>
</div>
</template>

<script setup>
import img1 from "../../img/entrada.jpg"
import img2 from "../../img/atardecer.jpg"
import img3 from "../../img/piscinacamas.jpg"


</script>

<style>

.slider{
    width: 100%;
    height: 600px;
    overflow: hidden;
}

.slider ul {
    display: flex;
    animation: cambio 20s infinite linear;
     width: 393%;   
}

.slider li {
    width: 100%;
    list-style: none;
}
.slider img{
    width: 100%;
    height: 100%;   
}
@keyframes cambio {
    0% {margin-left: 0;}
    20% {margin-left: 0;}

    25% {margin-left: -100%;}
    45% {margin-left: -100%;}

    50% {margin-left: -200%;}
    70% {margin-left: -200%;}

    75% {margin-left: -300%;}
    100%{margin-left: -300%;}
}

</style>