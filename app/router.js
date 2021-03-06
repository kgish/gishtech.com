import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    metrics: Ember.inject.service(),

    didTransition() {
        this._super(...arguments);
        this._trackPage();
    },

    _trackPage() {
        Ember.run.scheduleOnce('afterRender', this, () => {
            const page = this.get('url');
            const title = this.getWithDefault('currentRouteName', 'unknown');
            //console.log(`_trackPage(page='${page}',title='${title}')`);
            Ember.get(this, 'metrics').trackPage({ page, title });
        });
    }
});

Router.map(function() {

    this.route('about');
    this.route('contact');
    this.route('credits');
    this.route('links');
    this.route('logo');
    this.route('portfolios');
    this.route('publications');
    this.route('repository');
    this.route('skills');
    this.route('terms-and-conditions');

    // Catch-all for unknown routes
    this.route("page-not-found", { path: '/*path'});
});

export default Router;
