import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['contact-form'],

    messageSent: false,

    validFirstname: Ember.computed('model.firstname', function() {
        var firstname = this.get('model.firstname'),
            isEmpty = Ember.isEmpty(firstname);
        return (!isEmpty && firstname.length > 1);
    }),
    validLastname: Ember.computed('model.lastname', function() {
        var lastname = this.get('model.lastname'),
            isEmpty = Ember.isEmpty(lastname);
        return (!isEmpty && lastname.length > 1);
    }),
    validEmail: Ember.computed('model.email', function(){
        var email = this.get('model.email'),
            re = /^.+@.+\..+$/,
            isEmpty = Ember.isEmpty(email);
        return (!isEmpty && re.test(email.trim()));
    }),
    validPhone: Ember.computed('model.phone', function(){
        // Must contain stream of digits, spaces, '.', '+' or '-' (at least 6 digits)
        var phone = this.get('model.phone'),
            isEmpty = Ember.isEmpty(phone);
        return isEmpty || ( phone.match(/\d/g) && phone.match(/\d/g).length>=6 && /^\+?[ 0-9.-]+$/.test(phone.trim()) );
    }),
    validMessage: Ember.computed('model.message', function(){
        var message = this.get('model.message');
        return message && message.length > 0 && message.split(' ').length >= 10;
    }),

     enableSend: Ember.computed.and(
        'validFirstname',
        'validLastname',
        'validEmail',
        'validPhone',
        'validMessage'
    ),
    disableSend: Ember.computed.not('enableSend'),

    actions: {
        // Some fancy animation shenanigans.
        // After clearing the fields, a success message is displayed which slowly
        // fades out in ten seconds, after which the original (now empty) dialog
        // will reappear.
        sendMessage() {
            var _this = this;
            [
                'firstname',
                'lastname',
                'email',
                'phone',
                'message'
            ].forEach(function(item){
                console.log(item + '=' + _this.get('model.'+item));
                _this.set('model.'+item, null);
            });
            this.set('messageSent', true);
            Ember.run.scheduleOnce('afterRender', this, function(){
                Ember.$('.alert-success').velocity('fadeOut', { duration: 10000 });
                Ember.run.later(this, function(){
                   this.set('messageSent', false);
                }, 10000);
            });
        }
    }
});
