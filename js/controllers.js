angular.module('starter.controllers', [])

    .controller('dayschedule', function ($scope, $http, $timeout) {
        var self = this;
   
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

    .controller('addgroupController', function ($scope, $http, $filter, $window) {

        $scope.addGroup = function (newGroup) {
            $http.post("http://angularjschedule.azurewebsites.net/api/groups/add/", { name: newGroup })
                .then(function (response) {
                    $window.location.reload();
                    console.log(response);
                });
        };
    })

    .controller('deletegroupController', function ($scope, $http, $filter, $window) {
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
                    $window.location.reload();
                    $scope.getGroups();
                });
        };
        $scope.getGroups();
    })

    .controller('editController', function ($scope, $http, $filter) {
        $scope.getGroups = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups")
                .then(function (response) {
                    $scope.groups = response.data;
                });
        };
        $scope.getGroups();
    })

    .controller('editScheduleController', function ($scope, $http, $filter, $routeParams) {


        $scope.group = $routeParams.group;

        $scope.getMonday = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups?groupName=" + $scope.group + "&dayName=Monday")
                .then(function (response) {
                    $scope.Monday = response.data;
                });
        };

        $scope.getTuesday = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups?groupName=" + $scope.group + "&dayName=Tuesday")
                .then(function (response) {
                    $scope.Tuesday = response.data;
                });
        };

        $scope.getWednesday = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups?groupName=" + $scope.group + "&dayName=Wednesday")
                .then(function (response) {
                    $scope.Wednesday = response.data;
                });
        };

        $scope.getThursday = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups?groupName=" + $scope.group + "&dayName=Thursday")
                .then(function (response) {
                    $scope.Thursday = response.data;
                });
        };

        $scope.getFriday = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups?groupName=" + $scope.group + "&dayName=Friday")
                .then(function (response) {
                    $scope.Friday = response.data;
                });
        };

        $scope.initData = function () {
            $scope.getMonday();
            $scope.getTuesday();
            $scope.getWednesday();
            $scope.getThursday();
            $scope.getFriday();
        };

        $scope.hours = [
            "8.00-9.00",
            "9.00-10.00",
            "10.00-11.00",
            "11.00-12.00",
            "12.00-13.00",
            "13.00-14.00",
            "14.00-15.00",
            "15.00-16.00",
        ]

        $scope.initData();
        $scope.openEdit = function (schedule, day) {
            $scope.edit = true;
            $scope.editable = {
                schedule: schedule,
                day: day,
                group: $scope.group
            };
        }
    })

    .controller('editdayController', function ($scope, $http, $filter, $route, $window) {
        var self = this;

        $scope.submitEdit = function (editable) {
            $http.put("http://angularjschedule.azurewebsites.net/api/put/schedule", editable)
                .then(function (response) {
                    $window.location.reload();
                }, function (response) { console.log(response) });
        }

        $scope.cancel = function (editable) {
            $route.reload();
        }
    })

    .controller('resourceController', function ($scope, $http, $filter, $route) {
        var self = this;

        self.schedule = {};
        var getGroups = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/groups")
                .then(function (response) {
                    self.groups = response.data;
                });
        };

        var getSchedule = function () {
            $http.get("http://angularjschedule.azurewebsites.net/api/get/schedule/Monday")
                .then(function (response) {
                    self.schedule.monday = response.data;
                });

            $http.get("http://angularjschedule.azurewebsites.net/api/get/schedule/Tuesday")
                .then(function (response) {
                    self.schedule.tuesday = response.data;
                });

            $http.get("http://angularjschedule.azurewebsites.net/api/get/schedule/Wednesday")
                .then(function (response) {
                    self.schedule.wednesday = response.data;
                });

            $http.get("http://angularjschedule.azurewebsites.net/api/get/schedule/Thursday")
                .then(function (response) {
                    self.schedule.thursday = response.data;
                });

            $http.get("http://angularjschedule.azurewebsites.net/api/get/schedule/Friday")
                .then(function (response) {
                    self.schedule.friday = response.data;
                });

        };
        
        self.monday = "Monday";
        self.tuesday = "Tuesday";
        self.wednesday = "Wednesday";
        self.thursday = "Thursday";
        self.friday = "Friday";
        getSchedule();
        getGroups();
    })