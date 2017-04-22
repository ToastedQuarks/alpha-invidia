var initialState = {
  time: 0,
  currentPlanet: "Alpha Invidia",
  planets: {
	  "Alpha Invidia": {
      name: "Alpha Invidia",
	    food: 100,
	    population: ["Romulus", "Remus"]
	  }
  },
  people: {
    "Romulus": {
      name: "Romulus",
      born: 0
    },
    "Remus": {
      name: "Remus",
      born: 0
    }
  }
}

function reducePlanet(globalState, planet, action) {
  if (planet === undefined) {
    throw "reducePlanets is not a root reducer! It requires an explicit state"
  }
  switch (action.type) {
    case act.clockTick.type:
      var food = planet.food - planet.population.length
      for (var i = 0; i > food; i--) {
      }
  }
}
  

function reduceGlobal(state, action) {
  if (state === undefined) {
    state = initialState
  }
  switch (action.type) {
    case act.clockTick.type:
      return Object.assign({}, state, {
        time: state.time+1,
        planets: state.planets.map(function(p) {reducePlanet(p, action)})
      })
    default:
      return state
  }
}

