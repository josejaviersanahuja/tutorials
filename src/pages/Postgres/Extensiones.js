/* eslint-disable no-useless-escape */

import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Extensiones() {
    
    const detalles={
        primero:{
            title: "Extensiones disponibles.",
            defBreve:"Vamos a ver todas las extensiones que podemos descargar y usar con POSTGRES.",
            arrayCodigo:[
                {
                    cod:`SELECT * FROM pg_available_extensions;
name        | default_version | installed_version |                                comment                                 
--------------------+-----------------+-------------------+------------------------------------------------------------------------
    lo                 | 1.1             |                   | Large Object maintenance
    isn                | 1.2             |                   | data types for international product numbering standards
    postgres_fdw       | 1.1             |                   | foreign-data wrapper for remote PostgreSQL servers
    intarray           | 1.5             |                   | functions, operators, and index support for 1-D arrays of integers
    refint             | 1.0             |                   | functions for implementing referential integrity (obsolete)
    unaccent           | 1.1             |                   | text search dictionary that removes accents
    pgcrypto           | 1.3             |                   | cryptographic functions
    pg_stat_statements | 1.9             |                   | track planning and execution statistics of all SQL statements executed
    adminpack          | 2.1             |                   | administrative functions for PostgreSQL
    autoinc            | 1.0             |                   | functions for autoincrementing fields
    sslinfo            | 1.2             |                   | information about SSL certificates
    pg_prewarm         | 1.2             |                   | prewarm relation data
    tcn                | 1.0             |                   | Triggered change notifications
    insert_username    | 1.0             |                   | functions for tracking who changed a table
    intagg             | 1.1             |                   | integer aggregator and enumerator (obsolete)
    pg_buffercache     | 1.3             |                   | examine the shared buffer cache
    tablefunc          | 1.0             |                   | functions that manipulate whole tables, including crosstab
    dict_xsyn          | 1.0             |                   | text search dictionary template for extended synonym processing
    amcheck            | 1.3             |                   | functions for verifying relation integrity
    ltree              | 1.2             |                   | data type for hierarchical tree-like structures
    tsm_system_rows    | 1.0             |                   | TABLESAMPLE method which accepts number of rows as a limit
    dict_int           | 1.0             |                   | text search dictionary template for integers
    bloom              | 1.0             |                   | bloom access method - signature file based index
    uuid-ossp          | 1.1             |                   | generate universally unique identifiers (UUIDs)
    hstore             | 1.8             |                   | data type for storing sets of (key, value) pairs
    pg_freespacemap    | 1.2             |                   | examine the free space map (FSM)
    earthdistance      | 1.1             |                   | calculate great-circle distances on the surface of the Earth
    pageinspect        | 1.9             |                   | inspect the contents of database pages at a low level
    pgstattuple        | 1.5             |                   | show tuple-level statistics
    file_fdw           | 1.0             |                   | foreign-data wrapper for flat file access
    moddatetime        | 1.0             |                   | functions for tracking last modification time
    old_snapshot       | 1.0             |                   | utilities in support of old_snapshot_threshold
    cube               | 1.5             |                   | data type for multidimensional cubes
    btree_gist         | 1.6             |                   | support for indexing common datatypes in GiST
    citext             | 1.6             |                   | data type for case-insensitive character strings
    tsm_system_time    | 1.0             |                   | TABLESAMPLE method which accepts time in milliseconds as a limit
    pg_visibility      | 1.2             |                   | examine the visibility map (VM) and page-level visibility info
    xml2               | 1.1             |                   | XPath querying and XSLT
    plpgsql            | 1.0             | 1.0               | PL/pgSQL procedural language
    pg_trgm            | 1.6             |                   | text similarity measurement and index searching based on trigrams
    fuzzystrmatch      | 1.1             |                   | determine similarities and distance between strings
    dblink             | 1.2             |                   | connect to other PostgreSQL databases from within a database
    seg                | 1.4             |                   | data type for representing line segments or floating-point intervals
    pgrowlocks         | 1.2             |                   | show row-level locking information
    pg_surgery         | 1.0             |                   | extension to perform surgery on a damaged relation
    btree_gin          | 1.3             |                   | support for indexing common datatypes in GIN
   (46 filas)
                       

`,
                    text: "Algunas de estas extensiones ofrecen caracteristicas muy interesantes. La primera que veremos será uuid-ossp."
                }
            ],
            url:"https://www.postgresql.org/docs/14/datatype-datetime.html"
        }, segundo:{
            title:"Instalar una extension.",
            defBreve:"Vamos a instalar una extension de la forma correcta.",
            arrayCodigo:[
                {
                        cod:`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION
                        
`,
                        text:"Si volvemos a ver las extensiones, esta vez veremos que ya tenemos instalada la que queríamos. También podemos ver las funciones a las que tenemos acceso con el comando (backslash)df."
                }
            ]
        },
        tercero:{
            title:"USANDO UUID",
            defBreve:"Vamos a modificar nuestras tablas para usar UUID.",
            arrayCodigo:[
                {
                    cod:`create table car ( 
	car_uid UUID NOT NULL PRIMARY KEY,
	make VARCHAR(100) NOT NULL,
	model VARCHAR(100) NOT NULL,
	price NUMERIC(19, 2) NOT NULL CHECK (price > 0)
);

create table person (
    person_uid UUID NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	gender VARCHAR(7) NOT NULL,
	email VARCHAR(100),
	date_of_birth DATE NOT NULL,
	country_of_birth VARCHAR(50) NOT NULL,
	car_uid UUID REFERENCES car(car_uid),
	UNIQUE(car_uid),
	UNIQUE(email)
);

-- INSERT INTO PERSON
insert into person (person_uid, first_name, last_name, gender, email, date_of_birth, country_of_birth)
values (uuid_generate_v4(), 'Fernanda', 'Beardon', 'Female', 'fernandab@is.gd', '1953-10-28', 'Comoros');

insert into person (person_uid, first_name, last_name, gender, email, date_of_birth, country_of_birth) 
values (uuid_generate_v4(), 'Omar', 'Colmore', 'Male', null, '1921-04-03', 'Finland');

insert into person (person_uid, first_name, last_name, gender, email, date_of_birth, country_of_birth) 
values (uuid_generate_v4(), 'Adriana', 'Matuschek', 'Female', 'amatuschek2@feedburner.com', '1965-02-28', 'Cameroon');

-- INSERT INTO CAR
insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Land Rover', 'Sterling', '87665.38');
insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'GMC', 'Acadia', '17662.69');
`,
                    text:"Ahora hemos conseguido una forma de mejorar aún más nuestra base de datos. Una gran ventaja de la uuid es que evitamos que los minadores de datos nos ataquen nuestras bases de datos. Otra ventaja es que podemos migrar datos entre distintas bases de datos sabiendo que las ids serán todas distintas."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="18/01/2022"/>
            <Subtitle
                subtitle="Extensiones."
                parrafo="Similar a como VSC tiene extensiones que te ayudan y te ofrecen funcionalidades nuevas, POSTGRES tiene muchas extensiones que nos permite añadir funciones nuevas a nuestra base de datos. Vamos a ver cómo podemos descargarlas, usarlas y veremos alguna que otra que nos van a ayudar."
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
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
