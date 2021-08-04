import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function Twilio() {
    
    const detalles={
        primero:{
            title: "Twilio Api Call",
            defBreve:"Haremos una llamada exitosa a twilio desde NODEJS.",
            arrayCodigo:[
                {
                    cod:`/****************************************************
*                  TWILIO
* ************************************************* */

helpers.sendTwilioSms =  function(phone, msg, twilioCallbackError) {
    //Validate parameters
    phone = typeof phone == 'string' && phone.trim().length === 11 ? phone.trim() : false
    msg = typeof msg == 'string' && msg.trim().length > 0 && msg.length <=1600 ? msg.trim() : false
    if (phone && msg) {
        //Configure the request payload
        const payload = {
            'From': {
                'fromPhone': '+15555555555', // privateKeys.TWILIO_PHONE_NUMBER
                'accountSid': privateKeys.ACCOUNT_SID,
                'authToken': privateKeys.AUTH_TOKEN
              },
            'To': '+'+phone,
            'Body':msg
        }
        
        // Stringify payload
        const stringPayload = querystring.stringify(payload)

        //Configure the request
        const requestDetails = {
            'protocol': 'https:',
            'hostname': 'api.twilio.com',
            'method': 'POST',
            'path': '/2010-04-01/Accounts/'+ config.twilio.accountSid + '/Messages.json',
            'auth': config.twilio.accountSid+':'+config.twilio.authToken,
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(stringPayload)
            }
        }
        // Instantiate the request object
        const req = https.request(requestDetails, function(res){
            //Grab the status of the sent request
            const status = res.statusCode
            // Callback succesfully if the request went through
            if(status == 200 || status == 201 ){
                twilioCallbackError(false)
            }else{
                twilioCallbackError('Status code returned was: '+status)
            }
        })

        // Bind to the error event
        req.on('error', function(e){
            twilioCallbackError(e)
        })

        // Add the payload
        req.write(stringPayload)

        //End the request
        req.end()

    } else {
        twilioCallbackError('Given Parameters were missing or invalid')
    }
}`,
                    text: "Llamada hecha desde la nodejs master-class."
                }
            ],
            url:"https://www.twilio.com/login"
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
