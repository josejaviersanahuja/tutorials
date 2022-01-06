/* eslint-disable no-useless-escape */

import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function PostgresCommands() {
    
    const detalles={
        primero:{
            title: "Comandos para Tablas.",
            defBreve:"Vamos a ver los comandos para crear tablas y columnas t tipos de datos para postgres.",
            arrayCodigo:[
                {
                    cod:`# paso 1. Una vez conectados a la base de datos que queremos proseguimos con:
// CREATE TABLE table_name (
//     Column name + data type + constraints if any
// )

CREATE TABLE person (
    id int,
    first_name VARCHAR(50),
    LAST_NAME varchar(50),
    gender VARCHAR(6),
    date_of_birth TIMESTAMP,
)
`,
                    text: "Abajo pongo un link para ver la documentación de los data types que tiene postgres. Recomiendo que nos familiaricemos con estos data types. También hay que destacar que esta sintaxis pertenece a una tabla sin constricciones, pero representa una mala práctica trabajar así. El próximo ejemplo no solo tendrá constricciones sino que además será ejecutado en consola."
                },{
                    cod:`# 1. Creamos la base de datos, y la tabla con constrains
zitrojj=# CREATE DATABASE learningtest;
CREATE DATABASE
zitrojj=# \c learningtest
You are now connected to database "learningtest" as user "zitrojj".
learningtest=# CREATE TABLE person(
learningtest(# id BIGSERIAL NOT NULL PRIMARY KEY,
learningtest(# first_name VARCHAR(50) NOT NULL,
learningtest(# last_name VARCHAR(50) NOT NULL,
learningtest(# gender VARCHAR(7) NOT NULL,
learningtest(# date_of_birth DATE NOT NULL );
CREATE TABLE

# 2. leemos los datos de nuestra base de datos
learningtest=# (backslash)d
              List of relations
 Schema |     Name      |   Type   |  Owner
--------+---------------+----------+---------
 public | person        | table    | zitrojj
 public | person_id_seq | sequence | zitrojj
 
 # 3. Pedimos los detalles de nuestra tabla person recientemente creada
 learningtest=# (backslash)d person
                                       Table "public.person"
    Column     |         Type          | Collation | Nullable |              Default
---------------+-----------------------+-----------+----------+------------------------------------
 id            | bigint                |           | not null | nextval('person_id_seq'::regclass)
 first_name    | character varying(50) |           | not null |
 last_name     | character varying(50) |           | not null |
 gender        | character varying(7)  |           | not null |
 date_of_birth | date                  |           | not null |
Indexes:
    "person_pkey" PRIMARY KEY, btree (id)`,
                    text:"Los pasos 2 y 3 son meramentes didacticos para entender que detrás de las constricciones existen parámetros, archivos, y reglas que postgres crea para que las constricciones sirvan de algo en las buenas prácticas."
                }
            ],
            url:"https://www.postgresql.org/docs/14/datatype.html"
        }, segundo:{
            title:"Comandos para INSERT",
            defBreve:"Ahora vamos a crear el código sql para insertar 1 elemento en la tabla",
            arrayCodigo:[
                {
                    cod:`INSERT INTO person (
    first_name,
    last_name,
    gender,
    date_of_birth)
VALUES (
    'Anne',
    'Smith',
    'FEMALE',
    DATE '1988-01-09'
);
`,
                    text:"1. INSERT INTO table ( ... 2. array de columnas a introducir datos ) ... 3. VALUES ( ... array de datos que coincidan con las columnas); Eso es todo. "
                }
            ]
        }, tercero:{
            title:"Comandos SELECT",
            defBreve:"Si INSERT es para introducir datos, SELECT es el comando para leer los datos de una base de datos.",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM person;
//    learningtest=# SELECT * FROM person;
//    id | first_name | last_name | gender | date_of_birth |       email
//    ----+------------+-----------+--------+---------------+-------------------
//        1 | Anne       | Smith     | FEMALE | 1988-01-09    |
//        2 | John       | Baker     | MALE   | 1984-09-27    |
//        3 | Jose       | Sanahuja  | MALE   | 1987-03-27    | zitrojj@gmail.com
//    (3 rows)                    
`,
                    text:"Así obtenemos los datos de las tablas."
                },{
                    cod:`// SELECT (columnas) FROM tabla;
# Podemos seleccionar las columnas que queramos, * solo significa todas las columnas.
# Probemos seleccionar apellidos, fechas de nacimiento e email.

SELECT last_name, date_of_birth, email FROM person;

//  learningtest=# SELECT last_name, date_of_birth, email FROM person;
//   last_name | date_of_birth |       email
//  -----------+---------------+-------------------
//   Smith     | 1988-01-09    |
//   Baker     | 1984-09-27    |
//   Sanahuja  | 1987-03-27    | zitrojj@gmail.com
//  (3 rows)
`,
                    text:"De esta manera podemos seleccionar solo las columnas que nos interesen realmente."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="17/12/2021"/>
            <Subtitle
                subtitle="Comandos para crear tablas y datos."
                parrafo="Ahora vamos a interactuar con postgres para empezar a crear datos y tablas relevantes."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
                language='sql'
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                language='sql'
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                language='sql'
            /> 
        </div>
    )
}
