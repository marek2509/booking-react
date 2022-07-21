import React, { useRef, useState } from 'react';
import LoadingButton from '../../../../components/UI/LoadingButton/LoadingButton';
import Input from '../../../../components/Input/Input';

const AddHotel = (props) => {
	const [form, setForm] = useState({
		name: '',
		description: '',
		city: '',
		rooms: '',
		features: [],
		image: null,
		status: 0,
	});

	const [loading, setLoading] = useState(false);

	const submit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
      setLoading(false);
    }, 500);

  console.log(form);
	};

	return (
		<div className="card">
			<div className="card-header">Nowy hotel</div>
			<div className="card-body">
				<p className="text-muted">Uzupełnij dane hotelu</p>

				<form onSubmit={submit}>
					<Input
						label="Nazwa"
						value={form.name}
						onChange={(value) => setForm({ ...form, name: value })}
						error=""
						showErrors={false}
					/>

					<Input
						label="Opis"
            type="textarea"
						value={form.description}
						onChange={(value) => setForm({ ...form, description: value })}
						error=""
						showErrors={false}
					/>

					<Input
						label="Miejscowość"
						value={form.city}
						onChange={(value) => setForm({ ...form, city: value })}
						error=""
						showErrors={false}
					/>

					<Input
						label="Ilość pokoi"
						value={form.rooms}
						type="select"
						onChange={(value) => setForm({ ...form, rooms: value })}
						options={[
							{ value: 1, label: 1 },
							{ value: 2, label: 2 },
							{ value: 3, label: 3 },
							{ value: 4, label: 4 },
						]}
						error=""
						showErrors={false}
					/>

					<h4 className="mt-3">Udogodnienia</h4>

					<Input
						type="checkbox"
						value={form.features}
						onChange={(value) => setForm({ ...form, features: value })}
						options={[
							{ value: 'tv', label: 'TV' },
							{ value: 'wifi', label: 'Wi-fi' },
							{ value: 'parking', label: 'Parking' },
						]}
						error=""
						showErrors={false}
					/>

					<h4 className="mt-3">Zdjęcie</h4>
					<Input
						type="file"
						onChange={(value) => setForm({ ...form, image: value })}
					/>

					<h4 className="mt-3">Aktywny</h4>

          <Input
						type="radio"
						value={form.status}
						onChange={(value) => setForm({ ...form, status: value })}
						name="status"
            options={[
							{ label: 'Aktywny', value: 1, },
							{ label: 'Ukryty', value: 0, },

						]}
					/>

					<div className="text-right">
						<LoadingButton loading={loading} className="btn-success">
							Dodaj hotel
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddHotel;
