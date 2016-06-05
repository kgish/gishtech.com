import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['contact-form'],

    validFirstname: true,
    validLastname: true,
    validEmail: true,
    validPhone: true,
    validMessage: true,

    validAnswer: true,
    question: '3 * 7',

    enableSend: false
});
