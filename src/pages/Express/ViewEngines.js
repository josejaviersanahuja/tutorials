import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function NodeMailer() {
    
    const detalles={
        primero:{
            title: "Configuración del handlebars en Express",
            defBreve:"La configuración es muy sencilla, en 2 líneas ya está configurada, ni si quiera hace falta importarlo. Vamos a ellos",
            arrayCodigo:[
                {
                    cod:`var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
`,
                    text:"Ni si quiera debemos importarlo, basta solo con que esté instalado en nuestras dependencias y que seteemos la app, con 2 parámetros, donde buscar los templates, y que view engine vamos a usar. Ahora veamos como se usan."
                },{
                    cod:`/* GET home page. */
router.get('/', function(req, res, next) {
  const paramsToRender = {
    title: 'Express',
    pageclass: 'home',
    description:'This is the Hompage of this API-TEMPLATE'
  }
  res.render('index', paramsToRender);
});`,
                    text:"Esto es un ejemplo de cómo manejar una petición a servir un HTML estático de nuestro servidor. Existe la posibilidad de configurar variables en nuestros estáticos, que dembemos pasar como parámetros. res.render es el método correcto, y decimos que estático servir, en este caso el index.hbs y con qué parámetros servirlo."
                }
            ]            
        },
        segundo:{
            title: "Construyamos un archivo hbs",
            defBreve:"La forma de construir un hbs es muy simple porque sigue el mismo sistema del html. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`<!-- Este es el archivo layout.hbs -->
<!DOCTYPE html>
<html>
  <head>
    <!-- General Settings-->
    <meta charset="UTF-8">
    <meta http-equiv="content-language" content="es-ES">
    <!-- Meta Tags-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{description}}">
    <title>{{title}}</title>
    <!-- Static Assets -->
    <link rel="icon" type="image/x-icon"  href="/images/favicon.ico"/>
    <script charset="utf-8" src="/javascripts/app.js"></script>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body class="{{pageclass}}">
    {{{body}}}
  </body>
</html>
`,
                    text:"Todo lo que está dentro de {{ doble braquets }} es una variable que puede ser pasada desde el objeto que definimos en la caja de arriba. El triple braquets {{{body}}} es una sintaxis propia de handlebars que permite que el template que escojamos, (en el ejemplo de arriba fue el index.hbs) pueda sustituir esa línea. Ahora falta ver como definimos nuestro template index.hbs. "
                },{
                    cod:`<h1>{{title}}</h1>
<p>{{description}}</p>
`,
                    text:"Ya se, ya lo se, no me lo curré. Pero lo que quiero es que cuando corras express --hbs --css --git para crear tu template, pruebes tu mismo, lo que hace el hbs. Suerte"
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="21/08/2021"/>
            <Subtitle
                subtitle="View Engine!"
                parrafo="Express como framework es ligero, pero controla muchos procesos de node. Ya intenté incorporar mi propio view engine independiente de express, y aunque funcionaba, era muy lento si corría junto con express, por tanto, no servían juntos. Resulta que handlebars es un viewengine muy similar al que ya creamos en la master-class de nodejs. Veamos cómo funciona."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                language="html"
            />
        </div>
    )
}
