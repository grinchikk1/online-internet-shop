import axios from "axios";

const url = "http://localhost:4000/api";

// Реєстрація нового юзера
export const createUser = async (user) => {
  try {
    const response = await axios.post(`${url}/customers`, user);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Логін юзера
export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${url}/customers/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Змінити пароль юзера
export const changePassword = async (passwords, token) => {
  try {
    const response = await axios.put(`${url}/customers/password`, passwords, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Змінити дані юзера
export const updateUser = async (user, token) => {
  try {
    const response = await axios.put(`${url}/customers`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Отримати дані юзера
export const getUser = async (token) => {
  try {
    const response = await axios.get(`${url}/customers/customer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// Приклад отримання юзера

// const [user, setUser] = useState(null);

// const handleBtn = async () => {
//   try {
//     const loggedInUser = await loginUser({
//       loginOrEmail: "admin",
//       password: "admin123",
//     });
//     setUser(loggedInUser);
//     console.log(user);
//   } catch (error) {
//     console.error("Error logging in:", error);
//   }
// };

// <button onClick={handleBtn}>Log in</button>