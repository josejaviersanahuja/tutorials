import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function PanResponder() {
    
    const detalles={
        primero:{
            title: "Arrastramos un cuadrado.",
            defBreve:"Vamos a implementar el arrastre de un cuadrado en React Native Es muy sencillo, pero nos va a mostrar una implementación donde usaremos 4 panResponders. Empecemos por ver cuantos handlers existen.",
            arrayCodigo:[
                {
                    cod:`PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        console.log( evt, 'responderGrant');
        console.log(gestureState.dx, gestureState.dy, 'responderGrant');
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
         console.log(evt, 'responderMove');
         console.log(gestureState.dx, gestureState.dy, 'responderMove');
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
         console.log(evt, 'responderRelease');
         console.log(gestureState.dx, gestureState.dy, 'responderRelease');
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
         console.log(evt, 'block native responder');
         console.log(gestureState.dx, gestureState.dy, 'blockNative Responder');
        return true;
      },
    }),
  ).current; 
`,
                    text: "Existen hasta 10 handlers que nos ayudarán a implementar funciones complejas con los toques de los dedos. Algunos son solo activadores de una funcionalidad, aquellos que son de la forma ()=> true. Pero otros si son métodos que se ejecutan cuando un evento es lanzado. Vamos a nuestro ejemplo concreto."
                },{
                    cod:`import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, Dimensions } from 'react-native';

const {height} = Dimensions.get('window');

const PanResponderExample = () => {
    
    // ...   Estados y funciones

    return (
        <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
    )
}`,
                    text:"De aquí quiero señalar que importamos PanResponder, que usamos un useRef como un estado, similar a las animaciones, 'pan' es el nombre de nuestro estado, y va a determinar los movimientos de cuadrado que vamos a mover con el dedo. También como declaramos panResponder.panHandlers dentro del componente que vamos a gestionar con los toques. Continuemos y veamos los estados y las funciones."
                },{
                    cod:`const pan = useRef(new Animated.ValueXY()).current;
`,
                    text:"Al igual que con las animaciones, nuestro estado, el que vamos a cambiar cuando arrastramos el dedo, es una referencia."
                },{
                    cod:`const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        console.log('que pachó');
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y },
        ], {useNativeDriver: false}
      ),
      // next block would be a normal handler for something like a swipe
     // (evnt, gs) => {
     //   console.log('responder move x ', gs.dx);
     //   console.log('responder move y ', gs.dy);
//
     // },
      onPanResponderRelease: () => {
        console.log('release');
        pan.flattenOffset();
      },
    }),
  ).current;
  `,
                    text:"Otra referencia que usamos para crear una clase, new PanResponder.create() que ya vimos más arriba, solo que esta vez creamos 4 handlers. onMoveShouldSetPanResponder, onPanResponderMove, onPanResponderRelease y onPanResponderGrant. Dejo el link para documentar mejor este ejercicio. Pero de momento analicemos este código. Recibe un array donde el primer parámetro es null, el segundo es donde seteamos el nuevo estado y el tercero es una configuración. Digamos que aunque es nuestro código más importante, el que hace todo el trabajo, nos deja más dudas que respuestas. El onResponderGrant, es un requisito para que podamos setear nuevamente el estado inicial a nuestro pan state Y se ejecuta justo en el momento de setear el panResponder, es decir, lo primero que ocurre cuando se inicia el toque, es el pan.setOffset y luego el onResponderMove. Mejor lo explico a parte."
                }
            ],
            url:"https://reactnative.dev/docs/panresponder"           
        },
        segundo:{
          title:"Métodos intrinsecos al Animated ValueXY",
          defBreve:"Al trabajar con gestures, es muy típico usar como estado de cambio un Animated.ValueXY, por eso incluyo este tema en la sección de PanResponders. Vamos a ello.",
          arrayCodigo:[
            {
                  cod:`//setOffset()#
setOffset(offset);
`,
                  text:"Sets an offset that is applied on top of whatever value is set, whether via setValue, an animation, or Animated.event. Useful for compensating things like the start of a pan gesture. Esto quiere decir que el setOffset es un método de nuestro Animated.ValueXY, pero es dentro del método onPanResponderGrant donde se ejecuta. Es un requisito para que no se vuelva loco nuestro gesture. Si no está implementado, no se inicia el gesture."
                },{
                  cod:`// flattenOffset()#
flattenOffset();
`,
                  text:"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged. Esto resetea el valor de nuestro pan state. Este ValueXY tiene muchisimos métodos adicionales, addListeners, getTranslateTransform, getLayout, se ve complejo pero muy útil para implementaciones más complicadas."
                }
          ],
          url:"https://reactnative.dev/docs/animatedvaluexy"
        },
        tercero:{
          title:"Swipe Image con PanResponder",
          defBreve:"La idea es la siguiente, tenemos un arra con datos que mostraremos, digamos url de fotos o una tarjeta, y vamos a crear una especie de Carousel donde podamos cambiar la tarjeta que estamos viendo arrastrando el dedo (swipe) de un lado al otro. ",
          arrayCodigo:[
            {
              cod:`//Lo primero sera definir es estado index
const [index, setIndex] = useState(0)

//Luego vamos a crear el PanResponder

const imagePanResponder = useRef( new PanResponder.create({
  onStartShouldSetPanResponder: ()=> true,

  onPanResponderMove: (evnt, gs)=>{
    console.log('moving')
    console.log(gs.dx, ' este es el parámetro que vamos a observar para el swipe')
  },

  onPanResponderRelease: (evnt, gs)=>{
    console.log('Release')
  }
})).current

//Veamos el componente al que vamos a hacer swipe

<Animated.View 
  {...imagePanResponder.panHandlers}
  src={index}
  style={style.swipable}
>

`,
              text:"Hasta el momento no hemos creado ninguna animación, ni si quiera hemos implementado la funcionalidad del swipe, pero es un bueno momento para comprobar nuestro código. Veamos los console logs cuando arrastramos nuestra tarjeta a la izquierda o a la derecha y confirmemos que todo va bien de momento. Luego continuamos."
            },{
              cod:`//Creamos el Animated.Value que va animar la posición de nuestra tarjeta
const imageXPos = useRef(new Animated.Value(0)).current

// Ahora añadimos el style a nuestro Animated.View component
<Animated.View 
  {...imagePanResponder.panHandlers}
  src={index}
  style={[{left: imageXPos}, style.swipable]}
>

//Ahora modificamos el handler de onPanResponderMove

onPanResponderMove: (evnt, gs)=>{
  imageXPos.setValue(gs.dx)
},
`,
              text:"Ahora es momento de comprobar que la imagen se mueve al mismo tiempo que nuestro dedo."
            },{
              cod:`// en onPanResponderRelease vamos a terminar de animar el swipe 
// Si el swipe fue lo suficientemente largo, terminamos de sacar la imagen de la pantalla,
// Si el swipe fue suave, devolvemos la animación a centrar la tarjeta

onPanResponderRelease: (evnt, gs)=>{
  if( Math.abs(gs.dx) > Dimensions.get('window').width * 0.4) {
    //swipe left or right is determined by the signed of gs.dx
    const direction = Math.sign(gs.dx)

    Animated.timing(imageXPos, {
      // according to the direction
      toValue: direction*width,
      duration:250,
      useNativeDriver:false
    }).start()
  } else {
    Animated.spring(imageXPos, {
      toValue:0,
      useNativeDriver:false
    }).start()
  }
}
              
`,
              text:"Ahora probemos nuestro avance. Ahora debemos tener un swipe completo a la izquierda o a la derecha y un swipe fallido si se arrastra pocoel dedo, ¿qué queda por hacer? Queda por implementar el cambio de estado del index, la animación de entrada de la nueva imagen, y los corner cases (index=0 & index=array.length-1)"
            },{
              cod:`//El mejor lugar para implementar la lógica como entra la nueva imagen, es el callback dentro de start()
...start(()=>{
  handleSwipe(-1*direction)
}) 

const handleSwipe = (direction) => {
  // if cornercases index 0 o index igual al maximo index
  if(!array[index+direction]) {
    //Tras el swipe, devolvemos el swipe back
    Animated.spring(imageXPos, {
      toValue:0,
      useNativeDriver:false
    }).start()
  } else {
    setIndex(prevState=>prevState + direction)
    imageXPos.setValue(direction*width) 
    Animated.spring(imageXPos, {
      toValue:0,
      useNativeDriver:false
    }).start()
  }
}
`,
              text:"Ahora ya debemos tener el swipe completo. Probemoslo. Y el resultado no fue completamente un éxito aun la implementación estuvo bien. Pasó que el useRef no era el mejor método para implementar el PanResponder, ya que el estado index siempre mantenía el mismo valor inicial. Este error me brindó la posibilidad de entender mucho mejor todo el proceso de React Native, pero eso lo comento luego, ahora la solución que pasa por usar useMemo en vez de useRef."
            },{
              cod:`/* eslint-disable prettier/prettier */
import React, {useRef, useState, useMemo} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  View,
  PanResponder,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const array = [
    {
        title:'Card 1',
        color:'lightblue',
    },{
        title:'Card 2',
        color:'lightyellow',
    },{
        title:'Card 3',
        color:'pink',
    },
];

const Swipe = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [index, setindex] = useState(0);

  const imageXPos = useRef(new Animated.Value(0)).current;
  const currentCard = array[index];

  const imagePanResponder = useMemo( () => {
    const handleSwipe = (direction) => {
      // if cornercases index 0 o index igual al maximo index
      console.log('we start the second animation are we in a corner case? ', ...);
      if (!array[index + direction]) {
         console.log('this is a corner case  ');
        //Tras el swipe, devolvemos el swipe back
        Animated.spring(imageXPos, {
          toValue:0,
          useNativeDriver:false,
        }).start();
      } else {
        console.log('this is not a corner case so, the current index is $ {index} and the next index should be $ {index + direction}');
        setindex(index + direction);
        imageXPos.setValue(direction * width);
        Animated.spring(imageXPos, {
          toValue:0,
          useNativeDriver:false,
        }).start();
      }
    };
    return new PanResponder.create({
    onStartShouldSetPanResponder: ()=> true,

    onPanResponderMove: (evnt, gs)=>{
      // console.log('moving');
      // console.log(gs.dx, ' este es el parámetro que vamos a observar para el swipe');
      imageXPos.setValue(gs.dx);
    },

    onPanResponderRelease: (evnt, gs)=>{
      console.log('onRelease the index value is: ', index);
      const direction = Math.sign(gs.dx);
      if ( Math.abs(gs.dx) > width * 0.4) {
        //swipe left or right is determined by the signed of gs.dx
        console.log('swipe succeded on direction ', direction);
        Animated.timing(imageXPos, {
          // according to the direction
          toValue: direction * width,
          duration:250,
          useNativeDriver:false,
        }).start(()=>{
            handleSwipe(-1 * direction);
        });
      } else {
        console.log('swipe didnt succeded ');
        Animated.spring(imageXPos, {
          toValue:0,
          useNativeDriver:false,
        }).start();
      }
    },
    onPanResponderGrant: (evnt, gs)=>{
        console.log('on Grant the index value is',index);
    },
  });}, [index, imageXPos]);



  console.log(index);
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={style.layout}>
          <Animated.View
            {...imagePanResponder.panHandlers}
            style={[{left:imageXPos},style.card, {backgroundColor:currentCard.color}]}
          >
            <Text style={style.text}>{currentCard.title} of {array.length}</Text>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Swipe;

const style = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height,
  },
  card: {
    marginBottom: 50,
    width:width,
    height:200,
    alignItems:'center',
    position:'relative',
  },
  text:{
    fontSize: 30,
    fontWeight: '700',
  },
});
`,
              text:"Y ahora ya tenemos nuestro swipe correctamente implementado."
            }
          ]
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="06/09/2021"/>
            <Subtitle
                subtitle="Manejo de Gestures en React Native"
                parrafo="PanResponder es la forma nativa que tiene React Native de manejar distintos toques en la pantalla, deslizar, amplizar, reducir o arrastrar la pantalla son cosas que podemos implementar con esta librería nativa de React Native. Vamos a ello"
            />
            <DetallesSubtema
                title={detalles.primero.title}
                defBreve={detalles.primero.defBreve}
                arrayCodigo={detalles.primero.arrayCodigo}
                url={detalles.primero.url}
            />
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                url={detalles.segundo.url}
            />
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
            />
        </div>
    )
}
