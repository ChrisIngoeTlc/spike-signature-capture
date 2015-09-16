angular.module('app', ['ui.router','productApiRest'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            var main = {
                url: '/',
                templateUrl: 'views/products.html',
                controller: 'ProductsController'
            },products = {
                url: '/products',
                templateUrl: 'views/products.html',
                controller: 'ProductsController'
            },productgroups = {
                url: '/productgroups',
                templateUrl: 'views/productGroups.html',
                controller: 'ProductGroupsController'
            },productgroup = {
                url: '/productgroup/:productGroupId',
                templateUrl: 'views/productGroup.html',
                controller: 'ProductGroupController'
            }
            ;

            $stateProvider

                .state('default', main)
                .state('products', products)
                .state('productgroups', productgroups)
                .state('productgroup', productgroup)
                ;

            $urlRouterProvider.otherwise('/');

        }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});