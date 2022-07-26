import React, { useEffect, useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
import { validateEmail, validatePassword } from '../../../helpers/validations';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../axios-auth';

const ProfileDetails = () => {
	const [auth, setAuth] = useAuth();
	const [email, setEmail] = useState(auth.email);
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});
  const [success, setSuccess] = useState(false);
  
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const data = {
				idToken: auth.token,
				email: email,
				returnSecureToken: false,
			};
			if (password) {
				data.password = password;
			}



			const res = await axios.post('accounts:update', data);

			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			});
			setSuccess(true);
			console.log(res);
		} catch (ex) {
			console.log(ex.response);
		}

		setLoading(false);
	};

	useEffect(() => {
		if (validateEmail(email)) {
			setErrors({ ...errors, email: '' });
		} else {
			setErrors({ ...errors, email: 'Niepoprawny email' });
		}
	}, [email]);

	useEffect(() => {
		if (validatePassword(password)) {
			setErrors({ ...errors, password: '' });
		} else {
			setErrors({ ...errors, password: 'Minimum 4 znaki' });
		}
	}, [password]);

	return (
		<form onSubmit={submit}>
      {success ? (<div className='alert alert-success'>Dane zapisane</div>): null}
			<div className="form-group">
				<label>Email</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
				/>
				<div className="invalid-feedback">{errors.email}</div>
				<div className="valid-feedback">Wszystko ok</div>
			</div>
			<div className="form-group">
				<label>Hasło</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className={`form-control${
						errors.password ? ' is-invalid' : ' is-valid'
					}`}
				/>
				<div className="invalid-feedback">{errors.password}</div>
			</div>
			<LoadingButton
				loading={loading}
				disabled={errors.password || errors.email}
			>
				Zapisz
			</LoadingButton>
		</form>
	);
};

export default ProfileDetails;
