const Traveller = function(journeys) {
  this.journeys = journeys;
};


Traveller.prototype.getJourneyStartLocations = function() {
    const result = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return result;
};

Traveller.prototype.getModesOfTransport = function () {
  // I'm using .map beacause I want to return a NEW array with the elements I'd like to pull.
  return this.journeys.map((journey) => {
    return journey.transport;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, distanceTravelled) => {
    return total += distanceTravelled.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
// find an array of transports
this.journeys.getModesOfTransport( () => {
  // loop over the unique elements
  let find_unique = new Set(this.journeys.getModesOfTransport())
})

// return array with unique elements
return find_unique;
};


module.exports = Traveller;
