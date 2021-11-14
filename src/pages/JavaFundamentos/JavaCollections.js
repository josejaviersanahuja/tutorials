import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function JavaCollections() {
    
    const detalles={
        primero:{
            title: "Árbol de Collecciones.",
            defBreve:"Existen muchas interfaces y clases en Java que tratan con las Collections. Y lo primero es mostrar de qué hablamos.",
            arrayCodigo:[
                {
                    cod:`interface Collection
interface List, interface Queue, interface Set // todas estas extends Collection

// List Classes (implements List interface)
ArrayList; 
LinkedList; // implements List but also DeQue
Vector;
Stack // extends Vector;

// Queue Classes (implements Queue interface)
PriorityQueue;
interface Deque; // extends Queue
ArrayDeque; // implements Deque

// Set Classes (implements Set interface)
HashSet;
LinkedHashSet;
interface SortedSet; // extends Set
TreeSet; //implements SortedSet

// Aunque Maps no son Collections, vamos a verlos igualmente
interface Map

//Map Classes (implements Map interface)
HashMap;
LinkedHashMap;
Hashtable;
interface SortedMap; // extends Map
TreeMap; // implements SortedMap

`,
                    text: "Si realmente deseas ver las diferencias, te dejo un Link donde puedes estudiarlo en Vídeo, o simplemente busca la documentación oficial. Pero aquí vamos a apuntar, cosas que marquen diferencias notables."
                }
            ],
            url:"https://www.youtube.com/watch?v=GdAon80-0KA"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="14/11/2021"/>
            <Subtitle
                subtitle="Java Colections"
                parrafo="Del mismo modo que dominar la programación funcional en java con streams y demás, lograr maestría con la interface Collections, también va a elevar tu nivel de Java por las nubes.  Aquí no vamos a estudiarlas todas las clases o interfaces, solo vamos a apuntar aquellos datos que realmente marquen la diferencia entre unas y otras. Vamos a ello"
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
            />
            
        </div>
    )
}
