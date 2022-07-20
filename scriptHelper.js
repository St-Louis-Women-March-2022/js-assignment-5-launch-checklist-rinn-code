// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let destination = document.getElementById("missionTarget");
        destination.innerHTML = 
                `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if(testInput === "") {
       return "Empty"; 
    } else if(isNaN(Number(testInput)) == true){
        return "Not a Number";
    } else {//if (isNaN(testInput) == false)
        return "Is a Number";
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
    let listedPlanetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json;
    });
    return listedPlanetsResponse;
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
