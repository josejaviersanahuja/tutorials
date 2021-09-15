import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function Animations() {
    
    const detalles={
        primero:{
            title: "Animación de un atributo de estilo.",
            defBreve:"Cambiemos la opacidad de un elemento y veamos como implementarlo. Dejo el link donde encontrarán la documentación más ampliada de este mismo ejemplo.",
            arrayCodigo:[
                {
                    cod:`// Importamos Animated
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  Button,
  Dimensions,
  Animated,
  View,
  Alert,
} from 'react-native';

// Creamos nuestro componente
const AnimationExample = () => {
    
    //... estados y funciones que luego explico
    
    return  (
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView>
            <View style={style.layout}>
              <Animated.Text style={[style.text, {opacity: fadeState}]}>
                Hola
              </Animated.Text>
              <Button title="Fade In View" onPress={fadeIn} />
              <Button title="Fade Out View" onPress={fadeOut} />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
}
`,
                    text: "Empezamos por explicar que vamos a animar el Text, y para eso debemos usar Animated.Text. Existen 2 funciones y u estado que vamos a explicar en detalle, hablo de fadeState, fadeIn y fadeOut"
                },{
                    cod:`const fadeState = useRef(new Animated.Value(0)).current;`,
                    text:"Al parecer la mejor forma de declarar los estados que vamos a mutar durante la animación, es usando useRef. Supongo que tiene que ver a que como es una clase, se crearía un objeto nuevo todo el tiempo en vez de mutar el primero. Sigamos con las funciones"
                },{
                    cod:`const fadeIn = () => {
    // Will change fadeState value to 1 in 5 seconds
    Animated.timing(fadeState, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(({finished}) => {
      // completion callback
      Alert.alert('Ya terminó');
    });
  };`,
                    text:"Aquí quiero destacar varias cosas. Animated.timing es solo una de las posibles funciones. Existen más. Animated.decay, Animated.spring y Animated.timing... Controlan el flujo del tiempo de la animación, similares pero más complejos que las funciones ease, linear, ease-in-out, ncluso alguno similar a Cubic bezier. Luego quiero destacar los parámetros que se le pasa, el estado que va a reflejar la animación, un objeto con el nuevo valor del estado, la duración, y una configuración que dice que la animación es nativa de react native. En TERCER lugar, está start(), sin esto, la animación nunca comenzaría, y recibe un callback como parámetro que controla una acción cuando termina la animación. Cuarto, dicho callback admite un objeto como parámetro, ahí definimos que hacer si la animación termina porque finalizó, o que hacer si termina porque la detuvimos en medio. En este ejemplo solo hemos implementado una animación que termina sola."
                }
            ],
            url:"https://reactnative.dev/docs/animated"           
        }
    }
    return (
        <div className="cuerpo">
            <PublishDay date="06/09/2021"/>
            <Subtitle
                subtitle="Creando animaciones"
                parrafo="Las animaciones en React Native son ligeramente diferentes a las animaciones en React. En este último podemos animar basandonos en un estado o un hook y seteando el nuevo estado o estados en funciones como onClick, onDragAndDrop ect ect. Pero en React Native parece que se manejan con componentes especiales y con clases, ya que usaremos new Animated.Value() y cosas similares. Veamos un Ejemplo"
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
