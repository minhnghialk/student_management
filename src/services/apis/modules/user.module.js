import axios from "axios";

export default {
  register: async (form_data) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "user/register", {
        form_data,
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

  login: async (form_data) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "user/login", form_data)
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
