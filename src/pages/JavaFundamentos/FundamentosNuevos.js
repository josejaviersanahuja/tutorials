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
        },tercero:{
            title:"Optionals",
            defBreve:"Optionals es una parte valiosa de la programación funcional en Java. Vamos a ver cómo usarla.",
            arrayCodigo:[
                {
                    cod:`package functionalinterface;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public class _Optional {

    public static void main(String[] args) {

        Optional<String> hello = Optional.empty();
        hello = Optional.of("Hello");
        hello = Optional.ofNullable(null); // ofNullable significa que puede ser null o String

        System.out.println(hello.isEmpty());
        System.out.println(hello.isPresent());
        System.out.println(hello);

        String reader = hello.orElse("World");
        // reader = hello.orElseGet(Supplier);
        reader = hello.map(String::toUpperCase)
                .orElse("World");
        System.out.println(reader);

        hello.ifPresentOrElse(System.out::println, ()-> System.out.println("hello era nulo"));
    }
}
`,
                    text:"Su mayor aporte es en métodos donde no esté garantizado el resultado."
                }
            ],
            url:"https://www.youtube.com/watch?v=1xCxoOuDZuU"
        }, cuarto:{
            title:"CombinatorPattern",
            defBreve:"Hasta el momento hemos visto cómo trabajar con funciones y programación funcional, pero no cómo crear nuestras clases y funciones customizadas. Para ello vamos a crear un sistema de validación de usuarios de forma tradicional, y de forma funcional. Vamos a ello.",
            arrayCodigo:[
                {
                    cod:`package combinatorpatttern;

import java.time.LocalDate;

public class Customer {

    private final String name;
    private final String email;
    private final String phoneNumber;
    private final LocalDate dob;

    public Customer(String name, String email, String phoneNumber, LocalDate dob) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.dob = dob;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public LocalDate getDob() {
        return dob;
    }
}
`,
                    text:"Customer es la clase que representa el usuario. Vamos a validar los emails, los números de móbiles, y que sean mayor de edad."
                },{
                    cod:`package combinatorpatttern;

import java.time.LocalDate;
import java.time.Period;

public class CustomerValidatorService {

    private boolean isEmailValid(String email) {
        return email.contains("@");
    }

    private boolean isPhoneNumberValid(String phoneNumber) {
        return phoneNumber.startsWith("+0");
    }

    private boolean isAdult(LocalDate dob) {
        return Period.between(dob, LocalDate.now()).getYears() > 16;
    }

    public boolean isValid(Customer customer) {
        return isEmailValid(customer.getEmail()) &&
                isPhoneNumberValid(customer.getPhoneNumber()) &&
                isAdult(customer.getDob());
    }
}
`,
                    text:"Esta es una validación tradicional. Pero si fallase la validación de un usuario, cómo sabríamos que falló? Vamos a crear un sistema de validación que se implemente de forma funcional. Para ello vamos a crear una interfaz que extienda la de Funciones. Veamos cómo se crea."
                },{
                    cod:`package combinatorpatttern;

import java.time.LocalDate;
import java.time.Period;
import java.util.function.Function;

// clave 2. importamos dinamicamente esta misma clase, para que el tipo resultado 
//            esté definido desde su definición. (enum ValidationResult)
import static combinatorpatttern.CustomerRegistrationValidator.ValidationResult;

// clave 3. Otra importación estática, pero esta vez no es tan importante,
                solo que permite que el código sea mucho más legible
import static combinatorpatttern.CustomerRegistrationValidator.ValidationResult.*;

// clave 1. extender de la función
public interface CustomerRegistrationValidator extends Function<Customer, ValidationResult> {

    //clave 4. todo método es del tipo funcion customer -> ValidationResult
    static CustomerRegistrationValidator isEmailValid() {
        return customer -> {
           // System.out.println("running email validation");
            return customer.getEmail().contains("@") ?
                    SUCCESS : EMAIL_NOT_VALID;
        };
    }

    static CustomerRegistrationValidator isPhoneNumberValid() {
        return customer -> customer.getPhoneNumber().startsWith("+0") ?
                SUCCESS : PHONE_NUMBER_NOT_VALID;
    }

    static CustomerRegistrationValidator isAnAdult() {
        return customer ->
                Period.between(customer.getDob(), LocalDate.now()).getYears() > 16 ?
                        SUCCESS : IS_NOT_AN_ADULT;
    }

    // clave 5. Aquí está la crema del pastel. aquí definimos nuestro operador funcional.
    //                En este caso, difinimos la función and.
    default CustomerRegistrationValidator and (CustomerRegistrationValidator other) {
        return customer -> {
            ValidationResult result = this.apply(customer);
            return result.equals(SUCCESS) ? other.apply(customer) : result;
        };
    }

    default  CustomerRegistrationValidator bolAnd (CustomerRegistrationValidator other) {
        return customer -> {
            return this.apply(customer).equals(IS_NOT_AN_ADULT) ? other.apply(customer): this.apply(customer);
        };
    }

    enum ValidationResult {
        SUCCESS,
        PHONE_NUMBER_NOT_VALID,
        EMAIL_NOT_VALID,
        IS_NOT_AN_ADULT
    }
}
`,
                    text:"Lo más importantes es entender bien la clave 5. definimos una concatenación de funciones definidas en esta clase (CustomerRegistrationValidator) y las concatena con la palabra and, luego pasa por parámetro otra función de esta clase, llamada other. El resultado queda definido dentro del segundo return. El primero es para devolver una función."
                },{
                    cod:`public static void main(String[] args) {
    Customer customer = new Customer(
            "Alice",
            "alice@gmail.com",
            "+0898787879878",
            LocalDate.of(2015, 1,1)
    );

    // Using combinator pattern
    ValidationResult result = isEmailValid()
            .and(isPhoneNumberValid())
            .and(isAnAdult())
            .apply(customer);

    System.out.println(result);
    if (result != ValidationResult.SUCCESS) {
        throw new IllegalStateException(result.name());
    }
    
}`,
                    text:"El resultado que se imprime por consola es alguno de los definidos en el enum. No solo permite validar sino además informar donde falla la validación."
                }
            ]
        }, quinto:{
            title:"Callback com en JS",
            defBreve:"Esto va a ser bastante directo, después de haber visto streams y combinator patterns, esto no contiene conceptos nuevos, así que vamos directo al grano.",
            arrayCodigo:[
                {
                    cod:`
// El callback puede ser Consumer<T> si recibe parámetros
// También puede ser del tipo Runnable si no recibe parámetros.
// En este caso usaremos Consumer<String>
public static Consumer<String> defaultLastName(String name){
    System.out.println("last name was not provided by "+ name);
}

public static void staticFunctionShowNameInConsole(String name, String lastName, Consumer<String> callback){
    System.out.println(name);
    if(lastName == null){
        callback(name);
    } else {
        System.out.println(lastName);
    }
}
public static void main(String[] args){
// ponemos a prueba nuestra función y nuestro callback
    staticFunctionShowNameInConsole("Jose", "Javier", defaultLastName);
    staticFunctionShowNameInConsole("Jose", null, defaultLastName);
}`,
                    text:"Está todo bastante claro. Lo más importantes es entenderque las formas más comunes para crear este tipo de funciones es con Consumer<T> o del tipo Runnable."
                }
            ]
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
            <DetallesSubtema
                title={detalles.tercero.title}
                defBreve={detalles.tercero.defBreve}
                arrayCodigo={detalles.tercero.arrayCodigo}
                url={detalles.tercero.url}
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
