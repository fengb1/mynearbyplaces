import React from 'react';
import {Link} from 'react-router-dom';
import "./Style.css";
import server from '../ServerInterface/server.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      places: [],
      found: []
    }
  }

  componentDidMount() {
    let data = server.getPlaces();
    this.setState({places: data});
  }

  body = () => {
    return (
      <div>
        {this.state.found.map((value, index) =>
          <div key={index}>
            <h3>{value.name}</h3>
            {value.city}, {value.state}
            <br />
            {value.description}
          </div>)}
          <br /><br />
      </div>
    );
  }

  onSubmit = (event) => {
    for (const[i, e] of this.state.places.entries()) {
      if (e.name.includes(this.state.input)) {
        this.state.found.push(e);
      }
      else if (e.city.includes(this.state.input)) {
        this.state.found.push(e);
      }
      else if (e.state.includes(this.state.input)) {
        this.state.found.push(e);
      }
    }
    this.setState({input: ""});
    event.preventDefault();
  }

  onInputChange = (event) => {
    const value = event.target.value;
    this.setState({input: value});
  }

  clear = () => {
    this.setState({found: []});
  }

  render() {

    return(
      <div className="container">
        <h1>Search for nearby places</h1>
        <form onSubmit={this.onSubmit}>
          <label>Search by keyword:&nbsp;</label>
          <input type="text" name="place" value={this.state.input}
            onChange={this.onInputChange} />&nbsp;&nbsp;&nbsp;
          <button type="submit">Search</button>
        </form>
        <br />
        <Link to={{pathname:"/place"}}>
          <div>See available places</div>
        </Link>
        {this.body()}
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }

}

export default Home;
