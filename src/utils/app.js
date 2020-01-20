import cookie from "cookie_js";
export function getToken() {
  return cookie.get("token");
}
export function setToken(token) {
  return cookie.set("token", token);
}
export function removeToken(token) {
  return cookie.remove(token);
}
export function setUserName(username) {
  return cookie.set("username", username);
}

export function getUserName() {
  return cookie.get("username");
}
