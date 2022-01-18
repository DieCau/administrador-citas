import React, { useState, useEffect } from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita"

function App() {

  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  // UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    console.log('listo')
  }, [])

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    setCitas([...citas, cita ])
  }


  // Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita=> cita.id !== id )
    // nuevasCitas es un nuevo arreglo y actualizamos el state
    setCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'


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
            <h2>{ titulo }</h2>
            {
              citas.map(cita =>(
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
