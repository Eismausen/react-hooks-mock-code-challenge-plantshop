import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchBy, refresh}) {
  let allPlants = [...plants];
  //let filteredPlants = allPlants.filter(plant => plant.plantName.includes(searchBy));
  // WHY IS INCLUDES NOT WORKING?!?!?!
  const plantsToRender = plants.map(plant => <PlantCard key={plant.id + plant.plantName + plant.price} plant={plant} refresh={refresh}/>)
  return (
    <ul className="cards">{plantsToRender}</ul>
  );
}

export default PlantList;
