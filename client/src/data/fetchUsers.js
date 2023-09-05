import sendRequest from "./sendRequest";

// Реєстрація нового юзера
export const createUser = async (user) => {
  return sendRequest("post", "/customers", user);
};

// Логін юзера
export const loginUser = async (user) => {
  return sendRequest("post", "/customers/login", user);
};

// Змінити пароль юзера
export const changePassword = async (passwords, token) => {
  return sendRequest("put", "/customers/password", passwords, token);
};

// Змінити дані юзера
export const updateUser = async (user, token) => {
  return sendRequest("put", "/customers", user, token);
};

// Отримати дані юзера
export const getUser = async (token) => {
  return sendRequest("get", "/customers/customer", null, token);
};
