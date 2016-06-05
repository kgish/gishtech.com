import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['contact-form'],

    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    message: null,
    
    validFirstname: Ember.computed('firstname', function() { 
        var firstname = this.get('firstname');
        return (firstname && firstname.length > 5);
    }),
    validLastname: true,
    validEmail: true,
    validPhone: true,
    validMessage: true,

    dsableSend: true
});
