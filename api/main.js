import './style.css'
//https://botw-compendium.herokuapp.com/api/v3/compendium/all
//https://www.amiiboapi.com/api/
const URL = 'https://www.amiiboapi.com/api/amiibo/?name=mario';
// API (Application Programming Interface) - if you want to get data
// from the internet programmatically, it's likely that you will have
// to deal with an API.

// Below is an entry point to an api that generates random quotes.
// APIs are usually accessible with a HTML/website link.
// (If you open this in a browser, you will get raw object data.)
const apiEntry = "https://www.amiiboapi.com/api/amiibo/?name=mario";

// fetch is a function (that you've seen previously) that can retrieve
// data from an api entry point.
console.log(fetch(apiEntry));

// fetch() returns a "response", which we must convert into a object json format
fetch(apiEntry)
    .then((response) => response.json()) // use the `.json()` method
  // `.json()` is also async, chain another `.then()` to log the object
.then(data.forEach((dat) => console.log(dat.character)))
