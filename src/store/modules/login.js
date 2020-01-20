import { Login } from "@/api/login";

export default {
  namespaced: true,
  state: {
    // isCollapse: JSON.parse(Cookie("isCollapse")) || false
    isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false
  },
  getters: {},
  actions: {
    login(content, data) {
      return new Promise((resolve, reject) => {
        Login(data)
          .then(value => {
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
    }
  }
};
