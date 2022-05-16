export const inputChange = (name, value) => {
  return {
    type: "INPUT_CHANGE",
    payload: {
      fieldName: name,
      value,
    },
  };
};
export const loginPage = (payload) => {
  return {
    type: "LOGIN",
    payload,
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
export const register = (Register) => {
  return {
    type: "REGISTER",
    payload: {
      id: new Date().getTime(),
      Register,
    },
  };
};
