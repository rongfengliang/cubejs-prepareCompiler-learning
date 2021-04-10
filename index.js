const app = require("./app")
const fs = require("fs")
let myapp = app.preCompiler(fs.readFileSync("./demo-schmea.js").toString("utf-8"))
myapp.compiler.compile().then(data=>{
    console.log(data)
}).catch(err=>{
    console.log("some wrong:",err.messages)
})