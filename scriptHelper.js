// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    let pilotName = document.querySelector("input[name=pilotName]");
    if (pilotName == "") {
            alert("Empty");
            return false;
        }    
    let copilotName = document.querySelector("input[name=copilotName]");
    if (copilotName == "") {
            alert("Empty");
            return false;
        }
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    if (isNaN(fuelLevel) == false) {
        console.log("Not a Number");
    } else {
        console.log("Is a Number");
    }
    let cargoMass = document.querySelector("input[name=cargoMass]");
    if (isNaN(cargoMass) == false) {
        console.log("Not a Number");
    } else {
        console.log("Is a Number");
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            alert("existence is pain");
            let pilotName = document.querySelector("input[name=pilotName]");
                console.log(pilotName);
            let copilotName = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoMass = document.querySelector("input[name=cargoMass]");
            if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
                alert("All fields are required!");
                event.preventDefault();
          }
       });
    });
}

async function myFetch() {
    //let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json;
    });
    return listedPlanetsResponse;
   /* listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })*/
   
   // let planetsReturned;

  //  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
   // });

   // return planetsReturned.json();
}

function pickPlanet(planets) {
    let planetNum = Math.floor(Math.random() * planets.length);
    return planets[planetNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
