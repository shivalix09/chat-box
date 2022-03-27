export const getToken = () => {
  return localStorage.getItem("token");
};
export const setToken = (token) => {
  localStorage.setItem("token", token);
};
export const removeToken = () => {
  localStorage.removeItem("token");
};
export const getUserInfo = () => {
   return JSON.parse(localStorage.getItem("user"));
};
export const setUserInfo = (user) => {
  localStorage.setItem("user", user);
};
export const removeUserInfo = () => {
  localStorage.removeItem("user");
};
