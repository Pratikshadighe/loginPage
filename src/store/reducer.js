const initialState = {
  users: [],
  arr: [],
  loggedInUser: false,

  email: "",
  password: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,

        user: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    // case "INPUT_CHANGE_EMAIL":
    //   return Object.assign({}, state, {
    //     email: action.email,
    //     // password: action.password,
    //   });
    // case "INPUT_CHANGE_PASS":
    //   return Object.assign({}, state, {
    //     password: action.password,
    //   });
    case "INPUT_CHANGE": {
      const { fieldName, value } = action.payload;
      return {
        ...state,
        // address: {
        //   ...state.address,
        // },
        [fieldName]: value,
      };
    }

    default:
      return state;
  }
};
