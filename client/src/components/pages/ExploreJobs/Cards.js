import * as React from "react";
import { connect } from "react-redux";
import { loadJobs } from "../../../actions/jobsActions";

import Card from "./Card";
import { Container } from "./style";

class Cards extends React.Component {
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=remote"
    )
      .then(data => data.json())
      .then(payload => this.props.loadJobs(payload));
  }

  render() {
    return (
      <Container className="card-columns">
        {this.props.jobs.map(job => <Card {...job} key={job.id} />)}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs
  };
}

export default connect(mapStateToProps, { loadJobs })(Cards);
