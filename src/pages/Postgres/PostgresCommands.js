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
        }, cuarto:{
            title:"Introducir 1000 personas",
            defBreve:"Hasta ahora hemos visto cómo introducir datos a la base de datos de forma puntual, uno a uno. Ahora vamos a sistematizar parapoder introducir muchos datos a la vez. Dejaré un link más abajo para visitar una página que nos ayudará a generar datos aleatorios.",
            arrayCodigo:[
                {
                    cod:`(backslash)i /home/zitrojj/Desktop/codes/sql/sql-postgres-course/car.sql`,
                    text:"Con ese comando podemos ejecutar todas las instrucciones de un archivo sql."
                }
            ],
            url:"https://www.mockaroo.com/"
        }, quinto:{
            title:"Primary keys",
            defBreve:"Ya tenemos una idea de cómo crear un primary key. En la tabla personas creamos una del tipo BIGSERIAL. Abrá ocasiones donde como administradores de la base de datos, debamos modificar temporalmente las constricciones para introducir manualmente o modificar primary keys viejos obsoletos o caducados. Vamos a aprender a trabajar con las primary keys.",
            arrayCodigo:[
                {
                    cod:`(backslash)d person
                    Tabla «public.person»
Columna    |          Tipo          | Ordenamiento | Nulable  |            Por omisión             
---------------+------------------------+--------------+----------+------------------------------------
id            | bigint                 |              | not null | nextval('person_id_seq'::regclass)
first_name    | character varying(50)  |              | not null | 
last_name     | character varying(50)  |              | not null | 
gender        | character varying(7)   |              | not null | 
date_of_birth | date                   |              | not null | 
email         | character varying(200) |              |          | 
Índices:
"person_pkey" PRIMARY KEY, btree (id)

# el constraint que nos interesa quitar es "person_pkey"

ALTER TABLE person DROP CONSTRAINT person_pkey;
ALTER TABLE
// learningtest=# (backslash)d person
//                                          Tabla «public.person»
//     Columna    |          Tipo          | Ordenamiento | Nulable  |            Por omisión             
// ---------------+------------------------+--------------+----------+------------------------------------
//  id            | bigint                 |              | not null | nextval('person_id_seq'::regclass)
//  first_name    | character varying(50)  |              | not null | 
//  last_name     | character varying(50)  |              | not null | 
//  gender        | character varying(7)   |              | not null | 
//  date_of_birth | date                   |              | not null | 
//  email         | character varying(200) |              |          | 

# ahora ya no tenemos el primary key.
`,
                    text:"De momento parece muy mala idea haber hecho lo que hicimos, pero va a servirnos para aprender a añadir primary keys. Vamos a ello."
                },{
                    cod:`ALTER TABLE person ADD PRIMARY KEY(id);
ALTER TABLE
// learningtest=# (backslash)d person
//                                             Tabla «public.person»
//     Columna    |          Tipo          | Ordenamiento | Nulable  |            Por omisión             
// ---------------+------------------------+--------------+----------+------------------------------------
//     id            | bigint                 |              | not null | nextval('person_id_seq'::regclass)
//     first_name    | character varying(50)  |              | not null | 
//     last_name     | character varying(50)  |              | not null | 
//     gender        | character varying(7)   |              | not null | 
//     date_of_birth | date                   |              | not null | 
//     email         | character varying(200) |              |          | 
// Índices:
//     "person_pkey" PRIMARY KEY, btree (id)
     `,
                    text:"En muchas ocasiones se construyen las PRIMARY KEYS con una mezcla de datos de varias columnas, por eso la función ADD PRIMARY KEY() acepta un array de datos, solo que en este ejemplo, nos basta con la columna id."
                }
            ]
        },sexto:{
            title:"UNIQUE constraint",
            defBreve:"Imagina que en nuestra tabla persona hay 2 o más personas con el mismo email, por algún error o por algún dato mal tomado. Nosotros no queremos que ese error quede registrado en la base de datos y por eso una columna como la de email debería tener la restricción de UNIQUE.",
            arrayCodigo:[
                {
                    cod:`ALTER TABLE person ADD CONSTRAINT unique_email UNIQUE(email);
ALTER TABLE

// (backslash)d person
//                                          Tabla «public.person»
//     Columna    |          Tipo          | Ordenamiento | Nulable  |            Por omisión             
// ---------------+------------------------+--------------+----------+------------------------------------
//  id            | bigint                 |              | not null | nextval('person_id_seq'::regclass)
//  first_name    | character varying(50)  |              | not null | 
//  last_name     | character varying(50)  |              | not null | 
//  gender        | character varying(7)   |              | not null | 
//  date_of_birth | date                   |              | not null | 
//  email         | character varying(200) |              |          | 
// Índices:
//     "person_pkey" PRIMARY KEY, btree (id)
//     "unique_email" UNIQUE CONSTRAINT, btree (email)
                    `,
                    text:""
                }
            ]
        }, septimo:{
            title:"CHECK constraint",
            defBreve:"Esto básicamente significa que añadimos una restricción si pasa una condición del tipo booleano. En nuestra tabla persona vamos a asegurarnos que GENDER solo pueda tener valores MALE, FEMALE y PNTS.",
            arrayCodigo:[
                {
                    cod:`ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK(gender = 'FEMALE' OR gender = 'MALE' OR gender = 'PNTS');
ALTER TABLE

`,
                    text:"Ahora nuestra tabla persona no va a aceptar ninguna nueva persona que tenga otro valor en su género."
                }
            ]
        }, octavo:{
            title:"DELETE - WHERE",
            defBreve:"Este comando es el adecuado para borrar o eliminar records de nuestras tablas. Veamos cómo se usa.",
            arrayCodigo:[
                {
                    cod:`DELETE FROM person; // BORRARÁS TODOS LOS RECORDS.
                    
# Lo mejor será usar DELETE con algún filtro
# Similar como en Mongoose usamos deleteMany o deleteOne

DELETE FROM person WHERE country_of_birth = 'Nigeria';

`,
                    text:"Este ejemplo no es funcional para nuestra tabla, pero lo importante es entender que debemos usar el DELETE junto con el WHERE."
                }
            ]
        }, noveno:{
            title:"UPDATE - SET - WHERE",
            defBreve:"Esto nos va a permitir modificar datos de nuestra tabla. Típica operacion de un CRUD. Al igual que con el DELETE, lo mejor será siempre usar este comando con un WHERE para evitar modificar toda la tabla, sino solo aquellas entradas que nos interesen.",
            arrayCodigo:[
                {
                    cod:`UPDATE person SET email='annej@clcworld.com' WHERE id=1;
UPDATE 1
SELECT * FROM person;
//  id | first_name  | last_name | gender | date_of_birth |       email        
// ----+-------------+-----------+--------+---------------+--------------------
//   2 | Jose Javier | Sanahuja  | MALE   | 1988-01-09    | zitrojj@gmail.com
//   1 | Anne        | Smith     | FEMALE | 1988-01-09    | annej@clcworld.com
// (2 filas)

                    `,
                    text:"Ahora ya tenemos la idea completa de cómo crear un CRUD."
                }
            ]
        },decimo:{
            title:"ON CONFLICT DO NOTHING",
            defBreve:"Imagina que estamos operando un CRUD en nuestra base de datos y de repente una operación viola alguna restricción y la base de datos lanza un ERROR. Qué ocurriría con nuestra APP? una excepción seguramente. Pero existen formas para que desde la base de datos de manejen ciertas excepciones. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`# Empecemos por la excepción.

INSERT INTO person (first_name, last_name, gender, date_of_birth, email)
VALUES ('fulano', 'mengano', 'MALE', '1990-01-01', 'zitrojj@gmail.com');
// ERROR:  llave duplicada viola restricción de unicidad «unique_email»
// DETALLE:  Ya existe la llave (email)=(zitrojj@gmail.com)

# Ahora veamos cómo manejar la excepción.

INSERT INTO person (first_name, last_name, gender, date_of_birth, email)
VALUES ('fulano', 'mengano', 'MALE', '1990-01-01', 'zitrojj@gmail.com')
ON CONFLICT (email) DO NOTHING;
INSERT 0 0

`,
                    text:"Esto está genial, pero ten en cuenta que solo sirve para conflictos con restricciones únicas. Los conflictos por restricciones con el CHECK no van a funcionar. Mira más abajo."
                },
                {
                    cod:`
# Si el conflicto se presenta por una restricción no única, no funciona

INSERT INTO person (first_name, last_name, gender, date_of_birth)
VALUES ('fulano', 'mengano', 'MAL', '1990-01-01');
// ERROR:  el nuevo registro para la relación «person» viola la restricción «check» «gender_constraint»
// DETALLE:  La fila que falla contiene (7, fulano, mengano, MAL, 1990-01-01, null).

INSERT INTO person (first_name, last_name, gender, date_of_birth)       
VALUES ('fulano', 'mengano', 'MAL', '1990-01-01') ON CONFLICT (gender) DO NOTHING;
ERROR:  no hay restricción única o de exclusión que coincida con la especificación ON CONFLICT
`,
                    text:"Aquí el conflicto se debe un gender que no está definido y está restringido a FEMALE O MALE o PNTS. Intentamos manejar ese ERROR pero no sirvió."
                }
            ]
        }, undecimo:{
            title:"ON CONFLICT DO UPDATE",
            defBreve:"Esta vez vamos a definir una acción en el caso en que encontremos un conflicto.",
            arrayCodigo:[
                {
                    cod:`INSERT INTO person (first_name, last_name, gender, date_of_birth, email)
VALUES ('fulano', 'mengano', 'MALE', '1990-01-01', 'zitrojj@gmail.com')
ON CONFLICT (email) DO UPDATE SET email= EXCLUDED.email, last_name= EXCLUDED.last_name;
INSERT 0 1

# Qué cambió? el email es el mismo, eso no fue lo que cambió, lo que cambió fue el last name

SELECT * FROM person WHERE email='zitrojj@gmail.com';
 id | first_name  | last_name | gender | date_of_birth |       email       
----+-------------+-----------+--------+---------------+-------------------
  2 | Jose Javier | mengano   | MALE   | 1987-03-27    | zitrojj@gmail.com
(1 fila)

`,
                    text:"Este comando no es tan evidente, pero parece ser que la nueva inserción en conflicto se convierte en el objeto EXCLUDED por tanto al decir haz update y set del last_name por EXCLUDED.last_name terminamos modificando la entrada en conflicto por el dato de la nueva entrada."
                }
            ]
        },duodecimo:{
            title:"Exporting datos a CSV FILES.",
            defBreve:"Por supuesto, los datos de una base de datos podremos recibirlos en distintas formas, y ya sabemos lo importante que es saber trabajar con el FILE SYSTEM. Vamos a crear files en base a los datos que queremos buscar.",
            arrayCodigo:[
                {
                    cod:`(backslash)copy (SELECT * FROM person LEFT JOIN car ON car.car_uid=person.car_uid) TO '/home/zitrojj/Desktop/testcsv.csv' DELIMITER ',' CSV HEADER;
COPY 3
                    `,
                    text:"Esto puede ser algo muy poderoso."
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
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
                url={detalles.cuarto.url}
                language='sql'
            /> 
            <DetallesSubtema
                title={detalles.quinto.title}
                defBreve={detalles.quinto.defBreve}
                arrayCodigo={detalles.quinto.arrayCodigo}
                language='sql'
            />
            <DetallesSubtema
                title={detalles.sexto.title}
                defBreve={detalles.sexto.defBreve}
                arrayCodigo={detalles.sexto.arrayCodigo}
                language='sql'
            /> 
            <DetallesSubtema
                title={detalles.septimo.title}
                defBreve={detalles.septimo.defBreve}
                arrayCodigo={detalles.septimo.arrayCodigo}
                language='sql'
            /> 
            <DetallesSubtema
                title={detalles.octavo.title}
                defBreve={detalles.octavo.defBreve}
                arrayCodigo={detalles.octavo.arrayCodigo}
                language='sql'
            /> 
            <DetallesSubtema
                title={detalles.noveno.title}
                defBreve={detalles.noveno.defBreve}
                arrayCodigo={detalles.noveno.arrayCodigo}
                language='sql'
            /> 
            <DetallesSubtema
                title={detalles.decimo.title}
                defBreve={detalles.decimo.defBreve}
                arrayCodigo={detalles.decimo.arrayCodigo}
                language='sql'
            /> 
           <DetallesSubtema
                title={detalles.undecimo.title}
                defBreve={detalles.undecimo.defBreve}
                arrayCodigo={detalles.undecimo.arrayCodigo}
                language='sql'
            />
            <DetallesSubtema
                title={detalles.duodecimo.title}
                defBreve={detalles.duodecimo.defBreve}
                arrayCodigo={detalles.duodecimo.arrayCodigo}
                language='sql'
            />
        </div>
    )
}
