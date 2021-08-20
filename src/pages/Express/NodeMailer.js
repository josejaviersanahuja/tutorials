import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function NodeMailer() {
    
    const detalles={
        primero:{
            title: "Configuración Gmail",
            defBreve:"En realidad, enviar un email usando NodeMailes es muy sencillo. Pero que Gmail te permita enviar emails desde una APP creada por ti, ya es otra cosa. Tampoco es muy complicado, pero debemos configurar nuestra cuenta Gmail. Incluso, yo decidí abrir otra cuenta de gmail, para poder hacerlo.",
            arrayCodigo:[
                {
                    cod:`Configurar IMAP
Paso 1: Comprueba que IMAP esté activado

    Abre Gmail en el ordenador.
    Arriba a la derecha, haz clic en Configuración Configuración y luego Ver todos los ajustes.
    Haz clic en la pestaña Reenvío y correo POP/IMAP.
    En el apartado "Acceso IMAP", selecciona Habilitar IMAP.
    Haz clic en Guardar cambios.
`,
                    text:"La primera configuración importante es configurar tu cuenta para que permita ser usada por la APP que desarrollamos, habilitando IMAP."
                },{
                    cod:`Servidor de correo saliente (SMTP) 	

smtp.gmail.com

Requiere SSL: Sí

Requiere TLS: Sí (si está disponible)

Requiere autenticación: Sí

Puerto para SSL: 465

Puerto para TLS/STARTTLS: 587`,
                    text:"Esta es la configuración que requiere tu APP para que gmail permita que se conecte a esta cuenta. Incluso, hay más información de la que necesitamos. Sin embargo es muy probable, que esto siga siendo insuficiente, ¿por qué? Gmail puede rechazar peticiones si provienen de apps poco fiables, como las que desarrollamos de forma independiente. Hay un tercer paso"
                },{
                    cod:`Aplicaciones poco seguras y la cuenta de Google

Si una aplicación o un sitio web no cumple con nuestros estándares de seguridad, podemos bloquear 
el acceso a los usuarios que intenten iniciar sesión en tu cuenta desde esa aplicación o ese sitio. 
Las aplicaciones poco seguras pueden facilitar el acceso de los hackers a tu cuenta, 
por lo que bloquear los inicios de sesión procedentes de estas aplicaciones 
contribuye a proteger la cuenta.`,
                    text:"Te dejo el link que te permitirá habilitar las Apps poco seguras. (Por esto me abrí una cuenta distinta para usar este servicio). Dejo el link de donde desbloquear APPs poco seguras."
                }
            ],
            url:"https://support.google.com/accounts/answer/6010255"            
        },
        segundo:{
            title: "Código de NodeMailer",
            defBreve:"Y ahora la parte fácil, cómo implementar el código. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper

async function main() {
 
  // create reusable transporter object using the 
  // SMTP Data Google provided before, its in the first Box
 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'example@gmail.com' // process.env.MY_EMAIL,  my personal test email
      pass: process.env.MY_EMAIL_PASSWORD // Personal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"EMAIL - Testing 👻" <example@gmail.com>', // <process.env.MY_EMAIL> sender address
    to: "mymainemail@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  }

main().catch(console.error);`,
                    text:"Este es el código para crear la función que va a poder enviar emails usando tu cuenta GMAIL"
                }
            ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="20/08/2021"/>
            <Subtitle
                subtitle="NodeMailer, Un gran paso!"
                parrafo="NodeMailer es un módulo de Node, no de Express, pero como Express y Node, están tan popularizados, junto todo en este segmento. Voy a enseñaros cómo enviar emails usando una cuenta GMAIL"
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
