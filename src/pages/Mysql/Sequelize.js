import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Sequelize() {

    const detalles = {
        primero: {
            title: "npm install sequelize",
            defBreve: ".",
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
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="09/09/2021" />
            <Subtitle
                Subtitle="Sequelize."
                parrafo="Es un administrador de ."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
        </div>
    )
}
