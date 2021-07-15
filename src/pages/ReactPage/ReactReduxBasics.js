import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'

export default function ReactReduxBasics() {
    
    const detalles={
        primero:{
            title: "Conceptos Base. 1- Reducers",
            defBreve:"El poder de redux proviene de 2 principios básicos. 1 el uso de reducers es una lógica muy poderosa para el control de los estados. 2, redux provee de librerías más que testadas y de un developers tool muy poderoso que permite una depuración muy buena de errores en el código. Empecemos",
            arrayCodigo:[
                {
                    cod:"Concepto 1. reducers",
                    text: "reducers es una función que recibe un estado, (y si no, lo inicializa) y una acción. En base a la acción, decide como cambiar el estado. Creemos un reducer"
                },
                {
                    cod:`export const stateReducer = (state = 0, action) => {
    switch (action.type) {
        case "addPayload":
            return state + action.payload
        case "substractPayload":
            return state - action.payload
        default:
            return state
    }
}
export default stateReducer
 /*
 Buenas prácticas. Crear un objeto STATEACTIONS y usar parámetros nombrados es una gran práctica en los reducers.
 Podemos exportarlo para reusarlo en el action creator (veremos más abajo)
 */
export const STATEACTIONS = {
    ADD_PAYLOAD:"addPayload",
    SUBSTRACT_PAYLOAD:"substractPayload"
}
`,
                    text: "Esto se entiende así, la función recibe un estado, y 2 posibles acciones, añadir algo o disminuir algo. ¿Qué es ese algo? Ese algo puede venir en el parametro action, donde normalmente va a ser un objeto de la forma {type: 'addPayload', payload: num}. Hasta el momento no hemos immportado nada de redux ni react-redux ni de redux-thunk"
                },
                {
                    cod:`/* buenas practicas 
Vamos a crear un file system para el control de datos grandes y multiples estados de nuestras aplicaciones.
    folder : states
            folder: actionCreator
            folder: reducers
-------------------------------------
Ahora reducers tendrá archivos stateReducers.js por cada estado de la APP
También un index.js que reunirá todos los reducers de la APP
y en ese index.js empezamos a usar REDDUX.
    */
import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import pedidoReducer from './pedidosReducer'

const reducers = combineReducers({
    pedido: pedidoReducer,
    counter: counterReducer
})

export default reducers
`,
                    text: "Este sistema es muy pedagógico y funcional para trabajos personales. Cuando los proyectos crecen o trabajamos con otro equipo, esta lógica podrá quedar aplastada por otros sistemas o lógicas que requiera nuestra aplicación. Reddux ya aquí nos proporciona como parte de su librería, una función que va a combinar las acciones con sus estados correspondientes, evitando que hayan colapsos entre ellas y evitando que debamos pasar el estado más adelante. Solo al llamar a la acción, redux sabrá qué estado debe cambiar."
                }
            ]
        },
        segundo:{
            title: "2. ACTION CREATORS",
            defBreve:"Aunque la lógica de cómo va a cambiar el estado se va a encontrar en los reducers, debemos crear un código limpio que nos permita explicar lo que queremos hacer y cuándo queremos despachar una acción",
            arrayCodigo:[
                {
                    cod:`/*En la carpeta actionCreator vamos a importar los objetos
STATE_ACTIONS que creamos en los reducers para trabajar con valores renombrados
*/
import { PEDIDOS_ACTION } from '../reducers/pedidosReducer'
import { COUNTER_ACTION } from '../reducers/counterReducer'

/**-----------------------------------------------------------
 *                       PEDIDO ACTIONS
 * --------------------------------------------------------- */

export const addProductToShoppingCart = (product, cuantity) => {
    return (dispatch) => {
        dispatch({
            type: PEDIDOS_ACTION.ADD_PRODUCT,
            payload: [product, {cuantity: parseInt(cuantity)}]
        })
    }
}

export const resetShoppingCart = () => {
    return (dispatch) => {
        dispatch({
            type: PEDIDOS_ACTION.RESET_PEDIDO
        })
    }
}

/**-----------------------------------------------------------
 *                       COUNTER ACTIONS
 * --------------------------------------------------------- */

export const addCounter = () => {
    return (dispatch) => {
        dispatch({
            type: COUNTER_ACTION.ADD
        })
    }
}

export const substractCounter = () => {
    return (dispatch) => {
        dispatch({
            type: COUNTER_ACTION.SUBSTRACT
        })
    }
}
`,
                    text:"Si te fijas, la función dispatch es agnóstica al estado que deseamos cambiar (counter o pedido). Esto ocurre gracias a que redux nos alivia ligeramente la lógica, pero esto no acaba aquí."
                },
                {
                    cod:`import * as actionCreators from './actionCreators/index'

export default actionCreators
`,
                    text:"Esto podría ayudar a entender ligeramente la organización, sinceramente, después de la 2da app que uses reddux, ya no lo usarás, y menos si ya estás acostumbrado a trabajar con parámetros renombrados."
                }
            ]
        },
        tercero:{
            title: "3. STORE",
            defBreve:" createStore y Provider. Ya reddux es lo suficientemente inteligente para saber que cada ACCIÓN está ligada a un solo estado y siendo agnóstico al estado. Pero reddux va más allá, nos crea un además un sitio aíslado donde poder llamar a los estados y sus acciones desde cualquier punto de la APP.",
            arrayCodigo:[
                {
                    cod:`/*En la carpeta state vamos a crear el archivo store.js*/
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
                            
const store = createStore(reducers, {}, applyMiddleware(thunk))
                            
export default store
`,
                    text:"Recuerda que los estados solo fueron inicializados como parámetros en los reducers. El store va a almacenar dichos estados y va a estar asociado a las ACTIONS que creamos. Además, aún queda ver como el store quedará accesible al resto de la APP.Luego veremos que es redux-thunk."
                },
                {
                    cod:`import {Provider} from 'react-redux'
import store from './statesRedux/store';

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
            title: "4. MIDDLEWARE",
            defBreve:"El middleware es otra caja negra que nos va a ayudar a adaptar las funcionalidades normales de reddux con las peculiaridades de React. redux-thunk por ejemplo, nos va a permitir trabajar con funciones asincronas como dispatch. Hay más middlewares por ahí.",
            arrayCodigo:[
                {
                    cod:`/*Veamos nuevamente este archivo*/
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
                            
const store = createStore(reducers, {}, applyMiddleware(thunk))
                            
export default store
`,
                    text:"applyMiddleware es la interface que nos provee redux, y de redux-thunk, obtenemos la funcionalidad deseada."
                }
            ]
        },
        quinto:{
            title: "5. HOOKS",
            defBreve:"La mejor forma de lidiar con estados en React es a través de HOOKS. redux ya provee de estas funcionalidades",
            arrayCodigo:[
                {
                    cod:`import {useSelector} from 'react-redux'
                    
const {pedido, counter} = useSelector(state => state)
// o podemos usar otras formas
const pedido = useSelector(state => state.pedido)                
`,
                    text:"recordemos que el estado es agnótico del código de React y solo aparece 1 vez como parámetro en los reducers. useSelector nos puede devolver todos los estados del store, o 1 en particular."
                },
                {
                    cod:`import { bindActionCreators } from 'redux'
import actionCreators from "../../statesRedux";
import {useDispatch} from 'react-redux'

const dispatch = useDispatch()
const AC = bindActionCreators(actionCreators, dispatch)
`,
                    text:"Aquí es donde se fusionan el actionCreators con los estados que maneja redux."
                }
            ]
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="15/07/2021"/>
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
        </div>
    )
}
