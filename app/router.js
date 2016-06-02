import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    
    this.route('skills');
    this.route('contact');
    this.route('about');
    this.route('terms-and-conditions');
    this.route('credits');
    this.route('logo');
    this.route('repository');
    this.route('links');

    // Catch-all for unknown routes
    this.route("page-not-found", { path: '/*path'});
});

export default Router;
