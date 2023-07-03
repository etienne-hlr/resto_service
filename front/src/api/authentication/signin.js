import instanceAxios from "../instance";

const signin = async (signin) => {
  console.log(signin);
  try {
    let response = await instanceAxios.post("/signin", signin, {
      withCredentials: true,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default signin;
