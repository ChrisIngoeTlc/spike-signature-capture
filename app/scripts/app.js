angular.module('app', ['ui.router','productApiRest'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            var mainMenu = {
                url: '/',
                templateUrl: 'views/mainMenu.html',
                controller: 'MainController'
            },searchSignature = {
                url: '/searchSignature',
                templateUrl: 'views/signatureSearch.html',
                controller: 'SignatureSearchController'
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

                .state('mainMenu', mainMenu)
                .state('products', products)
                .state('productgroups', productgroups)
                .state('signature', signature)
                .state('searchSignature', searchSignature)
                .state('productgroup', productgroup)
                ;

            $urlRouterProvider.otherwise('/');

        }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});