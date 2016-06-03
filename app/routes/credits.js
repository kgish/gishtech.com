import BaseRoute from './base';

export default BaseRoute.extend({
    model() {
        return this.store.findAll('credit');
    },

    activate() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, function(){
            Ember.$('.intro-credit').velocity('transition.bounceLeftIn', { stagger: 300, drag: true });
        });
    }
});
