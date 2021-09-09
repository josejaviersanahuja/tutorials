import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function MongodbPackage() {

  const detalles = {
    primero: {
      title: "npm install redis",
      defBreve: "Como mencioné antes, vamos a usar el código aprendido en LinkedIn Learning, y aprovechamos para seguir trabajando con clases en javascript. Así que prestemos atención porque redis ya es bastante interesante.",
      arrayCodigo: [
        {
          cod: `const Redis = require('redis')
const CoinAPI = require('../CoinAPI');

class RedisBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.client = Redis.createClient(7379)
  }
}
`,
          text: "Este código se ejecuta durante la ejecución de contenedores docker donde levantamos bases de datos en un entorno local. La conexión a redis no se abre automáticamente, si buscas el valor client.connected, va a dar false, hasta que introduzcamos un primer valor dentro de redis, que es cuando abre la conexión. Hay que tenerlo en cuenta. Abramos la conexión."
        }, {
          cod: `async connect() {
    const promise = new Promise((resolve, reject) => {
      // we show that we try to connect
      console.info('Connecting to Redis db...');
      // we check the performance
      console.time('redis-db-connect')
      this.client = Redis.createClient(7379)
      this.client.set("connected", "true", (err) => {
        if (!err) {
          console.log("Successfully connected to Redis db??? ", this.client.connected);
          console.timeEnd('redis-db-connect')
          resolve(true)
        } else {
          console.log("not connected");
          console.timeEnd('redis-db-connect')
          reject(err)
        }
      })

    })

    return promise
  }`,
          text: "Como el esquema de la clase, es trabajar con asyc/await, tuvimos que convertir todo el código a promesas porque redis, no trabaja con promesas sino con callbacks. Introducimos un valor 'connected'='true' para abrir la conexión, y devolvemos la promesa, que devuelve true"
        }, {
          cod: `async disconnect() {
    return new Promise((resolve) => {
      this.client.quit((err, reply) => {
        if (!err) {
          resolve(true)
        } else {
          console.log(reply);
          resolve(false)
        }
      })
    })
  }`,
          text: "El método disconnect, también funciona con callbacks, como prácticamente todo. Ahora veamos como insertar un elemento complejo."
        }, {
          cod: `// Insertamos un sorted set (z) con 1826 elementos
async insert() {
    const data = await this.coinAPI.fetch()
    
    // acepta un array de argumentos, pero es quisquilloso.
    // Qué significa? que el orden y la forma del array importa mucho
    // el elemento con index 0 debe ser el nombre del set
    
    // creamos la clave 'maxcoin:values'
    const values = ["maxcoin:values"]

    //Ahora iteramos y hacemos push a cada clave valor
    // pero como antes, el orden importa
    // Primero hacemos push al valor
    // Segundo a la clave

    // iteramos
    Object.keys(data.bpi).forEach(ele => {
        // push al valor (recuerda que redis trabaja mejor con strings)
      values.push(data.bpi[ele].toString())
        // luego push a la clave (la fecha)
      values.push(ele)
    })

    return new Promise((resolve) => {
      this.client.zadd(values, (err, reply) => {
        if (!err) {
          console.log(reply, 'numero que muestra el tamaño del set (1826)');
          resolve(true)
        } else {
          console.log('error inserting de set');
          reject(err)
        }
      })
    })

  }`,
          text: "Este método es algo quisquilloso en cuanto al orden de los argumentos, pero una vez nos adaptamos a la documentación y a la práctica, es un método poderoso. Ahora busquemos el máximo valor dentro de este set."
        }, {
          cod: `async getMax() {
    return new Promise((resolve, reject) => {
        // al hacer zrange -1,-1 decimos que queremos el último elemento, por tanto el máximo
        // "WITHSCORES" es un parámtero que dice que nos arroje, 
        // no solo la clave del máximo, sino tambien el valor
        
      this.client.zrange("maxcoin:values", -1, -1, "WITHSCORES", (err, reply) => {
        if (!err) {
          console.log(reply, ' Array con la clave del maximo elemento y el valor');
          resolve(true)
        } else {
          reject(err)
        }
      })
    })

  }
`,
          text: "El sorted set es muy potente. Encontrar la clave es muy fácil de esta forma. Ahora lancemos la prueba completa."
        }, {
          cod: `  async max() {

    // we try the connection 
    const isConnected = await this.connect()

    if (!isConnected) {
      console.log('bye bye');
      return
    }


    // we show that we send data to MONGODB
    console.info('Inserting data...');
    // we check the performance
    console.time('redis-db-insert')
    const res = await this.insert()
    console.timeEnd('redis-db-insert')

    console.info(' inserted? ', res);

    // we get the maximum value    
    console.info('Finding the maximum value');
    // we check the performance
    console.time('redis-db-getmax')
    await this.getMax()
    console.timeEnd('redis-db-getmax')

    // console.info(max, ' This is the maximum value');

    // now we disconnect
    // lets close the connection
    // we show that we try to disconnect

    console.info('Disconnecting to redis db...');
    // we check the performance
    console.time('redis-db-disconnect')
    const isDisconnected = await this.disconnect()
    if (!isDisconnected) {
      console.log('error disconnecting... bye bye');
      console.timeEnd('redis-db-disconnect')
      return
    }
    console.log("Successfully Disconnected from redis db");
    console.timeEnd('redis-db-disconnect')

  }`,
          text: "Ten en cuenta que este código se implementó justo después de la implementación con mongoDB. Podemos comparar resultados y velocidad ante las mismas queries. y con mongoDB el resultado es de 1190 milisegundo para completar la tarea, mientras que con redis solo 294 milisegundos. Voy a dejar mi github, para que se descarguen la prueba."
        }
      ],
      url: "https://github.com/josejaviersanahuja/node-tests-db"
    },
    segundo: {
      title: "Ejemplo de Kyle",
      defBreve: "Este ejemplo es muy práctico y sencillo, por eso decido mostrarlo. La comunidad de desarrolladores, les encanta usar Redis como una forma de cachear data y que esta mejore el performance de la APP en cuanto a tiempo. Vamos a ello.",
      arrayCodigo: [
        {
          cod: ` redisClient = Redis.createClient() // kyle trabaja sin GUI así que cachea directo en la ram

//Función principal
// recibe la key que vamos a setear y un callback
// si el callback es asincrono, recuerda usarlo en el callback
function getOrSetCache(key, cb) {
  return new Promise((resolve,reject)=>{
    redisClient.get(key, async (err, data)=>{
      // if error
      if (err) reject(err)
      // if data
      if(data!==null) resolve(JSON.parse(data))

      // but if there is no data... we set a new one in cache
      const freshData = await cb()
      redisClient.setex(key, 3600, JSON.stringify(freshData))

      // and we resolve with the fresh data
      resolve(freshData)
    })
  })
}`,
          text: "El cb sería la función que riginalmente usaríamos para obtener el data que buscamos. Solo que si ya está cacheada en redis, la obtención de los datos será 50 veces más rápido."
        }
      ]
    }
  }

  return (
    <div className="cuerpo">
      <PublishDay date="08/09/2021" />
      <Subtitle
        Subtitle="Redis En Nodejs."
        parrafo="En esta sección usaremos el código aprendido en los cursos de LinkedIn Learning y quizás implementemos el código del vídeo de Kyle. No es un apunte completo, pero nos dará mucha información para arrancar a trabajar con redis. Vamos a ello."
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
      />
    </div>
  )
}
