import Ember from 'ember';
import config from 'gishtech/config/environment';

export default Ember.Route.extend({

    activate() {
        this._super.apply(this, arguments);
        var banner = config.APP.animation.banner;
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.jumbotron').velocity(banner.action, { duration: banner.duration });
        });
    }
});
