import Ember from 'ember';
import shuffleItemsMixin from '../mixins/shuffle-items';

export default Ember.Component.extend(shuffleItemsMixin, {
    classNames: ['intro-listing'],

    intros: Ember.computed.alias('model'),

    randomIntros: Ember.computed('intros', function(){
        // We want to randomize the list of intros in order to make life less boring.
        this.shuffleItems('intros');

        // Ensure that the motto is always at the bottom of the list
        var res = this.get('intros'),
            motto = res.findBy('title', 'Motto');
        res.removeObject(motto);
        res.pushObject(motto);

        return res;
    })
});
