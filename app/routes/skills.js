import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { name: 'Team management' },
            { name: 'Agile and Scrum' },
            { name: 'JavaScript, jQuery and Ember' },
            { name: 'Backbone, Express and Node' },
            { name: 'HTML, CSS, Sass and Bootstrap' },
            { name: 'WebdriverIO, Selenium and Mocha' },
            { name: 'Ruby and Ruby on Rails' },
            { name: 'Linux, Apache and MySQL' },
            { name: 'Perl and C/C++' },
            { name: 'Elixir and Phoenix' },
            { name: 'Continuous Delivery' },
            { name: 'Test-Driven Development' }
        ];
    }
});



