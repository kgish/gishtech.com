export default function() {

    this.get('/intros', function() {
        return {
            data: [{
                type: 'intros',
                id: 1,
                attributes: {
                    title: 'From start to finish non-stop',
                    description: 'I am quite familiar with the complete software development pipeline: design, user stories, bdd, programming, unit-testing, code review, uat, deployment, after-care, maintenance and trouble-shooting'
                }
            }, {
                type: 'intros',
                id: 2,
                attributes: {
                    title: 'Team management is fun',
                    description: 'I take coaching and motivating teams very seriously, fostering the fun-factor and team spirit, encouraging others to build stuff that they can be proud to show'
                }
            }, {
                type: 'intros',
                id: 3,
                attributes: {
                    title: 'Straight-forward work ethos',
                    description: 'I am pragmatic and believe in a hands-on mentality where rolling up your sleeves and getting the job done right the first time is the name of the game'
                }
            }, {
                type: 'intros',
                id: 4,
                attributes: {
                    title: 'Lots and lots of testing',
                    description: 'I am a real stickler when it comes to testing, and where possible I introduce automated testing as early as possible in order to avoid introducing unnecessary design defects and bugs'
                }
            }, {
                type: 'intros',
                id: 5,
                attributes: {
                    title: 'Continuous delivery',
                    description: 'I produce software in short cycles, ensuring it can be reliably released at any time, which is essential when the going gets tough and meeting tight deadlines is essential for success.'
                }
            }, {
                type: 'intros',
                id: 6,
                attributes: {
                    title: 'Motto',
                    description: 'My favorite motto to live by is: "You\'re never too old to learn new stuff"'
                }
            }]
        };
    });

    this.get('/skills', function() {
        return {
            data: [{
                type: 'skills',
                id: 1,
                attributes: {
                    name: 'Agile',
                    url: 'https://en.wikipedia.org/wiki/Agile_software_development',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 2,
                attributes: {
                    name: 'Apache',
                    url: 'http://www.apache.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 3,
                attributes: {
                    name: 'Backbone',
                    url: 'http://backbonejs.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 4,
                attributes: {
                    name: 'Bootstrap',
                    url: 'http://getbootstrap.com/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 5,
                attributes: {
                    name: 'C/C++',
                    url: 'http://www.cprogramming.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 6,
                attributes: {
                    name: 'CSS',
                    url: 'https://www.w3.org/Style/CSS/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 7,
                attributes: {
                    name: 'Continuous Delivery',
                    url: 'https://en.wikipedia.org/wiki/Continuous_delivery',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 8,
                attributes: {
                    name: 'ES6',
                    url: 'http://es6-features.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 9,
                attributes: {
                    name: 'Elixir',
                    url: 'http://elixir-lang.org/',
                    score: 2}
            }, {
                type: 'skills',
                id: 10,
                attributes: {
                    name: 'Elm',
                    url: 'http://elm-lang.org/',
                    score: 2}
            }, {
                type: 'skills',
                id: 11,
                attributes: {
                    name: 'Ember',
                    url: 'http://emberjs.com/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 12,
                attributes: {
                    name: 'Express',
                    url: 'http://expressjs.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 13,
                attributes: {
                    name: 'Flask',
                    url: 'http://flask.pocoo.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 14,
                attributes: {
                    name: 'HTML5',
                    url: 'https://www.w3.org/TR/html5/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 15,
                attributes: {
                    name: 'JSON API',
                    url: 'http://jsonapi.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 16,
                attributes: {
                    name: 'JavaScript',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 17,
                attributes: {
                    name: 'Jira',
                    url: 'https://www.atlassian.com/software/jira',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 18,
                attributes: {
                    name: 'Kanban',
                    url: 'https://en.wikipedia.org/wiki/Kanban',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 19,
                attributes: {
                    name: 'Linux',
                    url: 'http://www.linuxfoundation.org/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 20,
                attributes: {
                    name: 'MiniTest',
                    url: 'https://github.com/seattlerb/minitest',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 21,
                attributes: {
                    name: 'MySQL',
                    url: 'https://www.mysql.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 22,
                attributes: {
                    name: 'Node',
                    url: 'https://nodejs.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 23,
                attributes: {
                    name: 'Perl',
                    url: 'https://www.perl.org/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 24,
                attributes: {
                    name: 'Phoenix',
                    url: 'http://www.phoenixframework.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 25,
                attributes: {
                    name: 'Python',
                    url: 'https://www.python.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 26,
                attributes: {
                    name: 'QUnit',
                    url: 'https://qunitjs.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 27,
                attributes: {
                    name: 'RESTful API',
                    url: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 28,
                attributes: {
                    name: 'RSpec',
                    url: 'http://rspec.info/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 29,
                attributes: {
                    name: 'Ruby on Rails',
                    url: 'http://rubyonrails.org/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 30,
                attributes: {
                    name: 'Ruby',
                    url: 'https://www.ruby-lang.org/en/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 31,
                attributes: {
                    name: 'Sails',
                    url: 'http://sailsjs.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 32,
                attributes: {
                    name: 'Sass and Compass',
                    url: 'http://sass-lang.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 33,
                attributes: {
                    name: 'Scrum',
                    url: 'https://www.scrumalliance.org/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 34,
                attributes: {
                    name: 'Selenium',
                    url: 'http://www.seleniumhq.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 35,
                attributes: {
                    name: 'Team management',
                    url: 'https://en.wikipedia.org/wiki/Team_management',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 36,
                attributes: {
                    name: 'Test-Driven Development',
                    url: 'https://en.wikipedia.org/wiki/Test-driven_development',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 37,
                attributes: {
                    name: 'Velocity',
                    url: 'http://julian.com/research/velocity/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 38,
                attributes: {
                    name: 'WebdriverIO',
                    url: 'http://webdriver.io/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 39,
                attributes: {
                    name: 'jQuery',
                    url: 'https://jquery.com/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 40,
                attributes: {
                    name: 'Specification by Example',
                    url: 'https://en.wikipedia.org/wiki/Specification_by_example',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 41,
                attributes: {
                    name: 'Lua',
                    url: 'https://www.lua.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 42,
                attributes: {
                    name: 'Java',
                    url: 'https://java.com/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 43,
                attributes: {
                    name: 'Sinatra',
                    url: 'http://www.sinatrarb.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 44,
                attributes: {
                    name: 'Mongo',
                    url: 'https://www.mongodb.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 45,
                attributes: {
                    name: 'Mocha',
                    url: 'http://mochajs.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 46,
                attributes: {
                    name: 'Haskell',
                    url: 'https://www.haskell.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 47,
                attributes: {
                    name: 'Catalyst',
                    url: 'http://www.catalystframework.org/',
                    score: 4
                }
            }, {
                type: 'skills',
                id: 48,
                attributes: {
                    name: 'Gulp',
                    url: 'http://gulpjs.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 49,
                attributes: {
                    name: 'Middleman',
                    url: 'https://middlemanapp.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 50,
                attributes: {
                    name: 'Git',
                    url: 'https://git-scm.com/',
                    score: 4
                }
            }]
        };
    });

    this.get('/credits', function() {
        return {
            data: [{
                type: 'credits',
                id: 1,
                attributes: {
                    name: 'Ember',
                    url: 'emberjs.com'
                }
            }, {
                type: 'credits',
                id: 2,
                attributes: {
                    name: 'Liquid-fire',
                    url: 'ember-animation.github.io/liquid-fire'
                }
            }, {
                type: 'credits',
                id: 3,
                attributes: {
                    name: 'Velocity',
                    url: 'julian.com/research/velocity'
                }
            }, {
                type: 'credits',
                id: 4,
                attributes: {
                    name: 'Bootstrap',
                    url: 'getbootstrap.com'
                }
            }, {
                type: 'credits',
                id: 5,
                attributes: {
                    name: 'Fontawesome',
                    url: 'fontawesome.io'
                }
            }, {
                type: 'credits',
                id: 6,
                attributes: {
                    name: 'Sass',
                    url: 'sass-lang.com'
                }
            }, {
                type: 'credits',
                id: 7,
                attributes: {
                    name: 'Ember-cli',
                    url: 'ember-cli.com'
                }
            }, {
                type: 'credits',
                id: 8,
                attributes: {
                    name: 'Babel',
                    url: 'babeljs.io'
                }
            }, {
                type: 'credits',
                id: 9,
                attributes: {
                    name: 'Npm',
                    url: 'www.npmjs.com'
                }
            }, {
                type: 'credits',
                id: 10,
                attributes: {
                    name: 'Bower',
                    url: 'bower.io'
                }
            }]
        };
    });

    this.get('/portfolios', function() {
        return {
            data: [{
                type: 'portfolios',
                id: 1,
                attributes: {
                    title: 'Automated Test Environment for E-Learning Platform',
                    description: 'For an advanced e-learning platform I designed from scratch an automated test process to verify that the modules, videos, exams and awards functioned according to the specifications',
                    company: 'Tagpoint Training BV',
                    url: 'http://www.tagpointtraining.com',
                    image: 'tagpoint-training.png',
                    skills: ['javascript', 'testdriverio', 'selenium', 'saucelabs', 'mailtrap', 'mocha', 'git']
                }
            }, {
                type: 'portfolios',
                id: 2,
                attributes: {
                    title: 'NA Holland Website',
                    description: 'Completely rewrote the legacy Dutch website of Narcotics Anonymous converting it into a more modern, bi-lingual (Dutch and English), responsive, and mobile friendly, user experience for helping people overcome drug addiction',
                    company: 'NA-Anonieme Verslaafden Nederland',
                    url: 'https://www.na-holland.nl',
                    image: 'na-holland.png',
                    skills: ['ruby on rails', 'rspec', 'javascript', 'ember', 'qunit', 'mysql', 'html5', 'git']
                }
            }, {
                type: 'portfolios',
                id: 3,
                attributes: {
                    title: 'Innovative Democracy Platform for Motions',
                    description: 'Enhanced the online collaboration platform using the open source discussion tool Discourse with annotation and user-defined plugins',
                    company: 'Partij van de Arbeid',
                    url: 'http://ledenkamer.pvda.nl',
                    image: 'ledenkamer-pvda.png',
                    skills: ['discourse', 'ruby on rails', 'javascript', 'ember.js', 'postgresql', 'docker', 'html5', 'sass', 'git']
                }
            }, {
                type: 'portfolios',
                id: 4,
                attributes: {
                    title: 'Golf Club-Fitter Website',
                    description: 'Designed, crafted and deployed a static website for golf-fitting services geared towards golfers looking to improve their golfing skills',
                    company: 'Antony Morgan Golf',
                    url: 'http://www.antonymorgangolf.com',
                    image: 'antony-morgan.png',
                    skills: ['middleman', 'javascript', 'ruby', 'padrino', 'heroku', 'html5', 'sass', 'slim', 'git']
                }
            }, {
                type: 'portfolios',
                id: 5,
                attributes: {
                    title: 'Annotator Store Server',
                    description: 'Optimized backend store for the Annotator Library based on Ruby on Rails',
                    company: 'Socioneers',
                    url: 'http://socioneers.com',
                    image: 'annotatorjs-server.png',
                    skills: ['ruby on rails', 'javascript', 'postgresql', 'RESTful API', 'heroku', 'git']
                }
            }, {
                type: 'portfolios',
                id: 6,
                attributes: {
                    title: 'Skillzz Search Platform',
                    description: 'Advanced website search platform for matching skilled workers to customers searching for the right person',
                    company: 'Gishtech',
                    url: 'https://github.com/kgish/skillzz-search',
                    image: 'skillzz-search.png',
                    skills: ['ruby on rails', 'javascript', 'jquery', 'mysql', 'rspec', 'heroku', 'git']
                }
            }, {
                type: 'portfolios',
                id: 7,
                attributes: {
                    title: 'Project Planning Tool for Ship Building',
                    description: 'Advanced multi-project planning tool for ship building activities based on the DHTMLX JavaScript library',
                    company: 'Energo Projects',
                    url: 'http://www.energoprojects.nl',
                    image: 'energo-projects.png',
                    skills: ['php', 'phalcon', 'javascript', 'jquery', 'postgresql', 'gantt-chart', 'html5', 'sass', 'git']
                }
            }]
        };
    });

    this.passthrough('assets/assetMap.json');
}
