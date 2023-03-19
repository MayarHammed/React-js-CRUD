import React from "react";
import pro3 from "./image/pro3.png";

const FormList = (props) => {
  return (
    <form onSubmit={props.AddCourse}>
      <input
        className="inputForm"
        type="text"
        value={props.Current}
        placeholder="Enter Course"
        onChange={props.handelSubmit}
      />
      <button type="submit">Add  <img src={pro3}/></button>
    </form>
  );
};

export default FormList;
