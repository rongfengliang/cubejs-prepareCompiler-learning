const app = require("./app")
const fs = require("fs")
const {PostgresQuery} = require("@cubejs-backend/schema-compiler")
let {compiler,joinGraph,cubeEvaluator} = app.preCompiler(fs.readFileSync("./demo-schmea.js").toString("utf-8"));
(async function(){
    await compiler.compile();
    let query = new PostgresQuery({joinGraph, cubeEvaluator, compiler },{
        measures: ['visitors.visitor_count'],
        dimensions: [
          'visitors.source'
        ],
        contextSymbols:{
            securityContext:{
                source:"demoapp"
            }
        }
    })
    
    console.log(query.baseSelect())
})()

