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
