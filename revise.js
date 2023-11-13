const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req.url)
    const methodname = req.method
    res.end(`this is devesh ${methodname}`)

})
server.listen(7000,()=>{
    console.log("server passed")
})