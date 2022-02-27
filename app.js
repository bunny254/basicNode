//Function basic node app v8 engine mapped into c++
const sayHello = (name) =>{
    console.log('Hello'+' '+ name);
}
sayHello('Kimani');


//File System Module
//fs module
//require that module
//readdir takes path & function
const fs= require ('fs');
fs.readdir('./', function(err,files){
    if(err) console.log('Error',err);
    else console.log('Files',files);
})

const log =require('./logger')
log('message')

const os= require('os')

const totalMemory=os.totalmem();
const freeMemory=os.freemem();

console.log(`Total Memory:${totalMemory}`);
console.log(`Free Memory:${freeMemory}`);