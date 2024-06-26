const Tk = require('./calculation'); 
const http = require('http');

// const server = http.createServer((req,res) => {
//     res.write('good')
// })

// server.listen(() => {

// }, 3000)
const facs = Tk.factorsOf(100)

console.log(facs);

//server

