export const addTokenToSessionStorage = (token: string) =>
  sessionStorage.setItem("token", JSON.stringify(token));

export const addUserIdToSessionStorage = (userId: string) =>
  sessionStorage.setItem("userId", JSON.stringify(userId));

export const removeTokenFromSessionStorage = () =>
  sessionStorage.removeItem("token");

export const removeUserIdFromSessionStorage = () =>
  sessionStorage.removeItem("userId");

export const getTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return JSON.parse(token);
  }
};
