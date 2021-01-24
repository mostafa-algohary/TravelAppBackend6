
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
