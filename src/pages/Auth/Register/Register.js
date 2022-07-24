import React, { useEffect, useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validate } from '../../../helpers/validations';
import Input from '../../../components/Input/Input';
import axiosRaw from 'axios';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
	const history = useNavigate();
	const [auth, setAuth] = useAuth();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		email: {
			value: 'marek@email.com',
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

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const resAxios = await axiosRaw.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-n5djxzgUrGVEDCi-mfwKPC5jfmpnuIY',
				{
					email: form.email.value,
					password: form.password.value,
					returnSecureToken: true,
				}
			);
			console.log(resAxios.data);

			setAuth(true, resAxios.data);
			history('/');
		} catch (error) {
			console.log(error.response);
		}

		setLoading(false);
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
		setValid(Object.values(form).every((x) => x.error == ''));
	}, [form]);

	useEffect(() => {
		if (auth) {
			history('/');
		}
	});

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
