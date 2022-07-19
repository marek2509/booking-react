


export const reducer = (state, action) => {
  switch (action.type) {
    case "change-theme":
      const theme = state.theme === "danger" ? "primary" : "danger";
      return { ...state, theme };
    case "set-loading":
      return { ...state, loading: action.loading };
    case "set-hotels":
      return {
        ...state,
        hotels: action.hotels,
      };
    case "login":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      throw new Error("There is no such action: " + action.type);
  }
};

export const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: false,
  theme: "warning",
};
