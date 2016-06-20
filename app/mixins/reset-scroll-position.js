import Ember from 'ember';

export default Ember.Mixin.create({
    // https://spin.atomicobject.com/2016/06/06/ember-scroll-to-top
    // Resetting the scroll position to the top when a page loads is very common in modern websites. By default, Ember
    // actually retains the current scroll position as you navigate between pages. This is a little strange because 
    // new pages you navigate to may load halfway down the page.
    activate() {
        this._super();
        window.scrollTo(0,0);
    }
});
