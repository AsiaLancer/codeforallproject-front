<template>
  <div class="train-station-container">
    <div class="title-from">
      <button :class="btnClass" @click="changeJourney">Train tickets</button>
      <button :class="btnClass" @click="changePass">Rail passes</button>
    </div>
    <div v-show="journey" class="form-container-pass-search">
      <form class="pass-search-from">
        <div class="header">
          <div class="help">
            <div class="icon-circle-close"/>
            <div class="description">
              <a href="">Read our guide on </a>
              <font>
                <font> Rail Passes</font>
                <font>.</font>
              </font>
            </div>
          </div>
          <ul>
            <li class="form-input-body">
              <label class="form-label-white" for="form-select-to">Choose a country to visit</label>
              <select class="form-select" id="form-select-to">
                <option disabled>Please Select One</option>
              </select>
            </li>
          </ul>
          <ul>
            <li class="form-input-body">
              <label class="form-label-white" for="form-select-from">Enter your country of residence</label>
              <select class="form-select" id="form-select-from">
                <option disabled>Please Select One</option>
              </select>
            </li>
          </ul>

        </div>
        <ul class="body">
          <li class="valid-time">
            <label class="form-label-black" for="form-datetime-container">Valid From</label>
            <div id="form-datetime-container" class="form-datetime-container">
              <div class="form-datetime-content">
                Sunday 19 May 2024
              </div>
              <i>&gt;</i>
            </div>
          </li>
          <li class="hidden-input">

          </li>
          <li class="passengers">
            <label class="form-label-black" for="form-datetime-container">Passengers</label>
            <div class="passenger">
              <div class="passenger-select">
                <input type="hidden">
                <span>Adult (28-59yr)</span>
                <div class="passenger-control">
                  <button class="sub-passenger">&minus;</button>
                  <button class="add-passenger">&plus;</button>
                </div>
              </div>
            </div>
            <div class="more-passenger">
              <button>v Show all passenger types</button>
              <button>^ Show all passenger types</button>
            </div>
          </li>
        </ul>
          <div class="footer">
            <button>
              O、Search
            </button>
          </div>
      </form>
    </div>
    <div v-show="pass" class="form-container-journey-search">
      <div class="header">
        <div class="form-input-body">
          <div class="departure">
              <input type="text" class="form-search-input" placeholder="From">
          </div>
          <div class="swap-area">
            <a title="Swap stations" href="#">
              <i>#</i>
            </a>
          </div>
          <div class="arrival">
            <input type="text" class="form-search-input" placeholder="To">
          </div>
        </div>
      </div>
      <div class="body">

      </div>
      <div class="footer">

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const btnJ = ref("active");
const btnP = ref("");
function btnClass() {
  if (journey.value===true){
    btnJ.value = "active"
  }else {
    btnJ.value = ""
  }
  if (pass.value===true){
    btnP.value = "active"
  }else {
    btnP.value = ""
  }
}
const journey = ref(true);
const pass = ref(false);
function changeJourney() {
  journey.value = true;
  pass.value = false;
}
function changePass() {
  journey.value = false;
  pass.value = true;
}
</script>

<style scoped>
.train-station-container {
  position: relative;
  left: 60px;
  top: 60px;
  max-width: 300px;
  border: 1px solid;
  border-radius: 5px;
  overflow: hidden;
}
</style>