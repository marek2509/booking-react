import React from "react";

const ProfileDetails = () => {
  return (
    <form>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value="email@gmail.com"/>
      </div>
      <div className="form-group">
        <label>Hasło</label>
        <input type="password" className="form-control" placeholder="*****" />
      </div>
	  <button className="btn btn-primary mt-2">Zapisz</button>
    </form>
  );
};

export default ProfileDetails;
