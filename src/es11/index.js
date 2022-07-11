const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js")
    module.hello();
})

/* *******************BigInt********************** */
const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);


/* *******************Promise.allSettled y Promise.all********************** */

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.all([promise1, promise2, promise3]) //va a ser rechazada en el momento que encuetre una rechazada y ahi va a finalizar (a diferencia de allSettled)
    .then(responese => console.log(responese))
    .catch(error => console.log(error));



Promise.allSettled([promise1, promise2, promise3]) //devuelve una promesa que se resuelve despues de que todas la promesas se hayan resuelto o rechazado devolviendo tambien el resultado de cada promesa
    .then(responese => console.log(responese))

/* *******************globalThis********************** */

console.log(window); //no accesible
console.log(globalThis);



/* *******************Nullish coalescing operator (??)********************** */

const foo = null ?? 'default string'; //si el valor a la izquierda es nulo devuelve el de la derecha

console.log(foo);

const foo2 = 'full' ?? 'default string'; // sino es nulo devuelve la derecha 

console.log(foo2);



/* *******************Optional chaining (?.)********************** */

const user = {};

console.log(user?.profile?.user); // con esto la aplicacion no rompe en un error sino que devuelve undefined 

if(user?.profile?.user){
    console.log('email');
}else{
    console.log('fail');
}


