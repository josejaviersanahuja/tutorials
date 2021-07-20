import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function ReactSuspense() {
    
    const detalles={
        primero:{
            title: "Lazy-load con IntersectionObserver",
            defBreve:"La finalidad de esta sección es conseguir un LazyLoad. Para ello debemos usar React.Lazy, Suspense y un Intersection Observer. Empecemos por crear un hook que llamaremos isNearScreen donde llamaremos al intersection observer",
            arrayCodigo:[
                {
                    cod:`export default function useIsNearScreen() {
    
    const isNearScreen = useAppSelector((state) => state.isNearScreen)
    const dispatch = useAppDispatch()
    const elementObservar = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
    const element = elementObservar.current

    const callback : IntersectionObserverCallback = (
        entries : IntersectionObserverEntry[]
        ) => {
        const ele = entries[0]
        if(ele.isIntersecting && !isNearScreen){
            dispatch(setIsNearScreen(true))
            observer.disconnect()
            console.log('entro a setear el isnear screen a true');
            
        } else {
            console.log('entro en el else que hago ? ' , ele.isIntersecting);
            
        }
        
    }

    const observer = new IntersectionObserver(callback, {
        rootMargin:'100px' // que cargue cuando este a 100 px del viewport
    })

    if(element) { 
        observer.observe(element) 
    }
        return () => {
            observer && observer.disconnect()
        }
    }, [])



    return {isNearScreen, elementObservar}
    }
                    
                    `,
                    text: "Este código se hizo con redux, pero es intuitivamente escalable a useState. isNearScreen es un estado booleano que se dispara cuando el intersection observer está cerca del elemento con referencia elementObservar."
                },
                {
                    cod:` const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)`,
                    text:"El componente que dispara la llamada a la API de trending searches de Giphy es TrendingSearches. Con el Hook, nos evitamos la llamada a la API, pero todo el JAVASCRIPT estaba importado en nuestro file componente. Del mismo modo que en la sección de 'Tricks' de React de este tutorial, importamos de forma dinámica el componente TrendingSearches sólo cuando lo necesitamos. OJO... que cuando lo necesitemos, el import no es instantáneo, asíncrono, por tanto, renderizar el componente sin un condicional típico de las llamadas asíncronas, va a hacer que nuestro componente explote. React, proporciona la solución, se llama Suspense"
                },
                {
                    cod:`<Suspense fallback={<Spinner />}>
    {isNearScreen? <TrendingSearches /> : <Spinner />}
</Suspense>`,
                    text:"Esto significa, que mientras react aún no haya importado el componente TrendingSearches, suspense va a estar renderizando el Spinner, y cuando ya está importado, y el isNearScreen está cerca, podemos llamar al componente y este llama a la API de Giphy."
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
