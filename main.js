const cities = [
    {
      city: "London",
      code: "UK",
      population: 11504632,
      foodRanking: 4
    },
    {
      city: "Manchester",
      code: "UK",
      population: 4280424,
      foodRanking: 5
    },
    {
      city: "Paris",
      code: "FR",
      population: 10830024,
      foodRanking: 9
    },
    {
      city: "Nice",
      code: "FR",
      population: 4250024,
      foodRanking: 10
    },
    {
      city: "Berlin",
      code: "DE",
      population: 8250024,
      foodRanking: 8
    },
    {
      city: "Munich",
      code: "DE",
      population: 5250050,
      foodRanking: 6
    }
  ];
const allCities = document.querySelector("#allCities");
const citiesForFoodies = document.querySelector("#citiesForFoodies");
const sortedByPopulation = document.querySelector("#sortedByPopulation");

cities.forEach((object) => {
    let listItem = document.createElement("li");
    listItem.innerText = object.city;
    if(object.code === "FR"){
        listItem.style.color = "blue";
    }
    else if(object.code === "UK"){
        listItem.style.color = "red";
    }
    allCities.appendChild(listItem);
})

let rankedFoodCities = cities.filter((object) => {
    if (object.foodRanking >= 8){
        return object;
    }
})

rankedFoodCities.sort((a,b) => b.foodRanking - a.foodRanking);
console.log(rankedFoodCities);

rankedFoodCities.forEach((object) => {
    let listItem = document.createElement("li");
    listItem.innerText = object.city;
    citiesForFoodies.appendChild(listItem);
})

let citiesByPopulation = cities.sort((a,b) => b.population - a.population);
citiesByPopulation.forEach((object) => {
    let listItem = document.createElement("li");
    listItem.innerText = object.city;
    sortedByPopulation.appendChild(listItem);
})