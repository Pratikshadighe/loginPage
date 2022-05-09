const initialState = {
  users: [],
  arr: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE": {
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    }

    default:
      return state;
  }
};
