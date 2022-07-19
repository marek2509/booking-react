export const reducer = (state, action) => {
  switch (action.type) {
    case "change-theme":
      const theme = state.theme === "danger" ? "primary" : "danger";
      return { ...state, theme };
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
  isAuthenticated: false,
  theme: "warning",
};
