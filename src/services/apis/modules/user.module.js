import axios from "axios";

export default {
  register: async (newUser) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "user/register", {
        newUser,
      })
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          status: false,
          message: "Can not register!",
        };
      });
  },

  login: async (data) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "user/login", data)
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          return {
            status: true,
            message: "Login successful",
            data: response.data,
          };
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          status: false,
          message: "Invalid email or password.",
        };
      });
  },
};
