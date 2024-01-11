<template>
  <div v-if="props.isUpOrDown==='up' && isMountEnter" class="newElementBoxUp" :style="{left: offSetBoxStr}"   @mouseenter="myMouseenter" @mouseleave="myMouseleave">
      <div class="innerLink" @click="goToPage()">

      </div>
  </div>
  <div v-else-if="props.isUpOrDown==='down' && isMountEnter" class="newElementBoxDown" :style="{left: offSetBoxStr}"   @mouseenter="myMouseenter" @mouseleave="myMouseleave">
  </div>

  <div  class="dialog-one1" :style="{left:offSetOneStr}"  v-if="props.isNeedList && props.isUpOrDown==='up'" @mouseenter="myMouseenter" @mouseleave="myMouseleave">
    <span @click="goToPage(props.link)">{{props.name}}</span>
  </div>
  <div  class="dialog-one2" :style="{left:offSetOneStr}"  v-else-if="props.isNeedList && props.isUpOrDown==='down'" @mouseenter="myMouseenter" @mouseleave="myMouseleave">
    <span @click="goToPage(props.link)">{{props.name}}</span>
  </div>
  <div class="dialog-one1" :style="{left:offSetOneStr}" v-else-if="props.isUpOrDown==='up' && !props.isNeedList">
    <span @click="goToPage(props.link)">{{props.name}}</span>
  </div>
  <div class="dialog-one2" :style="{left:offSetOneStr}" v-else-if="props.isUpOrDown==='down' && !props.isNeedList">
    <span @click="goToPage(props.link)">{{props.name}}</span>
  </div>
</template>

<script setup>
import {ref,onMounted,defineProps} from "vue";
const goToPage = (link)=> {
  window.open(link,"_blank")
}
const props = defineProps({
  name:{type:String,required:true},
  isNeedList:{type:Boolean},
  listData:{type:Array,required:true},
  offSet:{type:String,default:"0"},
  isUpOrDown:{type:String,default:"up"},
  link:{type:String,default:"#"}
})
/*
做一个偏移效果
 */
const offSetStr = ref(props.offSet).value;
const offSetOneStr = parseInt(offSetStr,10)*9*10+200+"px";
const offSetBoxStr = parseInt(offSetStr,10)*9*10+130+"px";
const isMountEnter = ref(false);
// const newElement = ref('')
const myMouseleave = () => {
  // console.log(e)
  // newElement.value=''
  isMountEnter.value = false

}
const myMouseenter = ()=>{
  // console.log(dialogRef.value)
  // const newElement = document.createElement('div')
  // newElement.textContent='恋爱'
  // console.log(e)
  // newElement.value=`<a v-for="item in props.listData" href="#" @click="goToPage2()" >item.id</a>`
  isMountEnter.value = true
}
</script>

<style scoped>
  .dialog-one1{
    /*border: 1px solid #555;*/
    position: absolute;
    top:160px;
    color: #222;
    background: rgba(200,200,200,20%);
    width: 80px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 15px;
    border-radius: 6px;
    user-select: none;
    cursor: pointer;
    transition: all 0.5s;
  }
  .dialog-one2{
    /*border: 1px solid #555;*/
    position: absolute;
    top:200px;
    color: #222;
    background: rgba(200,200,200,20%);
    width: 80px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 16px;
    border-radius: 6px;
    user-select: none;
    cursor: pointer;
    transition: all 0.5s;
  }
  .dialog-one1:hover{
    background: rgba(200,200,200,80%);
  }
  .dialog-one2:hover{
    background: rgba(200,200,200,80%);
  }
  .newElementBoxUp{
    display: flex;
    position: absolute;
    top: 40px;
    width: 220px;
    height: 120px;
    background: rgba(225, 225, 225, 0.4);
    border-radius: 6px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
  }
  .newElementBoxDown{
    display: flex;
    position: absolute;
    top: 230px;
    width: 220px;
    height: 120px;
    background: rgba(225, 225, 225, 0.4);
    border-radius: 6px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
  }
</style>