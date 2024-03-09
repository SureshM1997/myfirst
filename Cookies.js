const cookieParser = require('cookie-parser');

var app=require('express')();
app.use(cookieParser());

app.listen(8083,()=>{
    console.log("Listening !!!");
})

app.get("/cookie",(req,res)=>{
    res.cookie("Name",'Suresh');
    res.cookie('Address','ongole');
    res.status(200).send("Cookie is set");
})

app.get("/cookieget",(req,res)=>{
    res.status(200).send(req.cookies);
})

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to JAVATPoint");
})