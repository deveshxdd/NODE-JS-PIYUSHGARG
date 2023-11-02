const http = require('http')
const fs = require('fs')
const url = require('url')
const server = http.createServer((req,res)=>{
    const log = `${Date.now()}: server request  ${req.url}\n`
    const myur = url.parse(req.url,true)
    console.log(myur)
    if(req.url==="/favicon.ico"){
        return res.end
    }
fs.appendFile("log.txt",log , (err,acc)=>{
    switch (myur.pathname) {
        case "/": res.end("home page")
            
            break;
    
        case "/about":
            const myname = myur.query.name
             res.end(`welcome ${myname}`)
            
            break;
    
        default: res.end("http error")
            break;
    }
})

// yaha se tum kuch v send krskte ho img text file html everything
// server me kuch v change kroge to restart krna pdega server
})
server.listen(8000,()=>{
    console.log("server accepted")
})


//ports are like door kai sare door h usme se kaha jana h hr server ka ek unique door hot hai
// createserver hai wo ek call back leta h jo req and res carry krta hai
// req wo sare details rakhta h jo client ki h 
// response response deta h server pe
// agar server banaya hua use krna h to servername.listen()
// ye do value leti h ek port number and one call back which is optional but we use to check whether the server is accepted or not
// always try asynchronous non blocking way
// query parameter lene ke lia external package intall krna hota hai npm i url 