import './style.css'
//https://botw-compendium.herokuapp.com/api/v3/compendium/all
//https://www.amiiboapi.com/api/


const api = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";

console.log(fetch(api));


fetch(api)
    .then((response) => response.json()) 
    .then((data) => console.log(data.data)); 
