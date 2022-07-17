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
            console.log("Empty");
        }    
    let copilotName = document.querySelector("input[name=copilotName]");
    if (copilotName == "") {
            console.log("Empty");
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
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
