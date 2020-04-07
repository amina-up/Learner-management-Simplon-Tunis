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
           <thead style={{ textAlign: "center" }}>
            <tr>
              <th>
                <i class="fas fa-layer-group"></i> Groupe
              </th>
              <th>
                <i class="fas fa-user"></i> Name
              </th>
              <th>
                <i class="fas fa-envelope-open-text"></i> Email
              </th>
              <th>
                <i class="fas fa-cogs"></i> setting
              </th>
              <th style={{ textAlign: "center" }}>
                <i class="fas fa-comments"></i> comments
              </th>
            </tr>
          </thead>
          <tbody>
             {this.props.apprenants.map((apprenant) => (
              <tr key={apprenant._id}>
                <td style={{ color: "red", textAlign: "center" }}>
                  {apprenant.groupe}
                </td>
                <td style={{ textAlign: "left" }}>
                  {apprenant.name.toUpperCase()}
                </td>
                <td>{apprenant.email}</td>
                <td>
                  <i
                    className="fas fa-trash mr-2 text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.props.deleteApprenant(apprenant._id)}
                  ></i>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Link to={`/comments/${apprenant._id}`} className="mr-2">
                    <i class="fas fa-arrow-circle-right"></i>
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
