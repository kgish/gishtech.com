import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function () {
        Ember.$('.jumbotron').velocity("fadeIn", { duration: 1000 });
    }
});
