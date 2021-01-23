// ----------------------------------------------------------------------------
// Copyright (c) 2015 Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

<<<<<<< HEAD
=======
use strict

>>>>>>> df3c7f559e1b5ac6c68f81401a81441e28c71d4b
// This is a base-level Azure Mobile App SDK.
var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');

// Set up a standard Express app
var app = express();
<<<<<<< HEAD
console.log('log app.js');
=======

>>>>>>> df3c7f559e1b5ac6c68f81401a81441e28c71d4b
// If you are producing a combined Web + Mobile app, then you should handle
// anything like logging, registering middleware, etc. here

// Configuration of the Azure Mobile Apps can be done via an object, the
// environment or an auxiliary file.  For more information, see
// http://azure.github.io/azure-mobile-apps-node/global.html#configuration
var mobile = azureMobileApps({
    // Explicitly enable the Azure Mobile Apps home page
    homePage: true
});

// Import the files from the tables directory to configure the /tables endpoint
mobile.tables.import('./tables');

// Import the files from the api directory to configure the /api endpoint
//! Un-comment if api folder exists
// mobile.api.import('./api');

// Initialize the database before listening for incoming requests
// The tables.initialize() method does the initialization asynchronously
// and returns a Promise.
mobile.tables.initialize()
    .then(function () {
        app.use(mobile);    // Register the Azure Mobile Apps middleware
        app.listen(process.env.PORT || 3000);   // Listen for requests
<<<<<<< HEAD
        console.log('log app.js');
=======
>>>>>>> df3c7f559e1b5ac6c68f81401a81441e28c71d4b
    });
