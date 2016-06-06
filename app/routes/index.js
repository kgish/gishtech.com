import Ember from 'ember';
import BaseRoute from './base';

export default BaseRoute.extend({
    model() {
        return this.store.findAll('intro');
    },

    activate() {
        this._super.apply(this, arguments);
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.intro-item').velocity('transition.bounceLeftIn', { stagger: 300, drag: true });
        });
    }
});
