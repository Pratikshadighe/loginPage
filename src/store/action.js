import axios from "axios";

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

export const loginUser = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        dispatch(loginPage());
      })
      .catch((error) => {});
  };
};
