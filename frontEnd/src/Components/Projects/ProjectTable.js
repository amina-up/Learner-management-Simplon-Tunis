import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../Actions/comments";
import { Table } from "reactstrap";
import Moment from "react-moment";
import "./project.css";

class ProjectTable extends Component {
  render() {
    return (
      <>
        <Table hover className="text-center">
          <thead>
            <tr>
              <th>Comment</th>
              <th>Option</th>
              <th>Date</th>
              <th>Delete </th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default connect(null, { deleteComment })(ProjectTable);
