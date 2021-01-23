var table = module.exports = require('azure-mobile-apps').table();

table.read(function (context) {
    //return context.execute();
    return "sdsadas";
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
