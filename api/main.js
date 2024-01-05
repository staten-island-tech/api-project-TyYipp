import './style.css'




const api = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";



const DOMSelectors = {
  parent: document.querySelector(".parent"),
  search: document.querySelector("#search"),
  input: document.querySelector("#input"),
  home: document.querySelector("#home"),
  sortid: document.querySelector("#sortid"),
}
function clearfields() {
  DOMSelectors.parent.innerHTML = '';
}
function insertCards(data){
  data.forEach((card) => {
          const all =
          `<div class="card">
              <h1 class="text" alt="name">${card.name}</h1>
              <img src="${card.image}" class="img" alt="${card.name} picture">
              <h4 class="textd" alt="id"> ${card.id}</h4>
              <h2 class="textz"><br>${card.description}</h2>
              ${card.common_locations ? `<h3 class="texty" alt="common location"><br><br><br>Common Locations<br>${card.common_locations} </h3>` : ''}
              ${card.drops ? `<h4 class="textx" alt="drops"><br>Drops<br>${card.drops}</h4>` : ''}
              </div>`;
         
          DOMSelectors.parent.insertAdjacentHTML("beforeend", all)
  });
}







async function getData() {
  try {
    const response = await fetch(api);
    if (response.status != 200) {
      throw new Error(response.statusText);
      }
    const data = await response.json();
    const sortid = data.data.sort((a, b) => a.id - b.id);





    let buttons = document.querySelectorAll('.btn');


    buttons.forEach((btn) => {
      btn.addEventListener('click', function (event) {
        event.preventDefault();
        clearfields();
        let type = btn.getAttribute('alt').toLowerCase();
        let newArr = data.data.filter((data) => data.category.toLowerCase() === type);
        insertCards(newArr);
        expand(api);
        toggle(api);
       
      });
    });
    insertCards(sortid);
    expand(api);
  } catch (error) {
    console.log(error, "Uh Oh spagettios");
    document.querySelector(".stuff").textContent = '💀Error 404🤖';
  }
}


getData(api);












async function search(api) {
  try {
    
    const response = await fetch(api);
    if (response.status != 200) {
      throw new Error(response.statusText);
      }
    const data = await response.json();
    DOMSelectors.search.addEventListener('click', function(event) {
      event.preventDefault();
      let input = DOMSelectors.input.value;
      let newArr = data.data.filter((data) => data.name.toLowerCase().includes(input));
      clearfields();
      if (newArr.length > 0) {
        console.log(newArr)
          insertCards(newArr);
        } else {
          document.querySelector("h1").textContent = "Error 🤓🤓🤓"
        }});
  } catch (error) {
    console.error(error);
  }};
search(api);










function expand() {
    DOMSelectors.parent.querySelectorAll('.card').forEach((card) => {
      const clickcard = card.querySelector('.img');
      clickcard.addEventListener('click', function (event) {
        event.preventDefault();
        imgclick(card);
      });
    });

function imgclick(clickcard) {
  DOMSelectors.parent.querySelectorAll('.card').forEach((card) => {
    if (card !== clickcard) {
      card.remove();
    }
  });

  const imgstyle = clickcard.querySelector('.img');
  imgstyle.style.width = '400px';
  imgstyle.style.height = '400px';
  imgstyle.style.display = 'block';
  imgstyle.style.margin = 'auto';
  const zstyle = clickcard.querySelector('.textz');
  zstyle.style.fontSize= '30px';
  const ystyle = clickcard.querySelector('.texty');
  ystyle.style.fontSize= '25px';
  const xstyle = clickcard.querySelector('.textx');
  xstyle.style.fontSize= '25px';
  const dstyle = clickcard.querySelector('.textd');
  dstyle.style.fontSize= '40px';
}};








async function home(api) {
  try {
    const response = await fetch(api);
    if (response.status != 200) {
      throw new Error(response.statusText);
      }
    const data = await response.json();
    const sortid = data.data.sort((a,b) => a.id - b.id);
    DOMSelectors.home.addEventListener('click', function (event) {
      event.preventDefault()
      clearfields();
      insertCards(sortid)
      expand(api);
    });
  } catch {
    document.querySelector("h1").textContent = "Error 🤓🤓🤓";
  }
}
home(api)


async function sort(api) {
  try {
    const response = await fetch(api);
    if (response.status != 200) {
      throw new Error(response.statusText);
      }
    const data = await response.json();
    const sortid = data.data.sort((a,b) => a.id - b.id);
    const sortalp = data.data.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}); 
DOMSelectors.sortid.addEventListener('click', function (event) {
  event.preventDefault()
  clearfields();
  insertCards(sortid)
  expand(api);
DOMSelectors.sortalp.addEventListener('click', function (event) {
    event.preventDefault()
    clearfields();
    insertCards(sortalp)
    expand(api);
})})
} catch {
  document.querySelector("h1").textContent = "Error 🤓🤓🤓";
}
};