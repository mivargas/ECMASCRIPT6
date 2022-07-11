/* ******************flat********************** */

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat()); // un nivel

console.log(array.flat(2)); 


let array2 = [1, 2, 3, 4, 5]

console.log(array2.flatMap(value => [value, value*2]))


/* ******************trimStart y trimEnd********************** */
//trimStart
let hello = '      hello world';
console.log(hello)
console.log(hello.trimStart());

//trimEnd
let hello2 = 'hello world    ';
console.log(hello2)
console.log(hello2.trimStart());


/* ******************Optional catch error********************** */
try{
    //bloque
}catch { // el parametro error es opcional ponerlo porque se asume por si solo
    error
}


/* ******************fromEntries********************** */

let entries = [["name", "Miguel"], ["age", 29]];

console.log(Object.fromEntries(entries)); // pasar de arreglo a objeto { name: 'Miguel', age: 29 }


/* ******************objeto tipo Symbol********************** */

let mySymbol = `my Symbol`; //ver la descripcion de un objeto tipo simbolo
let symbol = Symbol(mySymbol);
console.log(symbol.description)