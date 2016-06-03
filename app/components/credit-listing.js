import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['credit-listing'],

    credits: Ember.computed.alias('model'),

    randomCredits: Ember.computed('credits', function(){
        // We want to randomize the list of credits in order to make it less boring.
        var credits = this.get('credits'),
            s = [], o = [], res = [];

        credits.forEach(function(credit){
            s.pushObject({ name: credit.get('name'), url: credit.get('url') });
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

        // Ensure that the ember is always at the top of the list
        var emberjs = res.findBy('name', 'Ember');
        res.removeObject(emberjs);
        res.unshiftObject(emberjs);

        return res;
    })
});
