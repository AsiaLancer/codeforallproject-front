<template>
  <!--  <div class="container">-->
  <!--    <div class="sidebar">Sidebar</div>-->
  <!--    <div class="content">Main Content</div>-->
  <!--  </div>-->

  <div class="carousel-box">
        <img class="active" src="../assets/img_1.png">
        <img src="../assets/img.png">
        <img src="../assets/img_2.png">
        <img src="../assets/img.png">
        <img src="../assets/img_1.png">
        <img src="../assets/img_2.png">
        <img src="../assets/img.png">
        <img src="../assets/img_1.png">
        <img src="../assets/img_2.png">

  </div>

</template>

<style scoped>
/*.container {*/
/*  display: flex;*/
/*}*/

/*.sidebar {*/
/*  flex: 0 0 200px; !* 固定宽度的侧边栏 *!*/
/*  background-color: lightblue;*/
/*}*/

/*.content {*/
/*  flex: 1; !* 自适应宽度的主内容区域 *!*/
/*  background-color: lightgreen;*/
/*}*/

.carousel-box {
  border: 1px solid red;
  width: 550px;
  height: 380px;
  overflow: hidden;
  left: 60px;
  top: 50px;
  position: relative;
  border-radius: 8px;
}

.carousel-box img {
  position: absolute;

  width: 550px;
  height: auto;
  opacity: 0;
  transition: opacity 1s linear;
}

.carousel-box img.active {
  opacity: 1;
}

.carousel-box p {
  position: absolute;
  bottom: 40px;
  font-size: 19px;
  font-weight: 530;
  left: 2%;
  color: #c91919;
  opacity: 0;
  transition: all 0.5s;
}

.carousel-box p.active {
  opacity: 1;
}
</style>
<script setup>

import {onMounted, onUnmounted, ref} from 'vue';

function carouseImg() {
  var current = ref(0);
  let carouseon;
  let imgs;
  onMounted(() => {
    const element = document.getElementsByClassName("carousel-box")[0];

    imgs = element.getElementsByTagName("img");


    carouseon = setInterval(changecarouse, 2000);

    element.addEventListener('mouseover', () => {
      clearInterval(carouseon);
    });

    element.addEventListener('mouseout', () => {
      carouseon = setInterval(changecarouse, 2000);
    });
  })
  onUnmounted(() => {
    clearInterval(carouseon);
  });

  function carouseOff() {
    imgs[current.value].className = "";


  }

  function carouseOn() {
    imgs[current.value].className = "active";


  }
  function changecarouse() {
    carouseOff();
    current.value++;
    if (current.value >= 9) current.value = 0;
    carouseOn();
  }
}

carouseImg();

</script>
