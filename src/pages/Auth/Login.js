import React from "react";

export default function Login() {
  return (
    <form>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Hasło</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-primary mt-2">Zapisz</button>
    </form>
  );
}
