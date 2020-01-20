<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ current: isActive == item.type }"
          v-for="(item, index) in menuTab"
          :key="index"
          @click="toggleMenu(item.type)"
        >
          {{ item.text }}
        </li>
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
          <el-input
            id="username"
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="form-item">
          <label for="password">密码</label>
          <el-input
            id="password"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="confirmPassword"
          class="form-item"
          v-if="isActive == 'register'"
        >
          <label for="confirmPassword">重复密码</label>
          <el-input
            id="confirmPassword"
            type="password"
            v-model="ruleForm.confirmPassword"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>
        <el-form-item prop="captcha" class="form-item">
          <label for="captcha">验证码</label>
          <el-row :gutter="10">
            <el-col :span="16">
              <el-input
                id="captcha"
                v-model="ruleForm.captcha"
                minlength="6"
                maxlength="6"
              ></el-input>
            </el-col>
            <el-col :span="8">
              <el-button
                type="success"
                class="block"
                @click="getSms"
                :disabled="codeButtonStatus.status"
                >{{ codeButtonStatus.text }}</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button
            type="danger"
            @click="submitForm('ruleForm')"
            class="login-btn block"
            :disabled="loginButtonStatus"
            >{{ isActive == "login" ? "登录" : "注册" }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { GetSms, Register } from "@/api/login";
import { reactive, ref, onMounted } from "@vue/composition-api";
import {
  stripscript,
  validateEmail,
  validatePass,
  validateCode
} from "@/utils/validate";
export default {
  name: "login",
  // setup(prop, context) {
  setup(prop, { refs, root }) {
    //这里面放置data数据,生命周期,自定义函数
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!validateEmail(value)) {
        callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      value = stripscript(value);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!validatePass(value)) {
        callback(new Error("密码为6至20位的数字+字符"));
      } else {
        callback();
      }
    };
    let validateConfirmPassword = (rule, value, callback) => {
      value = stripscript(value);
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != ruleForm.password) {
        callback(new Error("重复密码不正确"));
      } else {
        callback();
      }
    };
    let validateCaptcha = (rule, value, callback) => {
      value = stripscript(value);
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (!validateCode(value)) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    //对象数据声明
    const menuTab = reactive([
      { text: "登录", type: "login" },
      { text: "注册", type: "register" }
    ]);
    const ruleForm = reactive({
      username: "",
      password: "",
      captcha: "",
      confirmPassword: ""
    });
    const rules = reactive({
      username: [{ validator: validateUsername, trigger: "blur" }],
      password: [{ validator: validatePassword, trigger: "blur" }],
      confirmPassword: [
        { validator: validateConfirmPassword, trigger: "blur" }
      ],
      captcha: [{ validator: validateCaptcha, trigger: "blur" }]
    });
    //基础数据类型声明
    const isActive = ref("login");
    //登录按钮禁用状态
    const loginButtonStatus = ref(true);
    const codeButtonStatus = reactive({
      status: false,
      text: "获取验证码"
    });
    //倒计时
    const timer = ref(null);
    //生命周期
    onMounted(() => {});
    //声明函数
    const getSms = () => {
      //进行提示
      if (ruleForm.username == "") {
        root.$message.error("邮箱不能为空！");
        return false;
      }
      if (!validateEmail(ruleForm.username)) {
        root.$message.error("邮箱格式有误请重新输入!");
        return false;
      }
      //请求接口 获取验证码
      let data = { username: ruleForm.username, module: isActive.value };
      //修改验证码按钮的状态
      // codeButtonStatus.status = true;
      // codeButtonStatus.text = "发送中...";
      updateButtonStatus({
        status: true,
        text: "发送中..."
      });
      GetSms(data)
        .then(value => {
          let data = value.data;
          root.$message({
            message: data.message,
            type: "success"
          });
          //启用登录或注册按钮
          loginButtonStatus.value = false;
          //调定时器
          countDown(5);
        })
        .catch(reason => {});
    };
    //倒计时
    const countDown = time => {
      //判断定时器是否存在
      if (timer.value) clearInterval(timer.value);
      timer.value = setInterval(_ => {
        time--;
        if (time === 0) {
          clearInterval(timer.value);
          // codeButtonStatus.status = false;
          // codeButtonStatus.text = "重新发送";
          updateButtonStatus({
            status: false,
            text: "重新发送"
          });
        } else {
          codeButtonStatus.text = `倒计时${time}秒`;
        }
      }, 1000);
    };
    //清除倒计时
    const clearCountDown = () => {
      //还原验证码默认状态
      // codeButtonStatus.status = false;
      // codeButtonStatus.text = "获取验证码";
      updateButtonStatus({
        status: false,
        text: "获取验证码"
      });
      //清除倒计时
      clearInterval(timer.value);
      // const codeButtonStatus = reactive({
      //   status: false,
      //   text: "获取验证码"
      // });
    };
    //更新按钮的状态
    const updateButtonStatus = params => {
      codeButtonStatus.status = params.status;
      codeButtonStatus.text = params.text;
    };
    //切换
    const toggleMenu = type => {
      isActive.value = type;
      resetFields();
      clearCountDown();
    };
    //清除表单数据
    const resetFields = () => {
      refs.ruleForm.resetFields();
    };
    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          isActive.value === "login" ? login() : register();
        } else {
          return false;
        }
      });
    };
    //登录
    const login = () => {
      let data = {
        username: ruleForm.username,
        password: ruleForm.password,
        code: ruleForm.captcha
      };
      root.$store
        .dispatch("login", data)
        .then(value => {
          root.$router.push({
            name: "Layout"
          });
        })
        .catch(reason => {});
    };
    //注册
    const register = () => {
      let data = {
        username: ruleForm.username,
        password: ruleForm.password,
        code: ruleForm.captcha,
        module: "register"
      };
      Register(data)
        .then(value => {
          let data = value.data;
          root.$message({
            message: data.message,
            type: "success"
          });
          toggleMenu(menuTab[0].type);
          clearCountDown();
        })
        .catch(reason => {});
    };
    return {
      menuTab,
      ruleForm,
      rules,
      isActive,
      loginButtonStatus,
      codeButtonStatus,
      updateButtonStatus,
      toggleMenu,
      submitForm,
      getSms
    };
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
