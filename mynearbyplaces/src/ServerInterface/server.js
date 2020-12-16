import places from "./data";
let server = {
  getPlaces: () => {return places},
  addPlaces:(value) => {places.push(value)},
  addComment:(index, value) => {places[index].reviews.push(value)},
  removePlace:(index) => {places.splice(index, 1)}
};
export default server;
