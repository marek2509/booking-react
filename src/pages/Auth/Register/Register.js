import React, { useEffect, useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validate } from '../../../helpers/validations';
import Input from '../../../components/Input/Input';
import axios from 'axios';

export default function Register(props) {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		email: {
			value: '',
			error: 'Pole wymagane',
			showError: false,
			rules: ['required', 'email'],
		},
		password: {
			value: '',
			error: 'Pole wymagane',
			showError: false,
			rules: ['required'],
		},
	});

	const [Valid1, setValid] = useState(false);

	//   let valid = false;
	//   valid = Object.values(form).every((x) => x.error == false);

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const resAxios = await axios.get(
			'https://react-hotels-6b5b6-default-rtdb.europe-west1.firebasedatabase.app/users.json'
		);

		console.log(resAxios);
		const response = await fetch(
			'https://react-hotels-6b5b6-default-rtdb.europe-west1.firebasedatabase.app/users.json',
			{
				// method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				// body: JSON.stringify({
				// 	email: 'test@email.com',
				// 	password: 'tajneHaslo',
				// }),
			}
		);

		const content = await response.json();
		console.log(content);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	const changeHandler = (value, fieldName) => {
		const error = validate(form[fieldName].rules, value);
		setForm({
			...form,
			[fieldName]: {
				...form[fieldName],
				value: value,
				showError: true,
				error: error,
			},
		});
	};

	useEffect(() => {
		console.log(Object.values(form).every((x) => x.error == ''));
		setValid(Object.values(form).every((x) => x.error == ''));
	}, [form]);

	return (
		<div className="card">
			<div className="card-header">Rejestracja</div>
			<div className="card-body">
				<p className="text-muted">Uzupełnij dane</p>

				<form onSubmit={submit}>
					<Input
						label="Email"
						type="email"
						value={form.email.value}
						onChange={(val) => changeHandler(val, 'email')}
						error={form.email.error}
						showError={form.email.showError}
					/>

					<Input
						label="Hasło"
						type="password"
						value={form.password.value}
						onChange={(val) => changeHandler(val, 'password')}
						error={form.password.error}
						showError={form.password.showError}
					/>

					<div className="text-right">
						<LoadingButton
							disabled={!Valid1}
							loading={loading}
							className="btn-success"
						>
							Zarejestruj
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
}
