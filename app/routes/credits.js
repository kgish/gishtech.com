import BaseRoute from './base';

export default BaseRoute.extend({
    model() {
        return [
            { name: 'Ember',
              url: 'emberjs.com'
            },
            { name: 'Liquid-fire',
              url: 'ember-animation.github.io/liquid-fire'
            },
            { name: 'Velocity',
              url: 'julian.com/research/velocity'
            },
            { name: 'Bootstrap',
              url: 'getbootstrap.com'
            },
            { name: 'Fontawesome',
              url: 'fontawesome.io'
            },
            { name: 'Sass',
              url: 'sass-lang.com'
            },
            { name: 'Ember-cli',
                url: 'ember-cli.com'
            },
            { name: 'Babel',
                url: 'babeljs.io'
            },
            { name: 'Npm',
                url: 'www.npmjs.com'
            },
            { name: 'Bower',
                url: 'bower.io'
            }
        ];
    }
});
