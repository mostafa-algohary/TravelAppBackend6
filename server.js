var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

<<<<<<< HEAD
mobileApp.tables.import('./tables'); // Import tables from './tables'
=======
mobileApp.tables.add('Post'); // Create a table for 'Book' with default settings
>>>>>>> df3c7f559e1b5ac6c68f81401a81441e28c71d4b

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
