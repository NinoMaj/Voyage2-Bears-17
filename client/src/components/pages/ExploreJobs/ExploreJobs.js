import * as React from "react";
import styled from "styled-components";

import Search from "./Search";

export const Heading = styled.h2`
  padding: 0.5em 0;
  font-weight: 700;
  font-size: 36px;
`;

function ExploreJobs(props) {
  return [<Heading key={0}>Find your next job</Heading>, <Search key={1} />];
}

export default ExploreJobs;
