for (let i = 0; i < 8; i++) {
    this['dino'+i] = fetch("./dino.json")
    .then(response => {
    return response.json();
    })
    .then(data => new Dino(data.Dinos[i].species, data.Dinos[i].weight, data.Dinos[i].height, data.Dinos[i].diet, data.Dinos[i].where, data.Dinos[i].when, data.Dinos[i].fact))  
    
}

async function testDino(){
    let result = await fetch("./dino.json")
        .then(response => {
            return response.json();
        }); 
    console.log(result)
}

for (let i = 0; i < 8; i++) {
    testDino();
}