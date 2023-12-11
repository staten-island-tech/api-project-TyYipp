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
    console.log(data)
                function insertCards(data) {
                    DOMSelectors.parent.innerHTML = '';
                    data.data.forEach((data) => {
                      let name = data.name;
                      let img = data.image;
                      let id = data.id;
                      const card = `
                        <div id="child">
                          <h2 id="text">Name: ${name}</h2>
                          <img src="${img}" alt="" class="img">
                          <h3 id="text">Type: ${id}</h3>
                        </div>
                      `;
                      DOMSelectors.parent.insertAdjacentHTML('beforeend', card);
                    });
                    };
                    insertCards()
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
