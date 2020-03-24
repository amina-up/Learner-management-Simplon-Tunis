import React, { Component } from "react";
import ApprenantsNav from "./ApprenantsNav";
import ApprenantsTab from "./ApprenantsTab";
import { connect } from "react-redux";
import { getApprenants } from "../../Actions/apprenants";
import "./Apprenants.css";
class Apprenants extends Component {
  componentDidMount() {
    this.props.getApprenants();
  }
  render() {
    return this.props.loading ? (
      <div class="container">
        <div class="block">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxLhDA3xBH4HxeYzRObr4bbl8Oj_Y-6HTpMA_LemH9xNhxmTmg"></img>
        </div>
      </div>
    ) : (
      <div>
        <ApprenantsNav />
        <ApprenantsTab apprenants={this.props.apprenants} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  apprenants: state.apprenantsReducer.apprenants,
  loading: state.apprenantsReducer.loading
});
export default connect(mapStateToProps, { getApprenants })(Apprenants);
