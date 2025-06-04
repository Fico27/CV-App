// import { useState } from "react";

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  return (
    <div className="genFormContainer">
      <form action="">
        <h2>General Information</h2>

        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, name: e.target.value });
          }}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, email: e.target.value });
          }}
        />

        <label htmlFor="phone">Phone #: </label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, phone: e.target.value });
          }}
        />
      </form>
    </div>
  );
}

export default GeneralInfo;
