let url = `https://bobsburgers-api.herokuapp.com/characters/${character}`
let name = "name"
let image = "image"
let gender = "gender"
let hairColor = "hairColor"
let occupation = "occupation"
let firstEpisode = "firstEpisode"
let voicedBy = "voicedBy"
let wikiurl = "wikiurl" 

const characterButton = document.querySelector(`characterButton`)
const burgerButton = document.querySelector('burgerButton')
const belcherFamilyButton = document.querySelector('belcherFamilyButton')

//"YOU ARE" character

#characterButton.addEventListener(`click` async() => {})

function characterButton(){
    
    HTMLButtonElement("characterButton", onclick)
    
    document.getElementById('characterButton').classList.add('character');
    document.getElementById('burgerButton').classList.remove('menu');
    document.getElementById('belcherFamilyButton').classList.remove('character2');
    
    let character = Math.floor(Math.random() * 333);
    let characterURL = "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${character}"; 

    let response = await axios.get(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${character}`)
    console.log(response)


    var xhr = new XMLHttpRequest();
    xhr.open("GET", characterURL);

    xhr.setRequestHeader("Accept", "*/*");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
   }};

xhr.send();
  }

  //Menu

  #burgerButton.addEventListener(`click` async() => {})
  
  function burgerButton(){
    HTMLButtonElement("burgerButton", onclick)
    document.getElementById('burgerButton').classList.add('menu');
    document.getElementById('characterButton').classList.remove('character');
    document.getElementById('belcherFamilyButton').classList.remove('character2'); 

    let burgerOfTheDay = Math.floor(Math.random() * 332);
    let burgerOfTheDayURL = "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${burgerOfTheDay}";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", burgerOfTheDayURL);

    xhr.setRequestHeader("Accept", "*/*");

    xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
   }};

xhr.send();
  }

  //"SERVED BY" character

  #belcherFamilyButton.addEventListener(`click` async() => {})
  
  function belcherFamilyButton(){
    HTMLButtonElement("belcherFamilyButton", onclick)
    document.getElementById('belcherFamilyButton').classList.add('character2');
    document.getElementById('burgerButton').classList.remove('menu');
    document.getElementById('characterButton').classList.remove('character'); 

    let belcherFamily = Math.floor(Math.random() * 162);
    let belcherFamilyURL = "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${belcherFamily}"

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Accept", "*/*");

    xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
   }};

xhr.send();
  }
    document.getElementById('characterButton').classList.remove('character');
    document.getElementById('burgerButton').classList.remove('menu');
    document.getElementById('belcherFamilyButton').classList.remove('character2');
  }

