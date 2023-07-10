import instanceAxios from "../instance";

const signup = async (newUser) => {
  try {
    let response = await instanceAxios.post("/signup", {
      email: newUser.email,
      name: newUser.name,
      password: newUser.password,
    });
  } catch (error) {
    return error;
  }
};

export default signup;
