var webpage = require('webpage').create();

webpage.open('http://localhost:1234', function() {
    webpage.render('screenshot-localhost.png');
    phantom.exit();
});