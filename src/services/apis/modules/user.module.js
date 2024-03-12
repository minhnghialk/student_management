import axios from "axios";

export default {
  login: async (form_data) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "/api/user/login", {
        ...form_data,
      })
      .then((response) => {
        if (response.status === 200) {
          const access_token = response.data.access_token;
          localStorage.setItem("access_token", access_token);

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
