function getToken() {
  try {
    const Token = localStorage.getItem("userInfo")?.accessToken;
    return Token;
  } catch (error) {
    console.error("error", error);
  }
}
export { getToken };
