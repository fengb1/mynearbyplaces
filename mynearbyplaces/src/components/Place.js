import React from 'react';
import "./Style.css";
import {Redirect} from 'react-router-dom';
import server from '../ServerInterface/server.js';

class Place extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      state: "",
      description: "",
      details: false,
      homepage: false,
      places: []
    }
  }

  componentDidMount() {
    let data = server.getPlaces();
    this.setState({places: data});
  }

  body = () => {
    const {places} = this.state;
    return (
      <div>
        {Object.keys(places).map((keyName, keyIndex) =>
          <div key={keyIndex}>
            <h3>{places.name}</h3>
            {places.city}, {places.state}
            <br />
            {places.description}
            <br /><br />
            <button onClick={() => this.details({places})}>Details</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => this.removePlace({places})}>Remove</button>
          </div>)}
          <br /><br />
      </div>
    );
  }

  details = (value) => {
    this.setState({details: true, temp: value});
  }

  removePlace = (value) => {
    var index = 0;
    for (const[i, e] of this.state.places.entries()) {
      if (e.name === value.value.name) {
        index = i;
      }
    }
    console.log(index);
    if (index !== -1) {
      server.removePlace(index);
      this.forceUpdate();
    }
  }

  onSubmit = (event) => {
    server.addPlaces(this.state.name, this.state.city, this.state.state, this.state.description);
    this.setState({
      name: "",
      city: "",
      state: "",
      description: ""
    });
    event.preventDefault();
  }

  onInputChange = (event) => {
    const value = event.target.value;
    this.setState({[event.target.name]: value})
  }

  homepage = () => {
    this.setState({homepage: true});
  }

  newComment = () => {
    const location = this.props.location;
    let author = "";
    let text = "";
    let name = "";
    if (location) {
      if (location.state) {
        if (location.state.author) {
          author = location.state.author;
        }
        if (location.state.text) {
          text = location.state.text;
        }
        if (location.state.name) {
          name = location.state.name;
        }
      }
    }
    let comment = {text: text, author: author};
    var index = 0;
    for (const[i, e] of this.state.places.entries()) {
      if (e.name === name) {
        index = i;
      }
    }
    if (index !== -1) {
      server.addComment(index, comment);
      this.forceUpdate();
    }
  }

  render() {
    const location = this.props.location;
    if (location) {
      if (location.state) {
        if (location.state.author) {
          this.newComment();
        }
      }
    }

    let reviewPage = {pathname:'/review', state: {temp: this.state.temp}}
    let homePage = {pathname:'/mynearbyplaces'}
    if (this.state.details) {
      return (
        <Redirect to={reviewPage} />
      );
    }
    if (this.state.homepage) {
      return (
        <Redirect to={homePage} />
      );
    }

    return (
      <div className="container">
        <div>
          <h1>Available Places</h1>
          <button onClick={this.homepage}>Back</button>
          <br /><br />
          <form className="add" onSubmit={this.onSubmit}>
            <input placeholder="Name" name="name" type="text" value={this.state.name}
              onChange={this.onInputChange}/>
            <br />
            <input placeholder="City" name="city" type="text" value={this.state.city}
              onChange={this.onInputChange}/>&nbsp;
            <input placeholder="State" name="state" type="text" value={this.state.state}
              onChange={this.onInputChange}/>
            <br />
            <textarea placeholder="Description" rows="4" cols="50" name="description"
             type="text" value={this.state.description} onChange={this.onInputChange} />
            <br />
            <button type="submit">Add</button>
          </form>
          <br />
        </div>
        {this.body()}
      </div>
    );
  }
}

export default Place;
