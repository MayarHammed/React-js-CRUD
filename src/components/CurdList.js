import React, { Component, Fragment } from "react";
import pro1 from "./image/pro1.png";
import pro2 from "./image/pro2.png";
import pro4 from "./image/pro4.png";

class CurdList extends Component {
  state = {
    isEdit: false,
    isShow: false
  };
 
 
 


  rendeitems = () => {
    return (
      <li>
        <span>{this.props.items.name}</span>

        <button
          className="button-1"
          onClick={() => {
            this.props.Deleteitem(this.props.index);
          }}
        >
          Delete <img src={pro1} />
        </button>

        <button
          className="button-2"
          onClick={() => {
            this.isEditCourse();
          }}
        >
          Edit <img src={pro2} />
        </button>
      </li>
    );
  };

  isEditCourse = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  handelNewCourse = (e) => {
    e.preventDefault();
    this.props.EditCourses(this.props.index, this.input.value);
    this.isEditCourse();
  };

  renderUbdateForm = () => {
    return (
      <form onSubmit={this.handelNewCourse}>
        <input
          className="F-input"
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.items.name}
        />
        <button className="buuton-3">
          Update Course <img src={pro4} />
        </button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;
    return (
      <Fragment>
        {isEdit ? this.renderUbdateForm() : this.rendeitems()}
      </Fragment>
    );
  }
}

export default CurdList;
