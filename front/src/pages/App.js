import { useState, useEffect } from "react";
import "./App.css";
import { createAstronaut, editAstronaut, getAllAstronauts } from "../api/astronautsApi";
import { AddAstronaut } from "../components/AddAstronaut/AddAstronaut";
import { AstronautsList } from "../components/AstronautsList/AstronautsList";
import { EditAstronautForm } from "../components/EditAstronautForm/EditAstronautForm";

function App() {
  const [astronauts, setAstronauts] = useState([]);
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const [formEditData, setFormEditData] = useState({ firstName: "", lastName: "" });

  const [success, setSuccess] = useState(false);

  const loadAstronauts = async () => {
    const fetchedAstronauts = await getAllAstronauts();
    setAstronauts(fetchedAstronauts);
    setSuccess(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAstronaut(formData);
    setSuccess(true);
  };

  const handleEditClick = (astronaut) => {
    setFormEditData({ ...astronaut });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormEditData({ ...formEditData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editAstronaut(formEditData);
    setSuccess(true);
  };

  useEffect(() => {
    loadAstronauts();
  }, [success]);

  return (
    <div className="App">
      <h2>Add an astronaut</h2>
      <div>
        <AddAstronaut handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>

      <h2>Astronauts list</h2>
      <div>
        <AstronautsList astronauts={astronauts} handleEditClick={handleEditClick} />
      </div>

      <div>
        <h2>Edit an astronaut</h2>
        <div>
          <EditAstronautForm
            formEditData={formEditData}
            handleEditChange={handleEditChange}
            handleEditSubmit={handleEditSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
