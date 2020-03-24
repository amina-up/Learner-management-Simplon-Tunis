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
          <NavbarBrand>
            <img
              src="https://www.keejob.com/media/recruiter/recruiter_17182/logo-17182-20191008-095050.png"
              className="logo"
            ></img>
          </NavbarBrand>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "60px"
            }}
          >
            <a href="https://discordapp.com/channels/681529581437452332/681529581441646603">
              <img
                src="data:image/png;base64,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"
                width="60px"
                className="img-discord"
              ></img>
            </a>
          </div>
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
                <i class="fab fa-reddit-alien"></i>
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
