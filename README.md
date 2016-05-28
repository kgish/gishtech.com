# GISHTECH.COM

Welcome to the new-and-improved gishtech website! I built with emberjs, bootstrap, liquid fire and other fun stuff.

[gishtech.com](http://www.gishtech.com)

![](public/assets/images/screenshot-banner-index.png?raw=true | width=400)

## Introduction

I decided to make this website public and share it on my github. That way other people who might be interested in 
creating a similar website with the amazing [Ember.js Framework](http://emberjs.com) can study for themselves how I 
did it. This is just a simple website really, advertising myself as an enthusiastic and eager developer hoping to
find potential customer wanting ti hire me for full stack development work.

## Installation

The installation of this website is quite straight forward.

    $ git clone https://github.com/kgish/gishtech.com.git
    $ cd gishtech.com
    $ npm install
    $ ember server
    
Running on production simply means executing the following build command:

    $ ember build --environment=production
    
and then ensuring that the `dist` directory is copied or made available. So for `apache` you might have:

    DocumentRoot /home/deploy/gishtech/latest/dist
    
Please note that in order to be able to use the `ember-cli-mirage` addon in production, you'll need to add the 
following lines to the `config/environment.js` configuration file.

```javascript
if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
        enabled: true
    };
}
```

By default `ember-cli-mirage` is only anabled for `development` and `test` environments.

## References

While the following list of references is far from complete, it should nonetheless give you a good start for learning
more about new and interesting stuff.

* [Babel.js](http://babeljs.io/) - Support for the latest version of JavaScript (ES@015) through syntax transformers.
* [Bootstrap](http://getbootstrap.com/) - HTML, CSS, and JS framework for developing responsive, mobile projects.
* [Ember-cli-mirage](http://www.ember-cli-mirage.com/) - A client-side mock server to develop, test and prototype your app. 
* [Ember-cli](http://ember-cli.com/) - The Ember.js command line utility.
* [Ember-fastboot](http://www.ember-fastboot.com/) - Addon for Ember-cli allowing you to render and serve Ember.js apps on the server. 
* [Ember.js](http://emberjs.com/) - Framework for creating ambitious web applications.
* [Fontawesome](http://fontawesome.io/) - Scalable vector icons toolkit that can be customized using CSS.
* [Liquid Fire](http://ember-animation.github.io/liquid-fire/) - Animations and transitions for ambitious Ember applications.
* [Sass](http://sass-lang.com/) - Most mature, stable, and powerful professional grade CSS extension language in the world.

## Books

There are a number of great books out there about JavaScript and frameworks.

* [Building Front-End Web Apps with Plain JavaScript](https://gumroad.com/l/YyWka) - Gerd Wagner
* [Ember 101](https://leanpub.com/ember-cli-101) - Adolfo Builes
* [Exploring ES6](https://leanpub.com/exploring-es6) - Axel Rauschmayer
* [Rock and Roll with Ember.js](http://balinterdi.com/rock-and-roll-with-emberjs/) - Balint Erdi
* [Speaking JavaScript](http://speakingjs.com/es5/) - Axel Rauschmayer

## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

\- You're never too old to learn new stuff.
