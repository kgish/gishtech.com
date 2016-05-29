import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['intro-listing'],
    
    intros: Ember.computed.alias('model'),
    
    randomIntros: Ember.computed('intros', function(){
        // We want to randomize the list of intros in order to make it less boring.
        var intros = this.get('intros'),
            s = [], o = [], res = [];

        intros.forEach(function(intro){
            s.pushObject({ title: intro.get('title'), description: intro.get('description') });
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
    })
});
