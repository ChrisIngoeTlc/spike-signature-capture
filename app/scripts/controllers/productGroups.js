'use strict';

angular.module('app')
    .controller('ProductGroupsController', ['$scope', 'ProductApi', function ($scope, ProductApi) {

        //constructor
        this.initialize = function () {
            loadOptions();
        };

        //retrieve the available product group list
        function loadOptions() {
            $scope.saving = false;
            $scope.loading = true;
            $scope.productGroupName = '';
            ProductApi.all('productgroups').getList().then(function (results) {
                $scope.productGroups = ProductApi.stripRestangular(results);
                $scope.loading = false;
            });
        }

        $scope.submitProductGroup = function() {
            $scope.saving = true;
            var payload = {name:$scope.productGroupName};
            var productGroups = ProductApi.all('productgroups');
            productGroups.post(payload).then(function () {
                loadOptions();
                $scope.saveResult = 'Product Group Saved!';
            });
        };

        this.initialize();
        }
    ]);
