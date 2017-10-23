import * as React from "react";
import Search from "./Search";
import Cards from "./Cards";

import { H1 } from "./style";

function ExploreJobs(props) {
  return (
    <div className="container">
      <H1>Find your next job</H1>
      <Search />
      <Cards />
    </div>
  );
}

export default ExploreJobs;
