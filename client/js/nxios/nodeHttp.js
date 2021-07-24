// const http = require('http');
import http from 'http';

export default function(configs) {
    return new Promise(function(resolve, reject) {
        const postData = ''
        const options = {
            hostname: 'localhost',
            port:4321,
            path: '/',
            method: 'GET',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        const req = http.request(options, (res)=>{
            res.setEncoding('utf8');
            let chunks = [];
            let size = 0;
            res.on('data', chunk =>{
                chunks.push(chunk)
                size += chunk.length
            })
            res.on('end', () =>{
                resolve(chunks.join(''));
            })
        })
        req.on('error', (error) =>{
            console.error(`error: ${error.message}`);
        })
        req.write(postData)
        req.end()
    })
}