import BaseRoute from './base';

export default BaseRoute.extend({
    model() {
        return [
            { name: 'Ember.js',
              url: 'emberjs.com'
            },
            { name: 'Liquid Fire',
              url: 'ember-animation.github.io/liquid-fire'
            },
            { name: 'Velocity.js',
              url: 'http://julian.com/research/velocity/'
            },
            { name: 'Bootstrap',
              url: 'getbootstrap.com'
            },
            { name: 'Font Awesome',
              url: 'fontawesome.io'
            },
            { name: 'Sass',
              url: 'sass-lang.com'
            }
        ];
    }
});
