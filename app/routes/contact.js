import BaseRoute from './base';

export default BaseRoute.extend({
    activate() {
        this._super.apply(this, arguments);
        this.controllerFor(this.routeName).send('reset');
    }
});
