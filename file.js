// we can handle file with the help of fs module 

const fs = require('fs')

// fs.writeFile("dev.txt","devesh",(err)=>{})  // asynchronous way 
// fs.writeFileSync("devv.txt","devesh")  // synchronous way

// const text = fs.readFileSync("./dev.txt","utf-8")
// console.log(text)
// // sync way of reading file

// fs.readFile("./devv.txt", "utf-8", (err,not)=>{
//     if(err){
//         console.log("error")
//     }
//     else{
//         console.log(not)
//     }
// })
// fs.copyFileSync("./dev.txt" , "copy.txt")
// fs.appendFileSync("./dev.txt","upadhyay")
// fs.unlinkSync("./copy.txt")


// async me ye maan ke chalte h ki error aaskta h 