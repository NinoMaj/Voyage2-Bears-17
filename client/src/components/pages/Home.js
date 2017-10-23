import React, { Component } from "react";
import { ExploreButton } from "./style";

class Home extends Component {
  render() {
    return (
      <div>
        <ExploreButton to="/jobs" className="btn btn-primary">
          Explore jobs
        </ExploreButton>
      </div>
    );
  }
}

export default Home;
