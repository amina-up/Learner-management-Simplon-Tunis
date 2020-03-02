import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments } from "../../Actions/comments";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button
} from "reactstrap";
import ProjectModal from "./ProjectModal";

class ProjectsNav extends Component {
  state = {
    modal: false,
    isOpen: false
  };
  changeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  toggleModal = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <>
        <Navbar light expand="md">
          <NavbarBrand style={{ fontWeight: "bold" }}>
            <img src="https://www.keejob.com/media/recruiter/recruiter_17182/logo-17182-20191008-095050.png"></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Button
                className="m-2"
                onClick={() => this.setState({ modal: true })}
              >
                Add a Comment
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.modal ? (
          <ProjectModal
            toggle={this.toggleModal}
            isOpen={this.state.modal}
            apprenant_id={this.props.apprenant_id}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, { getComments })(ProjectsNav);
