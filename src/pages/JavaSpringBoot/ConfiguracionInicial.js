/* eslint-disable no-useless-escape */

import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ConfiguracionInicial() {
    
    const detalles={
        primero:{
            title: "Spring Initializer.",
            defBreve:"Para crear un proyecto con Spring Boot por primera vez, vamos a usar una herramienta online llamaba spring initializer. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`// Prácticamente crearemos un proyecto o plantilla basado en la selección por defecto

// Maven project
// Java Languaje
//SpringBoot 2.5.7 para la fecha del 18/11/21
// Project Metadata por defecto, yo puse que el grupo era com.zitrojjdev pero pongan el que quieran
// Seleccionamos 3 dependencias de la lista enorme que ofrecen.
// 1, Spring Web
// 2, Spring Data JPA
// 3, PostgreSQL Driver
`,
                    text: "Luego de seleccionar lo que mencionamos, le damos a generar, y se genera una carpeta comprimida. La descomprimimos y la abrimos con IntelliJ. Ya hemos creado una App de SpringBoot vacía."
                }
            ],
            url:"https://start.spring.io"
        }, segundo:{
            title:"Vamos a correr la App",
            defBreve:"Tal como se encuentra ahora las dependencias dentro del pom.xml, el paquete de JPA va a dar error porque va a intentar conectarse a una Base de datos que aún no sabemos configurar. Vamos a entrar al pom.xml y comentamos la dependencia spring-boot-starter-data-jpa, refescamos el maven project y ahora intentamos correr el método main.",
            arrayCodigo:[
                {
                    cod:`// El resultado de correr el método main de la DemoApp es levantar el servidor en el puerto 8080.
// Pero al igual que en express, sin ningún endpoint definido, no vamos a encontrar nada en el navegador.
// Ahora el siguiente paso es crear nuestro primer endpoint.                    
`,
                    text:"Vamos con calma, pero sin pausa. Aunque no entendamos mucho el contexto de lo que es Spring Boot, JPA, Hibernates, podemos ir entendiendo poco a poco como funcionan los proyectos de Spring Boot. El pom.xml es similar package.json de un proyecto de node o react."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="18/11/2021"/>
            <Subtitle
                subtitle="Spring Boot"
                parrafo="Aunque previo a Spring Boot, existen conceptos separados que deberíamos aprender como JPA, Hibernate, Spring, vamos a comenzar a estudiar cada uno de ellos poco a poco a medida que vamos aprendiendo el contexto final, que es Spring Boot. Empezaremos con el curso gratuito de Nelson, pero seguramente debamos ir saltando entre temas para seguir cronológicamente, el estudio del backend con Java."
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
