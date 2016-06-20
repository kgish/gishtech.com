import Ember from 'ember';

export default Ember.Route.extend({
    activate() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, function() {
            // Bootstrap collapsible navigation bar
            Ember.$('.nav li a').on('click', function(){
                var self = Ember.$(this);
                Ember.run(function() {
                    if (!self.hasClass('dropdown-toggle')) {
                        var toggle = Ember.$('.navbar-toggle');
                        if (toggle) { toggle.trigger("click"); }
                    }
                });
            });
        });
    }
});
