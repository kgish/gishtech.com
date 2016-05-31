import BaseRoute from './base';

export default BaseRoute.extend({
    model() {
        return this.store.findAll('skill');
    }
});
