import React, { Fragment, useEffect, useState } from "react";
import EditStud from "./EditStud";

const ListAllStud = () => {
  const [forms, setforms] = useState([]);
  const deletestud = async (id) => {
    try {
      const deleteforms = await fetch(`http://localhost:9000/forms/${id}`, {
        method: "DELETE",
      });
      setforms(forms.filter((form) => form.id !== id));
      console.log(deleteforms);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getForms = async () => {
    try {
      const response = await fetch("http://localhost:9000/");
      const jsonData = await response.json();
      setforms(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getForms();
  }, [forms]);

  console.log(forms);
  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>name</th>
            <th>dept</th>
            <th>age</th>
            <th>dob</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
          {forms.map((form) => (
            <tr key={form.id}>
              <td>{form.fname}</td>
              <td>{form.dept}</td>
              <td>{form.age}</td>
              <td>{form.dob}</td>
              <td>
                <EditStud stud={form} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deletestud(form.id);
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListAllStud;
