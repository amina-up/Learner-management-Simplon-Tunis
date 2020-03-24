import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  FormGroup,
  Label
} from "reactstrap";
import { connect } from "react-redux";
import { addComment, updateCommet } from "../../Actions/comments";

class ProjectModal extends Component {
  state = {
    option: this.props.isEdit ? this.props.comment.option : "",
    text: this.props.isEdit ? this.props.comment.text : ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    this.props.isEdit
      ? this.props.updateCommet(this.state.option, this.state.text)
      : this.props.addComment(
          this.props.apprenant_id,
          this.state.option,
          this.state.text
        );
  };

  render() {
    return (
      <Modal
        className="modal-lg"
        isOpen={this.props.isOpen}
        toggle={() => this.props.toggle()}
      >
        <ModalHeader>
          {this.props.isEdit ? "UPDATE COMMENT" : "ADD COMMENT"}
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label style={{ fontWeight: "bold" }}>
              Evalu<span style={{ color: "#dc143c" }}>ation</span>
            </Label>
            <Input
              type="select"
              name="option"
              value={this.state.option}
              onChange={this.changeHandler}
            >
              <option>Choose </option>
              <option>Nothing</option>
              <option> À Encourager</option>
              <option> À Convoquer</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label style={{ fontWeight: "bold" }}>
              Comm<span style={{ color: "#dc143c" }}>ents</span>
            </Label>
            <Input
              type="textarea"
              name="text"
              value={this.state.text}
              onChange={this.changeHandler}
            />
          </FormGroup>
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

export default connect(null, { addComment, updateCommet })(ProjectModal);
