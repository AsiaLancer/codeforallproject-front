<template>
  <div class="carousel-box" :style="{width:props.width,height:props.height,top:props.top,left:props.left}">
    <div v-if="linkMessage.length>0">
      <div v-for="(item,index) in linkMessage" :key="index">
        <img :style="{width: props.width}" :src="require(`../assets/${item.src}`)" :alt=item.message @click="goToPage(item.link)" v-if="index === 0" class="active">
        <img :style="{width: props.width}" :src="require(`../assets/${item.src}`)" :alt=item.message @click="goToPage(item.link)" v-else>
      </div>
    </div>
    <div v-if="altMessage.length>0">
      <div v-for="(item,index) in altMessage" :key="index">
        <p v-if="index === 0" class="active">{{item}}</p>
        <p v-else>{{item}}</p>
      </div>
    </div>
    <div class="button-change">
      <div class="iconfont icon-next"/>
      <div class="iconfont icon-next1"/>
    </div>
    <div class="carousel-box-list">
      <ul>
        <li class="active"/>
        <li v-for="item in size-1"/>
      </ul>
    </div>
  </div>

</template>
<script setup>

import {defineProps, onMounted, onUnmounted, ref} from 'vue';

const goToPage = (link) => {
  window.open(link, "_blank");
}
const props = defineProps({
  linkMessage: {type: Array, required: true},
  altMessage:{type:Array,required:true},
  size:{type:Number,required:true},
  width:{type:String,default:'550px'},
  height:{type:String,default:'380px'},
  left:{type:String,default:'0'},
  top:{type:String,default:'0'}
})
const current = ref(0);

function carouseImg() {
  let carouseon;
  let imgs;
  let lis;
  let ps;
  onMounted(() => {
    const element = document.getElementsByClassName("carousel-box")[0];

    imgs = element.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', () => {

      })
    }
    lis = element.getElementsByTagName("li");

    ps = element.getElementsByTagName("p");
    let pre = document.getElementsByClassName("icon-next")[0];
    let next = document.getElementsByClassName("icon-next1")[0];
    pre.addEventListener('click', () => {
      downCarouse();
    })
    next.addEventListener('click', () => {
      upCarouse();
    })
    carouseon = setInterval(upCarouse, 3000);

    element.addEventListener('mouseover', () => {
      clearInterval(carouseon);
    });

    element.addEventListener('mouseout', () => {
      carouseon = setInterval(upCarouse, 3000);
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

  function upCarouse() {
    carouseOff();
    current.value++;
    if (current.value > props.size-1) current.value = 0;
    carouseOn();
  }

  function downCarouse() {
    carouseOff();
    current.value--;
    if (current.value < 0) current.value = props.size-1;
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

.icon-next:hover, .icon-next1:hover {
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
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

.carousel-box img {
  cursor: pointer;
  position: absolute;
  height: auto;
  opacity: 0;
  transition: opacity 1s linear;
}

.carousel-box img.active {
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
  cursor: pointer;

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
  cursor: pointer;

}

.carousel-box p.active {
  opacity: 1;
}
</style>