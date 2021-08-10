import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function AJAX() {
    
    const detalles={
        primero:{
            title: "AJAX the basics application/json",
            defBreve:"Crearemos una APP con puro JavaScript (no libraries, no imports, no fetching, no HTTP). La razón es puramente didáctica, de hecho, este método que estoy por explicar es usado dentro de mi servidor para llamar a mi propio servidor. Aquí hay otra clave para crear llamadas exitosas a cualquier API.",
            arrayCodigo:[
                {
                    cod:`//interface for making API calls
//parametros tipicos headers, path, method, queryStringObject, payload, callback(statusCode, responseData)
app.client.request = function (
  headers,
  path,
  method,
  queryStringObject,
  payload,
  callback
) {
  //CHECKER
  const validMethods = ["POST", "GET", "PUT", "DELETE"];
  //Set defaults
  headers = typeof headers == "object" && headers !== null ? headers : {};
  path = typeof path == "string" ? path : "/";
  method =
    typeof method == "string" && validMethods.includes(method.toUpperCase())
      ? method.toUpperCase()
      : "GET";

  queryStringObject =
    typeof queryStringObject == "object" && queryStringObject !== null
      ? queryStringObject
      : {};
  payload = typeof payload == "object" && payload !== null ? payload : {};
  callback = typeof callback == "function" ? callback : false;

  //For each queryString parameter sent, add it to the path
  let requestUrl = path + "?";
  let counter = 0;
  for (const queryKey in queryStringObject) {
    if (Object.hasOwnProperty.call(queryStringObject, queryKey)) {
      counter++;
      //If at least on query string parameter has been passed, prepend new ones with the &
      if (counter > 1) {
        requestUrl += "&";
      }
      // Add the key value
      requestUrl += queryKey + "=" + queryStringObject[queryKey];
    }
  }

  //Form http request as a JSON type
  const xhr = new XMLHttpRequest();
  xhr.open(method, requestUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  //For each header sent, add it to the request
  for (const key in headers) {
    if (Object.hasOwnProperty.call(headers, key)) {
      xhr.setRequestHeader(key, headers[key]);
    }
  }

  //If there is a current session token set, add that as a header
  if (app.config.sessionToken) {
    xhr.setRequestHeader("token", app.config.sessionToken.id);
  }

  //When the request comes back, handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const statuCode = xhr.status;
      const responseReturned = xhr.responseText;

      //callback if requested
      if (callback) {
        try {
          const parsedResponse = JSON.parse(responseReturned);
          callback(statuCode, parsedResponse);
        } catch (error) {
          callback(statuCode, error);
        }
      }
    }
  };
  // Send the payload as json
  const payloadString = JSON.stringify(payload);
  xhr.send(payloadString);
};
`,
                    text: "Llamada hecha desde la nodejs master-class. Vamos a destripar todo ese código en varios segmentos. I preparando los datos, así veremos incluso que contrato deben cumplir los parámetros de entrada. II Inicializar XMLHTTPREQUEST y ultimos parametros antes del fetch, III Aquí definimos la lógica de que hacer cuando recibamos la respuesta, por ejemplo el Callback, IV El envío de los datos.."
                },{
                    cod:`{
  //CHECKER
  const validMethods = ["POST", "GET", "PUT", "DELETE"];
  //Set defaults
  
  headers = typeof headers == "object" && headers !== null ? headers : {};
  
  path = typeof path == "string" ? path : "/";
  
  method =
    typeof method == "string" && validMethods.includes(method.toUpperCase())
      ? method.toUpperCase()
      : "GET";

  queryStringObject =
    typeof queryStringObject == "object" && queryStringObject !== null
      ? queryStringObject
      : {};
  
  payload = typeof payload == "object" && payload !== null ? payload : {};
  
  callback = typeof callback == "function" ? callback : false;

  //For each queryString parameter sent, add it to the path
  let requestUrl = path + "?";
  let counter = 0;
  for (const queryKey in queryStringObject) {
    if (Object.hasOwnProperty.call(queryStringObject, queryKey)) {
      counter++;
      //If at least on query string parameter has been passed, prepend new ones with the &
      if (counter > 1) {
        requestUrl += "&";
      }
      // Add the key value
      requestUrl += queryKey + "=" + queryStringObject[queryKey];
    }
  }`,
                    text:"Los datos de ENTRADA son: Los Headers es un objeto, path es un path relativo, el method POST, GET, PUT, DELETE, queryStringObject es un object y el payload es un object. PERO LOS DATOS LOS DIGERIMOS para pasarlos de al nucleo de nuestra función. En realidad el único dato que digerimos de verdad es el queryStringObject, que debemos juntarlos al path para que se parezca a una petición de un web browser /users?email=zitrojj@gmail.com&token=123456... etc. "
                },{
                    cod:`//Form http request as a JSON type
  const xhr = new XMLHttpRequest();
  xhr.open(method, requestUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  //For each header sent, add it to the request
  for (const key in headers) {
    if (Object.hasOwnProperty.call(headers, key)) {
      xhr.setRequestHeader(key, headers[key]);
    }
  }

  //If there is a current session token set, add that as a header
  if (app.config.sessionToken) {
    xhr.setRequestHeader("token", app.config.sessionToken.id);
  }
`,
                    text:"Esta es la parte II, donde iniciamos realmente la petición AJAX. una vez se inicializa, ocurren al menos 3 EVENTS importantes. 1, xhr.open. Este es el momento para settear todos los datos que hemos preparado. method, requestUrl, true (se refiere a que es asynchronus), luego viene el setter de los headers, seteamos los headers de las coockies, el Content-Type, y todos los datos dentro del objeto headers que entró por parámetros."
                },{
                    cod:` //When the request comes back, handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const statuCode = xhr.status;
      const responseReturned = xhr.responseText;

      //callback if requested
      if (callback) {
        try {
          const parsedResponse = JSON.parse(responseReturned);
          callback(statuCode, parsedResponse);
        } catch (error) {
          callback(statuCode, error);
        }
      }
    }
  };`,
                    text:"III. Es lógico, si lo piensas un instante, que definas que vas a hacer con los datos de la respuesta, antes de enviar los datos. Cuando el ciclo haya terminado, si introdujimos un callback, intenta parsear la respuesta en json, y si esto genera una excepción, maneja el error."
                },{
                    cod:`  // Send the payload as json
  const payloadString = JSON.stringify(payload);
  xhr.send(payloadString);`,
                    text:"Sinceramente, no se que hace aquí la línea del stringify. Pudo definirse más arriba? eso creo. Pero lo que si está claro es que ya habíamos pasado path, queries, headers, ahora solo queda el payload o req.body. Sería interesante ver más peticiones AJAX de otros content-types "
                }
            ]            
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="10/08/2021"/>
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
