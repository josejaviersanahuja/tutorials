    // no lo dejé en este proyecto porque no soporta typescript pero la idea es estupenda
    /*  */
    import React from 'react'
    import 'App.css'
    import DetallesSubtema from 'components/DetallesSubtema'
    import PublishDay from 'components/PublishDay'
    
    export default function ReactTricks() {
        
        const detalles={
            primero:{
                title: "Importación dinámica",
                defBreve:"Esto es un caso muy particular que surgió en mi proyecto de giphs y stickers. ¿cómo importar una librería (pollyfilm en este caso) si IE 11 no soporta intersection-observer? Vamos a verlo. Ojo, typescript no sirve porque este pollyfilm en particular no soporta typescript.", 
                arrayCodigo:[
                    {
                        cod:`Promise.resolve(
    typeof IntersectionObserver !== undefined ? IntersectionObserver : import ('intersection-observer')
).then(() => {
    observer = new IntersectionObserver(callback, {
        rootMargin:'100px' // que cargue cuando este a 100 px del viewport
    })

    if(element) { 
        observer.observe(element) 
    }
})`,
                        text: "Y se lee así, Promise.resolve va directo al resultado de la resolución de una promesa. Esto nos salta un paso en comparación a new Promise. Luego, si IntersectionObserver no está soportado por el navegador, importamos el pollyfilm que nosotros instalamos en nuestras dependencias del proyecto. Luego realizamos las acciones normales del IntersectionObserver."
                    }
                ]
            }
        }
    
        return (
            <div className="cuerpo">
                <PublishDay date="20/07/2021"/>
                <DetallesSubtema
                    title={detalles.primero.title}
                    defBreve={detalles.primero.defBreve}
                    arrayCodigo={detalles.primero.arrayCodigo}
                />
            </div>
        )
    }
    