
var express = require('express');
var azureMobileApps = require('azure-mobile-apps');
console.log('app js hit');
var app = express();

var mobile = azureMobileApps({
    // Explicitly enable the Azure Mobile Apps home page
    homePage: true
});

// Import the files from the tables directory to configure the /tables endpoint
mobile.tables.import('./tables');

mobile.tables.initialize()
    .then(function () {
        app.use(mobile);    // Register the Azure Mobile Apps middleware
        app.listen(process.env.PORT || 3000);   // Listen for requests
        console.log('App Listening to '+process.env.PORT);
    });


// var app = require('express')(); // Create an instance of an Express app

// var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

// mobileApp.tables.add('Post'); // Create a table for 'Post' with default settings

// app.use(mobileApp);
// app.listen(process.env.PORT || 3000);
// console.log('Server JS App listening to :'  + process.env.PORT);
