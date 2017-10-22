import * as React from "react";

class Search extends React.Component {
  state = {
    fieldInput: ""
  };

  handleChange = e => {
    console.log(e.currentTarget.value);
  };

  render() {
    return (
      <input
        type="search"
        id="explore-jobs-search"
        name="explore-jobs-search"
        placeholder="Search by job, title, or location..."
        value={this.state.fieldInput}
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;
