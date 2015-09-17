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
            },signature = {
                url: '/signature?orderNumber=10001231&companyName=ABC',
                templateUrl: 'views/signature.html',
                controller: 'SignatureController'
            }
            ;

            $stateProvider

                .state('mainMenu', mainMenu)
                .state('signature', signature)
                .state('searchSignature', searchSignature)
                ;

            $urlRouterProvider.otherwise('/');

        }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});