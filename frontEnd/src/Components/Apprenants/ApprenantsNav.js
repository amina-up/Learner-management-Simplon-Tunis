import React, { Component } from "react";
import { connect } from "react-redux";
import { getApprenants } from "../../Actions/apprenants";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import ApprenantsModal from "./ApprenantsModal";

class ApprenantsNav extends Component {
  state = {
    modal: false,
    isOpen: false,
    name: ""
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
          <NavbarBrand></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <InputGroup className="m-2">
                <Input
                  placeholder="Search by name..."
                  name="name"
                  onChange={e => this.changeHandler(e)}
                />
                <InputGroupAddon addonType="append">
                  <Button
                    onClick={() => this.props.getApprenants(this.state.name)}
                  >
                    <i className="fas fa-search"></i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              <Button
                className="m-2"
                onClick={() => this.setState({ modal: true })}
              >
                <i className="fas fa-plus"></i>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.modal ? (
          <ApprenantsModal
            toggle={this.toggleModal}
            isEdit={false}
            isOpen={this.state.modal}
          />
        ) : null}
      </>
    );
  }
}

export default connect(null, { getApprenants })(ApprenantsNav);
