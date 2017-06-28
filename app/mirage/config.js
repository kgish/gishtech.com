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
                    name: 'Backbone',
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
                    name: 'CSS3',
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
                    score: 2
                }
            }, {
                type: 'skills',
                id: 9,
                attributes: {
                    name: 'Ember',
                    url: 'http://emberjs.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 10,
                attributes: {
                    name: 'Express',
                    url: 'http://expressjs.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 11,
                attributes: {
                    name: 'HTML5',
                    url: 'https://www.w3.org/TR/html5/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 12,
                attributes: {
                    name: 'JSON API',
                    url: 'http://jsonapi.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 13,
                attributes: {
                    name: 'JavaScript',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 14,
                attributes: {
                    name: 'Jira',
                    url: 'https://www.atlassian.com/software/jira',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 15,
                attributes: {
                    name: 'Kanban',
                    url: 'https://en.wikipedia.org/wiki/Kanban',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 16,
                attributes: {
                    name: 'Linux',
                    url: 'http://www.linuxfoundation.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 17,
                attributes: {
                    name: 'MySQL',
                    url: 'https://www.mysql.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 18,
                attributes: {
                    name: 'Node',
                    url: 'https://nodejs.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 19,
                attributes: {
                    name: 'Perl',
                    url: 'https://www.perl.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 20,
                attributes: {
                    name: 'QUnit',
                    url: 'https://qunitjs.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 21,
                attributes: {
                    name: 'REST',
                    url: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 22,
                attributes: {
                    name: 'RSpec',
                    url: 'http://rspec.info/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 23,
                attributes: {
                    name: 'Ruby on Rails',
                    url: 'http://rubyonrails.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 24,
                attributes: {
                    name: 'Ruby',
                    url: 'https://www.ruby-lang.org/en/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 25,
                attributes: {
                    name: 'Sass3',
                    url: 'http://sass-lang.com/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 26,
                attributes: {
                    name: 'Scrum',
                    url: 'https://www.scrumalliance.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 27,
                attributes: {
                    name: 'Selenium',
                    url: 'http://www.seleniumhq.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 28,
                attributes: {
                    name: 'Team management',
                    url: 'https://en.wikipedia.org/wiki/Team_management',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 29,
                attributes: {
                    name: 'TDD',
                    url: 'https://en.wikipedia.org/wiki/Test-driven_development',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 30,
                attributes: {
                    name: 'WebdriverIO',
                    url: 'http://webdriver.io/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 31,
                attributes: {
                    name: 'jQuery',
                    url: 'https://jquery.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 32,
                attributes: {
                    name: 'Sinatra',
                    url: 'http://www.sinatrarb.com/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 33,
                attributes: {
                    name: 'Mocha',
                    url: 'http://mochajs.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 34,
                attributes: {
                    name: 'Haskell',
                    url: 'https://www.haskell.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 35,
                attributes: {
                    name: 'Catalyst',
                    url: 'http://www.catalystframework.org/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 36,
                attributes: {
                    name: 'Middleman',
                    url: 'https://middlemanapp.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 37,
                attributes: {
                    name: 'D3',
                    url: 'https://d3js.org/',
                    score: 2
                }
            }, {
                type: 'skills',
                id: 38,
                attributes: {
                    name: 'Git',
                    url: 'https://git-scm.com/',
                    score: 3
                }
            }, {
                type: 'skills',
                id: 39,
                attributes: {
                    name: 'Lua',
                    url: 'https://www.lua.org/',
                    score: 1
                }
            }, {
                type: 'skills',
                id: 40,
                attributes: {
                    name: 'Bash',
                    url: 'https://www.gnu.org/software/bash/',
                    score: 3
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
                    skills: ['ruby on rails', 'rspec', 'javascript', 'emberjs', 'qunit', 'mysql', 'html5', 'sass', 'mobile']
                }
            }, {
                type: 'portfolios',
                id: 3,
                attributes: {
                    title: 'Innovative Democracy Platform',
                    description: 'Enhanced the online collaboration platform using Discourse with amendment annotation and user-defined plugins',
                    company: 'Partij van de Arbeid',
                    url: 'http://ledenkamer.pvda.nl',
                    image: 'ledenkamer-pvda.png',
                    skills: ['discourse', 'ruby on rails', 'javascript', 'emberjs', 'postgresql', 'docker', 'html5', 'sass', 'git']
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
                    skills: ['middleman', 'javascript', 'ruby', 'padrino', 'heroku', 'html5', 'sass', 'slim', 'mobile']
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
                    skills: ['ruby on rails', 'javascript', 'postgresql', 'restful api', 'heroku', 'git']
                }
            }, {
                type: 'portfolios',
                id: 6,
                attributes: {
                    title: 'Skillzz Search Platform',
                    description: 'Advanced website search platform for matching skilled workers to customers searching for employees',
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
                    description: 'Advanced multi-project planning tool for ship building activities based on the D3 and DHTMLX JavaScript libraries',
                    company: 'Energo Projects',
                    url: 'http://www.energoprojects.nl',
                    image: 'energo-projects.png',
                    skills: ['php', 'phalcon', 'javascript', 'jquery', 'd3', 'postgresql', 'dhtmlxgantt', 'html5', 'css3', 'git' ]
                }
            }, {
                type: 'portfolios',
                id: 8,
                attributes: {
                    title: 'Ember Rails Tutorial',
                    description: 'Ready to use application template including a tutorial on how to use it',
                    company: 'Ember Amsterdam Meetup',
                    url: 'http://www.gishtech.com/assets/documents/Ember-Meetup-13-Amsterdam.pdf',
                    image: 'ember-rails-app.png',
                    skills: ['emberjs', 'ruby on rails', 'javascript', 'postgresql', 'html5', 'bootstrap', 'sass', 'heroku']
                }
            }, {
                type: 'portfolios',
                id: 9,
                attributes: {
                    title: 'Toolbox Portal',
                    description: 'Web portal for integrated collection of user-define tool components',
                    company: 'Socioneers',
                    url: 'http://www.socioneers.com',
                    image: 'toolbox-app.png',
                    skills: ['ruby on rails', 'javascript', 'bootstrap', 'postgresql', 'html5', 'sass', 'annotatorjs', 'dhtmlxgantt', 'mobile', 'heroku']
                }
            }, {
                type: 'portfolios',
                id: 10,
                attributes: {
                    title: 'Football Live Scoring',
                    description: 'Mobile web app for following football scores, teams and players',
                    company: 'Gishtech',
                    url: 'http://gishtech.com',
                    image: 'football-scores.png',
                    skills: ['ruby on rails', 'emberjs', 'bootstrap', 'postgresql', 'football-api', 'sass', 'heroku', 'mobile']
                }
            }, {
                type: 'portfolios',
                id: 11,
                attributes: {
                    title: 'GitHub API',
                    description: 'Emberjs application using GitHub API to access user repositories',
                    company: 'Gishtech',
                    url: 'https://github.com/kgish/github-api',
                    image: 'github-api.png',
                    skills: ['emberjs', 'bootstrap', 'github-api', 'ember-data-github', 'font-awesome', 'sass']
                }
            }, {
                type: 'portfolios',
                id: 12,
                attributes: {
                    title: 'Mijn-begroting',
                    description: 'Interactive tool for exploring city, county and provincial budget spending',
                    company: 'Socioneers',
                    url: 'https://github.com/kgish/mijn-begroting',
                    image: 'mijn-begroting.png',
                    skills: ['emberjs', 'bootstrap', 'd3', 'odata', 'google-maps', 'font-awesome', 'sass']
                }
            }]
        };
    });

    this.passthrough('assets/assetMap.json');
    this.passthrough('/php/contact.php');
}
