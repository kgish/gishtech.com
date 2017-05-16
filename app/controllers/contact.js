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
            this._reset();
        },
        submit() {
            let name = this.get('name'),
                email = this.get('email'),
                message = this.get('message');

            bootbox.alert({
                size: "small",
                title: `Thanks ${name}!`,
                message: "<p>Your message has been sent, and I will contact you soon.<p><p>Kind regards,<br/>Kiffin</p>",
                callback: function(){}
            });

            this._reset();
        }
    },

    // Private

    _reset() {
        this.set('name', '');
        this.set('email', '');
        this.set('message', '');
    }
});
