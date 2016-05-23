import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { name: 'Ember',
              url: 'emberjs.com'
            },
            { name: 'Liquid Fire',
              url: 'ember-animation.github.io/liquid-fire'
            },
            { name: 'Fastboot',
              url: 'www.ember-fastboot.com'
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
