import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

import "./Apprenants.css";

export class ApprenantsTab extends Component {
  toggleModal = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <>
        <Table hover className="text-center ">
          <thead style={{ backgroundColor: "#CACFD2 ", textAlign: "center" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Last </th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {this.props.apprenants.map(apprenant => (
              <tr key={apprenant._id}>
                <td style={{ textAlign: "left" }}>
                  {apprenant.name.toUpperCase()}
                </td>
                <td>{apprenant.email}</td>
                <td></td>
                <td>
                  <Link to={`/comments/${apprenant._id}`} className="mr-2">
                    <i class="fas fa-comments"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default ApprenantsTab;
