import * as React from "react";
import { Container } from "./style";

class Search extends React.Component {
  state = {
    fieldInput: ""
  };

  handleChange = e => {
    this.setState({
      // currentTarget in React is better than target
      fieldInput: e.currentTarget.value
    });
  };

  handleSearchClick = () => {
    console.log(`search for "${this.state.fieldInput}"`);
  };

  render() {
    const placeholder = "Search by job, title, or location...";

    return (
      <Container className="row justify-content-center">
        <div className="col-8">
          <div className="form-group input-group input-group-lg">
            <input
              type="search"
              id="explore-jobs-search"
              name="explore-jobs-search"
              className="form-control form-control-lg"
              placeholder={placeholder}
              aria-label={placeholder}
              value={this.state.fieldInput}
              onChange={this.handleChange}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.handleSearchClick}
              >
                Search
              </button>
            </span>
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;
