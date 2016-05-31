import Ember from 'ember';
import AssetMapInitializer from 'gishtech/initializers/asset-map';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | asset map', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AssetMapInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
