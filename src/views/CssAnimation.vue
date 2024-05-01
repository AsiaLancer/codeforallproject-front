<template>
  <h2 class="title" align="center">
    <span>niu bi class who is you daddy</span>
  </h2>
  <div class="container">
    <div class="item">
      <img src="../assets/img.png">
    </div>
    <div class="item">
      <img src="../assets/img1.png">
    </div>
    <div class="item">
      <img src="../assets/img.png">
    </div>
    <div class="item">
      <img src="../assets/img2.png">
    </div>
    <div class="item">
      <img src="../assets/img1.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "CssAnimation"
}
</script>

<style scoped>
.title {
  color: #333;
  line-height: 2;
}

.title span {
  background: linear-gradient(to right, #7e2f2b, #146420) no-repeat right bottom;
  background-size: 0px 2px;
  transition: background-size 2s;
}

.title span:hover {
  background-position: left bottom;
  background-size: 100% 2px;
}

.container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template:
    'A A B'
    'C E B'
    'C D D';
  gap: 10px;
}

.item {
  overflow: hidden;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  --d: 360deg;
  animation: rotation 10s infinite linear;
}

.item img {
  width: 360%;
  height: 360%;
  object-fit: cover;
  --d: -360deg;
  animation: rotation 10s infinite linear;
}

@keyframes rotation {
  to {
    transform: rotate(var(--d));
  }
}

.item:nth-child(1) {
  grid-area: A;
}

.item:nth-child(2) {
  grid-area: B;
}

.item:nth-child(3) {
  grid-area: C;
}

.item:nth-child(4) {
  grid-area: D;
}

.item:nth-child(5) {
  grid-area: E;
}
</style>