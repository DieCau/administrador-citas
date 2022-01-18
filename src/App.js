import React, { useState, useEffect, Fragment } from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita"

function App() {


  // Citas en el Local Storage
  // JSON.parse xq LS solo acepta strings y tengo un array
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  // Si no hay citas iniciales, inicio citasIniciales con un array vacio 
  if(!citasIniciales) {
    citasIniciales = []
  }

  // Arreglo de citas. State inicial de citas = citasIniciales 
  const [citas, setCitas] = useState(citasIniciales);


  // UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    // Si hay citasIniciales (en el State) entonces lo coloco en el LS
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      // Si NO hay citasIniciales entonces coloco un array vacio en el LS 
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])


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
    <Fragment>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              // utilizamos los props y vincular con la función 
              crearCita={ crearCita }
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
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
    </Fragment>
  );
}

export default App;
