'use strict';

angular.module('app')
    .controller('SignatureController', ['$scope', '$stateParams', function ($scope, $stateParams) {

        //constructor
        this.initialize = function () {
            loadOptions();
        };

        //retrieve the available product group list
        function loadOptions() {
            $scope.orderNumber = $stateParams.orderNumber;
            $scope.companyName = $stateParams.companyName;
        }

        this.initialize();
        }
    ]);
