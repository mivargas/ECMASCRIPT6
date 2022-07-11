/* ******************Operador de reposo********************** */

const obj = {
    name: "Miguel",
    age: 28,
    contry: "Venezuela"
};


//let { name, ...all } = obj

//console.log(name, all);

let {contry, ...all} = obj
console.log(all)


//propagacion

const obj1 = {
    name: "Miguel",
    age: 28,
};

const obj2 = {
    ...obj1,
    contry: "Venezuela"
}

console.log(obj2);


/* ******************Promise finally********************** */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test error'))
    });
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finalizo'));


/* ******************regex********************** */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2022-06-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);