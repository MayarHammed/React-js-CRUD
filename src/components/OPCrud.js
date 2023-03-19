import React, { Component } from "react";
import Alert from "./Alert";
import CurdList from "./CurdList";
import FormList from "./FormList";
import AlertError from "./handleAlert";

export default class App extends Component {
  state = {
    Courses: [
      { id: 1, name: "React js" },
      { id: 2, name: "Angular js" },
      { id: 3, name: "Vue js" },
    ],
    Current: "",
    show: false,
    // isShow: false,
  };

  // Add Masssege
  handleAlert = ({ text, type }) => {
    let { show } = this.state;
    this.setState({ show: true, type, text });
    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  };

  handelSubmit = (e) => {
    this.setState({
      Current: e.target.value,
    });
  };

  // update course

  AddCourse = (e) => {
    e.preventDefault();
    if (this.state.Current !== "") {
      let Current = this.state.Current;
      let Courses = this.state.Courses;
      Courses.push({ name: Current });
      this.setState({
        Courses,
        Current: "",
      });
    } else {
      this.handleAlert({
        type: "danger",
        text: `Input can't be empty value `,
      });
    }
  };

  // delete course

  Deleteitem = (index) => {
    let Courses = this.state.Courses;
    Courses.splice(index, 1);
    this.setState({
      Courses,
    });
    this.handleAlert({ type: "Deleted", text: "item deleted" });
  };

  // Edit course

  EditCourses = (index, value) => {
    let Courses = this.state.Courses;
    let newcourse = Courses[index];
    newcourse["name"] = value;
    this.setState({
      Courses,
    });
    this.handleAlert({ type: "update", text: "item update" });
  };

  render() {
    const { Courses } = this.state;
    const length = Courses.length;
    const CourseList = length ? (
      Courses.map((item, id) => {
        return (
          <CurdList
            items={item}
            key={id}
            index={id}
            Deleteitem={this.Deleteitem}
            EditCourses={this.EditCourses}
          />
        );
      })
    ) : (
      <Alert />
    );

    let { show } = this.state;

    return (
      <div>
        <section className="App">
          <h1>CrudList</h1>
          <ul>{CourseList}</ul>
          <FormList
            Current={this.state.Current}
            AddCourse={this.AddCourse}
            handelSubmit={this.handelSubmit}
          />
        </section>
        <span className="span1">
          {show && <AlertError type={this.state.type} text={this.state.text} />}
        </span>
        <br />
      </div>
    );
  }
}
