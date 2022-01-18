/* eslint-disable no-useless-escape */

import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ForeignKeysAndJoins() {
    
    const detalles={
        primero:{
            title: "RELACIÓN 1 A 1",
            defBreve:"Para definir una relación entre tablas va a ser importante saber si la relación es 1 a 1, 1 a N, N a M. Ahora mismo vamos a definir una relación 1 a 1. En la tabla personas y cars vamos a crear una relación donde una persona solo puede tener un coche y un coche solo puede tener un dueño. En este ejemplo, pueden haber personas sin coches y coches sin dueño.",
            arrayCodigo:[
                {
                    cod:`create table car ( 
    car_uid BIGSERIAL NOT NULL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price NUMERIC(19, 2) NOT NULL CHECK (price > 0)
);

create table person (
    person_uid BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    email VARCHAR(100),
    date_of_birth DATE NOT NULL,
    country_of_birth VARCHAR(50) NOT NULL,
    car_uid BIGINT REFERENCES car(car_uid),
    UNIQUE(car_uid),
    UNIQUE(email)
);
`,
                    text: "Nótese varias cosas. 1. En la tabla coches no tuvimos que definir nada, por eso podemos ejecutar su creación de primero sin miedo a que de error. 2. Definimos la relación 1 a 1 en la tabla persona con 2 líneas de código, la relación en sí que es el foreign key, y con la constricción de que sea único. Vamos a introducir algunos datos y veamos que podemos hacer."
                },{
                    cod:` SELECT * FROM person;
person_uid | first_name | last_name | gender |           email            | date_of_birth | country_of_birth | car_uid 
------------+------------+-----------+--------+----------------------------+---------------+------------------+---------
            1 | Fernanda   | Beardon   | Female | fernandab@is.gd            | 1953-10-28    | Comoros          |        
            2 | Omar       | Colmore   | Male   |                            | 1921-04-03    | Finland          |        
            3 | Adriana    | Matuschek | Female | amatuschek2@feedburner.com | 1965-02-28    | Cameroon         |        
(3 filas)

 SELECT * FROM car;
car_uid |    make    |  model   |  price   
---------+------------+----------+----------
        1 | Land Rover | Sterling | 87665.38
        2 | GMC        | Acadia   | 17662.69
(2 filas)
`,
                    text:"Podemos observar que aún no hemos asignado ningún coche a ninguna persona."
                },{
                    cod:`UPDATE person SET car_uid=1 WHERE person_uid=3;
UPDATE 1

# En la anterior línea introducimos un coche a Adriana, el Land Rover.
# En la siguiente ejecución intentaremos asignar el Land Rover a Fernanda

 UPDATE person SET car_uid=1 WHERE person_uid=1;
ERROR:  llave duplicada viola restricción de unicidad «person_car_uid_key»
DETALLE:  Ya existe la llave (car_uid)=(1).

# No pudimos asignarlo por la restricción UNIQUE car_uid
# La siguiente asignamos el GMC a Fernanda

 UPDATE person SET car_uid=2 WHERE person_uid=1;
UPDATE 1

# Ahora intentemos asignar un coche que no existe a Omar.
 
UPDATE person SET car_uid=3 WHERE person_uid=2;
ERROR:  inserción o actualización en la tabla «person» viola la llave foránea «person_car_uid_fkey»
DETALLE:  La llave (car_uid)=(3) no está presente en la tabla «car».

SELECT * FROM person;
 person_uid | first_name | last_name | gender |           email            | date_of_birth | country_of_birth | car_uid 
------------+------------+-----------+--------+----------------------------+---------------+------------------+---------
          2 | Omar       | Colmore   | Male   |                            | 1921-04-03    | Finland          |        
          3 | Adriana    | Matuschek | Female | amatuschek2@feedburner.com | 1965-02-28    | Cameroon         |       1
          1 | Fernanda   | Beardon   | Female | fernandab@is.gd            | 1953-10-28    | Comoros          |       2
(3 filas)

SELECT * FROM car;
 car_uid |    make    |  model   |  price   
---------+------------+----------+----------
       1 | Land Rover | Sterling | 87665.38
       2 | GMC        | Acadia   | 17662.69
(2 filas)


`,
                    text:"No solo asignamos coches a las personas sino que además vimos el poder de las restricciones y una forma efectiva de definir una relación 1 a 1."
                }
            ]
        }, segundo:{
            title:"INNER JOINS",
            defBreve:"Cuando trabajamos con tablas relacionadas, a veces nos interesa traer más información de las tablas con las que se relacionan. Por ejemplo, imagina que queremos saber qué coche tiene cada quién, en la tabla persona solo sabemos el id, y debemos buscar en la tabla car qué coche corresponde a ese id. Bueno, el JOIN te permite buscar esa información con una sola query. Es cómo si al ver el id, juntara los datos del coche con ese id. Vamos a ello",
            arrayCodigo:[
                {
                        cod:`SELECT first_name, last_name, person.car_uid, make, model, price FROM person JOIN car ON person.car_uid = car.car_uid;
    first_name | last_name | car_uid |    make    |  model   |  price   
    ------------+-----------+---------+------------+----------+----------
    Adriana    | Matuschek |       1 | Land Rover | Sterling | 87665.38
    Fernanda   | Beardon   |       2 | GMC        | Acadia   | 17662.69
    (2 filas)
                       
`,
                        text:"Pudimos usar * en vez de definir las columnas, pero así los datos se ven mejor. El hecho es que con un solo query pudimos seleccionar todas las personas con coche y además saber los detalles del coche."
                }
            ]
        },
        tercero:{
            title:"LEFT JOIN",
            defBreve:"Con el INNER JOIN conseguimos los datos de la intersección entre personas y coches. Pero con el LEFT JOIN queremos conseguir los datos de todas las personas + los datos de los coches de aquellos que poseen un coche.",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM person LEFT JOIN car ON car.car_uid= person.car_uid;
// -[ RECORD 1 ]----+---------------------------
// person_uid       | 3
// first_name       | Adriana
// last_name        | Matuschek
// gender           | Female
// email            | amatuschek2@feedburner.com
// date_of_birth    | 1965-02-28
// country_of_birth | Cameroon
// car_uid          | 1
// car_uid          | 1
// make             | Land Rover
// model            | Sterling
// price            | 87665.38
// -[ RECORD 2 ]----+---------------------------
// person_uid       | 1
// first_name       | Fernanda
// last_name        | Beardon
// gender           | Female
// email            | fernandab@is.gd
// date_of_birth    | 1953-10-28
// country_of_birth | Comoros
// car_uid          | 2
// car_uid          | 2
// make             | GMC
// model            | Acadia
// price            | 17662.69
// -[ RECORD 3 ]----+---------------------------
// person_uid       | 2
// first_name       | Omar
// last_name        | Colmore
// gender           | Male
// email            | 
// date_of_birth    | 1921-04-03
// country_of_birth | Finland
// car_uid          | 
// car_uid          | 
// make             | 
// model            | 
// price            | 

`,
                    text:"Como verás, esta vez si aparecen todas las personas, tengan o no tengan coche. Nota, para ver la info en forma vertical se usa el comando (backslash)x"
                }
            ]
        }, cuarto:{
            title:"DELETE cuando hay un Foreign Key",
            defBreve:"En el ejemplo anterior, imagina que el Land Rover es enviado al desguace y hay que eliminarlo de la tabla car. Qúe va a suceder?",
            arrayCodigo:[
                {
                    cod:`DELETE FROM car WHERE car_uid=1;
ERROR:  update o delete en «car» viola la llave foránea «person_car_uid_fkey» en la tabla «person»
DETALLE:  La llave (car_uid)=(1) todavía es referida desde la tabla «person».
`,
                    text:"El error nos dice que como el coche está asignado a Adriana, No podemos eliminarlo de la tabla coches. ¿Qué hacemos entonces? spolier, usar CASCADE es mala práctica y no lo vamos a estudiar. La respuesta correcta es que hay que ejecutar 2 comandos,"
                },{
                    cod:`UPDATE person SET car_uid= null  WHERE car_uid=1;
DELETE FROM car WHERE car_uid=1;
`,
                    text:"Y esta es la forma correcta de borrar una entrada que está presente como foreign key en otra tabla."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="18/01/2022"/>
            <Subtitle
                subtitle="Foreign key and JOINS."
                parrafo="Hasta el momento hemos aprendido a trabajar con tablas, manipularlas, editarlas, añadir y quitar funcionalidades, comandos incluso queries, pero lo más poderoso de SQL aún está por descubrirse y en esta sección vamos a empezar a ver cómo trabajar con relaciones entre tablas."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                language="sql"
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                language="sql"
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                language="sql"
            />
        </div>
    )
}
