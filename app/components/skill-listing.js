import Ember from 'ember';
import shuffleItemsMixin from '../mixins/shuffle-items';

export default Ember.Component.extend(shuffleItemsMixin, {
    classNames: ['skill-listing'],

    filterScore: -1,
    scores: [
        { value: 0, title: 'All'},
        { value: 1, title: 'Okay'},
        { value: 2, title: 'Pretty good'},
        { value: 3, title: 'Excellent'},
        { value: 4, title: 'Amazing'}
    ],

    didInsertElement() {
        Ember.run.schedule('afterRender', this, function(){
            this.shuffleItems('skills');
            this.set('filterScore', 0);
        });
    },

    actions: {
        filterScore(n) {
            if (n !== this.get('filterScore')) {
                this.shuffleItems('skills');
                this.set('filterScore', n);
            }
        }
    }
});
