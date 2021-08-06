import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function CurlMostPopulars() {
    
    const detalles={
        primero:{
            title: "Most popular commands.",
            defBreve:"Repaso de los comandos más usados.",
            arrayCodigo:[
                {
                    cod:`curl http://localhost:3000 -u admin:secret
// Equivalente a:
curl http://localhost:3000 -H "Authorization: Basic $(echo -n admin:secret | base64)" `,
                    text: "Ambas cosas son similares por defecto, ahora mira la documentación de stripe."
                },{
                    cod:`curl https://api.stripe.com/v1/charges \
-u sk_test_51JKeeeEXOJa4w8quGw8GdWxA9Z2dPKZ9wFl32fUexZgcHDz798i0Dnv6isL0uwjQ6kELxkXVKwfy3eJeoNqXqBpt00gDaNM9U4:
# The colon prevents curl from asking for a password.`,
                    text:"Esto pertenece a la documentación de stripe. Mira esto: If you need to authenticate via bearer auth (e.g., for a cross-origin request), use -H 'Authorization: Bearer sk_test_51JKeeeEXOJa4w8quGw8GdWxA9Z2dPKZ9wFl32fUexZgcHDz798i0Dnv6isL0uwjQ6kELxkXVKwfy3eJeoNqXqBpt00gDaNM9U4' instead of -u sk_test_51JKeeeEXOJa4w8quGw8GdWxA9Z2dPKZ9wFl32fUexZgcHDz798i0Dnv6isL0uwjQ6kELxkXVKwfy3eJeoNqXqBpt00gDaNM9U4."
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
                url={detalles.primero.url}
            />
        </div>
    )
}
