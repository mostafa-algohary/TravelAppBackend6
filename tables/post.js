var azureMobileApps = require('azure-mobile-apps');
var table = azureMobileApps.table();

table.dynamicSchema = true;
table.access = 'anonymous';

table.read(function (context) {
   try {
    console.log('read opertion');     
    return context.execute();
    //return "ssss"; 
   } catch (error) {
       console.log("error : ") 
   }  
    
});

table.insert(function (context) {
    return context.execute();
});

table.update(function (context) {
    return context.execute();
});

table.delete(function (context) {
    return context.execute();
});

module.exports = table;
