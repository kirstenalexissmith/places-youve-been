// User Interface Logic ---------
let traveledTo = new TraveledTo();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedLocation = document.querySelector("input#new-location").value;
  const inputtedLandmarks = document.querySelector("input#new-landmarks").value;
  const inputtedTimeOfYear = document.querySelector("input#new-time-of-year").value;
  const inputtedNotes = document.querySelector("input#new-notes").value;
  let newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);
  traveledTo.addPlace(newPlace);
  console.log(newPlace.places);
}

window.addEventListener("load", function () {
  document.querySelector("form#new-places").addEventListener("submit", handleFormSubmission);
});

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

