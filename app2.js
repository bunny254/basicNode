const http= require ('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello Kimani Again!")
        res.end();
    }
    if (req.url==='/api/persons'){
        res.write(JSON.stringify(['Kimani','Allan', 'Harry']))
        res.end();
    }
});


server.listen(3000);
console.log('Listening on port 3000..');