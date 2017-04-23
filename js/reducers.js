var initialState = {
  time: 0,
  currentPlanet: "Alpha Invidia",
  planets: {
	  "Alpha Invidia": {
      name: "Alpha Invidia",
	    food: 10,
	    population: ["Romulus", "Remus"],
        imgPath: "assets/green_planet.png",
        flavorText: "Your homeworld. The ocean is home to huge algae colonies, but the reddish deserts support little life."
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

function reducePlanet(planet, action) {
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
    case act.death.type:
      return updateIn(planet, "population",
                      _.filter(planet.population, function(x) {
                        return x !== action.person
                      }))
    default:
      return planet
  }
}

function reducePlanets(planets, action) {
  return _.mapValues(planets, function(planet) {
    return reducePlanet(planet, action)
  })
}

function reducePerson(person, action, global) {
  switch (action.type) {
    case act.death.type:
      return updateIn(person, "died", global.time)
    default:
      return person
  }
}

function reducePeople(people, action, global) {
  return _.mapValues(people, function(person) {
    return reducePerson(person, action, global)
  })
}

function reduceGlobal(state, action) {
  switch (action.type) {
    case act.clockTick.type:
      return updateIn(state, "time", state.time+1)
    default:
      return state
  }
}

function rootReducer(state, action) {
  if (state === undefined) {
    state = initialState
  }
  var general = reduceGlobal(state, action)
  return Object.assign({}, general, {
    planets: reducePlanets(state.planets, action),
    people: reducePeople(state.people, action, state)
  })
}
