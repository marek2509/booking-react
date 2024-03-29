import React, { useEffect, useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validate } from '../../../helpers/validations';
import Input from '../../../components/Input/Input';
import axios from '../../../axios-auth';
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
	const [error, setError] = useState('');

	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const resAxios = await axios.post('/accounts:signUp', {
				email: form.email.value,
				password: form.password.value,
				returnSecureToken: true,
			});

			setAuth({
				email: resAxios.data.email,
				token: resAxios.data.idToken,
				userId: resAxios.data.localId,
			});
			history('/');
		} catch (error) {
			console.log(error.response);
			const errorMessage = error.response.data.error.message;
			if (errorMessage === 'EMAIL_EXISTS') {
				setError('Takie email już istnieje');
			} else if (
				errorMessage ===
				'WEAK_PASSWORD : Password should be at least 6 characters'
			) {
				setError('Twoje hasło jest zbyt słabe.');
			} else {
				setError(errorMessage);
			}
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
					{error ? <div className="alert alert-danger">{error}</div> : null}
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
