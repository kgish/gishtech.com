import Ember from 'ember';
import ShuffleItemsMixin from 'gishtech/mixins/shuffle-items';
import { module, test } from 'qunit';

module('Unit | Mixin | shuffle items');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShuffleItemsObject = Ember.Object.extend(ShuffleItemsMixin);
  let subject = ShuffleItemsObject.create();
  assert.ok(subject);
});
