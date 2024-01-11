<template>
  <div>
    <ul v-if="listType === 'unordered'">
      <li v-for="item in listData" :key="item.id">{{ item.text }}</li>
    </ul>
    <ol v-else-if="listType === 'ordered'">
      <li v-for="item in listData" :key="item.id">{{ item.text }}</li>
    </ol>
    <table v-else-if="listType === 'table'">
      <tr v-for="item in listData" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.time }}</td>
      </tr>
    </table>
    <div v-else>
      无法识别的列表类型
    </div>
  </div>
</template>

<script>
import {List} from "@element-plus/icons-vue";
export default {
  components: {List},
  props: {
    listType: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>