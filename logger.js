console.log(__filename);
console.log(__dirname);

const url = "http://localhost:3000";

function log(message) {
  //send Http request
  console.log(message);
}
module.exports = log;
