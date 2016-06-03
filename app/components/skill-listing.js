import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['skill-listing'],
    skills: Ember.computed.alias('model'),
    
    filterScore: 0,
    scores: [
        { value: 0, title: 'All'},
        { value: 1, title: 'Pretty good'},
        { value: 2, title: 'Excellent'},
        { value: 3, title: 'Amazing'}
    ],

    prev_score: 0,
    next_score: 0,

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
        filterScore(next_score) {
            if (next_score !== this.get('filterScore')) {
                this.set('filterScore', next_score);
            }
            // Only display skills with a given score (n).
            // this.set('prev_score', next_score);
            // var prev_score = this.get('prev_score');
            // if (next_score !== prev_score) {
            //     if (prev_score === 0) {
            //         [1,2,3].forEach(function(score){
            //             if (score !== next_score) {
            //                 Ember.$('.skill-item > .skill-score-'+score).velocity('fadeOut');
            //             }
            //         });
            //     } else if (next_score === 0) {
            //         [1,2,3].forEach(function(score){
            //             if (score !== prev_score) {
            //                 Ember.$('.skill-item > .skill-score-'+score).velocity('fadeIn');
            //             }
            //         });
            //     } else {
            //         [1, 2, 3].forEach(function (score) {
            //             if (score === prev_score) {
            //                 Ember.$('.skill-item > .skill-score-' + score).velocity('fadeOut');
            //             } else if (score === next_score) {
            //                 Ember.$('.skill-item > .skill-score-' + score).velocity('fadeIn');
            //             }
            //         });
            //     }
            // }
        }
    }
});
