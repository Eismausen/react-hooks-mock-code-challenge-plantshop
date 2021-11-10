import React, {useState} from "react";


function NewPlantForm({refresh}) {
  
  //useState components
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  });
  
  //Controlled-form setters & helpers
  function formChangeHandler(e) {
    const key = e.target.name;
    const val = e.target.value;
    
    setFormData({...formData, [key]: val});
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    const API_URL = 'http://localhost:6001/plants';
    const POSTconfig = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData),
    }
    console.log('Ran through formSubmitHandler');
    fetch(API_URL, POSTconfig)
    .then(() => setFormData({
      name: '',
      image: '',
      price: '',
    }))
    .then(refresh);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onChange={formChangeHandler} onSubmit={formSubmitHandler}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
