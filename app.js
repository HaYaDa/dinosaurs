// Create Dino Constructor
class Dino {
  constructor(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
  }
}

// Create Dino Objects
const dinos = [
  new Dino(
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh"
  ),
  new Dino(
    "Tyrannosaurus Rex",
    11905,
    144,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long."
  ),
  new Dino(
    "Anklyosaurus",
    10500,
    55,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "Anklyosaurus survived for approximately 135 million years."
  ),
  new Dino(
    "Brachiosaurus",
    70000,
    372,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991."
  ),
  new Dino(
    "Stegosaurus",
    11600,
    79,
    "herbavor",
    "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines."
  ),
  new Dino(
    "Elasmosaurus",
    16000,
    59,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas."
  ),
  new Dino(
    "Pteranodon",
    44,
    20,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur."
  ),
  new Dino(
    "Pigeon",
    0.5,
    9,
    "herbavor",
    "World Wide",
    "Late Holocene",
    "All birds are living dinosaurs."
  ),
];
/*  const dinos = [
        {
            species: "Triceratops",
            weight: 13000,
            height: 114,
            diet: "herbavor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            species: "Tyrannosaurus Rex",
            weight: 11905,
            height: 144,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "The largest known skull measures in at 5 feet long."
        },
        {
            species: "Anklyosaurus",
            weight: 10500,
            height: 55,
            diet: "herbavor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Anklyosaurus survived for approximately 135 million years."
        },
        {
            species: "Brachiosaurus",
            weight: 70000,
            height: "372",
            diet: "herbavor",
            where: "North America",
            when: "Late Jurasic",
            fact: "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            species: "Stegosaurus",
            weight: 11600,
            height: 79,
            diet: "herbavor",
            where: "North America, Europe, Asia",
            when: "Late Jurasic to Early Cretaceous",
            fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            species: "Elasmosaurus",
            weight: 16000,
            height: 59,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            species: "Pteranodon",
            weight: 44,
            height: 20,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            species: "Pigeon",
            weight: 0.5,
            height: 9,
            diet: "herbavor",
            where: "World Wide",
            when: "Holocene",
            fact: "All birds are living dinosaurs."
        }
    ]; */

// Create Human Object
class Human {
  constructor(name, feet, inches, weight, diet) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
  }
}

// Use IIFE to get human data from form
let humanObject;

(function () {
  let hName = document.getElementById("name").value;
  let hFeet = document.getElementById("feet").value;
  let hInches = document.getElementById("inches").value;
  let hWeight = document.getElementById("weight").value;
  let hDiet = document.getElementById("diet").value;

  humanObject = new Human(
    hName, hFeet, hInches, hWeight, hDiet
  )
})();

// lbs to kg ==> lbs * 0.45359237 kg
// inches to metric ==> inches * 0.0254 m / or 2.54 cm
// feet to metric ==> feet * 0.3048 m / or 30.48 cm
// feet to inches ==> feet * 12 inch
// inches to feet ==> inches * 0.0833333333 foot

// Helper functions for conversion feet/inches
// autocomplete height data with onchange property
convFeet2Inch = () => {
  // get data from form
  let hFeet = document.getElementById("feet").value;
  let hInches = document.getElementById("inches");
  let conv = hFeet * 12;
  console.log("conv = " + conv);
  return (hInches.value = conv);
};

convInch2Feet = () => {
  // get data from form
  let hInches = document.getElementById("inches").value;
  let hFeet = document.getElementById("feet");
  let conv = hInches * (0.0833333333).toFixed(2);
  console.log("conv = " + conv);
  return (hFeet.value = conv);
};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// after recap https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/Object_prototypes
// I decide to create prototype methods for comparing data to our Dino (class) constructor
Dino.prototype.weightComp = function () {
  let hWeight = document.getElementById("weight").value;
  let resultW = Math.round(this.weight / hWeight);

  if (resultW < 1) {
    return `You weigh ${Math.round(hWeight / this.weight)} times more than a ${this.species}...`;
  } else if (resultW > 1) {
    return `${this.species} weighed ${Math.round(this.weight / hWeight)} times more than you...`;
  } else if (this.weight == hWeight) {
    return `You weigh the same as ${this.species}...`;
  }
};

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.heightComp = function () {
  let hHeight = document.getElementById("feet").value;
  let resultH = Math.round(this.height / hHeight);
  console.log(hHeight); 
  console.log(resultH); 

  if (resultH < 1) {
    return `You are ${Math.round(hHeight / this.height)} times taller than a ${this.species}...`;
  } else if (resultH > 1) {
    return `${this.species} was ${Math.round(this.height / hHeight)} times taller than you...`;
  } else if (this.height == hHeight) {
    return `You are the same height as ${this.species}...`;
  }
};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

Dino.prototype.dietComp = function () {
    let hDiet = document.getElementById("diet").value.toLowerCase();
    let diet = ( hDiet === this.diet ) ? `You are ${hDiet} & ${this.species} was ${this.diet} too...` : `You are a ${hDiet}, but ${this.species} was a ${this.diet}`; 
    return diet; 
}

// Create function for generate random number for the tiles
randomFact = () =>{
  return Math.floor(Math.random() * (7 - 0 + 1)) + 0;
}

 //

// According the Udacity Project Requirements: 
// -The dino fact displayed should be chosen randomFact
// -The bird (pigeon) tile should display static fact information
// Ternary: when species is pigeon -> display fact, else random choose random
//let randomFact = dino



// Generate Tiles for each Dino in Array
var tiles = [];  
tilesFunction = () => {
  for (dinosIndex = 0; dinosIndex < 8; dinosIndex++) {
  // create elements for the tiles & grab elements
  
  const tile = document.createElement("div");
  const tileHeadline = document.createElement("h3");
  const tileImg = document.createElement("img");
  const tilePara = document.createElement("p");

  let randomize = dinos[dinosIndex].species === "Pigeon" ? 5 : randomFact(); 

  switch (randomize) {
    case 0:
      fact = dinos[dinosIndex].weightComp();
      break;
    case 1:
      fact = dinos[dinosIndex].heightComp();
      break;
    case 2:
      fact = dinos[dinosIndex].dietComp(); 
      break;
    case 3: 
      fact = `The ${dinos[dinosIndex].species} lived in ${dinos[dinosIndex].where}`;
      break;
    case 4:
      fact = `The ${dinos[dinosIndex].species} lived in the ${dinos[dinosIndex].when}`;
      break;
    case 5: 
      fact = dinos[dinosIndex].fact
  }

  // create content for the elements in the tiles
  tileHeadline.innerHTML = dinos[dinosIndex].species;
  tileImg.setAttribute("src", `./images/${dinosIndex}.png`);
  tilePara.innerText = fact; 

  // adding pre-defined css-classes to created tile elements
  tile.classList.add("grid-item");
  // appending elements to the tiles
  tile.appendChild(tileHeadline);
  tile.appendChild(tileImg);
  tile.appendChild(tilePara); 
  console.log(tile)
  document.getElementById('grid').appendChild(tile); 
  }
  
}


// On button click, prepare and display infographic
submitHandler = () => {
  // Remove form from screen
  document.getElementById("dino-compare").classList.add("hide-form"); 
  // Add tiles to DOM (invoke the function for creating and adding tiles)
  tilesFunction(); 
  // creating human tile elements 
  let grid = document.getElementById("grid");
  let hTile = document.createElement("div"); 
  let hHeader = document.createElement('h3');
  let hImage = document.createElement("img"); 
  
  // create content of elements in human tile
  hHeader.innerHTML = humanObject.name; 
  hImage.setAttribute("src", `./images/human.png`);
  hTile.classList.add("grid-item"); 
  // appending elements to human tile
  hTile.appendChild(hHeader);
  hTile.appendChild(hImage);
  // append human tile to the grid
  console.log(hTile); 
  grid.appendChild(hTile); 
}







































































/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/

//import dinoData from './dino.json';
// works: accessing json-file and the specific content
/* const dinoData = fetch("./dino.json")
        .then(response => {
        return response.json();
        })
        .then(data => console.log(data));

console.log(dinoData.data) */

// Chech this loop - works good for now
/* for (let i = 0; i < 50; i++) {
  console.log(`${i} run = `+ randomFact());
}  */

/*
TODO: CHECK THIS LATER; both approuches are not working correctly

for loop: check how to access information in a promise
async function: check how to access the array/object

// Create Dino Objects
    //const dino1 = new Dino('Triceratops', 13000, 114, 'herbavor', 'North America', 'Late Cretaceous', 'First discovered in 1889 by Othniel Charles Marsh');
    
 /*    for (let i = 0; i < 8; i++) {
        this['dino'+i] = fetch("./dino.json")
        .then(response => {
        return response.json();
        })
        .then(data => new Dino(data.Dinos[i].species, data.Dinos[i].weight, data.Dinos[i].height, data.Dinos[i].diet, data.Dinos[i].where, data.Dinos[i].when, data.Dinos[i].fact))  
    } */
/* var dinoData = []; 
    (async () => { 
        const data = await (await fetch("./dino.json")).json();
        dinoData.push(data); 

        console.log(data.Dinos[0])
    })(); 
    console.log('dinoData:'); 
    console.log(dinoData); 

    dinoData();  
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
