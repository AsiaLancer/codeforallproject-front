<template>
  <div class="container">
    <div class="container-search-all">
      <div class="container-search">
        <input v-model="searchQueryUp" placeholder="From" @focus="focused.value = true" @blur="focused.value = false"/>
        <!--        <ul :class="filteredData.length>0?'active':''" v-if="filteredData.length > 0">-->
        <!--          <li @click="changeSearch" v-for="item in filteredData" :key="item.id">-->
        <!--            {{ item }}-->
        <!--          </li>-->
        <!--        </ul>-->
        <div :class="filteredData.length>0 &amp;&amp; !changed?'active':''" v-if="filteredData.length > 0 &amp;&amp; focused">
          <div class="search-item" @click="changeSearch(item)" v-for="item in filteredData" :key="item.id">
            {{ item }}
          </div>
        </div>
        <p v-else>No results found</p>
      </div>
      <div class="container-search">
        <input v-model="searchQueryDown" placeholder="Search..."/>
        <ul v-if="filteredData.length > 0">
<!--          <li v-for="item in filteredData" :key="item.id">-->
<!--            &lt;!&ndash;            {{ item }}&ndash;&gt;-->
<!--          </li>-->
        </ul>
        <p v-else>No results found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

const searchQueryUp = ref('');
const searchQueryDown = ref('');

const data = ref(['Unterloquitz', 'Lunden', 'Itzehoe']);
const changed = ref(false);
const focused = ref(false);
const filteredData = computed(() => {
  // if(!searchQueryUp.value){
  //   return data.value;
  // }
  return data.value.filter(value => {
        return value.toString().toLowerCase().includes(searchQueryUp.value.toLowerCase());
      }
  )
})

function changeSearch(t) {
  searchQueryUp.value = t;
  changed.value = true;
}
</script>

<style scoped>
.container {
  left: 50px;
  top: 50px;
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 400px;
  border: 1px solid red;
  background-color: #EB0055;
}

.container-search-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 95%;
  height: 80px;
  background-color: #FFFFFF;
}

.container-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #EB0055;
  overflow: hidden;
}

.container-search input {
  width: 90%;
  height: 100%;
  outline: none;
  border: none;
}

.container-search div.active {
  position: absolute;
  top: 100px;
  width: 350px;
  background-color: #FFFFFF;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-item{
  width: 100%;
  font-weight: 30;
  font-size: 15px;
  height: 35px;
  display: flex;
  align-items: center;
}
.search-item:hover {
  background-color: #adacac;
}
</style>