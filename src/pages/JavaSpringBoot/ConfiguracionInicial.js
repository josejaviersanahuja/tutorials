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
                },{
                    cod:`//Dado que en el pom.xml tenemos la dependencia Spring Data JPA, la demoApp va a intentar conectarse a una Base de Datos
// Como no va a conseguir ninguna conexión, ya que nuestra App está vacía de momento, va a lanzar un error y el servidor se va a caer.
// La solución temporal, será comentar dentro del pom.xml la dependencia del JPA.

<!--		<dependency>-->
<!--			<groupId>org.springframework.boot</groupId>-->
<!--			<artifactId>spring-boot-starter-data-jpa</artifactId>-->
<!--		</dependency>-->
`,
                    text:"Ahora podremos levantar el servidor sin errores. El siguiente paso será crear un endpoint sencillo."
                }
            ]
        },
        tercero:{
            title:"Api Layer",
            defBreve:"N-tier Architecture. Este es un modelo de arquitectura que implica separar el código en distintos niveles que se comunican entre sí. En la construcción de este curso, vamos a trabajar con una arquitectura simple que va de Api Layer - Service Layer - Data Acces Layer. Empecemos por el Api Layer",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController // Paso 1.
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

// Paso 2.
	@GetMapping
	public String hello() {
		return "hello my friends";
	}
}
`,
                    text:"Lo poderoso del framework de SpringBoot es que junto a Spring ya nos dan un montón de trabajo adelantado. Solo con poner las anotaciones RestController y GetMapping ya tenemos un endpoint implementado. Existen otras anotaciones como PostMapping, PutMapping, DeleteMapping RequestMapping. Ya las veremos. Ahora pasemos a crear una estructura correcta para nuestra App."
                },{
                    cod:`// Creamos un package student para crear un endpoint api/v1/student
// Creamos la clase Student que será el modelo del objeto student, constructores, getters setters, toString
// Luego creamos la clase StudentController que será físicamente el Api Layer

package com.zitrojjdev.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // Paso 1.
@RequestMapping(path = "api/v1/student") // Paso 2.
public class StudentController {

  
    @GetMapping
    public List<Student> getStudents(){
        List<Student> result = new ArrayList<>();
        result.add(
                new Student(1L, "José Javier", LocalDate.of(1987, Month.MARCH, 27), "zitrojj@gmail.com", 34)
        );
        result.add(
                new Student(2L, "Nany", LocalDate.of(1986, Month.APRIL, 14), "azjj0610@gmail.com", 35)
        );
        result.add(
                new Student(3L, "José Manuel", LocalDate.of(2014, Month.JULY, 05), "josemanuel7yo@gmail.com", 7)
        );
        result.add(
                new Student(4L, "Javier Angel", LocalDate.of(2020, Month.APRIL, 14), "josemanuel7yo@gmail.com", 1)
        );

        return result;
    }
}

`,
                    text:"Esta no es la forma final de nuestro Controller, vamos a seguir refactorizandolo, pero de momento quedemosno con la idea de que estamos construyendo el api layer con las mejores prácticas, separando físicamente el StudentController y su endpoint. Sin embargo, la función getStudents parece más entrar dentro del service layer. Por eso viene una nueva refactorización. Vamos a crear una clase StudentService donde aparecerán estas funciones."
                }
            ]
        },
        cuarto:{
            title:"Service Layer",
            defBreve:"En el Api Layer definimos las rutas de los endpoints y los métodos Get Put Delete y Post, pero en el service layer implementaremos la lógica de las funciones que vamos a devolver. Vamos a ello",
            arrayCodigo:[
                {
                    cod:`package com.zitrojjdev.demo.student;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@Service // para la inyección de dependencias
public class StudentService {
    public List<Student> getStudents(){
        List<Student> result = new ArrayList<>();
        result.add(
                new Student(1L, "José Javier", LocalDate.of(1987, Month.MARCH, 27), "zitrojj@gmail.com", 34)
        );
        result.add(
                new Student(2L, "Nany", LocalDate.of(1986, Month.APRIL, 14), "azjj0610@gmail.com", 35)
        );
        result.add(
                new Student(3L, "José Manuel", LocalDate.of(2014, Month.JULY, 05), "josemanuel7yo@gmail.com", 7)
        );
        result.add(
                new Student(4L, "Javier Angel", LocalDate.of(2020, Month.APRIL, 14), "josemanuel7yo@gmail.com", 1)
        );

        return result;
    }
}

//
// Uno de los inconvenientes con el service layer es la inyección de información al api layer como dependencia
//
// lo que se llama dependency injection
//
// Para conseguirlo, SpringBoot nos facility algunas anotaciones
// @Component
// @Service
//
// Cualquiera de los dos serviría para decirle a la app, que esta clase está disponible para otras clases del paquete.
// @Autowired permite la inyección automática en la clase que lo va a consumir (api layer)
//
`,
                    text:"Esta es de momento la forma que adquiere una función del service layer. Aquí ya adelanto un problema que vamos a tener que solucionar cuando refactoricemos el api layer, y se trata de la inyección de dependencias. Ahora veamos a cómo queda StudentController"
                },{
                    cod:`package com.zitrojjdev.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {

    private final StudentService studentService;

    @Autowired // leer comentarios en StudentService
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents(){
        return studentService.getStudents();
    }
}

//
 // La buena práctica Para construir un APIRestful implica seguir un patrón llamado:
 //
 // N-tier architecture, which is a client-server architecture concept in software engineering
 // where the presentation, processing and data management functions are both logically and physically separated
 //
 // Api layer // Controller representa el api layer
 // Service Layer // Service el service layer
 // Data Acces Layer //
 
 `,
                    text:"Básicamente, hemos instanciado los servicios dentro de nuestro controlador, por eso la necesidad de inyectarlo cómo dependencia. No es buena práctica instanciarlo con new StudentService. "
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
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
            
        </div>
    )
}
