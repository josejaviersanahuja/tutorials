import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function SecureNodejs() {
    
    const detalles={
        primero:{
            title: "Helmet",
            defBreve:"Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!.",
            arrayCodigo:[
                {
                    cod:`const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());`,
                    text:"Eso es todo para que nuestra app con express sea un poquito más segura."
                }
            ],
            url:"https://www.npmjs.com/package/helmet"
        },
        segundo:{
            title: "CSURF",
            defBreve:"Lee el link adicional, que te explica cómo evitar los ataques CSRF usando este paquete.",
            arrayCodigo:[
                {
                    cod:`var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
var express = require('express')
 
// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
 
// create express app
var app = express()
 
// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser())
 
app.get('/form', csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  res.render('send', { csrfToken: req.csrfToken() })
})
 
app.post('/process', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed')
})
`,
                    text:"Habría que estudiar más este paquete."
                }
            ],
            url:"https://github.com/expressjs/csurf"           
        },
        tercero:{
            title: "Express-rate-limit",
            defBreve:"Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.",
            arrayCodigo:[
                {
                    cod:`const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);`,
                    text:"Fácil simple, como a mi me gusta."
                }
            ],
            url:"https://www.npmjs.com/package/express-rate-limit"        
        },
        cuarto:{
            title: "Express-slow-down",
            defBreve:"Muy similar al expres-rate-limiter, en vez de bloquear las peticiones, se retrasan.",
            arrayCodigo:[
                {
                    cod:`const slowDown = require("express-slow-down");

//app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 100, // allow 100 requests per 15 minutes, then...
  delayMs: 500 // begin adding 500ms of delay per request above 100:
  // request # 101 is delayed by  500ms
  // request # 102 is delayed by 1000ms
  // request # 103 is delayed by 1500ms
  // etc.
});

//  apply to all requests
app.use(speedLimiter);`,
                    text:"Este cuarto middleware va muy bien junto al anterior.."
                }
            ],
            url:"https://www.npmjs.com/package/express-slow-down"      
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="24/08/2021"/>
            <Subtitle
                subtitle="Securing Node Servers"
                parrafo="Tras leer los 10 ataques más comunes a servidores de Nodejs, podemos prepararnos para afrontar esos ataques. Aquí podremos ver algunos paquetes que nos ayudarán a eso."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                url={detalles.segundo.url}
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                url={detalles.tercero.url}
            />
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
                url={detalles.cuarto.url}
            />
        </div>
    )
}
