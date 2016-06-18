import Ember from 'ember';
import shuffleItemsMixin from '../mixins/shuffle-items';

export default Ember.Component.extend(shuffleItemsMixin, {
    classNames: ['credit-listing'],

    credits: Ember.computed.alias('model'),

    randomCredits: Ember.computed('credits', function(){
        // We want to randomize the list of intros in order to make life less boring.
        this.shuffleItems('credits');

        // Ensure that the ember is always at the top of the list
        var res = this.get('credits'),
            emberjs = res.findBy('name', 'Ember');
        res.removeObject(emberjs);
        res.unshiftObject(emberjs);

        return res;
    })
});
