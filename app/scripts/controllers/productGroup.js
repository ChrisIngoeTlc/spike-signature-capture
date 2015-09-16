'use strict';

angular.module('app')
    .controller('ProductGroupController', ['$scope', '$state', '$stateParams', 'ProductApi', function ($scope, $state, $stateParams, ProductApi) {

        //constructor
        this.initialize = function () {
            $scope.productGroupId = $stateParams.productGroupId
            $scope.servicesSelected = [];
            $scope.productsSelected = [];
            loadProductGroup();
            loadProductGroupServices();
            loadProducts();
        };

        //retrieve the product group details
        function loadProductGroup() {
            $scope.loading = true;
            ProductApi.one('productgroups',$scope.productGroupId).get().then(function (results) {
                $scope.productGroup = ProductApi.stripRestangular(results);
                if(!$scope.productGroup.services){
                    $scope.productGroup.services = [];
                }
                if(!$scope.productGroup.products){
                    $scope.productGroup.products = [];
                }
                $scope.loading = false;
            }, function(response){
                //error getting product group. return to product group list
                $state.go('productgroups');
            });
            $scope.loading = false;
        }

        function loadProducts() {
            ProductApi.all('products').getList().then(function (results) {
                $scope.allProducts = ProductApi.stripRestangular(results);
            });
        }

        //retrieve the product group services
        function loadProductGroupServices() {
            ProductApi.all('productgroups/services').getList().then(function (results) {
                $scope.productGroupServices = ProductApi.stripRestangular(results);
            }, function(response){
                //error getting product group. return to product group list
                $state.go('productgroups');
            });
            $scope.loading = false;
        }

        //update the current product group
        function updateProductGroup() {
            $scope.saving = true;
            ProductApi.one('productgroups',$scope.productGroupId).get().then(function (productGroup) {
                productGroup.services = $scope.productGroup.services;
                productGroup.products = $scope.productGroup.products;
                productGroup.put();
            }, function(response){
                //error!!
            });
        }

        //create a new product
        function createProduct() {
            $scope.saving = true;
            var payload = {name:$scope.productName};
            var products = ProductApi.all('products');
            products.post(payload).then(function () {
                $scope.saving = false;
                $scope.loading = true;
                $scope.productName = '';
                $scope.saveResult = 'Product Saved!';
                loadProducts();
            });
        }

        $scope.submitNewProduct = function() {
            createProduct();
        };

        $scope.returnToProductGroupList = function() {
            updateProductGroup();
            $state.go('productgroups');
        };

        $scope.toggleService = function (service) {
            var servicePos = getSelectedServiceIndexByServiceId(service.id);
            if (servicePos == -1) {
                if(!$scope.productGroup.services){
                    $scope.productGroup.services = [];
                }
                $scope.productGroup.services.push(service);
            } else {
                $scope.productGroup.services.splice(servicePos, 1);
            }
        };

        $scope.isActive = false;

/*        $scope.isServiceSelected = function (idx) {
            var pos = $scope.servicesSelected.indexOf(idx);
            if (pos == -1) {
                $scope.servicesSelected.push(idx);
            } else {
                $scope.servicesSelected.splice(pos, 1);
            }
        };*/
/*
        $scope.getServiceIndexByServiceId = function(serviceId){
            return _.findIndex($scope.productGroupServices, function(service) {
                return service.id == serviceId;
            });
        };*/

        function getSelectedServiceIndexByServiceId(serviceId){
            if(!$scope.productGroup || !$scope.productGroup.services){
                return -1;
            }
            return _.findIndex($scope.productGroup.services, function(service) {
                return service.id == serviceId;
            });
        };

        $scope.isServiceSelectedById = function(serviceId){
            if(!$scope.productGroup || !$scope.productGroup.services){
                return false;
            }
            return _.findIndex($scope.productGroup.services, function(service) {
                return service.id == serviceId;
            }) != -1;
        };

        $scope.toggleProduct = function (product) {
            var productPos = getSelectedProductIndexByProductId(product.id);
            if (productPos == -1) {
                if(!$scope.productGroup.products){
                    $scope.productGroup.products = [];
                }
                $scope.productGroup.products.push(product);
            } else {
                $scope.productGroup.products.splice(productPos, 1);
            }
        };

        function getSelectedProductIndexByProductId(productId){
            if(!$scope.productGroup || !$scope.productGroup.products){
                return -1;
            }
            return _.findIndex($scope.productGroup.products, function(product) {
                return product.id == productId;
            });
        };

        $scope.isProductSelectedById = function(productId){
            if(!$scope.productGroup || !$scope.productGroup.products){
                return false;
            }
            return _.findIndex($scope.productGroup.products, function(product) {
                return product.id == productId;
            }) != -1;
        };

        this.initialize();
        }
    ]);
