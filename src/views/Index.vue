<template>

    <div>
      <Navigation/>
    </div>
    <div class="dialog-all">
      <div class="cycle-img">
        <img class="cycle-img-boby" src="../assets/img.png">
        <img class="cycle-img-boby" src="@/assets/img2.png">
      </div>
      <DiaLogOne name="番剧" :is-need-list="true" :list-data="listData"
                 link="https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0"/>
      <DiaLogOne name="国创" :is-need-list="true" :list-data="listData" off-set="1"/>
      <DiaLogOne name="综艺" :is-need-list="true" :list-data="listData" off-set="2"/>
      <DiaLogOne name="动画" :is-need-list="true" :list-data="listData" off-set="3"/>
      <DiaLogOne name="鬼畜" :is-need-list="true" :list-data="listData" off-set="4"/>
      <DiaLogOne name="舞蹈" :is-need-list="true" :list-data="listData" off-set="5"/>
      <DiaLogOne name="娱乐" :is-need-list="true" :list-data="listData" off-set="6"/>
      <DiaLogOne name="科技" :is-need-list="true" :list-data="listData" off-set="7"/>
      <DiaLogOne name="美食" :is-need-list="true" :list-data="listData" off-set="8"/>
      <DiaLogOne name="汽车" :is-need-list="true" :list-data="listData" off-set="9"/>
      <DiaLogOne name="运动" :is-need-list="true" :list-data="listData" off-set="10"/>
      <DiaLogOne name="电影" :is-need-list="false" :list-data="listData" is-up-or-down="down"/>
      <DiaLogOne name="电视剧" :is-need-list="true" :list-data="listData" off-set="1" is-up-or-down="down"/>
      <DiaLogOne name="纪录片" :is-need-list="true" :list-data="listData" off-set="2" is-up-or-down="down"/>
      <DiaLogOne name="游戏" :is-need-list="true" :list-data="listData" off-set="3" is-up-or-down="down"/>
      <DiaLogOne name="音乐" :is-need-list="true" :list-data="listData" off-set="4" is-up-or-down="down"/>
      <DiaLogOne name="影视" :is-need-list="true" :list-data="listData" off-set="5" is-up-or-down="down"/>
      <DiaLogOne name="知识" :is-need-list="true" :list-data="listData" off-set="6" is-up-or-down="down"/>
      <DiaLogOne name="资讯" :is-need-list="true" :list-data="listData" off-set="7" is-up-or-down="down"/>
      <DiaLogOne name="生活" :is-need-list="true" :list-data="listData" off-set="8" is-up-or-down="down"/>
      <DiaLogOne name="时尚" :is-need-list="true" :list-data="listData" off-set="9" is-up-or-down="down"/>
      <DiaLogOne name="更多" :is-need-list="true" :list-data="listData" off-set="10" is-up-or-down="down"/>
      <div class="a-col"/>
      <div class="dialog-right-box">
        <div class="dialog-right-box-inner">
          <div class="iconfont icon-icon-zhuanlan-zhuanlanwenzhang"/>
          <div class="dialog-right-inner-text">专栏</div>
        </div>
        <div class="dialog-right-box-inner">
          <div class="iconfont icon-wenhuahuodong"/>
          <div class="dialog-right-inner-text">活动</div>
        </div>
        <div class="dialog-right-box-inner">
          <div class="iconfont icon-nav_shequzhongxin"/>
          <div class="dialog-right-inner-text">社区中心</div>
        </div>
        <div class="dialog-right-box-inner">
          <div class="iconfont icon-15"/>
          <div class="dialog-right-inner-text">直播</div>
        </div>
        <div class="dialog-right-box-inner">
          <div class="iconfont icon-ketang"/>
          <div class="dialog-right-inner-text">课堂</div>
        </div>
        <div class="dialog-right-box-inner">
          <div class="iconfont icon-nav_xingerebang"/>
          <div class="dialog-right-inner-text">新歌热榜</div>
        </div>
      </div>
    </div>
    <div class="carousel-index">
      <CarouselImg :link-message="linkMessage" :alt-message="altMessage"/>
    </div>
    <div class="video-container">
      <VideoCard/>
    </div>
      <div>
        <Calendar/>
      </div>

</template>

<script setup>
import {ref} from "vue";
import DiaLogOne from "@/components/DiaLogOne.vue";
import Navigation from "@/components/Navigation";
import CarouselImg from "@/components/CarouselImg";
import VideoCard from "@/components/VideoCard";
import Calendar from "@/components/Calendar";
// import TempVue from "@/components/TempVue.vue";


const unorderedListData = ref(['恋爱', '武侠', '神话', '蜜桔', '泡面',])
const listData = ref([
  {name: '连载动画', link: 'https://www.bilibili.com/bangumi/play/ep806232?from_spmid=666.4.banner.0'},
  {name: '新番时间表', link: 'https://www.bilibili.com/bangumi/play/ep805428?from_spmid=666.4.banner.1'},
  {name: '完结动画', link: 'https://www.bilibili.com/bangumi/play/ep809818?from_spmid=666.4.banner.2'},
  {
    name: '番剧索引',
    link: 'https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0#season_version=-1&spoken_language_type=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page=1'
  },
  {name: '待更新动画', link: 'https://www.bilibili.com/bangumi/play/ep809818?from_spmid=666.4.banner.2'}
])
const linkMessage =ref([
  {src:'img1.png',message:'view1',link:'https://www.bilibili.com/blackboard/bnj2024.html?auto_media_playback=1&msource=sz&spm_id_from=333.1007.0.0'},
  {src:'img2.png',message: 'view2',link: 'https://www.bilibili.com/bangumi/play/ss47200?spm_id_from=333.1007.0.0'},
  {src:'img.png',message:'view3',link: 'https://www.bilibili.com/blackboard/era/GA7ndNPX6MUDS4s5.html?spm_id_from=333.1007.0.0'},
  {src:'img1.png',message:'view4',link:'https://www.bilibili.com/blackboard/bnj2024.html?auto_media_playback=1&msource=sz&spm_id_from=333.1007.0.0'},
  {src:'img2.png',message: 'view5',link: 'https://www.bilibili.com/bangumi/play/ss47200?spm_id_from=333.1007.0.0'},
  {src:'img.png',message:'view6',link: 'https://www.bilibili.com/blackboard/era/GA7ndNPX6MUDS4s5.html?spm_id_from=333.1007.0.0'},
  {src:'img1.png',message:'view7',link:'https://www.bilibili.com/blackboard/bnj2024.html?auto_media_playback=1&msource=sz&spm_id_from=333.1007.0.0'},
  {src:'img2.png',message: 'view8',link: 'https://www.bilibili.com/bangumi/play/ss47200?spm_id_from=333.1007.0.0'},
  {src:'img.png',message:'view9',link: 'https://www.bilibili.com/blackboard/era/GA7ndNPX6MUDS4s5.html?spm_id_from=333.1007.0.0'},

])

const altMessage = ref(['第一张图片','第二张图片','第三张图片','第四张图片','第五张图片','第六张图片','第七张图片','第八张图片','第九张图片'])

</script>


<style scoped>

.dialog-all {
  display: flex;
  /*border: 1px solid red;*/
}

.icon-ketang,.icon-nav_xingerebang,.icon-15,.icon-nav_shequzhongxin,.icon-icon-zhuanlan-zhuanlanwenzhang,.icon-wenhuahuodong{
  font-size: 14px;
  color: #61666D;

}

.cycle-img {
  position: absolute;
  left: 25px;
  top: 170px;
}

.cycle-img-boby {
  margin: auto 10px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
}

.dialog-right-box {
  position: absolute;
  top: 165px;
  right: 0%;
  display: flex;
  flex-wrap: wrap;
  /*width: 300px;*/
}
@media (max-width: 1500px) {
  .dialog-right-box {
    display: none; /* 或者其他样式，比如重新排列等 */
  }
}

.dialog-right-box-inner {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(33.33% - 24px); /* 计算每个元素的宽度，减去 margin 的宽度 */
  margin-bottom: 15px; /* 添加下方间距 */
}
.dialog-right-box-inner:hover * {
  color: #039fd3;
}
/*.dialog-right-box-inner:nth-child(3n) {*/
/*  margin-right: 0;*/
/*}*/
.dialog-right-inner-text {

  font-size: 14px;
  color: #61666D;
}

.a-col {
  position: absolute;
  top: 160px;
  left: 1210px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 70px;
  width: 2px;
}
</style>