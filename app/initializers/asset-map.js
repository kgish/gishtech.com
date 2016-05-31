import Ember from 'ember';

export function initialize(container, application) {

    var AssetMap = Ember.Object.extend();

    application.deferReadiness();

    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.getJSON('assets/assetMap.json', resolve).fail(reject);
    });

    promise.then(function(assetMap) {
        AssetMap.reopen({
            assetMap: assetMap,
            resolve: function(name) {
                //var res = assetMap.assets[name];
                //console.log('AssetMap.resolve(name='+name+') => '+res);
                //return res;
                return assetMap.assets[name];
            }
        });
        var banners = [];
        for (var key in assetMap.assets) {
            var value = assetMap.assets[key];
            if (/^assets\/images\/banners\//.test(value)) {
                banners.push(value);
                (new Image()).src = value;
            }
        }
        //console.log(JSON.stringify(banners));
    }, function() {
        AssetMap.reopen({
            resolve: function(name) {
                //console.log('AssetMap.resolve(name='+name+') => '+name);
                return name;
            }
        });
    }).then(function() {
        container.register('assetMap:main', AssetMap, {singleton: true});
        application.inject('route', 'assets', 'assetMap:main');
        application.advanceReadiness();
    });
}

export default {
  name: 'asset-map',
  initialize
};
