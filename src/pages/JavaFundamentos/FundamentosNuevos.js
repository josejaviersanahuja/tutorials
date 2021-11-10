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
                },{
                    cod:`//Supplier
package functionalinterface;

import java.util.List;
import java.util.function.Supplier;

public class _Supplier {

    public static void main(String[] args) {
        System.out.println(
            urlSupplier.get()
        );
    }

    static Supplier<List<String>> urlSupplier =
            () -> List.of(
                    "https://zitrojj.vercel.app",
                    "https://tutorials-vert.vercel.app"
            );
}
`,
                    text:"El supplier es como una función sin argumentos."
                }
            ],
            url:"https://amigoscode.com/p/java-functional-programming"
        },
        segundo:{
            title:"Streams",
            defBreve:"Al ejecutar el comando stream, vamos a empezar a trabajar con programación funcional o declarativa. Esto es el núcleo de la programación funcional en Java. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:` //Streams
List<Person> myFamily = List.of(
    new Person("Pedro", 62, MALE),
    new Person("Mirla", 61, MALE),
    new Person("Nany", 35, MALE),
    new Person("JJ", 34, MALE),
    new Person("JM", 7, MALE),
    new Person("JA", 1, MALE)
);

myFamily.stream()
        .map(person -> person.name) // genera transforma la lista de person a lista de string
        .collect(Collectors.toSet())// genera un set en base a los items de la lista, toList, toCollection(TreeSet::new)
        .forEach((name) -> System.out.println(name))
        // al igual que en javascript, una función del tipo arg=>function(arg) 
        // se puede escribir de la forma function
        
        //en Java sería así
        //.forEach(System.out::println)

// mapToInt, seguro que los tipos primitivos deben tratarse de forma especial.
myFamily.stream()
        .mapToInt(person -> person.age) 
        .forEach(System.out::println)

//myFamily.stream()
//    .map(Function) 
//    .collect()
//    .forEach(Consumer)

                    `,
                    text:"Aquí hemos visto 3 tipos de métodos que vamos a utilizar mucho con los streams. map, forEach son muy similares a los métodos de los arrays en javascript, pero el collect y Collectors es una forma que tiene Java para manejar los tipos estrictos propios del lenguaje, más abajo haré referencia a ellos. Ahora también quiero que se entienda, que lo que estudiamos antes, Functions, Consumers, Suppliers, Predicates, son los argumentos básicos de la programación funcional. OJO, hay más que solo eso."
                },{
                    cod:`// Filter
//myFamily.stream()
//        .filter(Predicate)

myFamily.stream()
        .filter(person -> person.age > 18)
        .forEach(System.out::println)

//Sort
//myFamily.stream()
//        .sorted(Comparator)

myFamily.stream()
        .sorted(Comparator.comparing(person -> person.getAge())) // option 1
        .sorted(Comparator.comparing(Person::getAge)) // option 2
        .sorted(Comparator.comparing(Person::getAge).thenComparing(Person::Gender).reversed()) // option 3
        .collect(Collector.toList())
        .forEach(System.out::println)

//All Match

//myFamily.stream()
//        .allMatch(Predicate)

myFamily.stream()
        .allMatch(person -> person.age > 18) // returns a boolean

//Any Match
//myFamily.stream()
//        .anyMatch(Predicate)

myFamily.stream()
        .anyMatch(person -> person.age > 18) // returns a boolean

//None Match
//myFamily.stream()
//        .noneMatch(Predicate)

myFamily.stream()
        .noneMatch(person -> person.age > 18) // returns a boolean

//Max
//myFamily.stream()
//        .max(Comparator)
//        .ifPresent(Consumer)

myFamily.stream()
        .max(Comparator.comparing(person -> person.getAge())) // option 1
        .ifPresent(System.out::println)

//Min
//myFamily.stream()
//        .min(Comparator)
//        .ifPresent(Consumer)

myFamily.stream()
        .min(Comparator.comparing(person -> person.getAge())) // option 1
        .ifPresent(System.out::println)

// Grouping
Map<Gender,List<Person>> byGender = 
                myFamily.stream()
                .collect(Collectors.groupingBy(Person::Gender));
                
`,
                    text:"Recomiendo estudiar en profundidad la interface Comparator."
                },{
                    cod:`//Collectors API
    // Accumulate names into a List
     List<String> list = people.stream().map(Person::getName).collect(Collectors.toList());

     // Accumulate names into a TreeSet
     Set<String> set = people.stream().map(Person::getName).collect(Collectors.toCollection(TreeSet::new));

     // Convert elements to strings and concatenate them, separated by commas
     String joined = things.stream()
                           .map(Object::toString)
                           .collect(Collectors.joining(", "));

     // Compute sum of salaries of employee
     int total = employees.stream()
                          .collect(Collectors.summingInt(Employee::getSalary)));

     // Group employees by department
     Map<Department, List<Employee>> byDept
         = employees.stream()
                    .collect(Collectors.groupingBy(Employee::getDepartment));

     // Compute sum of salaries by department
     Map<Department, Integer> totalByDept
         = employees.stream()
                    .collect(Collectors.groupingBy(Employee::getDepartment,
                                                   Collectors.summingInt(Employee::getSalary)));

     // Partition students into passing and failing
     Map<Boolean, List<Student>> passingFailing =
         students.stream()
                 .collect(Collectors.partitioningBy(s -> s.getGrade() >= PASS_THRESHOLD));`,
                    text:"Aquí he reunido una serie de collectors que seguramente van a sernos útiles a lo largo de nuestra vida de programadores Java."
                }
            ],
            url:"https://www.youtube.com/watch?v=f5j1TaJlc0w"
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
            <DetallesSubtema
                title={detalles.segundo.title}
                defBreve={detalles.segundo.defBreve}
                arrayCodigo={detalles.segundo.arrayCodigo}
                url={detalles.segundo.url}
            />
            
        </div>
    )
}
