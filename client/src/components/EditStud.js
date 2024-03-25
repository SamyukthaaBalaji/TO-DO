import React, { useState } from "react";

const EditStud = ({ stud, updateStud }) => {
  const [formData, setFormData] = useState({
    fname: stud.fname,
    dept: stud.dept,
    age: stud.age,
    dob: stud.dob,
  });

  const { fname, dept, age, dob } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { fname, dept, age, dob };
      const response = await fetch(`http://localhost:9000/forms/${stud.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      updateStud(body); // Update the student information in the parent component
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${stud.id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${stud.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Student</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setFormData({ ...stud })}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    value={fname}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dept"
                    value={dept}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={age}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={dob}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFormData({ ...stud })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStud;
