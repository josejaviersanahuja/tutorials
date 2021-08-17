import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ExpressBasics() {
    
    const detalles={
        primero:{
            title: "Métodos básicos de Express",
            defBreve:"Vamos a empezar por describir que hace cada método básico de express.",
            arrayCodigo:[
                {
                    cod:"var app = express();",
                    text: "Aquí inicializamos express"
                },
                {
                    cod:`app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');`,
                    text: "Con el método set podemos setear alguna configuración a la app, en este ejemplo, seteamos a pug como motor para servir html SSR "
                },
                {
                    cod:`app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
`,
                    text: "Estos son middlewares, son procesos que se abren por donde pasan todas las peticiones al servidor, sirven para que dentro de cada proceso, podamos transformar o modificar la lógica para que el trabajo posterior sea más fácil, por ejemplo, express.json se encarga de la parte de parsear a json la inofrmación, si recordamos de nodejs, esa parte podría crearnos excepciones y errores. urlencoded, nos parsea el url de la request para que trabajar con parámetros como rutas dinámicas y query strings sea más facil, express.static, crea la lógica que tuvimos que crear en raw nodejs para servir archivos estáticos desde el folder public. Esto hace lo mismo."
                },
                {
                    cod:`app.get("/path", (req, res) => {
    res.json(obj1)
})
app.post("/path", (req, res) => {
    ---
})
app.put("/path", (req, res) => {
    ---
})
app.delete("/path", (req, res) => {
    ---
})
app.all("/path", (req, res) => {
    ---
})
`,
                    text: "Así atrapamos la petición en base al path de la request, y en base al método o métodos."
                },{
                    cod:`//Custom middleware 
app.use(function (req, res, next) {
  next();
});`,
                    text:"Este middlware creado por nosotros no hace nada, pero si no ponemos el next(), la request quedará atrapada ahí dentro y nunca tendrá respuesta. Los middlwares previos son todos creados por paquetes muy estables y conocidos que ya hacen este paso de forma implícita."
                }
            ]
        },
        segundo:{
            title: "404 handler y Error Handler",
            defBreve:"En vez de establecer rutas, vamos a manejar el 404 y el error con middlewares. El truco está en dejarlos al final",
            arrayCodigo:[
                {
                    cod:`var createError = require('http-errors');
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});`,
                    text:"De esta forma tan brillante, creamos un error del tipo 404 que va a atrpar nuestro último middleware que tendrá algo en especial."
                },{
                    cod:`// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});`,
                    text:"Este middleware debe ser el último middleware, que debe dar respuesta si o si a nuestro cliente. Por eso tiene como primer parámetro el err, que existirá si hemos manejado algún error en medio del proceso de dar respuesta. Si el error viene del 404 middleware, la respuesta será 404."
                }
            ]
        },
        tercero:{
            title: "Requests Information",
            defBreve:"Las requests son los objetos más valiosos, y para crear una buena arquitectura debemos poder extraer información de ella. headers, params, query. Vamos a ello",
            arrayCodigo:[
                {
                    cod:`// atrapar una ruta dinámica
app.get("/descarga/:nombre_usuario", (req, res) => {
  const nombre_usuario = req.params.nombre_usuario 
})`,
                    text:"req.params contiene un objetos con todos los parámetros de todas las rutas dinámicas que llegan en la request."
                },{
                    cod:`// atrapar las query
app.get("/descarga/:nombre_usuario", (req, res) => {
  const allqueries = req.query: 
})`,
                    text:"req.query es un objetos con todos los pares key:value que entran como queryString"
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="15/12/2020"/>
            <Subtitle
                subtitle="Las definiciones más básicas de Express"
                parrafo="Express facilita mucho las cosas pero hay que entender qué es de express y qué no es de express y cómo funciona."
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
        </div>
    )
}
