<template>
  <!-- 新增弹窗 -->
  <el-dialog
    title="新增"
    :visible.sync="visible"
    :before-close="_=>this.$emit('update:visible',false)"
    width="580px"
  >
    <el-form :model="form">
      <el-form-item label="类型" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-input v-model="form.name" placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item label="概况" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="_=>this.$emit('update:visible',false)">取 消</el-button>
      <el-button type="danger" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  name: "dialogInfo",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const formLabelWidth = ref("70px");
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    return {
      formLabelWidth,
      form
    };
  }
  //单向数据流 父->子 不能反向修改
};
</script>

<style lang="scss" scoped>
</style>