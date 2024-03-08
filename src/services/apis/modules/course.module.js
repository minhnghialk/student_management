import axios from "axios";

export default {
  create: async (access_token, data) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "api/course", data, {
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
            message: "The course has been created successfully.",
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

  update: async (course_id, data) => {
    return (
      await axios.put(import.meta.env.VITE_SERVER_HOST + "api/courses" + course_id),
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
  },

  delete: async (course_id) => {
    return await axios.delete(
      import.meta.env.VITE_SERVER_HOST + "api/courses/" + course_id
    );
  },

  search: async (keyword) => {
    return await axios.get(
      import.meta.env.VITE_SERVER_HOST + "api/course/search" + keyword
    );
  },

  find_by_id: async (course_id) => {
    return await axios.get(
      import.meta.env.VITE_SERVER_HOST + "api/course" + course_id
    );
  },
};
