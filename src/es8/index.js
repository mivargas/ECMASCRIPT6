/* Objects.entries */
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);

console.log(entries);

console.log(entries.length);


const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana', //trailiing comma (si no hay una elemento despues, la ignora)
}


/* Objects.vulues */
const values =  Object.values(data2);

console.log(values);
console.log(values.length);



/* Padding */

const string = 'hello';
console.log(string.padStart(7, 'hi')) // 5 caracteres de hello + 2 adicionales al inicio son 7
console.log(string.padEnd(12, ' -----')) // 5 caracteres de hello + 7 adicionales al final son 12
console.log('food'.padEnd(12, '  -----')) 




/* async await */


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test error'))
    });
}


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//con majeno de excepciones
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }
    catch(error){
        console.log(error)
    }
}

anotherFunction();