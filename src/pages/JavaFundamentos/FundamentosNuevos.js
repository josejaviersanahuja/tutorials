import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function FundamentosNuevos() {
    
    const detalles={
        primero:{
            title: "Programación Funcional con Java.",
            defBreve:"Vamos a empezar a aprender las bases y fundamentos para entender la programación funcional.",
            arrayCodigo:[
                {
                    cod:`// Function y BiFunction
    //Forma 1
    static Function<Integer, Integer> addOneFunction = arg -> arg + 1;

    //Forma 2
    static Function<Integer, Integer> doubleTheNumber = arg -> {
        // más lógica y codigo
        return arg *2
    };

    // Podemos crear funciones aplicando varias funciones consecutivamente con el andThen
    static Function<Integer, Integer> mixinFunctions = addOneFunction.andThen(doubleTheNumber);
    
    // para ejecutar una función usamos apply
    public static void main(String[] args) {
        System.out.println(
            mixinFunctions.apply(5) // apply para ejecutar
            );
    }

`,
                    text: "Las funciones y bifunciones son muy directas y sencillas de entender. Se permite cerrar con llaves si explicitamente indicamos el return, o si son muy simples, arg -> arg +1; es suficiente.  Dejo el link abajo para que empiecen a aprender los fundamentos de Java de forma gratuita."
                },{
                    cod:`// Consumer y BiConsumer
package functionalinterface;

import java.util.function.BiConsumer;
import java.util.function.Consumer;

public class _Consumer {
    // Ejecutamos los consumers
    public static void main(String[] args) {

        Customer jj = new Customer("JJ", "+34664531802");

        greetCustomerConsumer.accept(jj);

        greetCustomerWithDiscretion.accept(jj, false);
    }

    //Forma 1 de Consumer
    static Consumer<Customer> greetCustomerConsumer =
            customer -> System.out.println("Hello "+ customer.getName() +
                    ". Thanks for registering phone number. Number " +
                    customer.getPhoneNumber());

    //Forma 1 de BiConsumer
    static BiConsumer<Customer, Boolean> greetCustomerWithDiscretion =
            (customer, showPhone) -> System.out.println("Hello "+ customer.getName() +
                    ". Thanks for registering phone number. Number " +
                    (showPhone ? customer.getPhoneNumber() : "************"));


    static class Customer {
        private final String name;
        private final String phoneNumber;
        //**** more code **** //
    }
}
`,
                    text:"El consumer es una function con resultado del tipo void. Es un método que ejecuta algo pero no da resultado. Para ejecutarlo no usamos apply, sino accept"
                },{
                    cod:`// Predicate
package functionalinterface;

import java.util.function.Predicate;

public class _Predicate {
    public static void main(String[] args) {
        String phoneNumber = "1466450x31802";
        System.out.println(isValidNumber.test(phoneNumber));
    }

    //Forma 1
    static Predicate<String> hasRightLength = str -> return str.length() == 11;
    
    //Forma 2
    static Predicate<String> allCharsAreNumbers = str -> {
        boolean result = true;

        for (String c: str.split("")
             ) {
            result = result & "0123456789".contains(c);
        }
      return result;
    };

    static Predicate<String> firstCharCanNotBeZero = str -> !str.split("")[0].equals("0");

    // Los Predicates pueden ser operados con los métodos and o el or
    static Predicate<String> isValidNumber = str ->
            hasRightLength.and(allCharsAreNumbers).and(firstCharCanNotBeZero).test(str);

}
`,
                    text:"El predicate es con las Functions pero que devuelven estrictamente boolean, y se ejecutan con test en vez de apply o accept, y en vez de usar andThen para concatenar, pueden usarse and u or."
                }
            ],
            url:"https://amigoscode.com/p/java-functional-programming"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="08/11/2021"/>
            <Subtitle
                subtitle="Fundamentos Nuevos."
                parrafo="Aquí iré anotando todo contenido nuevo de Java que no haya visto previamente, principalmente estudiaré el paradigma de programación funcional con Java."
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
