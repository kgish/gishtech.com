# GISHTECH.COM

The new-and-improved gishtech website using emberjs.

[gishtech.com](http://www.gishtech.com)

![](public/assets/images/screenshot-banner-index.png?raw=true | width=400)

## Introduction

I decided to make this website public and share it on my github. That way other people who might be interested in 
creating a similar website using the amazing [Ember.js Framework](http://emberjs.com) can see for themselves how I 
did it. This is just a simple website advertising myself as an enthusiastic and eager developer looking for fun 
projects to do.

## Installation

The installation is quite straight forward.

    $ git clone https://github.com/kgish/gishtech.com.git
    $ cd gishtech.com
    $ npm install
    $ ember server
    
Please note that in order to be able to use `ember-cli-mirage` in production, I've added the following lines to the
`config/environment.js` configuration file.

```javascript
if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
        enabled: true
    };
}
```

## References

While the following list of references is far from complete, it should nonetheless give you a good start for learning
more about new and interesting stuff.

* [Ember.js](http://emberjs.com/)
* [Liquid Fire](http://ember-animation.github.io/liquid-fire/)
* [Bootstrap](http://getbootstrap.com/)
* [Ember-cli-mirage](http://www.ember-cli-mirage.com/)
* [Ember-fastboot](http://www.ember-fastboot.com/)
* [Fontawesome](http://fontawesome.io/)
* [Sass](http://sass-lang.com/)
* [Ember-cli](http://ember-cli.com/)
* [Babel.js](http://babeljs.io/)

## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

\- You're never too old to learn new stuff.
