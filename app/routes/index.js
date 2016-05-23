import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { title: 'Dependable and down-to-earth',
              description: 'I provide professional consultancy on advanced software development, methodologies, tooling, people and processes for web-based applications'
            },
            { title: 'From start to finish non-stop',
              description: 'I do full stack development over the complete software development life cycle: user stories, testing, implementation, testing, deployment, testing, all the way through after-care, maintenance and testing'
            },
            { title: 'Team management is fun',
              description: 'I take coaching and motivating teams seriously, fostering the fun-factor and encouraging others to build stuff that we can be proud about'
            },
            { title: 'Straight-forward work ethos',
              description: 'I am pragmatic and believe in a hands-on mentality where rolling up your sleeves and getting the job done right the very first time is the name of the game'
            },
            { title: 'Lots and lots of testing',
              description: 'I am a real stickler when it comes to testing, and where possible I introduce automated testing as early as possible in order to avoid introducing unnecessary bugs'
        }];
    }
});
