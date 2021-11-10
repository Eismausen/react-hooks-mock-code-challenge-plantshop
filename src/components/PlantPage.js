import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, refresh}) {
  
  //state components
  const [searchBy, setSearchBy] = useState('');

  //state helper
  function changeHandler(e) {
    setSearchBy(e.target.value);
  }

  return (
    <main>
      <NewPlantForm refresh={refresh}/>
      <Search searchBy={searchBy} changeHandler={changeHandler}/>
      <PlantList plants={plants} searchBy={searchBy} refresh={refresh}/>
    </main>
  );
}

export default PlantPage;
