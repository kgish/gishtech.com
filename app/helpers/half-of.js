import Ember from 'ember';

export function halfOf(params/*, hash*/) {
    let v1 = params[0];
    if (typeof v1 === 'string' && /^\d+$/.test(v1)) {
        v1 = parseInt(v1);
    }
    return v1/2;    
}

export default Ember.Helper.helper(halfOf);
