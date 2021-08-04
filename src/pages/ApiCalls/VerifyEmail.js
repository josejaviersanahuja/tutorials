import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function Twilio() {
    
    const detalles={
        primero:{
            title: "Email Validation",
            defBreve:"Haremos una llamada exitosa a una abstract api para validar emails.",
            arrayCodigo:[
                {
                    cod:`// VERIFY EMAIL
helpers.verifyEmail = function(email, callback){
    const requestDetails = {
        'protocol': 'https:',
        'hostname': 'emailvalidation.abstractapi.com',
        'method': 'GET',
        'path': '/v1/?api_key=$ {process.env.MAIL_KEY}&email=$ {email}',
    }
    // Instantiate the request object
    const req = https.request(requestDetails, function(res){
        //Grab the status of the sent request
        const status = res.statusCode
        let data = ''
        // Callback succesfully if the request went through
        if(status == 200 || status == 201 ){
            res.on('data', function(chunk){
                data+=chunk
            })

            res.on('end', function(){
                const finalObject = JSON.parse(data)
                if (finalObject.deliverability === "DELIVERABLE") {
                    callback(true)
                    console.log('Email Verified');
                } else {
                    callback(false)
                    console.log('Email is not OK');
                }
            })
        }else{
            console.log('Status code returned was: '+status)
        }
    })

    // Bind to the error event
    req.on('error', function(e){
        console.error(e);
    })

    //End the request
    req.end()
}`,
                    text: "Llamada hecha desde la nodejs master-class."
                }
            ],
            url:"https://app.abstractapi.com/api/email-validation/tester"
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
