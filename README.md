# GISHTECH.COM

Welcome to the new-and-improved Gishtech website!

I built this whole site using Ember.js v2.5.0, bootstrap, liquid-fire, velocity.js, random-shuffle and other fun stuff.

For those interested, the real McCoy can be viewed online at [gishtech.com](http://www.gishtech.com).

![](public/assets/images/screenshot-banner-index.png?raw=true | width=400)

## Introduction

I decided to make this website public and share it on my github. That way other people who might be interested in 
creating a similar website with the amazing [Ember.js Framework](http://emberjs.com) can study for themselves how I 
did it. This is just a simple website really, but with much potential.

Maybe by sharing it with others, I can advertise myself as an enthusiastic and eager developer hoping to find potential
customers wanting to hire me for full stack development work.

And then again, maybe it's just an excuse to show off and fluff my feathers. Nothing with being proud, I guess.

## Installation

The installation of this website is pretty straight forward:

    $ git clone https://github.com/kgish/gishtech.com.git
    $ cd gishtech.com
    $ npm install
    $ ember server
    
Running it on a production simply means executing the following build command:

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


## Animation

I use the [Liquid Fire](http://ember-animation.github.io/liquid-fire/) addon as well as [Velocity.js](http://julian.com/research/velocity/) 
for the animation stuff. This was a lot of fun trying out.

The route transitions `to-left` and `to-right` use `{{liquid-outlet}}` and defining them in the `transitions.js` file:

```javascript
export default function(){
    
    var duration = 250;
    
    this.transition(
        this.fromRoute('index'),
        this.use('toLeft', { duration }),
        this.reverse('toRight', { duration })
    );
    // ...
}
```

For the jumbotron banner `fade-in` across the complete application, I have defined a `routes/base.js` class where the
animation is triggered in the `activate()` hook.


```javascript
import Ember from 'ember';
import config from 'gishtech/config/environment';

export default Ember.Route.extend({
    activate() {
        var banner = config.APP.animation.banner;
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.jumbotron').velocity(banner.action, { duration: banner.duration });
        });
    }
});
```

All other routes are derived from the base.

```javascript
import BaseRoute from './base';

export default BaseRoute.extend({
    // ...
});
```

## Configuration

The application behavior can be configured by modifying the `config/environment.js` file.

```javascript
module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'gishtech',
        // ...
        APP: {
            animation: {
                banner: {
                    action: 'fadeIn',
                    duration: 1000
                }
            }
        }
    };
    // ...
    return ENV;
};
```

```javascript
import Ember from 'ember';
import config from 'gishtech/config/environment';
// ...
var whatever = config.APP.whatever;
```

## Randomization (shuffle)

Sometimes I try to be overly fancy, and one of my secret techniques for trying to achieve this is good old
randomization. Makes life just a little bit less boring.

I use shuffling for item lists in the intro, skills and credits pages.

```javascript
import Ember from 'ember';

export default Ember.Mixin.create({
    shuffleItems(items) {
        // We want to randomize the list of items in order to make life less boring.
        this.get(items).forEach((item) => {
            item._randomPosition = Math.random();
        });
        this.set(items, this.get(items).sortBy('_randomPosition'));
    }
});
```

Here is the template that I use (replace `whatever` with whatever, e.g. `intros`, `skills` or `credits`):

```javascript
import Ember from 'ember';
import shuffleItemsMixin from '../mixins/shuffle-items';

export default Ember.Component.extend(shuffleItemsMixin, {
    classNames: ['whatever-listing'],

    whatevers: Ember.computed.alias('model'),

    randomWhatevers: Ember.computed('whatevers', function(){
        // We want to randomize the list of whatevers in order to make
        // life a little less boring.
        this.shuffleItems('whatevers');
        
        // Optionally do some fine-tuning here, e.g. keep certain items 
        // in place at beginning or end.
        var res = this.get('intros'),
        // ...

        return res;
    })
});
```

In the template `whatever.hbs` we then iterate over the `randomWhatevers` instead of the `model`.
    
```
{{#each randomWhatevers as |whatever|}}
    {{whatever-item item=whatever}}
{{/each}}

```

## Background banner images

At the top of every page appears a bootstrap `jumbotron` with a different background image covering it. In this section
I will explain how this is accomplished using good old Sass and how I speed things up. By preloading these images, 
navigating to each new page the first time performs much quicker and snappier.

All of the banner images are kept in the `public/assets/images/banners` directory, each having 700x400 dimensions.

### Definitions

Here I present a number of files and definitions that hopefully explain better how things are setup. First of all, I've
embedded the `header-banner` component in the `application.hbs` template which ensures that it will appear at the top
of all the pages.

```html
{{! app/templates/application.hbs }}

<div class="container">
    <!-- ... -->
    {{header-banner
        title='Gishtech'
        subtitle='Advanced Software Development<br/>for the Web'
        routename=currentRouteName
    }}
    <!-- ... -->
</div>
```

Where the `header-banner` component template file looks like this: 

```html
{{! app/templates/components/header-banner.hbs }}

<div class="jumbotron background-image-{{routename}}">
    <h1>{{{title}}}</h1>
    <p>{{{subtitle}}}</p>
</div>
```

As an example, assuming that we are navigating to the `about` page, the following is generated:

```html
<div class="jumbotron background-image-about">
    <!-- ... -->
</div>
```

Where the class `jumbotron` will have a background image covering the whole `div` like this:

```css
/* app/styles/main.scss */
.jumbotron {
    /* ... */
    background: no-repeat 0 25%;
    background-size: cover;
    /* ... */
}
```

So how does this result in the correct banner image appearing? Very simple, Sass to the rescue!

We start by defining a [@mixin directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins) in the 
`globals.scss` file as follows:

```scss
/* app/styles/globals.scss */
@mixin background-image($name) {
    .background-image-#{$name} {
        background-image: url(/assets/images/banners/#{$name}.png);
    }
}
```

In the `main.scss` file we import the `globals.scss` file and use the [@each directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#each-directive) in order to iterate over all of the pages.

```scss
/* app/styles/main.scss */

@import "globals";
/* ... */
@each $name in about, contact, credits, index/*, ... */ {
    @include background-image(#{$name});
}
```

So far example, the `about` page will result in the following:
```css
.background-image-about {
    background-image: url(/assets/images/banners/about.png);
}
```

Which is exactly what we wanted.

### Preloading images

This section provides more technical detail into how the banner background images are preloaded during application
initialization. The reason that I chose to do this was because I noticed that the first time each page was hit, there was a very
noticeable delay while the image was being loaded.

Preloading images using JavaScript is simple, just call:
```javascript
(new Image()).src = value;
```

First of all, we need to know the value of `value` and that's exactly the problem with asset fingerprinting. On 
production `ember build --environment=production` will generate fingerprinted names of all assets including images,
meaning that the about banner image will be named something line:
```
about-c4ee817e7744249afd5aa27ea38c2fe5.png
```
In order to be able to preload the image you will have to know what this name is. That's where asset maps come into
play.

[Broccili-asset-rev](https://github.com/rickharrison/broccoli-asset-rev) is a Broccoli plugin used by Ember to add 
fingerprint checksums to your files and update the source to reflect the new filenames. By default it does not
generate as asset map, so you need to enable it by including the following option in `ember-cli-build.js`:

```javascript
var app = new EmberApp(defaults, {
    // ...
    fingerprint: {
        generateAssetMap: true
    }
});
```

No when the ember application is built for production an assets map is written to the `dist` directory.

The `dist/assets/assetMap.json` contains a mapping of the original file name with the new fingerprinted file name and
looks something like this:

```json
{
  "assets": {
    "assets/gishtech.css": "assets/gishtech-b02594f022d05d47f501235f717f4a9c.css",
    "assets/gishtech.js": "assets/gishtech-5550f84aebd53dda497f60eb64673e23.js",
    "assets/images/banners/about.png": "assets/images/banners/about-c4ee817e7744249afd5aa27ea38c2fe5.png",
    "assets/vendor.css": "assets/vendor-b38bb6e7ab9b40d82afd483da6ba7d55.css",
    "assets/vendor.js": "assets/vendor-c35d3b7d3611e1df8bc21df95b4909f1.js"
  },
  "prepend": ""
}
```

Now all we have to do during the initialization is to access this file and map the original banner image name to the
fingerprinted one.

I chose to do this with an [ember initializer](https://guides.emberjs.com/v2.6.0/applications/initializers/) called
`asset-map`:

```
// app/initializers/asset-map.js
import Ember from 'ember';
export function initialize(container, application) {
    var AssetMap = Ember.Object.extend();

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.getJSON('assets/assetMap.json', resolve).fail(reject);
    });

    promise.then(function(assetMap) {
        AssetMap.reopen({
            assetMap: assetMap,
            resolve: function(name) {
                return assetMap.assets[name];
            }
        });
        for (var key in assetMap.assets) {
            var value = assetMap.assets[key];
            // Filter out only banner images and preload.
            if (/^assets\/images\/banners\//.test(value)) {
                (new Image()).src = value;
            }
        }
    }, function() {
        // ...
    }).then(function() {
        // ...
    });
}

export default {
  name: 'asset-map',
  initialize
};
```

For the complete code, free to have a look at (asset-map.js)[app/initializers/asset-map.js].

### Notes

In later versions of Ember 2.x, the `initialize` method should take only one argument and you will more than
likely see a deprecation warning. I haven't yet figured out how to refactor my version by replacing `container` with
some other mechanism, so I'm open to any suggestions (thanks in advance).

I realize that Sass also offers an advanced technique to preload images. However, I was never able to get it working in
Ember.js with fingerprinting. For those interested, check out the following article: [Elegantly preload background images with Sass](http://yoranbrondsema.com/elegantly-preload-background-images-sass/).

I have to give credit to [ember-cli-inject-asset-map](https://github.com/jcaffey/ember-cli-inject-asset-map) by jcaffey
who got me on the right track and made me think more.

See also [Resolving fingerprinted assets using generateassetmap](http://discuss.emberjs.com/t/resolving-fingerprinted-assets-using-generateassetmap)

## References

While the following list of references is far from complete, it should nonetheless give you a good start for learning
more about new and interesting stuff.

* [Babel.js](http://babeljs.io/) - Support for the latest version of JavaScript (ES2015) through syntax transformers.
* [Bootstrap](http://getbootstrap.com/) - HTML, CSS, and JS framework for developing responsive, mobile projects.
* [Ember-cli-mirage](http://www.ember-cli-mirage.com/) - A client-side mock server to develop, test and prototype your app. 
* [Ember-cli](http://ember-cli.com/) - The Ember.js command line utility.
* [Ember-fastboot](http://www.ember-fastboot.com/) - Addon for Ember-cli allowing you to render and serve Ember.js apps on the server. 
* [Ember.js](http://emberjs.com/) - Framework for creating ambitious web applications.
* [Fontawesome](http://fontawesome.io/) - Scalable vector icons toolkit that can be customized using CSS.
* [Liquid Fire](http://ember-animation.github.io/liquid-fire/) - Animations and transitions for ambitious Ember applications.
* [Velocity.js](http://julian.com/research/velocity/) - Animation engine based on `jQuery.animate()` but much faster.
* [Sass](http://sass-lang.com/) - Most mature, stable, and powerful professional grade CSS extension language in the world.

## Books

There are a number of great books out there about JavaScript and frameworks.

* [Building Front-End Web Apps with Plain JavaScript](https://gumroad.com/l/YyWka) - Gerd Wagner
* [Ember 101](https://leanpub.com/ember-cli-101) - Adolfo Builes
* [Exploring ES6](https://leanpub.com/exploring-es6) - Axel Rauschmayer
* [Rock and Roll with Ember.js](http://balinterdi.com/rock-and-roll-with-emberjs/) - Balint Erdi
* [Speaking JavaScript](http://speakingjs.com/es5/) - Axel Rauschmayer
* [Web Animation using JavaScript](http://www.amazon.com/Web-Animation-using-JavaScript-Develop/dp/0134096665) - Julian Shapiro
* [Sass and Compass in Action](https://www.manning.com/books/sass-and-compass-in-action) - Wynn Netherland et al

## Videos

* [Animating in Ember.js with Liquid Fire](https://www.youtube.com/watch?v=vq_BcIFM8Rc) - Presentation given by Edward Faulkner at the Silicon Valley Ember.js meetup.
* [Animations with Liquid Fire](https://www.emberscreencasts.com/tags/liquid-fire) - Series of tutorials from the popular [Emberscreencasts](https://www.emberscreencasts.com/) by Jeffrey Biles.

## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

\- You're never too old to learn new stuff.
