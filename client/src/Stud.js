import { Fragment, useEffect } from "react";
import InputForm from "./components/InputForm";

import "./app.css";
import ListAllStud from "./components/ListAllStud";
function Stud() {

  return (
    <Fragment>
      <div className="container">
        <InputForm />
        <ListAllStud />
      </div>
    </Fragment>
  );
}

export default Stud;
