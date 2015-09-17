'use strict';

angular.module('app')
    .controller('SearchController', ['$scope', 'ProductApi', function ($scope, ProductApi) {

        //constructor
        this.initialize = function () {
            loadOptions();
        };

        //retrieve the available product list
        function loadOptions() {
            $scope.loading = true;
            $scope.productName = '';
            //ProductApi.all('products').getList().then(function (results) {
            //    $scope.products = ProductApi.stripRestangular(results);
            //    $scope.loading = false;
            //});
        }

        this.initialize();
        }
    ]);
