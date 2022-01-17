import React, { useState } from 'react';
import Formulario from "./components/Formulario";

function App() {

  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    console.log(cita);
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              // utilizamos los props y vincular con la función 
              crearCita={ crearCita }
            />
          </div>
          <div className="one-half-column">
            2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
