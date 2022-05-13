export const inputChange = (name, value) => {
  return {
    type: "INPUT_CHANGE",
    payload: {
      fieldName: name,
      value,
    },
  };
};
export const loginPage = (email, password) => {
  return {
    type: "LOGIN",
    payload: {
      id: new Date().getTime(),
      email,
      password,
    },
  };
};

export const update = (setlogin) => {
  return {
    type: "UPDATE",
    payload: {
      setlogin,
    },
  };
};
