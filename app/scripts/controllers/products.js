'use strict';

angular.module('app')
    .controller('ProductsController', ['$scope', 'ProductApi', function ($scope, ProductApi) {

        //constructor
        this.initialize = function () {
            loadOptions();
        };

        //retrieve the available product list
        function loadOptions() {
            $scope.saving = false;
            $scope.loading = true;
            $scope.productName = '';
            ProductApi.all('products').getList().then(function (results) {
                $scope.products = ProductApi.stripRestangular(results);
                $scope.loading = false;
            });
        }

        $scope.submitNewProduct = function() {
            $scope.saving = true;
            var payload = {name:$scope.productName};
            var products = ProductApi.all('products');
            products.post(payload).then(function () {
                loadOptions();
                $scope.saveResult = 'Product Saved!';
            });
        };

        this.initialize();
        }
    ]);
