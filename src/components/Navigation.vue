<template>
  <div class="navi-img-index">
    <img src="../assets/navigation.png" height="155" width="100%" alt="导航栏"/>
  </div>
  <div class="nav-bar">
    <div class="navi-index-left">
      <div class="navi-index-inner iconfont icon-bilibili ">首页</div>
      <div class="navi-index-inner">番剧</div>
      <div class="navi-index-inner">直播</div>
      <div class="navi-index-inner">游戏中心</div>
      <div class="navi-index-inner">会员购</div>
      <div class="navi-index-inner">漫画</div>
      <div class="navi-index-inner">赛事</div>
      <div class="iconfont icon-xiazai navi-index-inner">下载客户端</div>
    </div>
    <div class="navi-index-search-form">
      <div class="navi-index-search-input">
        <input v-model="inputValue" @input="myInput" id="search" name="search" class="navi-index-input" type="text"
               placeholder="please input what you wang to search">
        <div @click="clearInput" v-if="isDeleteText" class="iconfont icon-delete_fill"/>
      </div>
      <div class="navi-index-search-img">
        <div class="iconfont icon-sousuoxiao"/>
      </div>
    </div>

    <div class="navi-index-right">
      <div class="navi-index-inner">
        <img class="nav-avatar" src="../assets/avatar.png">
      </div>
      <div class="navi-index-inner">
        <div class="nav-right-icon">
          <div class="iconfont icon-wodedahuiyuan"/>
          <div class="icon-content">大会员</div>
        </div>
      </div>
      <div class="navi-index-inner">
        <div class="nav-right-icon">
          <div class="iconfont icon-xiaoxitongzhi"/>
          <div class="icon-content">消息</div>
        </div>
      </div>
      <div class="navi-index-inner">
        <div class="nav-right-icon">
          <div class="iconfont icon-dongtai"/>
          <div class="icon-content">动态</div>
        </div>
      </div>
      <div class="navi-index-inner">
        <div class="nav-right-icon">
          <div class="iconfont icon-shoucang"/>
          <div class="icon-content">收藏</div>
        </div>
      </div>
      <div class="navi-index-inner">
        <div class="nav-right-icon">
          <div class="iconfont icon-lishi"/>
          <div class="icon-content">历史</div>
        </div>
      </div>
      <div class="navi-index-inner">
        <div class="nav-right-icon">
          <div class="iconfont icon-chuangzuozhongxin"/>
          <div class="icon-content">创作中心</div>
        </div>
      </div>
      <div class="navi-index-inner">
        <div class="nav-right-upload">
          <div class="iconfont icon-shangchuan"/>
          <div class="icon-shangchuan-text">投稿</div>
        </div>
      </div>
    </div>
  </div>
    <div class="logo-index">
      <div class="iconfont icon-bilibili1"/>
    </div>
</template>

<script setup>

import {ref} from "vue";

const isDeleteText = ref(false);
const inputValue = ref('');
const myInput = () => {
  isDeleteText.value = true;

}
const clearInput = () => {
  isDeleteText.value = false;
  inputValue.value = '';
}
</script>

<style scoped>
.icon-dongtai ,.icon-shoucang,.icon-lishi,.icon-wodedahuiyuan,.icon-xiaoxitongzhi,.icon-chuangzuozhongxin{
  font-size: 19px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
}
.icon-shangchuan-text{
  color: #FFFFFF;
  font-weight: bold;
  font-size: 13px;
}
.icon-shangchuan{
  font-weight: bold;
  font-size: 22px;
  color: #FFFFFF;
}
.icon-content{
  font-size: 14px;
  font-weight: bold;
}
.nav-right-upload{
  width: 95px;
  height: 35px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FB7299;
}
.nav-right-icon{
  text-align: center;
  font-size: 14px;
  color: rgba(255,255,255,0.9);
}
.nav-avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.navi-index-search-img {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.navi-index-search-img:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.navi-index-left {
  /*border: 1px solid blue;*/
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  width: 35%;
  height: 50px;
  top: 0px;
  left: 20px;
  display: flex;
  color: rgba(255, 255, 255, 0.9);
}

.navi-index-right {
  display: flex;
  position: absolute;
  left: 1020px;
  top: 8px;
}

.nav-bar {
  width: 100%;
  height: 50px;
  top: 0px;
}

.navi-index-inner {
  margin: auto 10px;
}

.navi-index-search-form {
  display: flex;
  align-items: center;
  position: absolute;
  left: 540px;
  top: 8px;
  width: 30%;
  height: 40px;
  background: rgba(225, 225, 225);
  border-radius: 8px;
  /*box-shadow: 0 0 1px 1px #666666;*/
  /*border: 1px solid blue;*/
}

.navi-index-search-input {
  display: flex;
  align-items: center;
  justify-content: center;
  /*border: 1px solid red;*/
  width: 93%;
}

.navi-index-input:focus {
  background-color: rgba(0, 0, 0, 0.1);
}

.navi-index-input:not(:focus) {
  background-color: rgba(225, 225, 225);
}

.navi-index-input {
  /*border: 1px solid red;*/
  margin-left: 5px;
  border-radius: 4px;
  border: none;
  font-size: 15px;
  /*caret-shape: auto;*/
  /*padding: 5px 0px;*/
  caret: red;
  outline: none;
  height: 30px;
  width: 96%;
  background-color: rgba(225, 225, 225, 0.2);
}

.logo-index {
  position: absolute;
  left: 100px;
  top: 80px;
}

.icon-sousuoxiao {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.96);
}

.icon-delete_fill {
  color: rgba(255, 255, 255, 0.6);
}

.icon-bilibili1 {
  font-size: 50px;
  color: rgba(255, 255, 255, 0.8);
}

</style>