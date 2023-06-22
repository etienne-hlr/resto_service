import React, { useState, useEffect } from "react";
import axios from "axios";
import instanceAxios from "./instance";

const createUser = async (newUser) => {
  try {
    let response = await instanceAxios.post("/users", {
      email: newUser.email,
      name: newUser.name,
      password: newUser.password,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default createUser;
