import React, { useState } from 'react'

const Formulario = () => {

    const [cita, setCita] = useState({
      mascota: '', 
      propietario:'', 
      fecha:'', 
      hora:'',
      sintomas:''
    })

    const [error, setError] = useState(false)

    //Funcion que se ejecuta cada que el user escribe en un input
    const handleChange = e => {
      setCita({
        ...cita,
        [e.target.name]: e.target.value
      })
    }

    // EXtraer los valores con Destructuring
    const { mascota, propietario, fecha, hora, sintomas } = cita;


    // Cuando el user presiona button "Agregar Cita"
    const submitCita = e => {
      e.preventDefault();

      // Validar
      if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
        //Usando un 2do State actualizamos el valor de error  
        setError(true)
          return;
      } 

      // Asignar un ID
      
      
      // Crear la cita 
      
      
      
      // Reiniciar el Form
    }


    return (
        <>
          <h2>Crear Cita</h2>

          { error ? <p className='alert-error'>Todos los campos son obligatorios!</p>  : null}
          
          <form
            onSubmit={submitCita} 
          >
              <label>Nombre Mascota</label>
              <input 
                type="text"
                name='mascota'
                className='u-full-width'
                placeholder='Nombre Mascota'
                onChange={handleChange} 
                value= {mascota} 
              />
              <label>Nombre Dueño</label>
              <input 
                type="text"
                name='propietario'
                className='u-full-width'
                placeholder='Nombre Dueño de la Mascota'
                onChange={handleChange}
                value= {propietario} 
              />
              <label>Fecha</label>
              <input 
                type="date"
                name='fecha'
                className='u-full-width'
                onChange={handleChange}
                value= {fecha}
              />
              <label>Hora</label>
              <input 
                type="time"
                name='hora'
                className='u-full-width'
                onChange={handleChange}
                value= {hora}
              />
              <label>Síntomas</label>
              <textarea 
                className='u-full-width'
                name="sintomas" 
                onChange={handleChange}
                value= {sintomas}
              ></textarea>

              <button
                type='submit'
                className='u-full-width button-primary'
              >Agregar Cita</button>
          </form>  
        </>
    )
}

export default Formulario
