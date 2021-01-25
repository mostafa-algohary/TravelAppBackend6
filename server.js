
var express = require('express'),
 azureMobileApps = require('azure-mobile-apps');

var app = express(),
mobile = azureMobileApps();

// Import the files from the tables directory to configure the /tables endpoint
//mobile.tables.import('./tables');
mobile.tables.add('Post');
mobile.tables.initialize()
    .then(function () {
        app.use(mobile);    // Register the Azure Mobile Apps middleware
        app.listen(process.env.PORT || 3000);   // Listen for requests
       });


// var app = require('express')(); // Create an instance of an Express app

// var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

// mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings

// app.use(mobileApp);
// app.listen(process.env.PORT || 3000);
// console.log('Server JS App listening to :'  + process.env.PORT);
