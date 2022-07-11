/* ****************ReplaceAll*********************** */
const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';

const replacedString = string.replace('JavaScript', 'Python');

console.log(replacedString);
//Python es maravilloso, con JavaScript puedo crear el futuro de la web //solo remplaza el primer valor donde encuentre coincidencia.

const replacedString2 = string.replaceAll('JavaScript', 'Python');

console.log(replacedString2);
//Python es maravilloso, con Python puedo crear el futuro de la web //remplaza todos los valores que coincidan.



/* ****************Metodos privados*********************** */

class Message {

    #show(valor){
        console.log(valor);
    }

    get #agrgar(){
        //bloque
    }
}

const message = new Message();
message.show('hola');




/* ****************Metodos privados*********************** */
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(resposne => console.log(resposne)); //se detiene hasta el valor que se resuelva primero los demas los omite y finaliza en el primero que encuentre resuelto


    /* ****************WeakRef*********************** */


    class Anyclass {
        constructor(elem){
            this.ref = new WeakRef(elem); // garantisa que no sea recogido por el garbage collector
        }

        //bloques de codigo
    }


    /* ****************Nuevos operadores*********************** */

    let isTrue = true;
    let isFalse = false;
    console.log(isTrue &&= isFalse);

    let isTrue2 = true;
    let isFalse2 = false;
    console.log(isTrue2 ||= isFalse2);

    let isTrue3 = undefined;
    let isFalse3 = false;
    console.log(isTrue3 ??= isFalse3);