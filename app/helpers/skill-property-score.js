import Ember from 'ember';

export function skillPropertyScore(param) {
    var score = [];

    while (param--) {
        score.pushObject('<i class="fa fa-circle"></i>');
    }

    return Ember.String.htmlSafe('<span class="score">' + score.join(' ') + '</span>');
}

export default Ember.Helper.helper(skillPropertyScore);
