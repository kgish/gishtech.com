/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'gishtech',
        environment: environment,
        baseURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            animation: {
                banner: {
                    action: 'fadeIn',
                    duration: 1000
                }
            }
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        // https://github.com/poteto/ember-metrics
        metricsAdapters: [{
            name: 'GoogleAnalytics',
            environments: ['development', 'production'],
            config: {
                id: 'UA-81315046-1'
            }
        }],

        //https://github.com/rwjblue/ember-cli-content-security-policy
        contentSecurityPolicy: {
            'default-src': ["'none'"],
            'script-src':  ["'self' www.google-analytics.com"],
            'font-src':    ["'self' fonts.gstatic.com"],
            'connect-src': ["'self' www.google-analytics.com"],
            'img-src':     ["'self' www.google-analytics.com"],
            'style-src':   ["'self' 'unsafe-inline' fonts.googleapis.com"],
            'media-src':   ["'self'"]
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV['ember-cli-mirage'] = {
            enabled: true
        };
    }

    return ENV;
};
