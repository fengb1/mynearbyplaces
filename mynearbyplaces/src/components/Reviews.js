import React from 'react';
import {Redirect} from 'react-router-dom';

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [],
      author: "",
      text: "",
      homepage: false
    }
  }

  body = () => {
    const location = this.props.location;
    let temp = {};
    if (location) {
      if (location.state) {
        if (location.state.temp) {
          temp = location.state.temp;
        }
      }
    }
    return (
      <div>
        <h3>{temp.value.name}</h3>
        {temp.value.city}, {temp.value.state}
        <br />
        {temp.value.description}
      </div>
    );
  }

  onSubmit = (event) => {
    let comment = {text: this.state.text, author: this.state.author};
    const location = this.props.location;
    let temp = {};
    if (location) {
      if (location.state) {
        if (location.state.temp) {
          temp = location.state.temp;
        }
      }
    }
    temp.value.reviews.push(comment);
    this.setState({author: "", text: ""})
    event.preventDefault();
  }

  onInputChange = (event) => {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  reviews = () => {
    const location = this.props.location;
    let temp = {};
    if (location) {
      if (location.state) {
        if (location.state.temp) {
          temp = location.state.temp;
        }
      }
    }
    return (
      <div>
      {temp.value.reviews.map((value, index) =>
        <div key={index}>
          <b>{value.author}</b>: {value.text}
        </div>)}
      </div>
    );
  }

  homepage = () => {
    this.setState({homepage: true});
  }

  render() {
    const location = this.props.location;
    let temp = {};
    if (location) {
      if (location.state) {
        if (location.state.temp) {
          temp = location.state.temp;
        }
      }
    }
    let place = {pathname:'/place', state: {text: this.state.text,
      author: this.state.author, name: temp.value.name}}
    if (this.state.homepage) {
      return (
        <Redirect to={place} />
      );
    }

    return (
      <div className="container">
        <h1>Place Details</h1>
        <button onClick={this.homepage}>Back</button>
        {this.body()}
        <br />
        <form onSubmit={this.onSubmit}>
          <input type="text" name="author" placeholder="Your Name"
            value={this.state.author} onChange={this.onInputChange}/>
          <br />
          <textarea placeholder="Review" rows="4" cols="50" name="text"
           type="text" value={this.state.text} onChange={this.onInputChange} />
          <br />
          <button type="submit">Add Review</button>
        </form>
        <br />
        {this.reviews()}
      </div>
    );
  }

}

export default Review
