export const loginPage = (login) => {
  return {
    type: "LOGIN",
    payload: {
      id: new Date().getTime(),
      login,
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
