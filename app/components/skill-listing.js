import Ember from 'ember';

var scores = [
    { value: 0, title: 'All'},
    { value: 1, title: 'Pretty good'},
    { value: 2, title: 'Excellent'},
    { value: 3, title: 'Amazing'}
];

export default Ember.Component.extend({
    classNames: ['skill-listing'],
    filterScore: 0,
    scores: scores,
    
    randomSkills: Ember.computed('skills', function(){
        return this.get('skills');
    }),

    actions: {
        filterScore(n) {
           this.set('filterScore', n); 
        }
    }
});
