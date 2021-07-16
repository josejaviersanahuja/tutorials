import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function ReactReduxAdvanced() {
    
    const detalles={
        primero:{
            title: "Advanced and modern Redux. 1 createSlice",
            defBreve:"Una vez entendemos los fundamentos del patrón lógico que hay detrás de redux, actualicemos nuestra información y usemos redux de la forma correcta y moderna",
            arrayCodigo:[
                {
                    cod:"Concepto 1. createSlice y nuevo file system Features",
                    text: "El file system ahora va a cambiar, recuerda que es una convención. En el patrón que mencioné en el basic, cuando entrabas a ver cualquier archivo dentro de state, nunca podías  ver algo llamado const state = ... en cambio encontramos un montón de lógica en cada archivo. Puede tener mayor sentido ver a cada archivo como una colección de características de cada estado (features)"
                },
                {
                    cod:`dentro de feature, creamos una carpeta con el estado counter.
ahí crearemos un archivo que llamaremos counter-slice
`,
                    text:"Ahora vamos a querer toda la lógica, acciones y reducers de un mismo estado dentro de una misma carpeta o incluso dentro de un archivo"
                },
                {
                    cod:`import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value:number
}

const initialState : CounterState = {
    value: 0
}
            
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        }
    }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer
`,
                    text:"Aquí han pasado muchas cosas y ni siquiera hemos usado PayloadAction. Con el createSlice hemos visualizado el nombre del estado, el estado inicial, y las acciones. ELIMINAMOS LOS DISPATCH simplificamos en un objeto mucha lógica. Luego veremos como usar las acciones."
                },
                {
                    cod:`import { createSlice, PayloadAction } from '@reduxjs/toolkit'
---            
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        addPayloadNumber(state, action PayloadAction<number>)
    }
})
`,
                    text:"Así definimos los types de las Actions."
                }
            ]
        },
        segundo:{
            title: "2. configureStore",
            defBreve:"Recordemos que en el patrón anterior este método se llamaba createStore y además usabamos applyMiddleware. Fuera de esto, necesitabamos hacer un archivo donde usar combineReducers. Bueno, todo eso, thunk middleware, combine reducer y createStore están dentro de configureStore. veamos como se usa",
            arrayCodigo:[
                {
                    cod:`/*recomiendan usar dentro de src un carpeta llamada APP y dentro el store.ts*/
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter-slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
        // otherState: otherstateReducer
    }
})

export type AddDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
`,
                    text: "Como adelanté antes, no solo creamos el store, ya viene por defecto con thunk middleware y ahora somos agnósticos a este middleware. combineReducers ya no es necesario. y los export types son una maravilla."
                }
            ]
        },
        tercero:{
            title: "3. Provider",
            defBreve:"Esto si se queda tal cual existía antes",
            arrayCodigo:[
                {
                    cod:`import {Provider} from 'react-redux'
import store from './APP/store';

...

<Provider store={store}>
    <App />
</Provider>
`,
                    text:"Y aquí usamos react-redux por primera vez. La primera funcionalidad de esta dependencia es hacer que los estados de reddux, sean compatibles con el manejo de estados de React."
                }
            ]
        },
        cuarto:{
            title: "4. Hooks",
            defBreve:"Este paso es solo para desarrollo con typescript. Vamos a combinar los hooks de redux con los types de nuestra app",
            arrayCodigo:[
                {
                    cod:`/*creamos el archivo hooks dentro de la carpeta APP*/
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
`,
                    text:"Lo que adelanté, este paso es muy útil para typescript users."
                }
            ]
        },
        quinto:{
            title: "5. Usar toda esta configuración con Hooks",
            defBreve:"no es muy distinto de la antigua forma",
            arrayCodigo:[
                {
                    cod:`/*vamos a donde necesitemos el estado*/
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment } from './features/counter/counter-slice'

const count = useAppSelector( (state) => state.counter.value)
const dispatch = useAppDispatch()

dispatch(increment())
`,
                    text:"Así creamos un estado en nuestra app con redux y ejecutamos una acción."
                }
            ]
        },
        sexto:{
            title: "6. createApi y setchBaseQuery",
            defBreve:"Esta es la parte avanzada que machea con el título del primer módulo de esta serie.",
            arrayCodigo:[
                {
                    cod:`/*creamos un stado debe llegar a través de un fetch, en features/gifs/gifs-slice*/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY: *********************

interface Breeds {
    id: string,
    name: string,
    image: {
        url: string
    }
}

export const dogsApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseURL:'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY)
            return headers
        }
    }),
    endpoints(builders) {
        return {
             fetchBreeds: builder.query<Breed[], number|void>({
              query(limit = 10) {
                return '/breeds?limit=$ {limit}'
              } 
             })
        }
    }
})

export const { useFetchBreedsQuery } = dogsApiSlice
`,
                    text:"Un stateSlice sincrono, sería de la forma {name, initialstate, reducers}. Un apiSlice sería de la forma {reducerPath, baseQuery, endpoints}. Pero hay que añadir un nuevo hook inteligente y customizado (useFetchBreedsQuery)."
                },
                {
                    cod:`/*volvamos al archivo store y vamos a añadir un custom Middleware de nuestro apiSlice*/
import {dogsApiSlice} from '../features/dogs-api'
                    ...
export const store = configureStore({
    reducer: {
        counter: counterReducer
        [dogsApiSlice.reducerPath]:dogsApiSlice.reducer 
    }
    , middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dogsApiSlice.middleware)
    }
})
                    `,
                    text:"Hemos configurado una llamada a la API dentro de redux para que se asocie con un nuevo estado. Pero ¿qué herramientas exactamente obtenemos cómo debemos usarlas? "
                },
                {
                    cod:`/*volvamos a la parte de la APP donde necesitemos crear estos datos y vamos a añadir un custom hook de nuestro apiSlice*/
const { data = [], isFetching } = useFetchBreedsQuery()
                    `,
                    text:" (for typescript users) If we hover on data, it will show types Breed[]| void. beautiful"
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="16/07/2021"/>
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
            <DetallesSubtema
                title={detalles.cuarto.title}
                defBreve={detalles.cuarto.defBreve}
                arrayCodigo={detalles.cuarto.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.quinto.title}
                defBreve={detalles.quinto.defBreve}
                arrayCodigo={detalles.quinto.arrayCodigo}
            />
            <DetallesSubtema
                title={detalles.sexto.title}
                defBreve={detalles.sexto.defBreve}
                arrayCodigo={detalles.sexto.arrayCodigo}
            />
        </div>
    )
}
