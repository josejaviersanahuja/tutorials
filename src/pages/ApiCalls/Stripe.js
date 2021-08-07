import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function Stripe() {
    
    const detalles={
        primero:{
            title: "Stripe Api Call. THE SANDBOX",
            defBreve:"Para entender el proceso de pago con Stripe, hay que entender su método de seguridad que consiste en un método de comunicación a 3 bandas Front-BackEnd-Stripe. Aquí solo desarrollamos la comunicación BackEnd - Stripe. ",
            arrayCodigo:[
                {
                    cod:`const amountToPay = 100
const orderId='0001'
/*******************************************
 *          Stripe creating charge
 ********************************************/
    const payload ={
    amount:amountToPay,
    currency:'usd',
    source:'tok_visa', // dummie token created for tests. in real operatios check how to create and get a token for a real Credit card
    description:'Order for ' + orderId ,
    receipt_email:email
    }
    
    const stringPayload = querystring.stringify(payload)
    const test = JSON.stringify(payload)

    console.log(stringPayload,' TEST TEST ', test); //TODO erase

    const requestDetails = {
        'protocol': 'https:',
        'hostname': 'api.stripe.com',
        'method': 'POST',
        'path': '/v1/charges',
        'auth': process.env.STRIPE_KEY,
        'headers':{
            'Content-Type':'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(stringPayload)
        }
    }
    // Instantiate the request object
    const req = https.request(requestDetails ,function(res){
        //Grab the status of the sent request
        const status = res.statusCode
        let data = ''
        // Callback succesfully if the request went through
        if(status == 200 || status == 201 ){
            // read the data
            res.on('data', function(chunk){
            data+=chunk
            })

            res.on('end', function(){
                //get the response
            const finalObjectResponse = JSON.parse(data)
            console.log('\x1b[32m%s\x1b[0m','Payment went through, status code: ', status);
                // store the order payment
                const orderObject = {
                    orderID:orderId,
                    shoppingCart: shoppingCart, 
                    statusCode:status, 
                    paymentStatus:finalObjectResponse
                }
            })
        }else{
            console.log('Status code returned was: '+status, res.statusMessage)
            callback(status, {"message":"Something went wrong with the payment"})
        }
    })

    // Bind to the error event
    req.on('error', function(e){
        console.error(e);
        callback(403, {ErrorOnRequest:e})
    })

    //adding payload
    req.write(stringPayload)

    //End the request
    req.end()

/*****************************************
 *            Finish with the charge
 ******************************************/`,
                    text: "Llamada hecha desde la nodejs master-class."
                },{
                    cod:`// TODO ESTO SE PUEDE HACER DESDE EL FRONT AHORA`,
                    text:"Ahora esto se puede hacer solo desde el FRONT... 1. El Front envía los datos de la tarjeta a la API de Stripe (PAYMENT INTENT) Se obtiene un CLIENT_SECRET (es como una key) de ese payment intent 2. Se crea una referencia de la tarjeta de crédito CC REFERENCE (ESTO ES CON STRIPE HOOKS EN REACT). 3. create a payment method (ESTO ES OTRA LLAMADA A OTRA API DE STRIPE DESDE EL FRONT) genera un objeto con un id (PAYMENT_METHOD_ID). 4. En el FRONT solo queda confirmar el pago que recibe parámetros CLIENT SECRET y el PAYMENT METHOD ID. (Se usa con Stripe library)"
                }
            ],
            url:"https://www.youtube.com/watch?v=w1oLdAPyuok"
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="04/08/2021"/>
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
            />
        </div>
    )
}
