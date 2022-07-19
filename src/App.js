import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Searchbar from "./components/UI/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import ReducerContext from "./context/reducerContext";
import InspiringQuote from "./components/InspiringQuote/InspiringQuote";
import { reducer, initialState } from "./reducer";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";

const backendHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Białystok",
    rating: 8.3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    id: 2,
    name: "Poniatowski",
    city: "Suchowola",
    rating: 8.2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = (termDec) => {
    const newHotels = [...backendHotels].filter((x) =>
      x.name.toUpperCase().includes(termDec.toUpperCase())
    );
    // setHotels(hotelsFiltered);
    dispatch({ type: "set-hotels", hotels: newHotels });
  };

  const header = (
    <Header>
      <InspiringQuote />
      <Searchbar onSearch={searchHandler} />
      <ThemeButton />
    </Header>
  );

  const menu = <Menu />;

  const content = (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotele/:id" element={<Hotel />} />
      </Routes>
      {state.loading ? <LoadingIcon /> : null}
    </>
  );

  const footer = <Footer />;

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          login: () => dispatch({ type: "login" }),
          logout: () => dispatch({ type: "logout" }),
        }}
      >
        <ThemeContext.Provider
          value={{
            color: state.theme,
            onChangeTheme: () => dispatch({ type: "change-theme" }),
          }}
        >
          <ReducerContext.Provider
            value={{
              state: state,
              dispatch: dispatch,
            }}
          >
            <Layout
              header={header}
              menu={menu}
              content={content}
              footer={footer}
            />
          </ReducerContext.Provider>
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
