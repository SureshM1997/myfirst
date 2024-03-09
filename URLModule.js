const URL=require('URL');
const http=require('http');

http.createServer((req,res)=>{
    var q=URL.parse("URL",true);
    console.log(q.host);
    res.write("Hello");
    res.end();
}).listen(8082);
