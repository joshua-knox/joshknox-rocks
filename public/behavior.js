// get the URL
// ?name=Tucker+Knox&breed=Labradoodle&spade=on
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// get the value for ?name= in the URL
const name = urlParams.get('name')

// get the value for ?breed= in the URL
const breed = urlParams.get('breed')

// get the value for ?spade= in the URL
const spade = urlParams.get('spade')

// get the value for ?sex= in the URL
const sex = urlParams.get('sex')

// get the value for ?weight= in the URL
const weight = urlParams.get('weight')

// get the name element
const nameElement = document.querySelector("[id=result-name]");

// get the breed element
const breedElement = document.querySelector("[id=result-breed]");

// get the spade element
const spadeElement = document.querySelector("[id=result-spade]");

// get the sex element
const sexElement = document.querySelector("[id=result-sex]");

// get the weight element
const weightElement = document.querySelector("[id=result-weight]");

// get the headline element
const headlineElement = document.querySelector("[id=result-headline]");

// make the headline element say the name
headlineElement.innerText = name

// make the name element say the name
nameElement.innerText = name

// make the breed element say the breed
breedElement.innerText = breed

// make the spade element say the spade
spadeElement.innerText = spade

// make the sex element say the sex
sexElement.innerText = sex 

// make the weight element say the weight
weightElement.innerText = weight 
