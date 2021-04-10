const {prepareCompiler} = require("@cubejs-backend/schema-compiler")
module.exports = {
    preCompiler:function(content,options){
       return prepareCompiler({
            localPath: () => __dirname,
            dataSchemaFiles: () => Promise.resolve([
              { fileName: 'main.js', content }
            ])
          }, { adapter: 'postgres', ...options });     
    }
}