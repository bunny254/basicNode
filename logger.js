console.log(__filename);
console.log(__dirname);

const EventEmitter=require('events')
const emitter=new EventEmitter();

const url = "http://localhost:3000";

class Logger extends EventEmitter{
    log(message){
        //Send HTTP request
        console.log(message);
        //Raise an event
        this.emit('messageLogged',{id:1, url:'http://'});
    }
}

module.exports=Logger;
/*function log(message) {
  //send Http request
  console.log(message);
}
module.exports = log;
*/
