import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['skill-listing'],
    
    filterScore: 0,
    scores: [
        { value: 0, title: 'All'},
        { value: 1, title: 'Pretty good'},
        { value: 2, title: 'Excellent'},
        { value: 3, title: 'Amazing'}
    ],

    skills: Ember.computed.alias('model'),

    randomSkills: Ember.computed('skills', 'filterScore', function(){
        // We want to randomize the list of skills in order to make it less boring.
        var skills = this.get('skills'),
            s = [], o = [], res = [];

        skills.forEach(function(skill){
            s.pushObject({ name: skill.get('name'), url: skill.get('url'), score: skill.get('score') });
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
            if (n !== this.get('filterScore')) {
                this.set('filterScore', n);
            }
        }
    }
});
