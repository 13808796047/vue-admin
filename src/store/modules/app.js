import { Login } from "@/api/login";
import { setToken, setUserName, getUserName } from "@/utils/app";
export default {
  namespaced: true,
  state: {
    // isCollapse: JSON.parse(Cookie("isCollapse")) || false
    isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
    token: "",
    username: getUserName() || ""
  },
  getters: {
    username: state => state.username
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        Login(data)
          .then(value => {
            let { token, username } = value.data.data;
            commit("SET_TOKEN", token);
            commit("SET_USERNAME", username);
            setToken(token);
            setUserName(username);
            resolve(value);
          })
          .catch(reason => {
            reject(reason);
          });
      });
    }
  },
  mutations: {
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse;
      //本地存储
      sessionStorage.setItem("isCollapse", JSON.stringify(state.isCollapse));
    },
    SET_TOKEN(state, value) {
      state.token = value;
    },
    SET_USERNAME(state, value) {
      state.username = value;
    }
  }
};
