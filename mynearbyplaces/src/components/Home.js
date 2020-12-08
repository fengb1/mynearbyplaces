import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: ""
    }
  }

  onSubmit = (event) => {
    console.log(this.state.place)
  }

  onInputChange = (event) => {
    const value = event.target.value;
    this.setState({"place": value});
  }

  render() {
    return(
      <div>
        <h1>Search for nearby places</h1>
        <form onSubmit={this.onSubmit}>
          <label>Enter the keyword: </label>
          <input type="text" name="place" value={this.state.place}
            onChange={this.onInputChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }

}

export default Home;
