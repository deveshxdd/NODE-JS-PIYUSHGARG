// generally http method use krke url and route handling bahut complex hojata hai
// code readability complex hojata hai
// so we use express 
const express = require("express")
const app = express()
app.get('/',(req,res)=>{
return res.send(`this is home page ${req.query.name}`)
})
app.get('/about',(req,res)=>{
return res.send("this is about page")
})
// const http = require('http')
// const server = http.createServer(app)
// server.listen(6000,()=>{
//     console.log("server accepted")
// })
// ab insb ki v jrurt nhi h sidha port krskte h 
app.listen(5000,()=>{
    console.log("teammer")
}) 