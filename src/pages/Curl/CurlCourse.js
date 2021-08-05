import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function CurlCourse() {
    
    const detalles={
        primero:{
            title: "Curl with Daniel Stenberg.",
            defBreve:"Daniel Stenberg es el creador de Curl. Veamos que aprendemos de él. Su definición es: Es una herramienta de línea de comandos y una librería para transferir datos usando protocolos de internet. En este curso solo veremos HTTP(S). Lo que más me gusta de curl es que tiene un comportamiento minimalista, solo hace lo que le piden y puede activar más acciones o desactivarlas una por una cuando se le pide. Por qué es esto algo bueno? La documentación que deben incluir las empresas para soportar curl, es la que en mi opinión es la mejor detallada. Hablamos de control total de la comunicación en las llamadas a API's.",
            arrayCodigo:[
                {
                    cod:"curl -s",
                    text: "Options pueden ser largas o cortos, muchas tienen un shortcut pero no todas las tienen. En este caso el -s corresponde a --silent en su versión larga."
                },{
                    cod:`// HTTP GET
curl example.com`,
                    text:"Con el prefijo curl y un hostname o un url. Y recibimos el body de la respuesta. Pero también podemos ver los headers que nos envían. Cómo?"
                },{
                    cod:`// HTTP GET Con HEADERS
curl -i example.com`,
                    text:"Así vemos los headers, y el body. Pero ¿y si el body llega todo desordenado con un montón de datos? por ejemplo un json."
                },{
                    cod:`// HTTP GET parsing the body as a json
curl example.com | jq`,
                    text:"Así formateamos la respuesta body que esperamos en json. Y ¿si sólo queremos los headers sin el body?"
                },{
                    cod:`// HTTP GET solo headers
curl -I example.com`,
                    text:"Se usa la opción -I en mayúscula. Un ejemplo de que curl solo hace lo que le piden y no hace más, veamos un get a un redirect."
                },{
                    cod:`// HTTP GET a un redirect con la opción -I
curl -I example.com/redirected`,
                    text:"En el header podremos ver que esa petición nos quiere redirigir a otro path pero como solo pedimos el header, no sigue ese path. Si quieres seguir la redirección, tendrás que decirselo a curl. ¿Cómo?"
                },{
                    cod:`// HTTP GET only headers and follow the redirections all of them unless it loops
curl -I -L example.com/redirected`,
                    text:"Veremos la response 302 y veremos otra response que es la de donde nos redireccionó. ¿Sabías que curl soporta varias llamadas englobadas?"
                },{
                    cod:`// HTTP GET URL globbing
curl example.com/[1-9].html`,
                    text:"[a-z] or [01-99] Estas también son soportadas por curl. [1-9:2] De 2 en 2, o [a-z:3] este último sería paginando de 3 en 3 llamadas. Pero si son tantas llamadas, ¿Cómo vamos a leerlas todas? Mira este truco..."
                },{
                    cod:`// HTTP GET globbing and saving in files
curl example.com/[01-99].html -o save_#1.html`,
                    text:"Con el # consideramos un parámetro que cambia por cada llamada y así guardamos 99 archivos con nombres diferentes y cada uno bien etiquetado. Vease otro ejemplo que funcionaria."
                },{
                    cod:`// HTTP GET globbing and saving into files
curl example.com/{ham, cheese, pineapple}.jpg -o hawaii_#1.jpg`,
                    text:"Se guardaría las 3 imagenes con nombres hawaii_ham.jpg y así sucesivamente. Como las llamadas se vuelven incontrolables a veces, queremos una forma de ver los errores también. Verbose shows more from under the hood."
                },{
                    cod:`// HTTP GET con verbose command
curl -v example.com -o /dev/null`,
                    text:"-v = --verbose. Esto va a salvar mucha información de todo el proceso de comunicación y podremos ver, con suerte, cualquier error."
                },{
                    cod:`// HTTP GET Passing HEADERS
curl example.com -H "Magic: disc0"`,
                    text:"Con la opción -H podemos pasar headers a nuestro request. IMPORTANTE. Y si en vez de pasar, quiero remover headers?"
                },{
                    cod:`// HTTP GET removing headers
curl example.com -H "Magic;"`,
                    text:"Con el ; quitamos ese campo por completo, si fueran dos puntos (:) solo borraríamos el valor y pasaríamos el objeto en blanco. Suficiente del método get. Veamos el POST"
                },{
                    cod:`// HTTP POST
curl -d name=Daniel -i https://example.com/receiver`,
                    text:"Esto es un post normal.  Podemos enviar archivos ¿Cómo?"
                },{
                    cod:`// HTTP POST posting files
curl -d @file https://example.com/receiver -o saved`,
                    text:"Solo entendí que enviamos files"
                },{
                    cod:`// HTTP POST posting anything
ls -l | curl -d @- https://example.com/receiver -o saved`,
                    text:"No entendí"
                },{
                    cod:`// HTTP POST posting data en binario
ls -l | curl --data-binaty @- https://example.com/receiver -o saved`,
                    text:"Solo entendí que así se envía como datos binarios."
                },{
                    cod:`// HTTP POST posting files as binary
curl --data-binary @file.json -H "Content-Type:application/json" https://example.com/receiver`,
                    text:"Así podemos enviar buffers binarios desde un archivo json existente. Ahora pasemos al PUT"
                },{
                    cod:`// HTTP PUT replacing data
curl -T localfile -i https://example.com/receiver`,
                    text:"Usar la opción -T. Una mala práctica es usar el comando -X PUT. El comando -X va a sobreescribir todos los métodos que de forma predeterminada curl haría, llevando a comportamientos inesperados."
                },{
                    cod:`// GETTING COOCKIES
curl -c cookiejar.txt https://example.com
//AND
curl -b cookiejar.txt https://example.com`,
                    text:"Reading and Writing coockies. Puedes usar ambas en la misma command line y va a funcionar con coockies."
                },{
                    cod:`// LOGGING with curl
curl -c cookiejar.txt https://example.com/login_form
//AND
curl -b cookiejar.txt -c coockiejar.txt https://example.com/login_form -d user=Daniel -d password=1234`,
                    text:"Esto es lo básico cuando la sesión login se guarda en coockies."
                },{
                    cod:`// HTTPS obstacles on localhost
curl https://127.0.0.1/ // cause certificate problems
curl -k https://127.0.0.1/ // this ducks the certificate problem but wont work with coockies
curl -k https://127.0.0.1/ -H "Host:example.com" // this ducks the certificate problem, work with coockies but not with virtual servers
curl https://example.com/ --resolve example.com:443:127.0.0.1 // This would solve the problem
curl https://example.com/ --connect-to example.com:443:host.tld:8443 // This would solve the problem aswell
`,
                    text:"Podemos probar nuestros servidores https en local con estos métodos de las dos últimas líneas. AVOID the -k"
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="05/08/2021"/>
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                
            />
        </div>
    )
}
