import http from 'http';
import cron from 'node-cron';
const hostname='127.0.0.1';

const port=3001;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello world');
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)


    cron.schedule('* * * * * *',()=>{
        console.log("task running properly")
    })
})