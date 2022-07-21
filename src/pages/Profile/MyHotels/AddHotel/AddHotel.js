import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";

const AddHotel = (props) => {
  const imageRef = useRef();
  const [form, setForm] = useState({
    name: "",
    description: "",
    city: "",
    rooms: "",
    features: [],
    image: null,
    status: 0,
  });

  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {}, 500);
    setLoading(true);
  };

  const changeFeatureHandler = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      const newFeatures = [...form.features, value];
      setForm({ ...form, features: newFeatures });
    } else {
      const newFeatures = form.features.filter((x) => x !== value);
      setForm({ ...form, features: newFeatures });
    }
  };

  return (
    <div className="card">
      <div className="card-header">Nowy hotel</div>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>

        <form onSubmit={submit}>
          <div className="form-group">
            <label>Nazwa</label>
            <input
              value={form.name}
              type="text"
              className={`form-control ${false ? "is-invalid" : ""} }`}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group">
            <label>Opis</label>
            <textarea
              value={form.description}
              type="text"
              className={`form-control ${false ? "is-invalid" : ""} }`}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group">
            <label>Miejscowość</label>
            <input
              value={form.city}
              type="text"
              className={`form-control ${false ? "is-invalid" : ""} }`}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group">
            <label>Ilość pokoi</label>
            <select
              value={form.rooms}
              type="text"
              className={`form-control ${false ? "is-invalid" : ""} }`}
              onChange={(e) => setForm({ ...form, rooms: e.target.value })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className="invalid-feedback">Błąd</div>
          </div>

          <h4 className="mt-3">Udogodnienia</h4>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                type="checkbox"
                id="tv"
                value="tv"
                checked={form.features.find((x) => x === "tv")}
                onChange={changeFeatureHandler}
              />
              <label className="custom-control-label" htmlFor="tv">
                TV
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                type="checkbox"
                id="wifi"
                value="wifi"
                checked={form.features.find((x) => x === "wifi")}
                onChange={changeFeatureHandler}
              />
              <label className="custom-control-label" htmlFor="wifi">
                WiFi
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                type="checkbox"
                id="parking"
                value="parking"
                checked={form.features.find((x) => x === "parking")}
                onChange={changeFeatureHandler}
              />
              <label className="custom-control-label" htmlFor="parking">
                Parking
              </label>
            </div>
          </div>

          <h4 className="mt-3">Zdjęcie</h4>
          <div className="form-group">
            <input
              type="file"
              ref={imageRef}
              onChange={(e) => setForm({ ...form, image: e.target.files })}
            />
          </div>

          <h4 className="mt-3">Aktywny</h4>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <label className="custom-control-label">Tak</label>
              <input
                className="custom-control-input"
                type="radio"
                name="status"
                value="1"
                checked={form.status == 1}
                id="status-active"
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              />
            </div>

            <div className="custom-control custom-checkbox">
              <label className="custom-control-label">Nie</label>
              <input
                className="custom-control-input"
                type="radio"
                name="status"
                value="0"
                checked={form.status == 0}
                id="status-hide"
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              />
            </div>
          </div>
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
