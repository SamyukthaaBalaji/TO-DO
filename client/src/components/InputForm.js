import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const InputForm = () => {
  const [name, setname] = useState("");
  const [dept, setdept] = useState("");
  const [age, setage] = useState("");
  const [dob, setdob] = useState("");
  const navigate = useNavigate(); 

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name: name,
        dept: dept,
        age: age,
        dob: dob,
      };
      const response = await fetch("http://localhost:9000/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      navigate("/")
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center">Pern Forms</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <div className="content">
          <label>Name</label>
          <input
            type="text"
            className="input-content"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="content">
          <label>dept</label>
          <input
            type="text"
            className="input-content"
            value={dept}
            onChange={(e) => setdept(e.target.value)}
          />
        </div>

        <div className="content">
          <label>age</label>
          <input
            type="number"
            className="input-content"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
        </div>
        <div className="content">
          <label>dob</label>
          <input
            type="date"
            className="input-content"
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          />
        </div>

        <button className="btn btn-success">ADD</button>
      </form>
    </Fragment>
  );
};

export default InputForm;
