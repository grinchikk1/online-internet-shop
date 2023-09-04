import sendRequest from "./sendRequest";

// Реєстрація нового юзера
export const createUser = async (user) =>
  sendRequest("post", "/customers", user);

// Логін юзера
export const loginUser = async (user) =>
  sendRequest("post", "/customers/login", user);

// Змінити пароль юзера
export const changePassword = async (passwords, token) =>
  sendRequest("put", "/customers/password", passwords, token);

// Змінити дані юзера
export const updateUser = async (user, token) =>
  sendRequest("put", "/customers", user, token);

// Отримати дані юзера
export const getUser = async (token) =>
  sendRequest("get", "/customers/customer", null, token);
