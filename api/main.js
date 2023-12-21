import './style.css'

const api = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";

const DOMSelectors = {
  parent: document.querySelector(".parent")
}
function clearfields() {
  DOMSelectors.parent.innerHTML = '';
}

async function getData() {
try {
    const response = await fetch(api)
    const data = await response.json()
    const sortid = data.data.sort((a,b) => a.id - b.id);
    function insertCards(data){
      data.forEach((card) => {
              const all = 
              `<div class="card">
                  <h1 class="text">${card.name}</h1>
                  <img src="${card.image}" class="img">
                  <h4 class="text"> ${card.id}</h4>
              </div>`
              DOMSelectors.parent.insertAdjacentHTML("beforeend", all)
      });
  }
  insertCards(sortid)

  let buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) =>
btn.addEventListener('click', function (event) {
  event.preventDefault();
  clearfields();
  let type = btn.getAttribute('alt').toLowerCase();
  let newArr = data.data.filter((data) => data.category.toLowerCase() === type);
  insertCards(newArr);
  console.log(newArr)
}));
} catch (error) {
console.log(error, "Uh Oh spagettios")
document.querySelector(".stuff").textContent = '💀Error 404🤖';

    }};

getData(api);

