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

  toggleModal = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <>
        <Navbar light expand="md" style={{ paddingBottom: "50px" }}>
          <NavbarBrand style={{ fontWeight: "bold" }}>
            <h1 style={{ textAlign: "center" }}>
              {" "}
              <span style={{ color: "#dc143c" }}>Comments</span> Of Coach{" "}
            </h1>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Button
                style={{ width: "50px" }}
                className="m-2 btn-comment"
                onClick={() => this.setState({ modal: true })}
              >
                <i class="fas fa-comment-dots"></i>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.modal ? (
          <ProjectModal
            toggle={this.toggleModal}
            isOpen={this.state.modal}
            isEdit={false}
            apprenant_id={this.props.apprenant_id}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, { getComments })(ProjectsNav);
