const host = window.location.host;

export const setTokens = (tokens, user) => {
  console.log(
    "🚀 ~ file: utils.js ~ line 4 ~ setTokens ~ tokens, user",
    tokens,
    user
  );

  window.localStorage.setItem(`${host}_accessToken`, tokens.access.token);
  window.localStorage.setItem(`${host}_refreshToken`, tokens.refresh.token);
  window.localStorage.setItem(`${host}_role`, user.role);
  window.localStorage.setItem(`${host}_user`, JSON.stringify(user));
};
export const removeTokens = () => {
  window.localStorage.removeItem(`${host}_accessToken`);
  window.localStorage.removeItem(`${host}_refreshToken`);
  window.localStorage.removeItem(`${host}_role`);
  window.localStorage.removeItem(`${host}_user`);
};
export const getTokens = () => {
  return {
    accessToken: localStorage.getItem(`${host}_accessToken`),
    refreshToken: localStorage.getItem(`${host}_refreshToken`),
    role: localStorage.getItem(`${host}_role`),
    user: localStorage.getItem(`${host}_user`),
  };
};
export const setRefreshToken = (tokens) => {
  localStorage.setItem(`${host}_accessToken`, tokens.access.token);
  localStorage.setItem(`${host}_refreshToken`, tokens.refresh.token);
};
