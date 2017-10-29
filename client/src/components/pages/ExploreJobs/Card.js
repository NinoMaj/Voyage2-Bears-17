import React from "react";

function Card(props) {
  const { title, location, company, created_at } = props;
  return (
    <div className="card text-left">
      <img
        className="card-img-top"
        src="http://via.placeholder.com/350x150"
        alt="city img"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          at {company} ({location})
        </h6>
      </div>
      <div className="card-footer text-muted">{created_at}</div>
    </div>
  );
}

export default Card;
