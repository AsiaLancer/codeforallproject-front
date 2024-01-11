<template>

<el-row :gutter="20">
  <el-col>
    <el-menu
        :default-active="defaultZero"
        class="el-menu-demo"
        mode="horizontal"

        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <el-menu-item index="1">牛牛自学系统</el-menu-item>


      <el-menu-item index="3">创业</el-menu-item>
      <el-menu-item index="4">人生规划</el-menu-item>
      <el-menu-item index="5">兼职推荐</el-menu-item>
      <el-menu-item index="6">冷知识</el-menu-item>
      <el-sub-menu index="7">
        <template #title>热搜板块</template>
        <el-menu-item index="7-1">5</el-menu-item>
        <el-menu-item index="7-2">4</el-menu-item>
        <el-menu-item index="7-3">3</el-menu-item>
        <el-menu-item index="7-4">2</el-menu-item>
        <el-menu-item index="7-5">1</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>个人自定义模块</template>
        <el-menu-item index="8-1">item one</el-menu-item>
        <el-menu-item index="8-2">item two</el-menu-item>
        <el-menu-item index="8-3">item three</el-menu-item>
        <el-sub-menu index="8-4">
          <template #title>item four</template>
          <el-menu-item index="8-4-1">item one</el-menu-item>
          <el-menu-item index="8-4-2">item two</el-menu-item>
          <el-menu-item index="8-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="9">
        <el-input v-model="search_text" placeholder="请输入内容" class="input-with-select">
          <template #prepend>
            <el-select v-model="search" placeholder="搜索" style="width: 105px">
              <el-option label="用户名" value="1" />
              <el-option label="手机号" value="2" />
              <el-option label="话题" value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </el-menu-item>

      <el-sub-menu index="9">
        <template #title >消息</template>
        <el-menu-item index="9-1">回复我的</el-menu-item>
        <el-menu-item index="9-2">@我的</el-menu-item>
        <el-menu-item index="9-3">收到的赞</el-menu-item>
        <el-menu-item index="9-4">系统通知</el-menu-item>
        <el-menu-item index="9-5">我的消息</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="10">
        <template #title>历史</template>
        <el-menu-item index="10-1">历史1</el-menu-item>
        <el-menu-item index="10-2">历史2</el-menu-item>
        <el-menu-item index="10-3">历史3</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="11">收藏</el-menu-item>
      <el-menu-item index="12">
        <el-avatar
            :size="30"
            src="https://avatars.githubusercontent.com/u/29467699?s=60&v=4"
            @click.native.stop
        />
      </el-menu-item>

    </el-menu>
  </el-col>
</el-row>
<el-row :gutter="20">

    <el-col :span="9">

        <div class="block text-center">
          <el-carousel height="350px">
            <el-carousel-item v-for="item in urls">
              <el-image :src="item"></el-image>
            </el-carousel-item>

          </el-carousel>
        </div>
    </el-col>

    <el-col :span="5">
      <BoardList :list-type="'unordered'" :list-data="unorderedListData" />
    </el-col>
    <el-col :span="5">
      <BoardList :list-type="'table'" :list-data="tableData" >
        <template v-slot:default="{ item }">
          <p>{{ item.title }}</p>
          <p>{{ item.content }}</p>
          <p>{{ item.time }}</p>
        </template>
      </BoardList>
    </el-col>
    <el-col :span="5">

    </el-col>

</el-row>

</template>

<script setup>
import BoardList from "@/components/BoardList.vue";
import {ref} from 'vue'
const defaultZer = ref(1);

 const unorderedListData = ref([
   { id: 1, text: 'Item 1' },
   { id: 2, text: 'Item 2' },
   { id: 3, text: 'Item 3' }
 ])
const tableData = ref([
  { id: 1, title: 'John Doe', time: 30, content: 'john@example.com' },
  { id: 2, title: 'Jane Smith', time: 35, content: 'jane@example.com' },
  { id: 3, title: 'Bob Johnson', time: 25, content: 'bob@example.com' }
]);



const urls = ref([
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
])

</script>

<style scoped>

.el-row{
  border: 1px solid red;
  margin-bottom: 5px;
}
.el-col{
  border: 1px solid blue;
  border-radius: 4px;
}


</style>