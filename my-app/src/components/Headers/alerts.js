import React from "react";
// reactstrap components
import { UncontrolledAlert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        
        <UncontrolledAlert color="success" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>{" "}
          <span className="alert-inner--text">
            <strong>Success!</strong> This is a success alert—check it out!
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert color="danger" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>{" "}
          <span className="alert-inner--text">
            <strong>Danger!</strong> This is a danger alert—check it out!
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert color="warning" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>{" "}
          <span className="alert-inner--text">
            <strong>Warning!</strong> This is a warning alert—check it out!
          </span>
        </UncontrolledAlert>
      </>
    );
  }
}

export default Alerts;