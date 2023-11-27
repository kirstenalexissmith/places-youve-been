//Business Logic ---------
function TraveledTo() {
  this.places = {};
  this.currentId = 0;
}

TraveledTo.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

TraveledTo.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}

TraveledTo.prototype.findPlace = function (id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
}



function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes
}
Place.prototype.locationName = function () {
  return this.location;
};

// User Interface Logic ---------
let traveledTo = new TraveledTo();

function listPlaces(displayTraveledTo) {
  let traveledToDiv = document.querySelector("div#traveled-to");
  traveledToDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(displayTraveledTo.places).forEach(function (key) {
    const place = displayTraveledTo.findPlace(key);
    const li = document.createElement("li");
    li.append(place.locationName());
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  traveledToDiv.append(ul);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedLocation = document.querySelector("input#new-location").value;
  const inputtedLandmarks = document.querySelector("input#new-landmarks").value;
  const inputtedTimeOfYear = document.querySelector("input#new-time-of-year").value;
  const inputtedNotes = document.querySelector("input#new-notes").value;
  let newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);
  traveledTo.addPlace(newPlace);
  listPlaces(traveledTo);
}

window.addEventListener("load", function () {
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
});
