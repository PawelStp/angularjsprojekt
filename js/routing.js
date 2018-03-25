mainApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            }).
            otherwise({
                redirectTo: '/home',
            });
    }]);   
