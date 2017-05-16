import Ember from 'ember';

export default Ember.Controller.extend({
    name: '',
    email: '',
    message: '',

    validName: Ember.computed('name', function(){
       let name = this.get('name');
       return name.length > 3;
    }),

    validEmail: Ember.computed('email', function(){
        let email = this.get('email'),
            re = /^.+@.+\..+$/;
        return re.test(email);
    }),

    validMessage: Ember.computed('message', function(){
        let message = this.get('message');
        return message.length >= 10;
    }),

    enableSubmit: Ember.computed.and('validName', 'validEmail', 'validMessage'),

    actions: {
        reset() {
            this.set('name', '');
            this.set('email', '');
            this.set('message', '');
        },
        submit() {
            let name = this.set('name', ''),
                email = this.set('email', ''),
                message = this.set('message', '');

            alert('Your message has been sent, thanks!')
        }
    }
});
