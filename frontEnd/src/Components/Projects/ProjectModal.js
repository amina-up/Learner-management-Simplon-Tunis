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
import { addComment } from "../../Actions/comments";

class ProjectModal extends Component {
  state = {
    option: "",
    text: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    this.props.addComment(
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
        <ModalHeader>Add Comment</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Select Option</Label>
            <Input
              type="select"
              name="option"
              value={this.state.option}
              onChange={this.changeHandler}
            >
              <option>choose one</option>
              <option>Nothing</option>
              <option> À Encourager</option>
              <option> À Convoquer</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Comments</Label>
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

export default connect(null, { addComment })(ProjectModal);
