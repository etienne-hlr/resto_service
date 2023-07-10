import instanceAxios from "../instance";

const signin = async (signin) => {
  try {
    let response = await instanceAxios.post("/signin", signin, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default signin;
