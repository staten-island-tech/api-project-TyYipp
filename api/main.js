import './style.css'


const URL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/all';
async function getData(URL) {
  try {
//requesitong a response REST API's
      const response = await fetch(URL)
      if (response.status != 200) {
      throw new Error(response.statusText);
      }
      //convert response to json
      const data = await response.json();
      document.querySelector("h1").textContent = data.content;
  } catch (error) {
      console.log(error, "Uh Oh spagettios")
      document.querySelector("h1").textContent = '💀Error 404🤖';
  }
}
getData(URL);