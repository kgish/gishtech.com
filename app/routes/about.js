import Ember from 'ember';
import BaseRoute from './base';

export default BaseRoute.extend({

    activate() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.about-item').velocity('transition.slideUpIn', { stagger: 250, drag: true });
        });
    }
});
