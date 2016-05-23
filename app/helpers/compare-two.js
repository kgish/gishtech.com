import Ember from 'ember';

export function compareTwo(params/*, hash*/) {
    var v1 = params[0], op = params[1], v2 = params[2], res;
    // If one value is a string containing only digits and the other value is an integer,
    // convert the string to a number so that the comparisons work better.
    if (typeof v1 === 'string' && /^\d+$/.test(v1) && typeof v2 === 'number' && v2 % 1 === 0) {
        v1 = parseInt(v1);
    } else if (typeof v2 === 'string' && /^\d+$/.test(v2) && typeof v1 === 'number' && v2 % 1 === 0) {
        v2 = parseInt(v2);
    }
    switch (op) {
        case '===':
            res = (v1 === v2); break;
        case '!==':
            res = (v1 !== v2); break;
        case '<':
            res = (v1 < v2); break;
        case '<=':
            res = (v1 <= v2); break;
        case '>':
            res = (v1 > v2); break;
        case '>=':
            res = (v1 >= v2); break;
        case '&&':
            res = (v1 && v2); break;
        case '||':
            res = (v1 || v2); break;
        default:
            throw 'Compare-two: invalid operator ('+op+')';
    }
    //console.log('compare-two('+v1+','+op+','+v2+') => '+res);
    return res;
}

export default Ember.Helper.helper(compareTwo);
