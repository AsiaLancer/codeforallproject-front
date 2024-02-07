<template>
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
    <p class="active">第一幅图片</p>
    <p>第二幅图片</p>
    <p>第三幅图片</p>
    <p>第四sad 片</p>
    <p>第五 sad片</p>
    <p>第六幅图片</p>
    <p>第七幅 asd图片</p>
    <p>第八幅图片</p>
    <p>第九幅图片</p>

    <div class="button-change">
      <div class="iconfont icon-next" @click="preIndex"/>
      <div class="iconfont icon-next1" @click="nextIndex"/>
    </div>
    <div class="carousel-box-list">
      <ul>
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>


    </div>
  </div>

</template>
<script setup>

import {onMounted, onUnmounted, ref} from 'vue';

var current = ref(0);
const nextIndex = ()=>{
  current.value++;
  if (current.value>=9) current.value=0;
}
const preIndex = () => {
  current.value--;
  if (current.value<=0) current.value=8;
}
function carouseImg() {
  let carouseon;
  let imgs;
  let lis;
  let ps;
  onMounted(() => {
    const element = document.getElementsByClassName("carousel-box")[0];

    imgs = element.getElementsByTagName("img");

    lis = element.getElementsByTagName("li");
    ps = element.getElementsByTagName("p");

    carouseon = setInterval(changecarouse, 2000);

    element.addEventListener('mouseover', () => {
      clearInterval(carouseon);
    });

    element.addEventListener('mouseout', () => {
      carouseon = setInterval(changecarouse, 2000);
    });

    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('mouseover', () => {
        carouseOff();
        current.value = i;
        carouseOn();
      });
    }
  });

  onUnmounted(() => {
    clearInterval(carouseon);
  });
  // function changecarouse() {
  //   carouseOff();
  //   let next = current.value + 1;
  //   if (next >= 9) next = 0;
  //   current.value = next;
  //   carouseOn();
  // }
  //
  // function carouseOff() {
  //   const next = current.value + 1;
  //   if (next >= 9) imgs[0].className = "";
  //   else imgs[next].className = "";
  //
  //   imgs[current.value].className = "";
  //   lis[current.value].className = "";
  //   ps[current.value].className = "";
  // }
  //
  // function carouseOn() {
  //   const next = current.value + 1;
  //   if (next >= 9) imgs[0].className = "active";
  //   else imgs[next].className = "active";
  //
  //   imgs[current.value].className = "active";
  //   lis[current.value].className = "active";
  //   ps[current.value].className = "active";
  // }
  function carouseOff() {
    imgs[current.value].className = "";
    lis[current.value].className = "";
    ps[current.value].className = "";
  }

  function carouseOn() {

    imgs[current.value].className = "active";
    lis[current.value].className = "active";
    ps[current.value].className = "active";
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

<style scoped>
.button-change {
  position: absolute;
  right: 5%;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-next {
  font-size: 30px;
  background: rgba(200, 200, 200, 60%);
  margin: auto 6px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 160;
  cursor: pointer;
}
.icon-next:hover,.icon-next1:hover {
  background: rgba(200, 200, 200, 90%);
}

.icon-next1 {
  cursor: pointer;
  border-radius: 8px;
  font-size: 30px;
  margin: auto 6px;
  color: rgba(255, 255, 255, 0.88);
  background: rgba(200, 200, 200, 60%);
}

.carousel-box {
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

.carousel-box img.active{
  opacity: 1;
}

.carousel-box-list {
  position: absolute;
  left: 2%;
  bottom: 10px;

  display: flex; /* 列表项横向排列 */
}

.carousel-box ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.carousel-box li {
  width: 8px; /* 设置指示器宽度 */
  height: 8px; /* 设置指示器高度 */
  border-radius: 50%; /* 设置为圆形 */
  background: #ccc; /* 设置背景颜色 */
  margin: 0 4px; /* 设置相邻指示器之间的间距 */
}

.carousel-box li.active {
  background: #ffffff; /* 设置活动指示器的背景颜色 */
}

.carousel-box p {
  position: absolute;
  bottom: 40px;
  font-size: 19px;
  font-weight: 530;
  left: 2%;
  color: rgba(255, 255, 255, 0.84);
  opacity: 0;
  transition: all 0.5s;
}

.carousel-box p.active {
  opacity: 1;
}
</style>