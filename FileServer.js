const fs=require('fs');
const http=require('http');
const url=require('url');

http.createServer((req,res)=>{
    fs.open("myfile1.txt",'w',(err,file)=>{
        if(err) throw err;
        console.log("File is created!!!");
    })

    fs

    fs.appendFile("myfile1.txt","Welcome to my world",(err)=>{
        if(err) throw err;
        console.log("File is appended");
    })

    fs.readFile("myfile1.txt",(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        // var q=url.parse(req.url,true).query;
        // var text=q.year+" "+q.month;     
        res.write(data);
        return res.end();
        console.log("This is read file activity");
        //return res.end(text);
    });

    fs.writeFile("myfile1.txt","This is another text I am trying",(err)=>{
        if(err) throw err;
        console.log("This is again write  doing");
    })

    // fs.rename("myfile1.txt","myfile2.txt",(err)=>{
    //     if(err) throw err;
    //     console.log("File is Renamed successfully");
    // })

    // fs.unlink("myfile2.txt",(err)=>{
    //     if(err) throw err;
    //     console.log("File is deleted successfully");
    // })
}).listen(8082);