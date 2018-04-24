angular.module('starter.controllers', [])
    .controller('main', function ($scope, $http) {

        $scope.monday = "Monday"
        $scope.tuesday = "Tuesday"
        $scope.wednesday = "Wednesday"
        $scope.thursday = "Thursday"
        $scope.friday = "Friday"

        $scope.getGroups = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups")
                .then(function (response) {
                    $scope.groups = response.data;
                });
        };

        $scope.getGroups();
    })

    .controller('dayschedule', function ($scope, $http, $timeout) {

        var self = this;
        $scope.render = false;

        $scope.getGroups = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups")
                .then(function (response) {
                    self.groups = response.data;
                    $scope.getSchedule();
                });
        };

        $scope.getSchedule = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/schedule/" + self.day)
                .then(function (response) {
                    self.Schedule = response.data;
                });
        };
        $scope.getGroups();

        var renderUp = function () {
            $scope.render = true;
        }
        $timeout(renderUp, 350);
    })

    .controller('groupdayschedule', function ($scope, $http, $route, $routeParams, $timeout) {

        var self = this;

        $scope.render = false;

        $scope.group = $routeParams.group;
        $scope.getSchedule = function (group) {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups?groupName=" + group + "&dayName=" + self.day)
                .then(function (response) {
                    self.Schedule = response.data;
                });
        };

        $scope.$watch('day', function () {
            if (self.day) {
                $scope.getSchedule($scope.group);
                if (self.day === "Monday")
                    $scope.canSee = true;
            }
        });

        self.hours = [
            "8.00-9.00",
            "9.00-10.00",
            "10.00-11.00",
            "11.00-12.00",
            "12.00-13.00",
            "13.00-14.00",
            "14.00-15.00",
            "15.00-16.00",
        ]
        
        var renderUp = function () {
            $scope.render = true;
        }
        $timeout(renderUp, 350);
    })

    .controller('dayController', function ($scope, $http, $route, $routeParams) {

        var self = this;

        $scope.day = $routeParams.day;
    })

    .controller('addgroupController', function ($scope, $http, $filter) {

        $scope.addGroup = function (newGroup) {
            $http.post("http://angularjschedule.azurewebsites.net/api/groups/add/", { name: newGroup })
                .then(function (response) {
                    console.log(response);
                });
        };
    })

    .controller('deletegroupController', function ($scope, $http, $filter) {
        $scope.getGroups = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups")
                .then(function (response) {
                    $scope.groups = response.data;
                });
        };
        $scope.delete = function (group) {
            $http.delete("http://angularjschedule.azurewebsites.net/api/delete/group/" + group)
                .then(function (response) {
                    console.log(response);
                    $scope.getGroups();
                });
        };
        $scope.getGroups();
    });
