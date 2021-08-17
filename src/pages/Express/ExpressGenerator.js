import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ExpressGenerator() {
    
    const detalles={
        primero:{
            title: "npm install -g express-generator",
            defBreve:"De esta forma podremos crear una plantilla de un proyecto de express con varios recursos creados como plantilla.",
            arrayCodigo:[
                {
                    cod:`//Por consola ejecutamos
express -h

  Usage: express [options][dir]

  Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory`,
                    text: "De esta forma vamos a crear un template de un proyecto iniciado de express. Estudiemos que es ejs, hbs, pug, hogan, --no-view engine, jade css, y git ignore"
                },{
                    cod:`#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const debug = require('debug')('curso-avanzado:server');
const http = require('http');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port,()=>{
  console.log('\x1b[32m%s\x1b[0m','Server running on port: '+port);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
`,
                    text:"Este es el archivo de entrada de la aplicación. Hay 3 cosas que se manejan aquí, 1 el puerto que nos dará automáticamente el servidor donde deployemos el proyecto, lo normalizamos y lo usamos, 2, cualquier evento onError y 3 cualquier evento onListening (relacionado a los request que llegan principalmente)"
                },{
                    cod:`const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tokensRouter = require('./routes/tokens');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tokens', tokensRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
`,
                    text:"Todo este es el contenido de la app. Vamos a estudiarla por trozos"
                },{
                    cod:`const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tokensRouter = require('./routes/tokens');

const app = express();
`,
                    text:"Dependencias e importaciones, luego inicializamos la app con express. Morgan sirve para hacer console.logs de los incoming requests y de las respuestas, nos ahorra algo de trabajo. Cookie-parser parece ser más útil, identifica todos los cookies que proceden de los headers. JSON web tokens es otro programa similar. Toca aprender ambos poco a poco."
                },{
                    cod:`// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));`,
                    text:"Aquí todas las configuraciones de todos los middlewares que usa este template. El view engine de JADE, el logger morgan, express.json es necesario, y urlencoded también, el cookieparser o json webtoken, y el middleware que sirve archivos estáticos. Me hubiera gustao quitarme de encima al menos a morgan y al view engine, pero la verdad es que mi custom view engine va muy lento con express, con raw node va mucho más rápido. Me pregunto como estrá construído jade y otros programas."
                },{
                    cod:`app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tokens', tokensRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;`,
                    text:"Luego vienen los middleware de las rutas, ya veremos como definir cada ruta, y el export module."
                }
            ]
        },
        segundo:{
            title: "JSON API vs SSR",
            defBreve:"Estos son los 2 tipos de respuestas para los que nos debemos preparar. Y la respuesta customizada para cualquier otra situación.",
            arrayCodigo:[
                {
                    cod:`//Así devolvemos un json con todos los pokemones
app.get('/api/pokemons', (request, response) => {
  response.json(pokemonsbd)
})`,
                    text:"res.json es posible debido al middleware app.use(express.json()) y es la respuesta típica de una JSON API."
                },{
                    cod:`/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});`,
                    text:"Así express devuelve por respuesta el HTML que se va a renderizar."
                },{
                    cod:`/* Provide cusrtom answers. */
router.get('/', function(req, res, next) {
    res.writeHead(200, {
        "Content-Type": "audio/mp3"
      });
    res.write('Aquí escribimos el contenido que vamos a enviar, supongo que para mp3 se envia el Buffer, ideal sería enviar el stream.')
    res.end()
});`,
                    text:"Aquí vemos como customizar una respuesta sin usar res.json ni res.render. Pero existen formas más avanzadas."
                },{
                    cod:`/* Lets give advanced type of answer. */
app.use('/video-static' , (req, res, next) => { 

  const fileName = __dirname + "/public/video/video.mp4";

  res.type("video/mp4");
  res.sendFile(fileName);

})

app.use("/video-stream",  (req, res, next) => {

  const fileName = "./public/video/video.mp4";

  res.writeHead(200, {
    "Content-Type": "video/mp4"
  });

  createReadStream(fileName).pipe(res);

});`,
                    text:"Estamos definiendo las respuestas en modo de middlewares, pero como son estaticos, funcionan. Estas son formas muy específicas de dar respuestas."
                }
            ]
        },
        tercero:{
            title: "Dar respuesta a un stream de vídeo",
            defBreve:"Decidí dejar en su propio segmento la respuesta con mejores prácticas a un stream de vídeo. Vamos a ello",
            arrayCodigo:[
                {
                    cod:`app.use("/video-rango", async (req, res, next) => {

  const fileName = "./public/video/video.mp4";
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;

  if( range){

    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;

    res.writeHead(206, {
      "Content-Type": "video/mp4",
      "Content-Length": end - start + 1,
      "Accept-Ranges": "bytes",
      "Content-Range": 'bytes $ {start}-$ {end}/$ {size}'
    });

    createReadStream(fileName, { start, end }).pipe(res);

  }else{
    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": size
    });
  
    createReadStream(fileName).pipe(res);
  }

});
`,
                    text:"De esta forma se da la respuesta completa y correcta cuando proveemos un stream de vídeo."
                }
            ]
        },
        cuarto:{
            title: "Servir un download",
            defBreve:"Como servir un download. Vamos a ello",
            arrayCodigo:[
                {
                    cod:`app.get("/descarga/:nombre_usuario", (req, res) => {

  const streamEscritura = fs.createWriteStream('$ {__dirname}/files/text2.txt');


  streamEscritura.write(
    'Estimable $ {req.params.nombre_usuario}: 
aquí está el documento que solicitas',
    () => {
      res.download('$ {__dirname}/files/text2.txt', error => {
        if (error) {
          console.log("ERROR");
          res.status(404).render("error");
        } else {
          console.log("Descarga OK");
        }
      });
    }
  )

});`,
                    text:"De esta forma creamos un file, escribimos en el file, y luego los mandamos como respuesta para que se descargue. res.download"
                }
            ]
        },
        quinto:{
            title: "Express Router",
            defBreve:"Cada endpoint podría ir por separado, para tener un orden en nuestra app. Para eso sirve el router. La lógica se crea en 2 partes.",
            arrayCodigo:[
                {
                    cod:`//Primero importamos el handler, luego lo creamos
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);`,
                    text:"Estos handlers van a estar en una carpeta llamada routes, y en el middleware los usamos. De esa forma el middleware atrapa las requests con path users y el router se encarga de derivar la request al archivo que vamos a construir"
                },
                {
                    cod:`var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
`,
                    text:"Necesitamos importar express y el router y exportarlo obviamente, Aquí dentro llegarán todas las peticiones que macheen con /users. Por tanto pdemos definir todos los endpoints que queramos desde / (que equivale a /users/) o /data que quivaldría a users/data y podemos definir los métodos post, get, put, delete... todo lo que deseamos."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="16/08/2021"/>
            <Subtitle
                subtitle="Express, el framework por excelencia de NODEJS"
                parrafo="Express está tan pero tan generalizado, que vamos a estudiar en profundidad express, para que luego de conocer nodejs y express, sea muy muy fácil crear el backend y microservicios de mis páginas web."
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
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.quinto.title}
                defBreve={detalles.quinto.defBreve}
                arrayCodigo={detalles.quinto.arrayCodigo}
            />
        </div>
    )
}
