/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {

        // npm install --save-dev ember-cli-inline-content
        inlineContent: {
            'favicons': {
                file: './public/assets/images/favicons/favicons.txt'
            }
        },
        
        // https://github.com/rickharrison/broccoli-asset-rev
        fingerprint: {
            generateAssetMap: true
        }

    });

    // Bootstrap
    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets' });
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

    // Velocity: https://github.com/julianshapiro/velocity (bower install velocity)
    app.import('bower_components/velocity/velocity.min.js');
    app.import('bower_components/velocity/velocity.ui.min.js');

    return app.toTree();
};

