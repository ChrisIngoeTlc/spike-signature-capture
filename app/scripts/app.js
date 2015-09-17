angular.module('app', ['ui.router','productApiRest'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            var main = {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainController'
            },search = {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'SearchController'
            },products = {
                url: '/products',
                templateUrl: 'views/products.html',
                controller: 'ProductsController'
            },signature = {
                url: '/signature?orderNumber=10001231&companyName=ABC',
                templateUrl: 'views/signature.html',
                controller: 'SignatureController'
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
                .state('signature', signature)
                .state('productgroup', productgroup)
                ;

            $urlRouterProvider.otherwise('/');

        }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});