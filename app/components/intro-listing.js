import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['intro-listing'],
    
    intros: Ember.computed.alias('model')
});
