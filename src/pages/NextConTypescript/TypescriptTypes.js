import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

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
        },
        segundo : {
            title: "Más Types en useState y handleSubmits",
            defBreve:" Acumular experiencia para aprender más sobre typescript ",
            arrayCodigo: [
                {
                    cod: `const [user, setUser] = useState<User | null | undefined>(undefined)`,
                    text: "Previamente quedó definida la interfaz User"
                },
                {
                    cod:`const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
    ): void => {
        e.preventDefault()
        setterState()
    }`,
                    text:"Este ejemplo muestra los types de un submit de un form."
                },
                {
                    cod:` const handleInputClick : React.MouseEventHandler = (
    e : React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const element = e.target as HTMLInputElement
        element.value = ''
    }`,
                    text:"Este ejemplo es un uso que va más allá. No solo gestiona los typos de MouseEvent, también obtenemos un evento ligado a un elemento que puede ser abstracto y complejo, en este caso solo es un input type file, y a ese elemento podemos manipular su value."
                }
            ]
        },
        tercero : {
            title: "Types con FIREBASE",
            defBreve:" Acumular experiencia para aprender más sobre typescript ",
            arrayCodigo: [
                {
                    cod: `interface sendTwitProps {
    user: User;
    textAreaValue: string;
    imgURL?: string | null;
}
                      
export const sendTwit = ({
    user,
    textAreaValue,
    imgURL
    }: sendTwitProps): 
Promise<
    firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> => {
    const twitToStore = {
        user: user,
        content: textAreaValue,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        likes: 0,
        shared: 0,
        imgURL: imgURL
    }
        // console.log(twitToStore, 'en funcion en firebase client')
    return db.collection('twits').add(twitToStore)
}`,
                    text: "Podemos definir correctamente todos los types de firebase ya que ellos lo proveen"
                },
                {
                    cod:`export const uploadImage = (file : File) => {
    const ref = file ? firebase.storage().ref('images/$ {file.name}') : null
    const task : firebase.storage.UploadTask = ref.put(file)
    return task
}`,
                    text:"Más de lo mismo."
                },
                {
                    cod:` const getUser = (user: firebase.User): User => {
    const username: string = user.displayName
    // eslint-disable-next-line camelcase
    const avatar: string = user.providerData[0].photoURL
    const email: string = user.email
    const id: string = user.uid
    const result: User = { avatar, username, email, id }
    return result
}`,
                    text:"Una vez recibimos el usuario autentificado con los servicios de firebase, podemos extraer la información que necesitamos de un objeto que nos devuelve firebase del tipo firebase.User."
                }
            ]
        },
        cuarto:{
            title: "Types useRef",
            defBreve:" Hay 2 formas de usar referencias. Las referencias que usamos para detectar un elemento del DOM (HTML ref properties) o las referencias que son datos, constantes o variables que nos interesan que se salven tras cada renderizado.",
            arrayCodigo: [
                {
                    cod:`const referencia = useRef<boolean>(false)`,
                    text:"Esto hará que referencia.current sea del type boolean"
                },
                {
                    cod:`const referencia = useRef<HTMLHeadingElement>(null)

<div ref={referencia} > objeto div referenciado </div>
`,
                    text:"Esto hará que referencia sea del type que se le pueda asignar a un elemento HTML"
                }
            ]
        }
    }
   
    return (
        <div className="cuerpo">
            <PublishDay date="15/06/2021"/>
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
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
        </div>
    )
}
