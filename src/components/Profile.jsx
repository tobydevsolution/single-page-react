import React from "react";

function Profile() {
  return (
    <header className="myProfile">
      <img
        className="profilePic"
        id="profile_img"
        src="/images/Tobi 2.jpg"
        alt="Tobi"
      />
      <h1 id="twitter">Tobilobaorek</h1>
      <p>
        <small id="slack">@tobilobaorek</small>
      </p>
    </header>
  );
}

export default Profile;
