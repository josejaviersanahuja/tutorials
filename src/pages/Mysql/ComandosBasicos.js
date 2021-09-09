import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ComandosBasicos() {

    const detalles = {
        primero: {
            title: "npm install mysql2",
            defBreve: "Empezaremos a estudiar mysql con el curso de LinkedIn Nodejs Databases.",
            arrayCodigo: [
                {
                    cod: `class MySQLBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.connection = null
  }
}

`,
                    text: "Empezamos definiendo el constructor al igual que con Redis y Mongo DB."
                }, {
                    cod: `async connect() {
    this.connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      port: 3406,
      password: process.env.MY_PASSWORD,
      database: "maxcoin"
    })
    return this.connection
  }`,
                    text: "Como conectar con MySQL. Recuerda que necesitamos la contraseña del usuario root."
                }, {
                    cod: `async disconnect() {
    this.connection.end()
  }`,
                    text: "Terminar una conección es muy sencillo en todas las bases de datos."
                }, {
                    cod: `async insert() {
    const data = await this.coinAPI.fetch()
    const sql = "INSERT INTO coinvalues (valuedate, coinvalue) VALUES ?"
    const values = []
    Object.keys(data.bpi).forEach(ele => {

      values.push([ele, data.bpi[ele]])
    })
    return this.connection.promise().query(sql, [values])
  }`,
                    text: "My sql traaja con muchas tablas y por tanto  con muchos Arrays de varias dimensiones. date cuenta que ya values es un [] dentro de un [] y sin embargo debemos encerrarlo en otro [] para poder INSERT en coinvalues."
                }, {
                    cod: `async getMax() {
    return this.connection.promise().query(
      "SELECT * FROM coinvalues ORDER by coinvalue DESC LIMIT 0,1"
    )
  }`,
                    text: "Tanto en el anterior query como en este hemos usado promise() porque es la forma con la que estamos escribiendo código. La verdad parece más sencillo de esta forma."
                }, {
                    cod: `async getMax() {
    return this.connection.promise().query(
      "SELECT * FROM coinvalues ORDER by coinvalue DESC LIMIT 0,1"
    )
  }

  async max() {
    // we show that we try to connect
    console.info('Connecting to mysql db...');
    // we check the performance
    console.time('mysql-db-connect')

    // we try the connection 
    await this.connect()
    // connection success
    console.log("Successfully connected to mysql db");
    console.timeEnd('mysql-db-connect')

    // we show that we send data to mysqlDB
    console.info('Inserting data...');
    // we check the performance
    console.time('mysql-db-insert')
    const res = await this.insert()
    console.timeEnd('mysql-db-insert')

    console.info(res[0].affectedRows, ' inserted');

    // we get the maximum value    
    console.info('Finding the maximum value');
    // we check the performance
    console.time('mysql-db-getmax')
    const max = await this.getMax()
    const row = max[0][0]
    console.timeEnd('mysql-db-getmax')

    console.info(row, ' This is the maximum value');

    // now we disconnect
    // lets close the connection
    // we show that we try to disconnect

    console.info('Disconnecting to mysql db...');
    // we check the performance
    console.time('mysql-db-disconnect')
    await this.disconnect()
    console.log("Successfully Disconnected to mysql db");
    console.timeEnd('mysql-db-disconnect')

  }`,
                    text: "Y para mi sorpresa, resulta que este tipo de ejercicios dan por ganador a MYSQL como la base de datos más eficiente en velocidad. Vale la pena aprender Mysql"
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="09/09/2021" />
            <Subtitle
                Subtitle="My SQL en Nodejs."
                parrafo="My SQL es la base de datos tradicional y por muy buenas razones, es muy potente y segura. Vamos a ver como empezar a integrar mysql en Apps de Nodejs."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
