import React, { useReducer, lazy, Suspense, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import ReducerContext from './context/reducerContext';
import InspiringQuote from './components/InspiringQuote/InspiringQuote';
import { reducer, initialState } from './reducer';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Search from './pages/Search/Search';
import NotFound from './pages/404/404';
import Login from './pages/Auth/Login/Login';
import ErrorBoundry from './hoc/ErrorBoundry';
import Register from './pages/Auth/Register/Register';

const Profile = lazy(() => import('./pages/Profile/Profile'));

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar />
			<ThemeButton />
		</Header>
	);

	const menu = <Menu />;

	const content = (
		<>
			<ErrorBoundry>
				<Suspense fallback={<p>Ładowanie</p>}>
					<Routes>
						<Route path="/hotele/:id" element={<Hotel />} />

						<Route path="/wyszukaj" element={<Search />}>
							<Route path=":term" element={<Search />} />
							<Route path="" element={<Search />} />
						</Route>

						<Route
							path="/profil/*"
							element={
								state.user ? <Profile /> : <Navigate to="/zaloguj" />
							}
						></Route>

						<Route path="/zaloguj" element={<Login />} />
						<Route path="/rejestracja" element={<Register />} />
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</ErrorBoundry>
		</>
	);
	const footer = <Footer />;

	return (
		<Router>
			<AuthContext.Provider
				value={{
					user: state.user,
					login: (user) => dispatch({ type: 'login', user }),
					logout: () => dispatch({ type: 'logout' }),
				}}
			>
				<ThemeContext.Provider
					value={{
						color: state.theme,
						onChangeTheme: () => dispatch({ type: 'change-theme' }),
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
