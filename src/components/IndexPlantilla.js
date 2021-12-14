
import React from 'react'
import 'App.css';

export default function IndexPlantilla({tema, link}) {
  return (
      <h1>
        Apuntes del tutorial de {tema}
        <p><a href={link} target="_blank" rel="noreferrer">Link del curso.</a></p>
      </h1>
      
  )
}
