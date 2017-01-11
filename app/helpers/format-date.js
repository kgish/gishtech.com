import Ember from 'ember';

export function formatDate(params/*, hash*/) {
    return moment().format(params[0]);
}

export default Ember.Helper.helper(formatDate);
