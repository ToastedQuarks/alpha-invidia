/* Holds the static content for the tree */
var technologies = {
  "tech-settle": {
    name: "Settle",
    description: "Find a place to call our own.",
    cost: 0
  },
  "tech-farming": {
    name: "Farming",
    description: "Set up a steady supply of food.",
    cost: 0
  },
  "tech-tools": {
    name: "Tools",
    description: "Make some tools to speed up resource gathering.",
    cost: 0
  },
  "tech-weapons": {
    name: "Weapons",
    description: "Put together a way to defend your settlement.",
    cost: 0
  },
  "tech-rockets": {
    name: "Rockets",
    description: "Can't go to space without these!",
    cost: 0
  }
}

function clearInfo() {
  var infoDiv = document.getElementById("treeDetail");
  while(infoDiv.hasChildNodes()) {
    infoDiv.removeChild(infoDiv.firstChild);
  }
}

/* Displays some info for tech tree buttons */
function displayInfo(buttonID) {
  var thisTech = technologies[buttonID]
  var infoDiv = document.getElementById("treeDetail");
  var title = document.createElement("h3");
  title.textContent = thisTech.name;
  var detail = document.createElement("p");
  detail.textContent = thisTech.description;
  var cost = document.createElement("p");
  cost.textContent = "Cost: " + thisTech.cost;
  var buyButton = document.createElement("button");
  buyButton.className = "actionButton";
  buyButton.textContent = "Research";
  
  if (infoDiv.hasChildNodes()){
    clearInfo();
  }
  infoDiv.appendChild(title);
  infoDiv.appendChild(detail);
  infoDiv.appendChild(cost);
  infoDiv.appendChild(buyButton);
}