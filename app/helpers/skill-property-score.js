import Ember from 'ember';

export function skillPropertyScore(param) {
    var score = [];

    while (param--) {
        score.pushObject('<i class="fa fa-dot-circle-o"></i>');
    }

    return Ember.String.htmlSafe(score.join(' '));
}

export default Ember.Helper.helper(skillPropertyScore);
