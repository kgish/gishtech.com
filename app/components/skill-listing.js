import Ember from 'ember';

export default Ember.Component.extend({
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
        this._shuffleSkills();
        this.set('filterScore', 0);
    },

    actions: {
        filterScore(n) {
            if (n !== this.get('filterScore')) {
                this._shuffleSkills();
                this.set('filterScore', n);
            }
        }
    },

    _shuffleSkills() {
        // We want to randomize the list of skills in order to make it less boring.
        this.get('skills').forEach((skill) => {
            skill._randomPosition = Math.random();
        });
        this.set('skills', this.get('skills').sortBy('_randomPosition'));
    }
});
