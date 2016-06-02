import Ember from 'ember';
import BaseRoute from './base';

export default BaseRoute.extend({
    model() {
        return this.store.findAll('skill');
    },
    
    activate() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.skill-item').velocity('transition.fadeIn', { stagger: 50 });
        });
    }
});
