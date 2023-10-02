/* 1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola 
la suma de los dos números ingresados. */

// let primerNumero = prompt("Ingresa el primer número")
// let segundoNumero = prompt("Ingresa el segundo número")

// primerNumero=Number(primerNumero)
// segundoNumero=Number(segundoNumero)

// suma= primerNumero+segundoNumero
// console.log(suma)

/* 2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la 
frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe 
imprimir en la consola: Hola Juan, grandioso! Tienes 20 años */

// let anio = prompt("Ingrese su año de nacimiento")
// let name = prompt("Ingrese su nombre")
// anio = Number(anio)
// let edadActual = anio - 2023

// console.log(`Hola ${name}, grandioso! Tienes ${edadActual} años.`)

/*3. Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no. */

// let digito = prompt("Ingresa aquí un número")
// digito=Number(digito)

// let multiplo = digito%5

// if (multiplo==0){
//     console.log(`El número ${digito} es múltiplo de 5`)
// }
// else (
//     console.log(`El número ${digito} no es múltiplo de 5`)
// )


/*4. Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola bing.
Si el número es múltiplo de 5 debe imprimir en la consola bong.
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.*/

// let number =prompt("Ingresa aquí un número")
// number= Number(number)


// if(number%3==0 && number%5==0){

//     console.log("Bingbong")
// }

// else if (number%3==0){

//     console.log("Bing")
// }

// else if (number%5==0){

//     console.log("Bong")
// }

// else{
//     console.log(number)
// }

/* 5. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir
 la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces*/

 
//  let frase = prompt("Ingrese aquí su frase")
//  datos= [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  datos.push(frase)


// for (datos.lenght=0;datos.lenght<10;datos.lenght++){
//     console.log(frase)
// }

/* 6. Escribe un programa que le pida al usuario una frase y un número. El programa debe 
imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si 
el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:*/

let frase = prompt("Escribe aquí una frase")
let number = prompt("Escribe aquí un número")
number = Number(number)

datos = {frase:number,}

for (i=0;i<datos.number();i++){
    console.log(frase)
}













 

 





