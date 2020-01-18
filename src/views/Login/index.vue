<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ current: isActive == index }"
          v-for="(item, index) in menuTab"
          :key="index"
          @click="isActive = index"
        >{{ item.text }}</li>
      </ul>
      <!--表单start-->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium"
      >
        <el-form-item prop="username" class="form-item">
          <label for="username">邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="form-item">
          <label for="password">密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="captcha" class="form-item">
          <label for="captcha">验证码</label>
          <el-row :gutter="10">
            <el-col :span="16">
              <el-input v-model.number="ruleForm.captcha" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var validateUsername = (rule, value, callback) => {
      let reg = /^w[-w.+]*@([A-Za-z0-9][-A-Za-z0-9]+.)+[A-Za-z]{2,14}$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      let reg = /^(?!\d+$)(?![^a-zA-Z]+$)\S{6,20}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码为6至20位的数字+字符"));
      } else {
        callback();
      }
    };
    var validateCaptcha = (rule, value, callback) => {
      let reg = /^[a-z0-9]{6}$/;
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (!reg.test(value)) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        captcha: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        captcha: [{ validator: validateCaptcha, trigger: "blur" }]
      },
      menuTab: [{ text: "登录" }, { text: "注册" }],
      isActive: 0
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background: #344a5f;
  .login-wrap {
    width: 330px;
    margin: auto;
    .menu-tab {
      text-align: center;
      li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
      }
      .current {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
.login-form {
  margin-top: 29px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }
  .form-item {
    margin-top: 15px;
  }
  .block {
    width: 100%;
  }
  .login-btn {
    margin-top: 19px;
  }
}
</style>
