import Ember from 'ember';
import BaseRoute from './base';

export default BaseRoute.extend({

    contact: null,

    model() {
        var contact = Ember.Object.create({
            firstname: null,
            lastname: null,
            email: null,
            message: null
        });
        this.set('contact', contact);
        return  contact;
    },

    deactivate(){
        Ember.Object.destroy(this.get('contact'));
        this.set('contact', null);
    }
});
