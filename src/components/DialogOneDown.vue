<template>
  <div class="newElementBox" :style="{left: offSetBoxStr}" v-html="newElement" v-if="isMountEnter" @mouseenter="myMouseenter" @mouseleave="myMouseleave">
  </div>
  <div class="dialog-one" :style="{left:offSetOneStr}" v-if="props.isNeedList" @mouseenter="myMouseenter" @mouseleave="myMouseleave">
    <span>{{props.name}}</span>
  </div>
  <div class="dialog-one" :style="{left:offSetOneStr}" v-else>
    <span>{{props.name}}</span>
  </div>
</template>

<script setup>
import {ref,onMounted,defineProps} from "vue";

const props = defineProps({
  name:{type:String,required:true},
  isNeedList:{type:Boolean},
  listData:{type:Array,required:true},
  offSet:{type:String,default:"0px"}
})
const offSetStr = ref(props.offSet).value;
const offSetOneStr = parseInt(offSetStr,10)+200+"px";
const offSetBoxStr = parseInt(offSetStr,10)+150+"px";

const isMountEnter = ref(false);
const newElement = ref('')
const myMouseleave = (e) => {
  // console.log(e)
  newElement.value=''
  isMountEnter.value = false

}
const myMouseenter = (e)=>{
  // console.log(dialogRef.value)
  // const newElement = document.createElement('div')
  // newElement.textContent='恋爱'
  // console.log(e)
  newElement.value='awaw'
  isMountEnter.value = true
}
</script>

<style scoped>
.dialog-one{
  /*border: 1px solid #555;*/
  position: absolute;
  top:180px;
  color: #222;
  background: rgba(200,200,200,50%);
  width: 90px;
  height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 16px;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;
}
.dialog-one:hover{
  background: rgba(200,200,200,80%);
}
.newElementBox{
  position: relative;
  top: 210px;
  width: 200px;
  height: 100px;
  background: rgba(225, 225, 225, 0.4);
  border-radius: 4px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
}
</style>