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
});

export default Router;
