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
            title:"Empezamos a usar QUERIES",
            defBreve:"Aprender todas las queries relacionadas a SORTING y FILTER es mucho más potente y eficiente que pedir la información y luego mutar los datos. Aquí es donde todo empieza a ponerse interesante..",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM car ORDER BY make;
// Por defecto lo ordena de forma ascendente.

# Ahora veamos la forma explicita.

learningtest=# SELECT * FROM car ORDER BY make DESC;
learningtest=# SELECT * FROM car ORDER BY make ASC;

# Ahora veamos con doble parámetro.

SELECT * FROM car ORDER BY make, model ASC;
// Este va a ordenar primero por make, y luego por modelo.

// id  |     make      |        model         |  price   
// ------+---------------+----------------------+----------
//   445 | Acura         | CL                   | 58360.85
//   423 | Acura         | Integra              | 26535.16
//   412 | Acura         | Integra              | 19412.79
//   114 | Acura         | Legend               | 50616.55
//   538 | Acura         | Legend               | 71187.65
//   616 | Acura         | Legend               | 23421.98
//   438 | Acura         | RDX                  | 74393.51
//   786 | Acura         | RL                   | 96683.15
//   856 | Acura         | RL                   | 64601.54
//   280 | Acura         | RL                   | 17143.90
//   981 | Acura         | RL                   | 35911.23
//   480 | Acura         | SLX                  | 14628.25
//   499 | Acura         | TL                   | 20839.70
//   992 | Acura         | TSX                  | 24483.86
//   852 | Acura         | TSX                  | 27400.29
//   839 | Acura         | TSX                  | 89258.32
//   953 | Alfa Romeo    | 164                  | 77644.93
//   864 | Aston Martin  | DB9                  | 54816.06
//   752 | Aston Martin  | DB9 Volante          | 58246.71
//   418 | Aston Martin  | DB9 Volante          | 44264.25
//    36 | Aston Martin  | DB9 Volante          | 23156.38
//   832 | Aston Martin  | Rapide               | 29342.45
//   470 | Aston Martin  | V8 Vantage S         | 98230.44
//   980 | Aston Martin  | Virage               | 22690.09
//   286 | Audi          | 100                  | 19952.57
//   766 | Audi          | 200                  | 79318.40
//   314 | Audi          | 200                  | 24604.27
//   218 | Audi          | 200                  | 74560.17
//   712 | Audi          | 200                  | 36214.38

`,
                    text:"Aquí hemos hecho un SORTING. Ahora lo siguiente que hagamos será sacar una lista de todas las marcas de coche."
                },{
                    cod:`SELECT make FROM car;
SELECT make FROM car ORDER BY make;

// Ambos queries me dará un listado de marcas repetidas, una ordenada y la otra no. 

# Lo que queremos es un listado de marcas no repetidas.

SELECT DISTINCT make FROM car ORDER BY make;

// make      
// ---------------
//  Acura
//  Alfa Romeo
//  Aston Martin
//  Audi
//  Bentley
//  BMW
//  Buick
//  Cadillac
//  Chevrolet
//  Chrysler
//  Citroën
//  Daewoo
//  Daihatsu
//  Dodge
//  Eagle
//  Ferrari
//  Ford
//  Geo
//  GMC
//  Honda
//  Hummer
//  Hyundai
//  Infiniti
//  Isuzu
//  Jaguar
//  Jeep
//  Jensen
//  Kia
//  Lamborghini

`,
                    text:"Al usar la palabra DISTINCT evitamos datos repetidos."
                }
            ]
        }, sexto:{
            title:"Filtrado WHERE",
            defBreve:"Seguimos con más queries. Esta vez para filtrar usaremos el WHERE",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM car WHERE make = 'Ferrari';
// id  |  make   |     model      |  price   
// -----+---------+----------------+----------
//     229 | Ferrari | 612 Scaglietti | 21302.73
//     568 | Ferrari | 612 Scaglietti | 99022.72
// (2 filas)`,
                    text:"Todo parece claro. Vamos a complicarlo un poco más."
                },{
                    cod:`SELECT * FROM car WHERE make = 'Ferrari' OR make = 'Audi';
// id  |  make   |     model      |  price   
// -----+---------+----------------+----------
//     8 | Audi    | S6             | 62251.73
//     88 | Audi    | A6             | 92814.88
//     98 | Audi    | RS 4           | 10076.23
// 168 | Audi    | 90             | 49186.57
// 218 | Audi    | 200            | 74560.17
// 229 | Ferrari | 612 Scaglietti | 21302.73
// 286 | Audi    | 100            | 19952.57
// 309 | Audi    | 90             | 90989.87
// 314 | Audi    | 200            | 24604.27
// 342 | Audi    | Cabriolet      | 18065.58
// 344 | Audi    | V8             | 64417.33
// 395 | Audi    | A4             | 72995.18
// 498 | Audi    | 5000S          | 30666.07
// 521 | Audi    | S8             | 20484.41
// 568 | Ferrari | 612 Scaglietti | 99022.72
// 615 | Audi    | A4             | 58999.16
// 631 | Audi    | S6             | 11071.18
// 642 | Audi    | A8             | 59978.34
// 712 | Audi    | 200            | 36214.38
// 715 | Audi    | S6             | 27675.54
// 761 | Audi    | 200            | 13095.28
// 766 | Audi    | 200            | 79318.40
// 943 | Audi    | 4000           | 53207.94
// 961 | Audi    | S4             | 41859.36
// 986 | Audi    | A3             | 78108.61

// También podemos ordenarlo.
SELECT * FROM car WHERE make = 'Ferrari' OR make = 'Audi' ORDER BY make;

`,
                    text:"Podemos unir queries más complejas con los operadores lógicos AND y OR."
                }
            ]
        }, septimo:{
            title:"Limit, Offset y Fetch.",
            defBreve:"Ya hemos visto la importancia de conseguir controlar el número de parámetros de datos que mandamos, paginación y demás. Vamos a aprender a crear queries que hagan eso por nosotros.",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM car LIMIT 5;
// id |    make    |    model     |  price   
// ----+------------+--------------+----------
//     1 | Land Rover | Sterling     | 87665.38
//     2 | GMC        | Acadia       | 17662.69
//     3 | Ford       | F250         | 16819.19
//     4 | Chevrolet  | Sportvan G30 | 31932.31
//     5 | Lexus      | ES           | 92820.92
// (5 filas)
                   
SELECT * FROM car OFFSET 5 LIMIT 5;
//  id |   make    |    model     |  price   
// ----+-----------+--------------+----------
//   6 | Kia       | Sorento      | 41368.24
//   7 | Toyota    | Sienna       | 22861.43
//   8 | Audi      | S6           | 62251.73
//   9 | Subaru    | Justy        | 92998.82
//  10 | Chevrolet | Express 2500 | 10823.69
// (5 filas)

LIMIT no es un comando típico de SQL. FETCH si es el comando adecuado.

SELECT * FROM car OFFSET 5 FETCH FIRST 3 ROW ONLY;
//  id |  make  |  model  |  price   
// ----+--------+---------+----------
//   6 | Kia    | Sorento | 41368.24
//   7 | Toyota | Sienna  | 22861.43
//   8 | Audi   | S6      | 62251.73
// (3 filas)

`,
                    text:"Y ahora ya sabemos cómo vamos a poder crear queries para crear paginación de datos."
                }
            ]
        }, octavo :{
            title:"IN keyword",
            defBreve:"Imagina una query donde buscamos todos los coches de ciertas marcas como VW, Audi y Seat. Vamos a ver cómo usar IN",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM car WHERE make = 'Volkswagen' OR make = 'Audi' OR make = 'Seat';
# Esta query está bien, pero podemos mejorarla con el uso del IN.

SELECT * FROM car WHERE make IN ('Volkswagen', 'Audi', 'Seat');
`,
                    text:"Es muy similar a loops en arrays."
                }
            ]
        }, noveno:{
            title:"BETWEEN keyword",
            defBreve:"Supongamos que buscamos coches que valen entre 20000 y 50000. Cómo lo buscamos?",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM car WHERE price BETWEEN 20000 AND 50000;`,
                    text:"Simple y sencillo. Pero BETWEEN es mucho más poderoso que eso."
                },
                {
                    cod:`SELECT * FROM person WHERE date_of_birth BETWEEN DATE '2000-01-01' AND '2015-01-01';`,
                    text:"También es útil con otros tipos de rangos y de datos. "
                }
            ]
        },decimo:{
            title:"LIKE/ILIKE operador",
            defBreve:"Imagina una búsqueda por caracteres. Por ejemplo, buscamos las marcas que empiezan por c.",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM car WHERE make LIKE 'c%';
// id | make | model | price 
// ----+------+-------+-------
// (0 filas)

 # ahora hagamos la misma búsqueda con C.
 
 SELECT * FROM car WHERE make LIKE 'C%';

//  id  |   make    |      model      |  price   
// -----+-----------+-----------------+----------
//    4 | Chevrolet | Sportvan G30    | 31932.31
//   10 | Chevrolet | Express 2500    | 10823.69
//   11 | Cadillac  | Brougham        | 44556.13
//   20 | Chevrolet | Impala          | 77099.71
//   34 | Chevrolet | S10 Blazer      | 70819.47
                    
`,
                    text:"Es importante aprenderse el significado de algunos caracteres especiales como % que matchea con cualquier cosa. El número de underscore _ indica el número de caracteres con los que debe matchear. Vamos a poner otro ejemplo."
                },{
                    cod:`SELECT * FROM car WHERE make LIKE 'C_______';
// id  |   make   |     model      |  price   
// -----+----------+----------------+----------
//     11 | Cadillac | Brougham       | 44556.13
//     40 | Cadillac | SRX            | 95822.09
//     44 | Cadillac | Eldorado       | 22975.17
//     110 | Cadillac | Escalade ESV   | 53734.69
//     115 | Cadillac | Brougham       | 94893.89
//     131 | Chrysler | Town & Country | 36805.47


`,
                    text:"Fíjate que matchea solo con Chrysler y Cadillac pero no con Chevrolet porque chevrolet tiene una letra más. Ahora, que pasaría si hay marcas que empiezan con minúscula? Sé que no es el caso, pero podría pasar. Entonces se usa ILIKE que es exactamente lo mismo pero ignora o es insensible a las mayúsculas/minúsculas"
                },{
                    cod:`SELECT * FROM car WHERE make ILIKE 'c%';
// id  |   make    |      model      |  price   
// -----+-----------+-----------------+----------
//     4 | Chevrolet | Sportvan G30    | 31932.31
//     10 | Chevrolet | Express 2500    | 10823.69
//     11 | Cadillac  | Brougham        | 44556.13
//     20 | Chevrolet | Impala          | 77099.71
//     34 | Chevrolet | S10 Blazer      | 70819.47
                    
                    `,
                    text:"Esto ya demuestra que ILIKE funciona para ignorar mayúsculas de minúsculas."
                }
            ]
        }, undecimo:{
            title:"GROUP BY",
            defBreve:"Imagina que queremos saber cuántos coches hay de cada marca. Spoiler, vamos a introducir una función muy importante, el COUNT.",
            arrayCodigo:[
                {
                    cod:`SELECT make, COUNT(*) FROM car GROUP BY make;
// make      | count 
// ---------------+-------
//     Ford          |    81
//     Smart         |     1
//     Dodge         |    47
//     Maserati      |     8
//     Infiniti      |    15
//     MINI          |     3
//     Bentley       |     2
//     Jensen        |     2
//     Pontiac       |    37                    `,
                    text:"Podemos agrupar todo según el grupo o añadir incluso más filtros. Vamos a buscar solo las marcas con más de 5 coches. Para eso necesitamos la siguiente palabra clave HAVING."
                }
            ]
        }, duodecimo:{
            title:"HAVING keyword",
            defBreve:"Esta palabra trabaja en conjunto con el GROUP BY y añade filtros extras al agrupamiento.",
            arrayCodigo:[
                {
                    cod:`SELECT make, COUNT(*) FROM car GROUP BY make HAVING COUNT(*) > 5;
// make      | count 
// ---------------+-------
//     Ford          |    81
//     Dodge         |    47
//     Maserati      |     8
//     Infiniti      |    15
//     Pontiac       |    37
//     Plymouth      |     9
                    
                    `,
                    text:"Ahora ya hemos filtrado aún más el agrupamiento."
                }
            ]
        },
        triodecimo:{
            title:"MAX, MIN y AVG",
            defBreve:"Estas son funciones muy usadas cuando uno ordena datos o desea sacar estadísticas. Veamos como usarlas",
            arrayCodigo:[
                {
                    cod:`SELECT MAX(price) FROM car;
// max    
// ----------
// 99975.60
// (1 fila)

# Lo mismo con MIN pero mira lo que sucede con AVG.

SELECT AVG(price) FROM car;
//         avg         
// --------------------
//  55256.657620000000
// (1 fila)

# Para evitar tantos decimales usemos la función ROUND.

SELECT ROUND(AVG(price)) FROM car;
//  round 
// -------
//  55257
// (1 fila)

`,
                    text:"De momento esto esta simple y muy básico, pero vamos a añadir una ligera complejidad. Busquemos los coches más caros de cada marca."
                },{
                    cod:`SELECT make, MAX(price) FROM car GROUP BY make;
// make      |   max    
// ---------------+----------
//     Ford          | 99585.53
//     Smart         | 11363.42
//     Dodge         | 99177.12
//     Maserati      | 91614.85
//     Infiniti      | 98631.25
    
                    `,
                    text:"Como esto es solo introductorio, sigamos adelante, pero dejaré un link para ver más funciones con las que podemos jugar."
                }
            ],
            url:"https://www.postgresql.org/docs/14/functions-aggregate.html"
        },cutradecimo:{
            title:"SUM",
            defBreve:"Imagina que es base de datos representa el stock de una tienda coches y queremos saber el valor de todo el conjunto de coches. Una simple sumatoria de todos los coches.",
            arrayCodigo:[
                {
                    cod:`SELECT SUM(price) FROM car;
//     sum     
// -------------
// 55256657.62
// (1 fila)

# Y si lo agrupamos por marca?

SELECT MAKE,SUM(price) FROM car GROUP BY make;

// make      |    sum     
// ---------------+------------
//  Ford          | 4403497.13
//  Smart         |   11363.42
//  Dodge         | 2519534.66
//  Maserati      |  483722.47
//  Infiniti      |  721326.04
//  MINI          |  129412.72

`,
                    text:"Sigamos con más formas de hacer queries."
                }
            ]
        },
        quintodecimo:{
            title:"Operaciones aritméticas en tablas.",
            defBreve:"Imagina por un momento que nuestro concesionario imaginario entra en una fase de descuento del 50% y los vendedores quieren una tabla extra con el precio ya descontado. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`SELECT *, ROUND(price * .50, 2) FROM car;
// id  |     make      |        model         |  price   |  round   
// ------+---------------+----------------------+----------+----------
//     1 | Land Rover    | Sterling             | 87665.38 | 43832.69
//     2 | GMC           | Acadia               | 17662.69 |  8831.35
//     3 | Ford          | F250                 | 16819.19 |  8409.60
//     4 | Chevrolet     | Sportvan G30         | 31932.31 | 15966.16
//     5 | Lexus         | ES                   | 92820.92 | 46410.46
//     6 | Kia           | Sorento              | 41368.24 | 20684.12
//     7 | Toyota        | Sienna               | 22861.43 | 11430.72
//     8 | Audi          | S6                   | 62251.73 | 31125.87
                                        
`,
                    text:"Ahí ya tenemos lo que buscabamos. ^ el caret sirve para las potencias. ! exclamación para el factorial. % porcentaje para los módulos o residuos. El resto son los operadores básico +, -, * y /."
                }
            ]
        },
        sextodecimo:{
            title:"ALIAS AS",
            defBreve:"Ya hemos visto cómo agregamos columnas en nuestras operaciones, que no tienen nombres y terminan con el nombre de la función que las creó, count, sum, round etc... Con el alias podemos poner el nombre que queramos a la tabla. Mira esto del último ejercicio.",
            arrayCodigo:[
                {
                    cod:`SELECT *, ROUND(price * .50, 2) AS price_with_discount FROM car;
// id  |     make      |        model         |  price   | price_with_discount 
// ------+---------------+----------------------+----------+---------------------
//     1 | Land Rover    | Sterling             | 87665.38 |            43832.69
//     2 | GMC           | Acadia               | 17662.69 |             8831.35
//     3 | Ford          | F250                 | 16819.19 |             8409.60
//     4 | Chevrolet     | Sportvan G30         | 31932.31 |            15966.16
//     5 | Lexus         | ES                   | 92820.92 |            46410.46
//     6 | Kia           | Sorento              | 41368.24 |            20684.12
//     7 | Toyota        | Sienna               | 22861.43 |            11430.72
                                        `,
                    text:"El alias incluso puede sobreescribir el nombre original de la columna."
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
            <DetallesSubtema
                title={detalles.triodecimo.title}
                defBreve={detalles.triodecimo.defBreve}
                arrayCodigo={detalles.triodecimo.arrayCodigo}
                language='sql'
                url={detalles.triodecimo.url}
            /> 
            <DetallesSubtema
                title={detalles.cutradecimo.title}
                defBreve={detalles.cutradecimo.defBreve}
                arrayCodigo={detalles.cutradecimo.arrayCodigo}
                language='sql'
            />
            <DetallesSubtema
                title={detalles.quintodecimo.title}
                defBreve={detalles.quintodecimo.defBreve}
                arrayCodigo={detalles.quintodecimo.arrayCodigo}
                language='sql'
            />
            <DetallesSubtema
                title={detalles.sextodecimo.title}
                defBreve={detalles.sextodecimo.defBreve}
                arrayCodigo={detalles.sextodecimo.arrayCodigo}
                language='sql'
            />
        </div>
    )
}
