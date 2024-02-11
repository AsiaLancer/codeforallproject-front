<template>
  <div class="video-card-container">
    <div class="video-card">
      <img src="../assets/img2.png"/>
      <a>【牛逼】第1个是视频</a>
    </div>
    <div class="video-card">
      <img src="../assets/img2.png"/>
      <a>【牛逼】第2个是视频</a>
    </div>
    <div class="video-card">
      <img src="../assets/img2.png"/>
      <a>【牛逼】第3个是视频</a>
    </div>
    <div class="video-card">
      <img src="../assets/img1.png"/>
      <a>【牛逼】第4个是视频</a>
    </div>
    <div class="video-card">
      <img src="../assets/img.png"/>
      <a>【牛逼】第5个是视频</a>
    </div>
    <div class="video-card">
      <img src="../assets/img.png"/>
      <a>【牛逼】第6个是视频</a>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>
.video-card-container {
  position: absolute;
  width: 50%;
  height: 380px;
  left: 650px;
  top: 260px;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
}

.video-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  margin: 0 4px;
  width: calc(33.33% - 12px); /* 计算每个元素的宽度，减去 margin 的宽度 */
  height: calc(50% - 4px);
  border-radius: 8px;
  overflow: hidden;
}
.video-card img{
  width: 100%;
  height: 80%;
  border-radius: 8px;
}
.video-card a{
 margin-top: 5px;;
  font-size: 14px;
  font-weight: 370;
}
.video-card a:hover{
color: #0086b3;
}
</style>