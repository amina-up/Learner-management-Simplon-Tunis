import React, { Component } from "react";
import ApprenantsNav from "./ApprenantsNav";
import ApprenantsTab from "./ApprenantsTab";
import { connect } from "react-redux";
import { getApprenants } from "../../Actions/apprenants";

class Apprenants extends Component {
  componentDidMount() {
    this.props.getApprenants();
  }
  render() {
    return (
      <div>
        <ApprenantsNav />
        <ApprenantsTab apprenants={this.props.apprenants} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  apprenants: state.apprenantsReducer.apprenants
});
export default connect(mapStateToProps, { getApprenants })(Apprenants);
