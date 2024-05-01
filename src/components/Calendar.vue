<template>
  <div class="vue-calendar">
    <div class="vue-calendar__title">
      <h3>{{ month + 1 }} 月</h3>
      <p>{{ year }}</p>
    </div>
    <div class="vue-calendar__navigation">
      <span class="prev" @click="changeMonth(-1)">&lt;</span>
      <span class="next" @click="changeMonth(1)">&gt;</span>
    </div>
    <div class="vue-calendar__week">
      <ul>
        <li v-for="day in weekDay">{{ day }}</li>
      </ul>
    </div>
    <div class="vue-calendar__main">
      <ul>
        <li v-for="offset in firstDay"></li>
        <li v-for="date in monthDate"
            :class="{ today: isNowYearMonth &amp;&amp; date === nowDate, over: isBeforeToday(date) }">
          <div class="date">{{ date }}</div>
          <div class="price">$1200</div>
          <div class="text" >{{getLocalName(date)}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import axios from "axios";

const monLeap = ref([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
const monNml = ref([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31])
const weekDay = reactive(["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"])
const nowTime = ref(Date.now())
const year = ref(null)
const month = ref(null)
const nowDate = ref(null)
const holidays = ref([]);
const holidaysMap = ref(new Map());
onMounted(() => {
      initialize()
      getHolidays(year.value)
    }
)

// function isHolidays(date) {
//
//   console.log(date)
//   for (let dateInfo in holidays.value){
//     if (date===dateInfo.date){
//       localName.value=dateInfo.localName
//       return true;
//     }
//   }
//   return false;
// }
function getLocalName(date){
  const monthStr = month.value+1<10?"0"+parseInt(month.value+1):parseInt(month.value+1);
  const yearStr = ""+year.value;
  date = date<10? "0"+date : date;
  return holidaysMap.value.get(yearStr+"-"+monthStr+"-"+date);
}
function getHolidays(year) {
  console.log('https://date.nager.at/api/v3/PublicHolidays/'+year+"/CN")
  axios.get('https://date.nager.at/api/v3/PublicHolidays/'+year+"/CN")
      .then(response => {
        console.log(response)
        holidays.value = response.data;
        holidays.value.forEach(holiday=>holidaysMap.value.set(holiday.date,holiday.localName))
      })
      .catch(error => {
        console.error('Failed to fetch holidays:', error);
      });
}

function initialize() {
  const now = new Date();
  year.value = now.getFullYear();
  month.value = now.getMonth();
  nowDate.value = now.getDate();
}

const firstDay = computed(() => {
  return new Date(year.value, month.value, 1).getDay();
})
const monthDate = computed(() => {
  const index = month.value;
  return year.value % 4 === 0 ? monLeap.value[index] : monNml.value[index];
})

const isNowYearMonth = computed(() => {
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  return year.value === nowYear && month.value === nowMonth;
})

function isBeforeToday(date) {
  const target = new Date(year.value, month.value, date + 1);
  return target < nowTime.value;
}

function changeMonth(next) {
  const targetMonth = month.value + next;
  if (targetMonth < 0) {
    month.value = 11;
    year.value--;
  } else if (targetMonth > 11) {
    month.value = 0;
    year.value++;
  } else {
    month.value = targetMonth;
  }
}

</script>

<style scoped>

.vue-calendar {
  position: relative;
  left: 60px;
  top: 60px;
  max-width: 500px;
  border: 1px solid;
  border-radius: 5px;
  overflow: hidden;
}

.vue-calendar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.vue-calendar ul li {
  width: calc(100% / 7);
  text-align: center;
}

.vue-calendar__title {
  text-align: center;
  margin: 10px 0;
}

.vue-calendar__title h3,
.vue-calendar__title p {
  margin: 0;
}

.vue-calendar__navigation {
  position: absolute;
  width: 100%;
  top: 10px;
}

.vue-calendar__navigation span {
  position: absolute;
  display: block;
  font-size: 30px;
  font-weight: 700;
  opacity: 0.6;
  cursor: pointer;
}

.vue-calendar__navigation span:hover {
  opacity: 1;
}

.vue-calendar__navigation span.prev {
  left: 0;
}

.vue-calendar__navigation span.next {
  right: 0;
}

.vue-calendar__week ul li {
  font-weight: 700;
  padding: 10px 0;
}

.vue-calendar__main ul {
  flex-wrap: wrap;
}

.vue-calendar__main ul li {
  height: 65px;
  padding: 3px;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;
}

.vue-calendar__main ul li.today {
  color: #fff;
  background: #000;
}

.vue-calendar__main ul li.over {
  opacity: 0.6;
}

.vue-calendar__main ul li:not(.today):not(.over):hover {
  background: tomato;
}

.vue-calendar__main ul li .text,
.vue-calendar__main ul li .price{
  font-size: 10px;
}
</style>