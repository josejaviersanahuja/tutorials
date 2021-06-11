import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'

export default function TypescriptTypes() {

    const detalles = {
        primero: {
            title: "Como declarar tipos en TypeScript",
            defBreve: "Typescript es un lenguaje muy útil, con todas las bondades de JS y es mucho más legible y documentable. Los JS normales, son relativamente fáciles de transpilar mentalmente a Typescript, pero los jsx, adaptarse a los strict modes del tsx lleva práctica y tiempo. ",
            arrayCodigo: [
                {
                    cod: "children: React.ReactNode || Un componente es un ReactElement || una función handleClick es un MouseEventHandler",
                    text: "Muchos tipos, ya vienen dados por la librería de React."
                },
                {
                    cod: `type TimeLineProps = {
    userName: string;
};
                      
export default function TimeLine({ userName }: TimeLineProps): ReactElement {
    return (
        <>
            <main>
                Lo que se que vaya en el ReactElement                
            </main>
        </>
    )`,
                    text: "Nótese como es una buena práctica escribir las props types justo encima de llamar al componente."
                },
                {
                    cod: `const handleChangeName : React.ChangeEventHandler = (e : React.ChangeEvent<HTMLInputElement>) : void  => {
    e.preventDefault()
    setvalueName(e.target.value)
}`,
                    text: "Un handleChange clásico es un ChangeEventHandler, o se importa desde react, o se importa todo React y se llama como en el ejemplo. ChangeEvent<HTMLInputElement> incluso indica de qué tipo de elemento HTML proviene este evento."
                },
                {
                    cod: ` interface CustomHookLanguage {
    language: string;
    handleChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}`,
                    text: "Lo interesante de esto, es cómo se devuelve una función dentro de una interface."
                }
            ]
        }
    }
   
    return (
        <div className="cuerpo">
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
            />
            
        </div>
    )
}
