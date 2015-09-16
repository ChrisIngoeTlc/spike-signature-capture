'use strict';

angular.module('productApiRest')
    .factory('ProductApi', ['Restangular', 'PRODUCT_API_URL', function (Restangular, url) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(url);
        });
    }]);
