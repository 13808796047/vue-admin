<template>
  <div>
    <el-row :gutter="14">
      <el-col :span="4">
        <div class="label-wrap category">
          <label for>类型</label>
          <div class="wrap-content">
            <el-select v-model="value" placeholder="请选择" style="width:100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="label-wrap date">
          <label for>日期:&nbsp;&nbsp;</label>
          <div class="wrap-content">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
              style="width:100%;"
            ></el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="label-wrap key-words">
          <label for>关键字:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <div class="wrap-content">
            <el-select v-model="keyword" placeholder="请选择" style="width:100%;">
              <el-option
                v-for="item in keywords"
                :label="item.label"
                :value="item.value"
                :key="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <el-input v-model="search_word" placeholder="请输入内容" style="width:100%;"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" style="width:100%;" size="medium">搜索</el-button>
      </el-col>
      <el-col :span="3">&nbsp;</el-col>
      <el-col :span="2">
        <el-button type="danger" class="pull-right" size="medium">新增</el-button>
      </el-col>
    </el-row>
    <div class="block-space-30"></div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column prop="title" label="标题" width="830"></el-table-column>
      <el-table-column prop="category" label="类别" width="130"></el-table-column>
      <el-table-column prop="date" label="日期" width="237"></el-table-column>
      <el-table-column prop="user" label="管理员" width="115"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="danger" size="small">删除</el-button>
          <el-button type="success" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block-space-30"></div>
    <!-- 底部分页 -->
    <el-row>
      <el-col :span="12">
        <el-button type="primary">批量删除</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
          class="pull-right"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  setup() {
    const options = reactive([
      {
        value: 1,
        label: "国际信息"
      },
      {
        value: 2,
        label: "国内信息"
      },
      {
        value: 3,
        label: "行业信息"
      }
    ]);
    const handleSizeChange = val => {};
    const handleCurrentChange = val => {};
    const keywords = reactive([
      { value: "id", label: "ID" },
      { value: "title", label: "标题" }
    ]);
    const keyword = ref("id");
    const value = ref("");
    const value2 = ref("");
    const search_word = ref("");
    const tableData = reactive([
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      }
    ]);
    return {
      options,
      value,
      value2,
      keywords,
      keyword,
      search_word,
      tableData,
      handleSizeChange,
      handleCurrentChange
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/config.scss";
.label-wrap {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 95, 40);
  }
  &.key-words {
    @include labelDom(right, 100, 40);
  }
}
</style>
