import React from 'react'
import 'App.css'
import DetallesSubtema from 'components/DetallesSubtema'
import PublishDay from 'components/PublishDay'
import Subtitle from 'components/Subtitle'

export default function ErroresExceptionesReveladoras() {
    
    const detalles={
        primero:{
            title: "list.sort java.lang.UnsupportedOperationException.",
            defBreve:"Resolviendo un Kata en codewars, me topé con que mi solución, no pasaba el test. voy a dejar tanto el problema como el test en el código. Veamos que sucedió.",
            arrayCodigo:[
                {
                    cod:`// 
package com.zitrojjdev.katas6kyu;

import java.util.*;
import java.util.stream.Collectors;

public class CrackingPin {

    public static List<String> getPins(String observed){
        List<String> result = new ArrayList<>();
        List<String[]> listWithAllOptions = Arrays.stream(observed.split(""))
                .map(dig -> mapAllOptions().get(dig))
                .collect(Collectors.toList());

        int size = listWithAllOptions.size();
        if (size==1) {
            return List.of(listWithAllOptions.get(0)); // SPOILER PROBLEMA
    // SOLUCION REAL
//            return Arrays.stream(listWithAllOptions.get(0))
//                    .sorted()
//                    .collect(Collectors.toList());
        }

        result.addAll(Arrays.asList(listWithAllOptions.get(0)));

        for (int i = 1; i < size; i++) {
            String[] nextOptions = listWithAllOptions.get(i);
            List<String> temp = new ArrayList<>();
            temp.addAll(result);
            for (String r:temp
                 ) {
                for (String s: nextOptions
                ) {
                    result.add(r+s);
                }
            }
        }

        return result.stream()
                .filter(e -> e.length() == size)
                .collect(Collectors.toList());
    }

    private static HashMap<String, String[]> mapAllOptions (){
        HashMap<String, String[]> options = new HashMap<>();
        options.put("1",new String[]{"1", "2", "4"});
        options.put("2",new String[]{"1", "2", "3","5"});
        options.put("3",new String[]{"2", "3", "6"});
        options.put("4",new String[]{"1", "4", "5","7"});
        options.put("5",new String[]{"2", "4", "5","6","8"});
        options.put("6",new String[]{"3","5", "6", "9"});
        options.put("7",new String[]{"4", "7", "8"});
        options.put("8",new String[]{"0","5", "7", "8","9"});
        options.put("9",new String[]{"6", "8", "9"});
        options.put("0",new String[]{"0", "8"});
        return options;
    }

    public static void main(String[] args) {
        List<String> pins = getPins("5");
        System.out.println(pins);
        System.out.println(pins.size());

    }
}
/**
 * Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
 * We followed him to a secret warehouse, where we assume to find all the stolen stuff. 
 * The door to this warehouse is secured by an electronic combination lock. 
 * Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
 *
 * The keypad has the following layout:
 *
 * ┌───┬───┬───┐
 * │ 1 │ 2 │ 3 │
 * ├───┼───┼───┤
 * │ 4 │ 5 │ 6 │
 * ├───┼───┼───┤
 * │ 7 │ 8 │ 9 │
 * └───┼───┼───┘
 *     │ 0 │
 *     └───┘
 * He noted the PIN 1357, but he also said, it is possible that each of the digits he saw 
 * could actually be another adjacent digit (horizontally or vertically, but not diagonally). 
 * E.g. instead of the 1 it could also be the 2 or 4. 
 * And instead of the 5 it could also be the 2, 4, 6 or 8.
 *
 * He also mentioned, he knows this kind of locks. 
 * You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. 
 * That's why we can try out all possible (*) variations.
 *
 * * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
 *
 * Can you help us to find all those variations? It would be nice to have a function, 
 * that returns an array (or a list in Java/Kotlin and C#) 
 * of all variations for an observed PIN with a length of 1 to 8 digits. 
 * We could name the function getPINs (get_pins in python, GetPINs in C#). 
 * But please note that all PINs, the observed one and also the results, must be strings, 
 * because of potentially leading '0's. We already prepared some test cases for you.
 *
 * Detective, we are counting on you!
 */
`,
                    text: "En el código que he comentado, donde se encuentra el problema de mi código, yo totalmente ausente del problema, encontré que ambos códigos generan exactamente el mismo tipo de resultado, pero algo internamente cambia. ¿Entonces cual fue el problema? El problema es desvelado en el testing. Veamos primero el código del testing"
                },{
                    cod:`package com.zitrojjdev.katas6kyu;

import java.util.Arrays;
        import java.util.Comparator;
        import java.util.HashMap;
        import java.util.List;
        import org.junit.Assert;
        import org.junit.Test;
public class CrackingPinTest {
    public static HashMap<String, String[]> expectations = new HashMap<String, String[]>() {
        {
            put("8", new String[]{"5", "7", "8", "9", "0"}); 
            put("11", new String[]{"11", "21", "41", "12", "22", "42", "14", "24", "44"});
            put("369", new String[]{"236", "238", "239", "256", "258", "259", "266", "268", "269", "296", "298", "299", "336", "338", "339", "356", "358", "359", "366", "368", "369", "396", "398", "399", "636", "638", "639", "656", "658", "659", "666", "668", "669", "696", "698", "699"});
        }
    };
    private final static Comparator<String> comp = (s1, s2) -> s1.compareTo(s2);

    @Test
    public void testPins() {
        for (String entered : expectations.keySet()) {
            test(entered, Arrays.asList(expectations.get(entered)), CrackingPin.getPins(entered));
        }
    } // testPins

    private void test(String entered, List<String> expected, List<String> result) {
        // EL problema surgía en la siguiente línea.
        result.sort(comp);
        expected.sort(comp);
        Assert.assertEquals("For observed PIN " + entered, expected, result);
    }

}
`,
                    text:"Después de tanto investigar, dejo link abajo, descubro que la exception que se generaba provenía del testing donde el string entered era '8'. Significa que era el caso donde el size == 1. Pero cual era el problema si después de debugguear, los listados eran iguales? El problema venía al aplicar el método sort() en el testing. Resulta que List.of() Produce una lista no modificable que al hacer sort, genera una excepción. Por tanto, tuve que cambiar la línea List.of, por Arrays.stream(String[]).collect(Collectors.toList()) y con eso se arregló el problema."
                }
            ],
            url:"https://stackoverflow.com/questions/21854353/why-does-collections-sort-throw-unsupported-operation-exception-while-sorting-by"
        }
    }

    return (
        <div className="cuerpo">
            <PublishDay date="14/11/2021"/>
            <Subtitle
                subtitle="Errores reveladores."
                parrafo="Alguien una vez dijo, 'Cuando veas un error en consola, aprende a amarlo, porque es ahí donde podrás aprender a programar'. La idea es simple, existen errores que al resolverse, proveen una enseñanza invaluable. Mientras aprendo Java, espero poder crear un listado largo de estos errores."
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
