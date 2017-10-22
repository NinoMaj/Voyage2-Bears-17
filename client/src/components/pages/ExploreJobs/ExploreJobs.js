import * as React from "react";
import Search from "./Search";

import { H1 } from "./style";

function ExploreJobs(props) {
  return (
    <div className="container">
      <H1>Find your next job</H1>
      <Search />
    </div>
  );
}

export default ExploreJobs;
