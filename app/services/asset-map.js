import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Service.extend({
    assetMap: null,

    init() {
        console.log('AssetMapService#init()');
        this._super(...arguments);
        this.set('assetMap', []);
        if (config.environment === 'production') {
            var promise = new Ember.RSVP.Promise(function (resolve, reject) {
                Ember.$.getJSON('assets/assetMap.json', resolve).fail(reject);
            });

            promise.then(function (assetMap) {
                console.log('AssetMapService#init() Found assetMap.json');
                this.set('assetMap', assetMap);
            }, function () {
                console.error('AssetMapService#init() Cannot find assetMap.json');
            });
        }
    },

    resolve(name) {
        if (config.environment === 'production') {
            return name;
        } else {
            return name;
        }
    }
});
