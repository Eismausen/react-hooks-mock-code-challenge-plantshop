import React, {useState} from "react";

function PlantCard({plant, refresh}) {
  
  //useState components
  const [inStock, setInStock] = useState(true);

  const {id, plantName, image, price} = plant;
  console.log(plantName);
  
  function handleDelete() {
    const API_URL = 'http://localhost:6001/plants/'
    const PLANT_ID = id;
    const FULL_API_URL = `${API_URL}${PLANT_ID}`;
    const DELETE_config = {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
    }
    fetch(FULL_API_URL, DELETE_config)
    .then(refresh);

  }
  
  return (
    <li className="card">
      <img src={image} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => setInStock(state => !state)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(state => !state)}>Out of Stock</button>
      )}
      <button onClick={handleDelete} name="delete">DELETE</button>
      
    </li>
  );
}

export default PlantCard;
