/*jshint node:true*/
/* global require, module */
let EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {

        // Bootstrap with Sass
        sassOptions: {
            includePaths: [
                'bower_components/bootstrap-sass/assets/stylesheets'
            ]
        },

        // npm install --save-dev ember-cli-inline-content
        inlineContent: {
            'favicons': {
                file: './public/assets/images/favicons/favicons.txt'
            }
        },

        // https://github.com/rickharrison/broccoli-asset-rev
        fingerprint: {
            exclude: ['images/portfolios'],
            generateAssetMap: true
        }

    });

    // Bootstrap: http://getbootstrap.com/ (bower install bootstrap --save)
    // app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    // app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets' });
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

    // Velocity: https://github.com/julianshapiro/velocity (bower install velocity --save-dev)
    app.import('bower_components/velocity/velocity.min.js');
    app.import('bower_components/velocity/velocity.ui.min.js');

    // Moment: https://github.com/moment/moment (bower install moment --save-dev)
    app.import('bower_components/moment/min/moment.min.js');

    // Bootbox: https://github.com/makeusabrew/bootbox
    app.import('vendor/javascript/bootbox.min.js');

    return app.toTree();
};

