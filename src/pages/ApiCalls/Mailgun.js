import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function Mailgun() {
    
    const detalles={
        primero:{
            title: "Mailgun Api Call",
            defBreve:"Haremos una llamada exitosa a Maigun Sanbox desde NODEJS.",
            arrayCodigo:[
                {
                    cod:`//Send email mailgun
helpers.sendMailgunEmail = function(email, msg){
    const payload ={
        from:'Pizza-Api <mailgun@$ {config.mailgunDomain}>',
        to:email,
        subject:'A new order to Pizza-API has been created',
        text:msg
    }
    
    const stringPayload = querystring.stringify(payload)

    const requestDetails = {
        'protocol': 'https:',
        'hostname': 'api.mailgun.net',
        'method': 'POST',
        'path': '/v3/$ {config.mailgunDomain}/messages',
        'auth': 'api:$ {process.env.MAILGUN_KEY}',
        'port':443,
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
        res.on('data', function(chunk){
            data+=chunk
            })
        res.on('end', function(){
        //get the response
            const finalObjectResponse = data.toString()
            if (status === 200) {
                console.log('\x1b[32m%s\x1b[0m','Email sent to: ',email ,'StatusCode: ', status);    
            } else {
                console.log('\x1b[31m%s\x1b[0m','Couldn´t send the email to: ',email ,'StatusCode: ', status, finalObjectResponse); 
            }
            
        })
    })

    // Bind to the error event
    req.on('error', function(e){
        console.error(e);
    })

    //adding payload
    req.write(stringPayload)

    //End the request
    req.end()
}`,
                    text: "Llamada hecha desde la nodejs master-class."
                }
            ],
            url:"https://login.mailgun.com/login/"
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
