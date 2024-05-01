<template>
<div>
  <h2 >HomePage</h2>
  <h3 >{{msg}}</h3>
  <h3 >{{inHtml}}</h3>
  <h3 ><p v-html="inHtml"/></h3>
  <div :id="dynamicId">ss</div>
  <button :disabled="isDisabled">button</button>
    <div v-bind="objectOfAttrs">ss</div>
  <a href="http://192.168.0.103:8080/index">index</a>
  <a href="http://192.168.0.103:8080/css">css</a>
</div>
</template>

<script>

export default {

  name: "HomePage",
  data(){
    return{
      msg:'测试',
      inHtml:'<a style="color: red" href="http://192.168.0.103:8080/index">link</a>',
      dynamicId:1001,
      isDisabled:false
    }
  }
}

</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>