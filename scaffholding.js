var app=require('express')();

app.listen(8083,()=>{
    console.log("Working!!!");
})

app.get("/",(req,res)=>{
    res.send("Listning HomePage");
})