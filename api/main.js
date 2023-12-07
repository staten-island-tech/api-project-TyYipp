import './style.css'
//https://botw-compendium.herokuapp.com/api/v3/compendium/all
//https://www.amiiboapi.com/api/
const DOMSelectors = {
    parent: document.querySelector(".parent")
}
const api = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";
async function getData() {
try {
            const response = await fetch(api)
            const data = await response.json()
            data.data.forEach((data) => {
                let name = data.name;
            
            const card = 
            `<div id="child>
            <h1>${name}</h1>
            </div>`
            DOMSelectors.parent.insertAdjacentHTML('beforeend', card);
            });
    } catch (error) {
        console.log(error, "Uh Oh spagettios")
        document.querySelector(".stuff").textContent = '💀Error 404🤖';

    }
}
getData(api);

/* fetch(api)
    .then((response) => response.json()) 
    .then(data => {
        data.forEach(item => {
            console.log(item)
        })
    }); */
