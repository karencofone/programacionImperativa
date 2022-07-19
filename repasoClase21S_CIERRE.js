
//  * 1 Crear una función que imprima todos
//  * los dígitos decimales, del 0 al 9,
//  * usando un ciclo For.
 

 function mostrarDecimales() {
    
	for (let i = 0; i < 0.91; i = i + 0.01) {
        console.log(i.toFixed(2));
    }
}

//(mostrarDecimales());

// * 2 Crear una función que imprima los números entre el 5 y el 20, saltando de
// * tres en tres.

let de3En3 = () =>{

    for (let i = 5; i <= 20; i+=3) {
        console.log(i);
    }

    
}

//de3En3();

// * 3 Crear una función que imprima la sumatoria de todos los números entre el
// * 0 y el 100.

let sumatoria100 = () => {

    let acc = 0
    for(let i = 0; i <= 100; i++){
        acc+=i
    }
    return acc
}

//console.log(sumatoria100());

// * 4 Crear una función que reciba un string y luego imprimir la cantidad de
// * vocales que se encuentran en dicha frase.

let vocales = (string) => {

    let acc = 0
        for (let j = 0; j < string.length; j++) {
            if(string[j] == "a"){
                acc++
            }
            
            if(string[j] == "e"){
                acc++
            }

            if(string[j] == "i"){
                acc++
            }

            if(string[j] == "o"){
                acc++
            }

            if(string[j] == "u"){
                acc++
            }
        }
        return acc
    }

//console.log(vocales("jorge duje"));

// * 5 Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// * contenido sea igual a la original pero invertida.

let lista = ["papas", "alfajor", "caramelos", "sanguchito", "jamón crudo"]

let invertirLista = (array) =>{

    let listaInvertida = []

    for (let i = array.length - 1; i >= 0; i--) {
        listaInvertida.push(array[i])
    }

    return listaInvertida
}

//console.log(invertirLista(lista));

// * 6 Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// * forma :

// * 1
// * 22
// * 333
// * 4444
// * 55555
// * 666666
// * .......

function piramide(numBases) {
    for (let i = 1; i <= numBases; i++) {
      let acc = "";
      for (let j = 0; j < i ; j++) {
        acc = acc + " " + i; // acc+=i
      }
      console.log(acc) 
    }
  }
  
  piramide(30);