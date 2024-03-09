var express=require('express');
var app=express();
app.get('/hello',(req,res)=>{
    res.send("Hello World");
})

var server=app.listen(8000,()=>{
var host=server.address().address;
var port = server.address().port;
console.log(`This is running at ${host} and port at ${port}`);
})