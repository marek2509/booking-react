import React, { useRef, useState } from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";
import Input from "../../../../components/Input/Input";

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
              { valie: 1, label: 1 },
              { valie: 2, label: 2 },
              { valie: 3, label: 3 },
              { valie: 4, label: 4 },
            ]}
            error=""
            showErrors={false}
          />


          <h4 className="mt-3">Udogodnienia</h4>

          <Input
          type ="checkbox"
            value={form.features}
            onChange={(value) => setForm({ ...form, features: value })}
            options={[
                {value: 'tv', label:"TV"},
            ]}
            error=""
            showErrors={false}
          />

          {/* <div className="form-group">
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
          </div> */}

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
