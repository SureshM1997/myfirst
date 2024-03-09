const app=require('express')();

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

app.get("/",(req,res)=>{
    res.send("TEsting");
})

app.get("/help",(req,res)=>{
    res.send("How can I help you !!");
})

app.get("/get",(req,res)=>{
    res.send("Get method");
})

var server=app.listen(8083,()=>{
    var addreess=server.address().address;
    var port=server.address().port;
    console.log("Listening!!!! ${address} ${port} ");
})