import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  
  //API components
  const API_URL = 'http://localhost:6001/plants'

  //useState components
  const [plantData, setPlantData] = useState([<h3>Loading...</h3>]);
  const [forceRefresh, setForceRefresh] = useState(false);

  function refreshEverything() {
    setForceRefresh(true);
  }

  //useEffect components
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setPlantData(data))
  }, [forceRefresh])

  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantData} refresh={refreshEverything}/>
    </div>
  );
}

export default App;
