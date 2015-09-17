'use strict';

angular.module('app')
    .controller('MainController', ['$scope', function ($scope) {

        //constructor
        this.initialize = function () {
            loadOptions();
        };

        //retrieve the available product list
        function loadOptions() {
            $scope.saving = false;
            $scope.loading = true;
            $scope.productName = '';
        }

        this.initialize();
        }
    ]);
