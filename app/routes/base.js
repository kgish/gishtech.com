import Ember from 'ember';
import config from 'gishtech/config/environment';
import ResetScrollPositionMixin from '../mixins/reset-scroll-position';

export default Ember.Route.extend(ResetScrollPositionMixin, {
    activate() {
        this._super();
        var banner = config.APP.animation.banner;
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.jumbotron').velocity(banner.action, { duration: banner.duration });
        });
    }
});
