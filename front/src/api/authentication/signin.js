import instanceAxios from "../instance";

const signin = async (loginUser) => {
  try {
    let response = await instanceAxios.post("/signin", {
      email: loginUser.email,
      password: loginUser.password,
    });
  } catch (error) {
    console.log(error);
  }
};

export default signin;
