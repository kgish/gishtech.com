export default function() {

    this.get('/intros', function() {
        return {
            data: [{
                type: 'intros',
                id: 1,
                attributes: {
                    title: 'Dependable and down-to-earth',
                    description: 'I am a full stack developer with management experience who savours advanced ' +
                                 'software development, agile methodologies, tooling, people and processes for ' +
                                 'building slick web-based applications'
                }
            }, {
                type: 'intros',
                id: 2,
                attributes: {
                    title: 'From start to finish non-stop',
                    description: 'I can perform well over the complete software development life cycle: design, user ' +
                                 'stories, bdd, programming, unit-testing, code review, uat, deployment, ' +
                                 'after-care, maintenance and trouble-shooting'
                }
            }, {
                type: 'intros',
                id: 3,
                attributes: {
                    title: 'Team management is fun',
                    description: 'I take coaching and motivating teams very seriously, fostering the fun-factor and team ' +
                    'spirit encouraging others to build stuff that we can be proud about'
                }
            }, {
                type: 'intros',
                id: 4,
                attributes: {
                    title: 'Straight-forward work ethos',
                    description: 'I am pragmatic and believe in a hands-on mentality where rolling up your sleeves and getting the job done right the very first time is the name of the game'
                }
            }, {
                type: 'intros',
                id: 5,
                attributes: {
                    title: 'Lots and lots of testing',
                    description: 'I am a real stickler when it comes to testing, and where possible I introduce automated testing as early as possible in order to avoid introducing unnecessary design defects and bugs'
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
                    score: 3
                }
            }, {
                type: 'skills',
                id: 2,
                attributes: {
                    name: 'Apache',
                    url: 'http://www.apache.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 3,
                attributes: {
                    name: 'Backbone.js',
                    url: 'http://backbonejs.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 4,
                attributes: {
                    name: 'Bootstrap',
                    url: 'http://getbootstrap.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 5,
                attributes: {
                    name: 'C/C++',
                    url: 'http://www.cprogramming.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 6,
                attributes: {
                    name: 'CSS',
                    url: 'https://www.w3.org/Style/CSS/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 7,
                attributes: {
                    name: 'Continuous Delivery',
                    url: 'https://en.wikipedia.org/wiki/Continuous_delivery',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 8,
                attributes: {
                    name: 'ES6',
                    url: 'http://es6-features.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 9,
                attributes: {
                    name: 'Elixir',
                    url: 'http://elixir-lang.org/',
                    score: 1}
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
                    name: 'Ember.js',
                    url: 'http://emberjs.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 12,
                attributes: {
                    name: 'Express.js',
                    url: 'http://expressjs.com/',
                    score: 2
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
                    score: 3
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
                    score: 3
                }
            }, {
                type: 'skills',
                id: 17,
                attributes: {
                    name: 'Jira',
                    url: 'https://www.atlassian.com/software/jira',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 18,
                attributes: {
                    name: 'Kanban',
                    url: 'https://en.wikipedia.org/wiki/Kanban',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 19,
                attributes: {
                    name: 'Linux',
                    url: 'http://www.linuxfoundation.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 20,
                attributes: {
                    name: 'MiniTest',
                    url: 'https://github.com/seattlerb/minitest',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 21,
                attributes: {
                    name: 'MySQL',
                    url: 'https://www.mysql.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 22,
                attributes: {
                    name: 'Node.js',
                    url: 'https://nodejs.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 23,
                attributes: {
                    name: 'Perl',
                    url: 'https://www.perl.org/',
                    score: 3
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
                    score: 2
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
                    score: 3
                }
            }, {
                type: 'skills',
                id: 28,
                attributes: {
                    name: 'RSpec',
                    url: 'http://rspec.info/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 29,
                attributes: {
                    name: 'Ruby on Rails',
                    url: 'http://rubyonrails.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 30,
                attributes: {
                    name: 'Ruby',
                    url: 'https://www.ruby-lang.org/en/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 31,
                attributes: {
                    name: 'Sails.js',
                    url: 'http://sailsjs.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 32,
                attributes: {
                    name: 'Sass',
                    url: 'http://sass-lang.com/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 33,
                attributes: {
                    name: 'Scrum',
                    url: 'https://www.scrumalliance.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 34,
                attributes: {
                    name: 'Selenium',
                    url: 'http://www.seleniumhq.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 35,
                attributes: {
                    name: 'Team management',
                    url: 'https://en.wikipedia.org/wiki/Team_management',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 36,
                attributes: {
                    name: 'Test-Driven Development',
                    url: 'https://en.wikipedia.org/wiki/Test-driven_development',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 37,
                attributes: {
                    name: 'Velocity.js',
                    url: 'http://julian.com/research/velocity/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 38,
                attributes: {
                    name: 'WebdriverIO',
                    url: 'http://webdriver.io/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 39,
                attributes: {
                    name: 'jQuery',
                    url: 'https://jquery.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 40,
                attributes: {
                    name: 'Specification by Example',
                    url: 'https://en.wikipedia.org/wiki/Specification_by_example',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 41,
                attributes: {
                    name: 'Lua',
                    url: 'https://www.lua.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 42,
                attributes: {
                    name: 'Git',
                    url: 'https://git-scm.com/',
                    score: 3
                }
            }]
        };
    });
}
