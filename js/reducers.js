var initialState = {
  time: 0,
  currentPlanet: "Alpha Invidia",
  planets: {
	  "Alpha Invidia": {
      name: "Alpha Invidia",
	    food: 10,
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
      var victims = _.sampleSize(planet.population, -food)
      for (var vic of victims) {
        action.asyncDispatch(act.death.make(vic, "starvation"))
      }
      return Object.assign({}, planet, {
        food: Math.max(food, 0)
      })
    default:
      return planet
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
        planets: _.mapValues(state.planets, function(p) {
          return reducePlanet(state, p, action)
        })
      })
    case act.death.type:
      console.log(action.person + " died of " + action.cause + ", but death is not yet implemented")
    default:
      return state
  }
}
