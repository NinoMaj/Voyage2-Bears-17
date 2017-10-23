import * as React from "react";
import { Container } from "./style";

const mockAPI = [
  {
    title: "Front-End Developer",
    company: "CompanyName",
    country: "US",
    city: "New York",
    date: "22.10.2017"
  },

  {
    title: "Back-End Developer",
    company: "CompanyName",
    country: "Russia",
    city: "St. Petersburg",
    date: "21.10.2017"
  },

  {
    title: "Full-Stack Developer",
    company: "CompanyName",
    country: "Czech Republic",
    city: "Prague",
    date: "20.10.2017"
  },

  {
    title: "Senior Front-End Developer",
    company: "CompanyName",
    country: "Brazil",
    city: "San Paulo",
    date: "19.10.2017"
  },

  {
    title: "Senior Front-End Developer",
    company: "CompanyName",
    country: "Brazil",
    city: "San Paulo",
    date: "19.10.2017"
  }
];

function Card(props) {
  const { title, company, city, country, date } = props;

  return (
    <div className="card text-left">
      <img
        className="card-img-top"
        src="http://via.placeholder.com/350x150"
        alt="city img"
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">
          at {company} in {city}, {country}
        </h6>
      </div>
      <div className="card-footer text-muted">{date}</div>
    </div>
  );
}

function Cards(props) {
  return (
    <Container className="card-columns">
      {mockAPI.map((job, i) => <Card {...job} key={i} />)}
    </Container>
  );
}

export default Cards;
