import Ember from 'ember';
import shuffleItemsMixin from '../mixins/shuffle-items';

export default Ember.Component.extend(shuffleItemsMixin, {
    classNames: ['portfolio-listing'],

    portfolios: Ember.computed.alias('model'),

    randomPortfolios: Ember.computed('portfolios', function(){
        // We want to randomize the list of portfolios in order to make life less boring.
        this.shuffleItems('portfolios');
        return this.get('portfolios');
    })
});
