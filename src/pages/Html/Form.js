import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
export default function Form() {

    const detalles={
        primero:{
            title: "Form",
            defBreve:"Los formularios son elementos muy importantes, de una complejidad superior al resto de tags. Mostraremos elementos que nos ayudarán a crear un buen formulario.",
            arrayCodigo:[
                {
                    cod:`<form name="feedback" onSubmit={sendEmail}>
    <fieldset>
        <legend>Formulario de satisfacción</legend>
        <input
            type="text" 
            placeholder="nombre"
            value={valueName}
            onChange={handleChangeName}
        />
        <input 
            type="email"
            placeholder="tuemail@mail.com"
            value={valueEmail}
            onChange={handleChangeEmail}
        />
        <textarea 
            placeholder="Máximo de 500 caracteres" 
            value={valueTextArea}
            onChange={handleChangeTextArea}
        />
        <input 
            type="submit"
            value="Enviar"
        />
    </fieldset>
</form>`,
                    text: "Ayuda mucho para cumplimentar un formulario de busqueda con autocompletar"
                },
                {
                    cod:`<form>`,
                    text: "Controla el onSubmit, el evento principal para lo que el formulario existe"
                },
                {
                    cod:`<fieldset>`,
                    text: "Elemento poco común que ayuda a separar y dar formato al formulario del resto del html"
                },
                {
                    cod:`<legend>`,
                    text: "Elemento poco común, que muestra el título del formulario."
                },
                {
                    cod:`<input> <textarea>`,
                    text: "Ya hablamos de ellos antes."
                }
            ],
            url:"https://www.htmlquick.com/es/reference/tags/form.html"
        },
        segundo:{
            title: "Select",
            defBreve:"Describamos el select en el form debe tener atributos ... ver link al final de los apuntes",
            arrayCodigo:[
                {
                    cod:`<select className="language" onChange={handleChange} defaultValue="spanish">
    <option disabled>Select Language</option>
    <option value="spanish">español</option>
    <option value="english" >english</option>
    <option value="deutsch">deutsch</option>
</select>`,
                    text: "Si llegase a estar dentro de un formulario, deben tener el mismo atributo name para que el formulario asuma el evento onSubmit con los valores del select."
                }
            ],
            url:"https://www.htmlquick.com/es/reference/tags/select.html"
        },
        tercero:{
            title: "Datalist",
            defBreve:"Datalist es un elemento espectacular si añades la funcionalidad de autocompletar a tu input",
            arrayCodigo:[
                {
                    cod:`<datalist id="pokemons" form="buscar_pokemon" name="filtrodebusqueda" >
    <option   onClick={handleClinckOption} >
        opción 1
    </option>
    <option   onClick={handleClinckOption} >
        opción 2
    </option>
    <option   onClick={handleClinckOption} >
        opción 3
    </option>
</datalist>`,
                    text: "Además de la funcionalidad de autocompletar, nos permite navegar desde el input al datalist con el teclado."
                }
            ],
            url:"https://www.htmlquick.com/es/reference/tags/datalist.html"
        }
    }

    return (
        <div className="cuerpo">
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                language="html"
                url={detalles.primero.url}
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                language="html"
                url={detalles.segundo.url}
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                language="html"
                url={detalles.tercero.url}
            />
         </div>
    )
}
