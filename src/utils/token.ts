const TOKEN_KEY = "token";

export const getUserToken = (): string => localStorage.getItem(TOKEN_KEY) ?? "";

export const setUserToken = (token: string): void =>
  localStorage.setItem(TOKEN_KEY, token);
