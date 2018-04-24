mainApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/templates/home.html',
            })
            .when('/group/:group', {
                templateUrl: '/templates/groupschedule.html',
            })
            .when('/day/:day', {
                templateUrl: '/templates/dayschedule.html',
                controller: 'dayController'
            })
            .when('/addgroup', {
                templateUrl: '/templates/addgroup.html',
                controller: 'addgroupController'
            })
            .when('/deletegroup', {
                templateUrl: '/templates/deletegroup.html',
                controller: 'deletegroupController'
            })
            .otherwise({
                redirectTo: '/home',
            });
    }]);   