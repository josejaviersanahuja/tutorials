import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function MongodbPackage() {

    const detalles = {
        primero: {
            title: "npm install mongodb",
            defBreve: "Como mencioné antes, vamos a usar el código aprendido en LinkedIn Learning, y aprovechamos para observar por primera vez el uso de clases en javascript. Así que al menos por esa parte, será ligeramente interesante el código que vamos a construir.",
            arrayCodigo: [
                {
                    cod: `const { MongoClient } = require('mongodb')
const CoinAPI = require('../CoinAPI');

// class will define the CoinAPI class , a client that need an url connection to a database, and a collection of values
// initialy, client and collection are null
class MongoBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.mongoUrl = "mongodb://localhost:37017/maxcoin"
    this.client = null
    this.collection = null
  }
}
`,
                    text: "New CoinAPI() es una clase que llama a una API de registros del valor de bitcoin. Es la operación perfecta para registrar datos. mongoUrl es el string de conexión con mongodb, este en particular solo conecta a mongodb de forma local. client y collection serán definidas en un método de la clase que vamos a definir a continuación."
                }, {
                    cod: `// return the conecction
  async connect() {
    // we create the client
    const mongoClient = new MongoClient(this.mongoUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    // we connect
    this.client = await mongoClient.connect()
    // define the DB and collection
    this.collection = this.client.db("maxcoin").collection("values")
    // return the connection
    return this.client
  }
`,
                    text: "Si nos fijamos, la creación de la conexión, es similar a la de mongoose. Por tanto todo este bloque es un método nativo de MongoDB y no de mongoose."
                }, {
                    cod: `async disconnect() {
    if (this.client) {
      return this.client.close()
    }
    return false
  }`,
                    text: "Claro y sencillo y también identico a mongoose."
                },
                {
                    cod: `// como insertar  
  async insert() {
    const res = await this.coinAPI.fetch()
    const { bpi } = res

    const documents = Object.keys(bpi).map(ele => {

      return {
        date: ele,
        value: bpi[ele]
      }
    })

    return this.collection.insertMany(documents)
  }
`,
                    text: "De nuevo es identico a mongoose. No debe haber problemas con esto."
                }, {
                    cod: `async getMax() {
    return this.collection.findOne({}, { sort: { value: -1 } })
  }`,
                    text: "Nota a investigar, será que findOne sin parámetros devuelve el primer elemento? de ser así, me parece lógico el código."
                },
                {
                    cod: `async max() {
    // we show that we try to connect
    console.info('Connecting to mongo db...');
    // we check the performance
    console.time('mongo-db-connect')

    // we try the connection 
    await this.connect()
    // connection success
    console.log("Successfully connected to mongo db");
    console.timeEnd('mongo-db-connect')

    // we show that we send data to MONGODB
    console.info('Inserting data...');
    // we check the performance
    console.time('mongo-db-insert')
    const res = await this.insert()
    console.timeEnd('mongo-db-insert')

    console.info(res.insertedCount, ' inserted');

    // now lets find the max value
    console.log('Now lets get the maximum value');
    console.time('mongo-db-getmax')
    await this.getMax()
    console.log('-------------');
    console.log(max, ' this is the maximum value');
    console.log('-------------');
    console.timeEnd('mongo-db-getmax')
    // now we disconnect
    // lets close the connection
    // we show that we try to disconnect

    console.info('Disconnecting to mongo db...');
    // we check the performance
    console.time('mongo-db-disconnect')
    await this.disconnect()
    console.log("Successfully Disconnected to mongo db");
    console.timeEnd('mongo-db-disconnect')

  }`,
                    text: "Y ahora aquí vemos una secuencia lógica completa, donde abrimos una conexión, insertamos elementos, buscamos el mayor, desconectamos y registramos los tiempos de cada proceso. Muy didactico todo."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="08/09/2021" />
            <Subtitle
                Subtitle="Mongo DB como paquete dentro de nuestra App."
                parrafo="Como opción para comunicarse con las bases de datos de Mongo DB, es una buena opción. Siempre estará actualizada y será el paquete externo más fiable. Aunque todo apunte a Mongoose como el indiscutible ganador dentro de mi ranking personal, es bueno aprender algunos métodos propios de Mongo DB y al menos distinguir, qué métodos son de Mongo y qué métodos son de Mongoose. En esta sección usaremos el código aprendido en los cursos de LinkedIn Learning."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
