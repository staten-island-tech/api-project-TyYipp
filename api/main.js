import './style.css'
//https://botw-compendium.herokuapp.com/api/v3/compendium/all
//https://www.amiiboapi.com/api/


const api = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";
async function getData() {
try {
            const response = await fetch(api)
            const data = await response.json()
            document.querySelector("h1").textContent = data.content;
    } catch (error) {
        console.log(error, "Uh Oh spagettios")
        document.querySelector("h1").textContent = '💀Error 404🤖';
    }
}
getData();
/* fetch(api)
    .then((response) => response.json()) 
    .then(data => {
        data.forEach(item => {
            console.log(item)
        })
    }); */
