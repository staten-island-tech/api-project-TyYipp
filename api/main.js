import './style.css'

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
                  const sortid = data.data.sort((a,b) => a.id - b.id);
                  sortid.forEach((data) => {
                        let name = data.name;
                        let img = data.image;
                        let id = data.id;
                        const card = `
                          <div class="child">
                            <h2 class="text">Name: ${name}</h2>
                            <img src="${img}" alt="" class="img">
                            <h3 class="text">Type: ${id}</h3>
                          </div>
                        `;
                        DOMSelectors.parent.insertAdjacentHTML('beforeend', card);
                      });
                      };
                      insertCards(data)

    } catch (error) {
        console.log(error, "Uh Oh spagettios")
        document.querySelector(".stuff").textContent = '💀Error 404🤖';

    }
}
getData(api);

async function filterData() {
  try {
      const response = await fetch(api)
      const data = await response.json()
      console.log(data)
                    const sortid = data.data.sort((a,b) => a.id - b.id);
                      let buttons = document.querySelectorAll('.btn');
                      buttons.forEach((btn) =>
                        btn.addEventListener('click', function (event) {
                          event.preventDefault();
                          let type = btn.textContent.toLowerCase();
                          let newArr = sortid.filter((data) => data.category === type);
                          insertCards(newArr);
                        })
                      );
      } catch (error) {
          console.log(error, "Uh Oh spagettios")
          document.querySelector(".stuff").idContent = '💀Error 404🤖';
  
      }};
  filterData(api);
                      
/* fetch(api)
    .then((response) => response.json()) 
    .then(data => {
        data.forEach(item => {
            console.log(item)
        })
    }); */
