let API = "https://nearbyplaces-api.herokuapp.com/";
let server-api = {
  getPlaces: () => {return (fetch (API + "/places").then(x => x.json()));},
  addPlaces:(name, city, state, description) => {
  let place = {name: name, city: city, state: state, description: description};
  return(fetch(API + '/place',
  {method: "POST", headers: {"CONTENT-TYPE": "application/json"}, body: JSON.stringify(place)})
  .then(x => x.json()));
  },
  addComment:(placeid, content, author) => {
  let comment = {content: content, author: author};
  return(fetch(API + `/review/${placeid}`,
  {method: "POST", headers: {"CONTENT-TYPE": "application/json"}, body: JSON.stringify(comment)})
  .then(x => x.json()));
  },
  removePlace:(name, city, state) => {
  let place = {name: name, city: city, state: state};
  return(fetch(API + '/remove',
  {method: "POST", headers: {"CONTENT-TYPE": "application/json"}, body: JSON.stringify(place)})
  .then(x => x.json()));
  }
};
export default server-api;
