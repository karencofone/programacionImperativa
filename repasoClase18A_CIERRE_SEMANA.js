gastos = [
    [2, 5, 6, 4, 1, 11, 14],
    [22, 45, 56, 64, 81, 1, 4],
    [26, 52, 64, 43, 71, 101, 154],
    [25, 59, 76, 43, 14, 116, 14],
]


// * a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa
// * una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que
// * las matrices comienzan siempre en posición 0.

let sumarSemana = (matriz, semana) => {
    let acc = 0
    for (let j = 0; j < matriz[semana].length; j++) {
        acc += matriz[semana][j]
    }
    return acc
}

//console.log(sumarSemana(gastos, 2));

// * b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el
// * total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que
// * ocurre con las filas, ya que las columnas también comienzan en 0.

let sumarDia = (matriz, dia) => {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        acc += matriz[i][dia]
    }
    return acc
}

//console.log(sumarDia(gastos, 3));

// * c) Por último, es necesario tener el total de gastos realizados en el matriz.

let sumarmatriz = (matriz) => {
    let acc = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
    }
    return acc
}

//console.log(sumarmatriz(gastos));

// * d) Obtener cuál fue la semana que más gastos se realizaron.

let semanaMax = (matriz) => {
    let acc = 0
    let arrayVacio = []

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acc += matriz[i][j]
        }
        arrayVacio.push(acc)
        acc = 0
    }
    
    return arrayVacio
}

//console.log(semanaMax(gastos));

const gastosSemanales = semanaMax(gastos)

let semanaMax2 = (array) => {
    let mayor = array[0]

    for (let i = 0; i < array.length; i++) {
        if(mayor < array[i]){
            mayor = array[i]
        }
    }

    return mayor
}

//console.log(semanaMax2(gastosSemanales));

// * d.1. Indicar el día que más gastos se realizaron.


let montoMaximoPorDia = (matriz) => {

    let elMayor = matriz[0][0]

    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {
            if(elMayor < matriz[i][j]){
                elMayor = matriz[i][j]
            }
        }

    }
    return elMayor
}

let buscarMayorDia = montoMaximoPorDia(gastos)
console.log(buscarMayorDia);

// * INDICAR QUE NOMBRE DE DÍA DE LA SEMANA FUE EL QUE MÁS GASTOS TUVO

const numADia = (diaNum) => {
    let dia;
    switch(diaNum) {
      case 0:
        dia = 'Lunes'
        break;
      case 1:
        dia = 'Martes'
        break;
      case 2:
        dia = 'Miercoles'
        break;
      case 3:
        dia = 'Jueves'
        break;
      case 4:
        dia = 'Viernes'
        break;
      case 5:
        dia = 'Sabado'
        break;
      case 6:
        dia = 'Domingo'
        break;
    }
  
    return dia;
  }

const devolverDiaMaximo = (matriz) => {
    let diaMaximo = montoMaximoPorDia(matriz);
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] == diaMaximo) {
          return numADia(j);
        }
      }
    }
}

console.log(devolverDiaMaximo(gastos));