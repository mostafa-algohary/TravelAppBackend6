var table = module.exports = require('azure-mobile-apps').table();

table.read(function (context) {
<<<<<<< HEAD
    //return context.execute();
    return "sdsadas";
=======
    return context.execute();
>>>>>>> df3c7f559e1b5ac6c68f81401a81441e28c71d4b
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
