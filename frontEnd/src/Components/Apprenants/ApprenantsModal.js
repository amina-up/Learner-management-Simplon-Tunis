import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  ModalFooter,
  Button
} from "reactstrap";
import "./Apprenants.css";
import { connect } from "react-redux";
import { addApprenant, updateApprenant } from "../../Actions/apprenants";

class ApprenantsModal extends Component {
  state = {
    name: "",
    email: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    this.props.addApprenant(this.state.name, this.state.email);
  };
  render() {
    return (
      <Modal
        className="modal-lg"
        isOpen={this.props.isOpen}
        toggle={() => this.props.toggle()}
      >
        <ModalHeader>
          <img
            src="https://jamaity.org/wp-content/uploads/2019/01/48413546_1894746707320979_6553648587891277824_n.png"
            className="logo"
          ></img>
          ADD Apprenant
        </ModalHeader>
        <ModalBody>
          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend" style={{ width: "125px" }}>
              <span>
                <i class="fas fa-user" style={{ color: "#dc143c" }}></i> Name :
              </span>
            </InputGroupAddon>
            <Input
              placeholder=" Enter name..."
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </InputGroup>
          <InputGroup className="m-2">
            <InputGroupAddon addonType="prepend" style={{ width: "125px" }}>
              <span>
                <i
                  class="fas fa-envelope-open"
                  style={{ color: "#dc143c" }}
                ></i>
                Email:
              </span>
            </InputGroupAddon>
            <Input
              placeholder=" Enter Email..."
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              this.handleClick();
              this.props.toggle();
            }}
          >
            Add
          </Button>
          <Button color="secondary" onClick={() => this.props.toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(null, { addApprenant, updateApprenant })(
  ApprenantsModal
);
