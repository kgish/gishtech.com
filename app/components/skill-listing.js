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

    randomSkills: Ember.computed('skills', 'filterScore', function(){
        // We want to randomize the list of skills in order to make it less boring.
        var skills = this.get('skills'),
            filterScore = this.get('filterScore'),
            s = [], o = [], res = [];

        skills.forEach(function(skill){
            var score = skill.get('score'),
                display = filterScore === 0 || filterScore === score;
            s.pushObject({ name: skill.get('name'), url: skill.get('url'), score: score, display: display });
        });

        for (var n = 0; n < s.length; n++) {
            o.push(n);
        }
        
	    for (var i = o.length; i; ) {
            var j = parseInt(Math.random() * i), x = o[--i];
            o[i] = o[j]; 
            o[j] = x;
        }

        o.forEach(function(n) {
            res.pushObject(s[n]);
        });

        return res;
    }),

    actions: {
        filterScore(n) {
            // Only display skills with a given score (n).
            if (n !== this.get('filterScore')) {
                this.set('filterScore', n);
            }
        }
    }
});
