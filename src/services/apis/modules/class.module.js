import axios from "axios";

export default {
  create: async (access_token, data) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "api/classes", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          return {
            status: true,
            message: "The class has been created successfully.",
            data: response.data,
          };
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          status: false,
          message: "Invalid data. Please check and try again.",
        };
      });
  },

  update: async (class_id, data) => {
    return (await axios.put(
      import.meta.env.VITE_SERVER_HOST + "api/class" + class_id
    ),
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          return {
            status: true,
            message: "Class information has been successfully updated.",
            data: response.data,
          };
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          status: false,
          message: "Invalid data. Please check and try again.",
        };
      });
  },

  delete: async (class_id) => {
    return await axios.delete(
      import.meta.env.VITE_SERVER_HOST + "api/courses/" + class_id
    );
  },

  search: async (keyword) => {
    return await axios
      .get(import.meta.env.VITE_SERVER_HOST + "api/class/search" + keyword)
      .then((response) => {
        console.log("response", response);
        return {
          status: true,
          message: "",
          data: response.data,
        };
      })
      .catch((error) => {
        console.log("error", error);
        return {
          status: false,
          message: "",
        };
      });
  },

  find_by_id: async (class_id) => {
    return await axios
      .get(import.meta.env.VITE_SERVER_HOST + "api/class" + class_id)
      .then((response) => {
        console.log("response", response);
        return {
          status: true,
          message: "",
          data: response.data,
        };
      })
      .catch((error) => {
        console.log(error, error);
        return {
          status: false,
          message: "Class information not found with the provided ID.",
        };
      });
  },
};
