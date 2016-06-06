import Ember from 'ember';
import BaseRoute from './base';

export default BaseRoute.extend({
    model() {
        return this.store.findAll('credit');
    },

    activate() {
        this._super.apply(this, arguments);
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.credit-item').velocity('transition.slideUpIn', { stagger: 100, drag: false });
        });
    }
});
