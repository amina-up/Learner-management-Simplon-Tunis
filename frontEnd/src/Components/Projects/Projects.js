import React, { Component } from "react";
import ProjectsNav from "./ProjectsNav";
import { connect } from "react-redux";
import { getComments } from "../../Actions/comments";
import ProjectTable from "./ProjectTable";

class Projects extends Component {
  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
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
        <ProjectsNav apprenant_id={this.props.match.params.id} />
        <ProjectTable comments={this.props.comments} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  comments: state.commentsReducer.comments,
  apprenants: state.apprenantsReducer.apprenants,
  loading: state.commentsReducer.loading
});

export default connect(mapStateToProps, { getComments })(Projects);
