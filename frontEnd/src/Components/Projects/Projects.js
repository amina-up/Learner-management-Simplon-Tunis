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
    return (
      <div>
        <ProjectsNav apprenant_id={this.props.match.params.id} />
        <ProjectTable comments={this.props.comments} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  comments: state.commentsReducer.comments
});

export default connect(mapStateToProps, { getComments })(Projects);
