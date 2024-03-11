import axios from "axios";

export default {
  create: async (access_token, form_data) => {
    return await axios
      .post(import.meta.env.VITE_SERVER_HOST + "api/courses", form_data, {
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

  update: async (access_token, course_id, form_data) => {
    return (
      await axios.put(
        import.meta.env.VITE_SERVER_HOST + "api/courses" + course_id
      ),
      form_data,
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

  find_by_id: async (course_id) => {
    return await axios.get(
      import.meta.env.VITE_SERVER_HOST + "api/courses" + course_id
    );
  },

  find_all: async () => {
    return await axios.get(import.meta.env.VITE_SERVER_HOST + "api/courses");
  },

  search: async (keyword) => {
    return await axios.get(
      import.meta.env.VITE_SERVER_HOST + "api/course/search" + keyword
    );
  },
};
