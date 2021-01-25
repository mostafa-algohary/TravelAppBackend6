var azureMobileApps = require('azure-mobile-apps');
var table = azureMobileApps.table();

table.dynamicSchema = true;
table.access = 'authenticated';


table.read(function (context) {
    console.log('read opertion');
    return context.execute();
    //return "ssss";
    
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
