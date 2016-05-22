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
});

export default Router;
