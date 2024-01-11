<template>
  <div>
    <Navigation/>
  </div>
  <div class="dialog-all">
    <DiaLogOne name="番剧" :is-need-list="true" :list-data="listData" link="https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0"/>
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
  </div>


</template>

<script setup>
import {ref} from "vue";
import DiaLogOne from "@/components/DiaLogOne.vue";
import Navigation from "@/components/Navigation";


const unorderedListData = ref(['恋爱', '武侠', '神话', '蜜桔', '泡面',])
const listData = ref([
  { name: '连载动画', link: 'https://www.bilibili.com/bangumi/play/ep806232?from_spmid=666.4.banner.0' },
  { name: '新番时间表', link: 'https://www.bilibili.com/bangumi/play/ep805428?from_spmid=666.4.banner.1' },
  { name: '完结动画', link: 'https://www.bilibili.com/bangumi/play/ep809818?from_spmid=666.4.banner.2' },
  { name: '番剧索引',link: 'https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0#season_version=-1&spoken_language_type=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&order=3&st=1&sort=0&page=1'}
])
</script>


<style scoped>
.dialog-all {
  /*display: flex;*/
  /*border: 1px solid red;*/
}

</style>