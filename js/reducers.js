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

function reduceGlobal(state, action) {
  if (state === undefined) {
    state = initialState
  }
  switch (action.type) {
    case act.clockTick.type:
      return Object.assign({}, state, {
        time: state.time+1,
        planets: state.planets.map((p) => reducePlanet(p, action))
      })
    default:
      return state
  }
}

