/****************** parametros opcionales *******************/

//ES5
function myNewFunction(name, age, contry) {
    var name = name || "Raul"
    var age = age || "23"
    var contry = contry || "MX"

    console.log(name, age, contry);
}



//ES6
function myNewFunction2(name = "Miguel", age = 28, contry = "VE") {


    console.log(name, age, contry);
}


myNewFunction();
myNewFunction2();

/* ****************String template******************** */

let hello = "hello";
let world = "world";

//ES5
let frase = "hello" + " " + "world";
console.log(frase);

//ES6
let frase2 = `${hello} ${world}`;
console.log(frase2);


/* ****************String multilinea******************** */

//ES5
let lorem = "esto es un texto muy pero muy largo que...\n"
    + "se tiene que imprimir en dos lineas";
console.log(lorem);

//ES6
let lorem2 = `esto es otro texto muy pero muy largo que...
se tiene que imprimir en dos lineas`
console.log(lorem2);


/* ****************Destructuracion de objetos******************** */

let person = {
    name: "Miguel",
    age: 28,
    contry: "Venezuela"
}

//ES5
console.log(person.name, person.age, person.contry);

//ES6
let { name, age, contry } = person; //NOTA: se pueden usa solo los elementos del objeto que se vayan a usar ejeplo let {name, age} = person; console.log(name, age)
console.log(name, age, contry);




/* ****************Operador de propagacion******************** */

let team1 = ["Juan", "Maria", "Luis"];
let team2 = ["Jose", "Antonio", "Pedro"];

//ES6

let education = ["David", ...team1, ...team2];

console.log(education);




/* ****************Scope (let y const)******************** */

{
    var glabalVar = "globalVar";
}

{
    let glabalLet = "globalLet";
    console.log(glabalLet);  //solo se puede tener acceso en el mismo bloque (scope)
}

console.log(glabalVar);
//console.log(glabalLet); //solo tiene acceso dentro del bloque

const a = "B";

a = "A"; //no se puede reasignar



/* ****************Propiedad de objetos mejorada******************** */

let nombre = "Miguel";
let edad = 29;


//ES5
obj = { mombre: nombre, edad: edad }
console.log(obj);

//ES6
obj2 = { nombre, edad }
console.log(obj2);


/* ****************Arrow funtions******************** */
const names = [
    { nombre: "javier", edad: 33 },
    { nombre: "ana", edad: 31 }
]

//sin arrow
const listOfNames = names.map(function (item) {
    console.log(item.nombre)
});

//arrow functions
const listOfNames2 = names.map(item => console.log(item.nombre));



const listOfNames3 = (nombe, edad, pais) => {
    //boque de codigo
};



const listOfNames4 = nombre => {
    //boque de codigo
};


const square = num => num * num;




/* ***************Promesas******************** */

const helloPromise = () => {
    return new Promise((resolve, reject) => {

        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}


helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


/* ***************Clases******************** */

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }

}


const calc = new Calculator();
console.log(calc.sum(2,7))




/* ***************Modulos******************** */

//ES5
// const importar = require('./module');

//ES6
import { hello } from "./module";


console.log(hello());




/* ***************Generators******************** */

function* helloWorld(){
    if(true){
        yield 'hello';
    }

    if (true) {
        yield 'wolrd';
    }
};


const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);