<template>
  <div class="container">
    <div class="nav-bar">
      <div class="left-wrapper"></div>
      <div class="center-wrapper">
        <div class="nav-body">
          <div class="nav-image">
            <img src="https://itravel.huawei.com/assets/images/logo-c43adc0768.png">
          </div>
          <div class="nav-inner" v-for="(item,index) in navViews" @click="page = index+1">
            {{ item.cn }}
          </div>
          <div class="nav-language">
            <p class="nav-language-text">{{ language }}</p>
            <div class="iconfont icon-diqiuquanqiu"/>
          </div>
        </div>
      </div>
      <div class="right-wrapper"></div>
    </div>
    <div class="container-main">
      <div class="left-wrapper"></div>
      <div class="center-wrapper">
        <div class="main-body">
          <div class="body-carousel">
            <div class="body-carousel-inner">
              <CarouselImg :link-message="linkMessage" :alt-message="altMessage" :size="5" :width="'100%'" :height="'100%'"/>
            </div>
          </div>
          <div class="body-login">
            <form class="form-login">
              <div class="form-title">
                <p>{{loginMessage}}</p>
              </div>
              <div class="form-input">
                <div class="iconfont icon-icon-test13"/>
                <input type="text" placeholder="账号/用户名/手机号">
              </div>
              <div class="form-input">
                <div class="iconfont icon-icon-test12"/>
                <input type="password" value="*********">
                <div class="iconfont icon-icon-test1" @click=""/>
              </div>
              <div class="form-submit">
                <button type="button" @click="goToPage('travel/index')">登录</button>
                <p>{{forget}}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="right-wrapper"></div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import CarouselImg from "@/components/CarouselImg";
const forget = ref('忘记密码');
const loginMessage = ref('账号登录');
const page = ref(0);
const language = ref('EN');
const navViews = ref([{cn: '服务与优势', en: 'Services And Advantages'}
  , {cn: '成功案例', en: 'Show Case'}, {cn: '关于我们', en: 'About Us'}, {cn: '联系我们', en: 'Contact Us'}])

const linkMessage =ref([
  {src:'img1.png',message:'view1',link:'https://www.bilibili.com/blackboard/bnj2024.html?auto_media_playback=1&msource=sz&spm_id_from=333.1007.0.0'},
  {src:'img2.png',message: 'view2',link: 'https://www.bilibili.com/bangumi/play/ss47200?spm_id_from=333.1007.0.0'},
  {src:'img.png',message:'view3',link: 'https://www.bilibili.com/blackboard/era/GA7ndNPX6MUDS4s5.html?spm_id_from=333.1007.0.0'},
  {src:'img1.png',message:'view4',link:'https://www.bilibili.com/blackboard/bnj2024.html?auto_media_playback=1&msource=sz&spm_id_from=333.1007.0.0'},
  {src:'img2.png',message: 'view5',link: 'https://www.bilibili.com/bangumi/play/ss47200?spm_id_from=333.1007.0.0'}
])
const altMessage = ref(['第一张图片','第二张图片','第三张图片','第四张图片','第五张图片'])
const goToPage = (link) => {
  window.open(link, "_blank");
}
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.nav-bar {
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #F1F7FB;
}

.nav-body {
  display: flex;
}

.nav-image {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 80px;
}

.nav-image img {
  max-width: 75%;
  height: auto;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  min-width: 80px;
  font-size: 14px;
  font-weight: 350;
  font-family: "Microsoft YaHei", Arial, Helvetica;
  cursor: pointer;
  background-size: 0 2px;
  background-position: center bottom;
  transition: background-size 1s;
}

.nav-inner:hover {
  background: linear-gradient(#1F5998, #1F5998) no-repeat center bottom;
  background-size: 100% 2px;
}
.nav-language {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.nav-language-text {
  cursor: pointer;
  font-size: 15px;
  font-weight: 350;
}

.icon-diqiuquanqiu {
  font-size: 17px;
  margin-right: 5px;
  color: gray;
}
.container-main{
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  position: absolute;
  top: 60px;
  height: 660px;
  background-color: #F1F7FB;
}
.main-body{
  height: 100%;
  width: 100%;
  display: flex;
}
.body-carousel{
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
}
.body-carousel-inner{
  height: 90%;
  width: 95%;
}
.body-login{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-login{
  position: relative;
  top: -80px;
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px #B2CEF4;
  background-color: #FFFFFF;
}
.form-title{
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-title p{
  margin-left: 20px;
  font-size: 18px;
  font-weight: 350;
}
.form-input{
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #B2CEF4;
  margin-top: 20px;
}
.icon-icon-test13,.icon-icon-test12{
  height: 100%;
  border: 0.5px solid #B2CEF4;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  font-size: 25px;
  font-weight: 350;
}
.icon-icon-test1,.icon-icon-test{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  font-size: 20px;
  font-weight: 150;
}
.form-input input{
  border: none;
  height: 100%;
  outline: none;
  flex: 1;
}
.form-submit{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-submit button{
  cursor: pointer;
  color: #FFFFFF;
  background-color: #EB171F;
  width: 80%;
  height: 45px;
  font-size: 16px;
  margin-top: 40px;
  border: none;
}
.form-submit p{
  font-size: 14px;
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
}
.left-wrapper {
  flex: 1;
}

.center-wrapper {
  flex: 8;
}

.right-wrapper {
  flex: 1;
}
.test_u {
  width: 100px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background-color: black;
  color: white;
  position: relative;
}

</style>