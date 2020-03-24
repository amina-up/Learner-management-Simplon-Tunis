import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../Actions/comments";
import { Table } from "reactstrap";
import Moment from "react-moment";
import "./project.css";
import ProjectModal from "./ProjectModal";
import { getComments } from "../../Actions/comments";

class ProjectTable extends Component {
  state = {
    modal: false,
    isOpen: false,
    comment: null
  };
  toggleModal = () => this.setState({ modal: !this.state.modal });
  render() {
    console.log(this.props);
    return (
      <>
        <Table hover className="text-center">
          <thead>
            <tr>
              <th>
                <i class="fab fa-cuttlefish"></i>omment
              </th>
              <th>
                <i class="fab fa-etsy"></i>valuation
              </th>
              <th>
                <i class="fab fa-dochub"></i>ate
              </th>
              <th>
                <i class="fab fa-dochub"></i>elete{" "}
              </th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            {this.props.comments.map(comment => (
              <tr key={comment._id}>
                <td>{comment.text}</td>
                <td
                  style={{
                    color:
                      comment.option == "Nothing"
                        ? "#F1CF0F"
                        : comment.option == "À Encourager"
                        ? "green"
                        : "red"
                  }}
                >
                  {comment.option}
                </td>

                <td>
                  <Moment format="YYYY/MM/DD">{comment.date}</Moment>
                </td>
                <td>
                  {" "}
                  <i
                    className="fas fa-trash mr-2 text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.props.deleteComment(comment._id)}
                  ></i>
                </td>
                <td>
                  <button onClick={() => this.setState({ modal: true })}>
                    {this.state.modal ? (
                      <ProjectModal
                        toggle={this.toggleModal}
                        isOpen={this.state.modal}
                        isEdit={true}
                        comment={comment}
                      />
                    ) : null}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default connect(null, { getComments, deleteComment })(ProjectTable);
