import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = [];
let index = 0;

function useState(defaultvalue) {
	const id = index++;

	if (state[id]) {
		return state[id];
	}

	const setValue = (newValue) => {
		state[id][0] = newValue;
		render();
	};

	const currentState = [defaultvalue, setValue];
	state[id] = currentState;
	return currentState;
}

function TestHook() {
	const [value, setValue] = useState('start');
	const [text, setText] = useState('frugi stan');

	return (
		<>
			<h1>Test hook!</h1>
			{text}
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
function render() {
  index = 0;
	root.render(
		<React.StrictMode>
			<TestHook />
			{/* <App /> */}
		</React.StrictMode>
	);
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
